/// <reference types="cypress" />

import {ProductPage} from '../page-objets/pages/product-detail';
import {CartPage} from '../page-objets/pages/cart';

describe('Session 2 - Bootcamp', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Add to cart', () => {
        const product = 'Polo';
        const message = ` “${product}” has been added to your cart.	`;
        
        //Search for product
        cy.get('#woocommerce-product-search-field-0').type(product+'{enter}')
        
        //Product details page, add to cart
        ProductPage.elements.title().should('contain',product);
        ProductPage.elements.title().should('be.visible');
        cy.title().should('include',product)
  
        ProductPage.elements.addToCart().click();
        ProductPage.elements.message().should('be.visible').should('contain', message);

        //View cart
        ProductPage.elements.viewCart().click();
        
        //Cart page
        CartPage.elements.title().should('contain',product).should('be.visible');
        CartPage.elements.subTotal().should('contain','$20.00').should('be.visible');
        cy.url().should('include', CartPage.url);
        cy.title().should('include', CartPage.title)
        //cy.get('.entry-title').should('contain', CartPage.title)
        cy.contains('Proceed to checkout').should('be.visible')
    })
})