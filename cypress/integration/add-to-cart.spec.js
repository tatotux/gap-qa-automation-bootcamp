/// <reference types="cypress" />
import { cart } from '../page-objects/Cart';
import { homePage } from '../page-objects/HomePage'
import { productPage } from '../page-objects/ProductPage';

describe('Add to cart functionality', () => {
    before(() => {
        homePage.navigate();
    })
    it('should find the product searched for', () => {
        homePage.searchForProduct('Polo')
        cy.url().should('contain', 'polo')
        productPage.elements.getProductTitle().should('have.text', 'Polo')
    })
    it('should add to cart', () => {
        productPage.clickAddToCartBtn()
        productPage.elements.getConfirmationMsg().should('contain', '“Polo” has been added to your cart.')
        productPage.clickViewCartContentsBtn();
    })
    it('should show previously added product in Cart', () => {
        cart.elements.getCartProduct().should('contain', 'Polo')
    })
})



