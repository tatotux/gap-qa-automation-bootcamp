/// <reference types="cypress" />

describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('should add to cart', () => {
        // Search for product
        cy.get('#masthead .search-field').type('cap{enter}');
        cy.contains('.product_title', 'Cap').should('be.visible');
        
        // Add to cart
        cy.get('button[name=add-to-cart]').click();
                
        // View cart
        cy.contains('.button', 'View cart').click();

        //Product appears on cart
        cy.contains('.product-name', 'Cap').should('be.visible');
    });

});