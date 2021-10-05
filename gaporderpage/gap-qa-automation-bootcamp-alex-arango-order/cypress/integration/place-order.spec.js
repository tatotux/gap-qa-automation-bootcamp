/// <reference types="cypress" />
import { cart } from '../page-objects/Cart';
import { checkout } from '../page-objects/Checkout';
import { homePage } from '../page-objects/HomePage'
import { productPage } from '../page-objects/ProductPage';
import { confirmationPage } from '../page-objects/ConfirmationPage';

describe('Add to cart', () => {
    before(() => {
        homePage.navigate();
    })
    it('should search for product', () => {
        homePage.searchProduct('Cap')
        cy.url().should('contain', 'cap')
        productPage.elements.getProductTitle().should('have.text', 'Cap')
    })
    it('should create an order', () => {
        productPage.clickAddToCart()
        productPage.elements.getConfirmationMsg().should('contain', '“Cap” has been added to your cart.')
        productPage.clickViewCartBtn();
        cart.elements.getCartProduct().should('contain', 'Cap');

        checkout.clickCheckout();
        checkout.fillOutForm('checkoutForm')
        checkout.form.getDifferentAddressCheckbox().uncheck()
        checkout.form.getTermsCheckbox().check()
        checkout.form.getPlaceOrderButton().click()

        confirmationPage.elements.getConfirmationMessage()
            .should('have.text', 'Thank you. Your order has been received.')
    })
})



