/// <reference types="cypress" />

describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('should add to cart', () => {
        cy.get('#masthead .search-field').type('Belt{enter}');
        cy.contains('.product_title','Belt').should('be.visible');
    });
});