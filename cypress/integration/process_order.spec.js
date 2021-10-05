import { cart } from '../page-objects/pages/cart'
import { checkout } from '../page-objects/pages/checkout'
import { confirmationPage } from '../page-objects/pages/confirmation-page'
import { productDetails } from '../page-objects/pages/product-details'
import { searchPage } from '../page-objects/pages/search-page'

describe("Order product test suite", () => {

    before(() => {
        cy.visit("/")
    })

    it("Should find a product", () => {
        searchPage.searchProduct('Tshirt')
        searchPage.elements.searchPageTitle().should('contain', 'Tshirt')
        searchPage.getFirstItemInSearchPage().then( element => {
                cy.wrap(element).invoke('attr','href').should('contain', 'tshirt')
                cy.wrap(element).click()
            })
    })

    it('Should process an order', () => {
        productDetails.elements.productName().should('contain','Tshirt')
        productDetails.clickOnAddToCartButton()
        productDetails.elements.addedToCartConfirmationMessage().should('be.visible')
        productDetails.elements.viewCartButtonConfirmationMessage().click()
        cart.elements.cartTitle().should('contain','Cart')
        cart.elements.productRows().its('length').should('be.gt', 0)
        cart.elements.productExistsInCart('Tshirt').its('length').should('be.gt', 0)
        cart.elements.proceedToCheckoutButton().click()

        checkout.fillOutFormWithDifferentAddress()
        checkout.elements.placeOrderButton().click()

        confirmationPage.elements.confirmationPageTitle().should('contain', 'Order received')
        confirmationPage.elements.confirmationMessage().should('contain', 'Thank you. Your order has been received.')
    })
})