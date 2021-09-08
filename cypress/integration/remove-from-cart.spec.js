/// <reference types="cypress" />
import { cart } from '../page-objects/Cart';
import { homePage } from '../page-objects/HomePage'
import { productPage } from '../page-objects/ProductPage';

describe('Add to cart functionality', () => {
    before(() => {
        homePage.navigate();
        homePage.searchForProduct('Polo')
        productPage.clickAddToCartBtn()
        productPage.clickViewCartContentsBtn();
    })
    it('should remove product from cart', () => {
        cart.clickRemoveProduct();
        productPage.elements.getConfirmationMsg().should('contain', '“Polo” removed')
        cart.elements.getCartContentsCount().should('have.text', '0 items')
    })
})