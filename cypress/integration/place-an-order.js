/// <reference types="cypress" />

import { CartPage } from '../page-objects/pages/cart';
import { ProductPage } from '../page-objects/pages/product-detail';
import { CheckoutPage } from '../page-objects/pages/checkout';

describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('should place and order', () => {
        // Search page
        cy.get('#masthead .search-field').type('sunglasses{enter}');
        
        // Product details page
        ProductPage.elements.title().should('contain', 'Sunglasses');
        ProductPage.elements.addToCart().click();
        ProductPage.elements.viewCart().click();
                
        // Cart page
        CartPage.elements.checkCart().should('be.visible');
        CartPage.elements.proceedToCheckout().click();
        
        // Checkout page 
        CheckoutPage.fllForm();
        CheckoutPage.elements.placeOrder().click();

        // Confirm order has been placed
        cy.url().should('include', '/order-received');

    });

});