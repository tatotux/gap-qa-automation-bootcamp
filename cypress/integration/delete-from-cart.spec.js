/// <reference types="cypress" />

describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('should delete product from cart', () => {

        //Search for product
        cy.get('#masthead input.search-field').type('Belt{enter}');
        cy.contains('.product_title', 'Belt').should('be.visible');

        //Add product to cart
        cy.get(`button[name='add-to-cart']`).click();
        cy.get(`div[role='alert']`).should('include.text', '“Belt” has been added to your cart.')

        //View cart
        cy.get(`div[role='alert'] > .button.wc-forward`).click();

        //Product appears on the cart
        cy.get('.product-name > a').should('have.text', 'Belt')

        //Delete product 
        cy.get('.remove').click();
        cy.get('.cart-empty.woocommerce-info').should('have.text', 'Your cart is currently empty.')
    });




});