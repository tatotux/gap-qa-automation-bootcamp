/// <reference types="cypress" />

describe ('Add t cart', () => {
    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('shoud add to cart', () => {

        // Search for product
        cy.get('#masthead .search-field').type('Belt{enter}');
        cy.contains('.product_title', 'Belt').should('be.visible');

        // Add to cart
        cy.get('.cart button').type('{enter}');

        // View Cart 
        cy.get('.woocommerce-message').should('be.visible');
        cy.contains('a[href^="http:"] ', 'View Cart').type('{enter}');


        // Product appears on the cart
    });
    

})


