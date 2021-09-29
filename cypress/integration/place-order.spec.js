/// <reference types="cypress" />
import { cart } from '../page-objects/Cart';
import { checkout } from '../page-objects/Checkout';
import { homePage } from '../page-objects/HomePage'
import { productPage } from '../page-objects/ProductPage';
import { confirmationPage } from '../page-objects/ConfirmationPage';

describe('Add to cart functionality', () => {
    before(() => {
        homePage.navigate();
    })
    it('should find the product searched for', () => {
        homePage.searchForProduct('Polo')
        cy.url().should('contain', 'polo')
        productPage.elements.getProductTitle().should('have.text', 'Polo')
    })
    it('should place an order', () => {
        productPage.clickAddToCartBtn()
        productPage.elements.getConfirmationMsg().should('contain', '“Polo” has been added to your cart.')
        productPage.clickViewCartContentsBtn();
        cart.elements.getCartProduct().should('contain', 'Polo');

        checkout.clickCheckoutBtn();
        checkout.fillOutBillingForm('checkoutForm')
        checkout.form.getDifferentShippingAddressCheckbox().uncheck()
        checkout.form.getAgreeTermsCheckbox().check()
        checkout.form.getPlaceOrderButton().click()

        confirmationPage.elements.getConfirmationMessage()
            .should('have.text', 'Thank you. Your order has been received.')
    })
})



