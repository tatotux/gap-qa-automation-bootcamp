/// <reference types="cypress" />
import { cart } from '../page-objects/Cart';
import { homePage } from '../page-objects/HomePage'
import { productPage } from '../page-objects/ProductPage';

describe('Navigate to cart', () => {
    before(() => {
        homePage.navigate();
        homePage.searchProduct('Cap')
        productPage.clickAddToCart()
        productPage.clickViewCartBtn();
    })
    it('should remove new product from cart', () => {
        cart.clickRemoveProduct();
        productPage.elements.getConfirmationMsg().should('contain', '“Cap” removed')
        cart.elements.getCartContentsCount().should('have.text', '0 items')
    })
})