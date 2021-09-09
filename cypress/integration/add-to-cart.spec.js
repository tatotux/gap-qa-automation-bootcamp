/// <reference types="cypress" />

describe ('Add to cart', () => {
    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('shoud add to cart', () => {

        // Search for product
        cy.get('#masthead .search-field').type('Belt{enter}');
        cy.contains('.product_title', 'Belt').should('be.visible');

        // Add to cart
        cy.get('.cart button').click();

        // View Cart 
        cy.get('.woocommerce-message').contains('has been added to your cart.').should('be.visible');
        cy.get('div.woocommerce > div > a').click();

        // Product appears on the cart
        cy.get('a[href^="http"]').contains('Belt').should('be.visible');

    });
    

})


