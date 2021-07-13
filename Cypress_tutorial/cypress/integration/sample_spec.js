/// <reference types="Cypress" />

describe('My Cart Test', () => {

    before(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/')
    });

    it('should be able to add Vneck shirt to cart', () => {
        cy.contains('a', 'Vneck Tshirt').click();
        cy.contains('Add to cart').click();
        //cy.get('.woocommerce-message').should('be.visible');

        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/cart/');
        cy.get('.cart-empty').should('not.exist');
    })

    it('should be able to delete Vneck shirt from cart', () => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/?add-to-cart=39')
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/cart/');
        cy.get('.remove').click();
        cy.get('.restore-item').should('be.visible');
    })
  })