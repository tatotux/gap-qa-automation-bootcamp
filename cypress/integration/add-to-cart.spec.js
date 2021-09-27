/// <reference types="cypress" />

import { ProductDetailPage } from '../page-objects/pages/product-detail';
import { CartPage } from '../page-objects/pages/cart';

describe ('Add to cart', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('shoud add to cart', () => {

        // Search for product
        cy.get('#masthead .search-field').type('Belt{enter}');
        cy.contains('.product_title', 'Belt').should('be.visible');
 
        // Add to cart
        ProductDetailPage.elemets.addToCart().click();
        ProductDetailPage.elemets.addedMessage().should('be.visible');
        ProductDetailPage.elemets.viewCart().click();

       
        // Product appears on the cart
        CartPage.elements.belt().should('be.visible');
        // cy.get('a[href^="http"]').contains('Belt').should('be.visible');

    });
    

})
