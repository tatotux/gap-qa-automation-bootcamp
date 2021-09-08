/// <reference types="cypress" />

describe('Session 1 - Bootcamp', () => {
    beforeEach(() => {
      cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/')
    })
  
    it('Add to cart', () => {
        cy.get('#woocommerce-product-search-field-0').type('Polo{enter}')
        cy.title().should('contain','Polo – Testing Playground')
        cy.get('button[name="add-to-cart"]').click()
        cy.get('.woocommerce-message').should('be.visible').should('contain',' “Polo” has been added to your cart.	')
        cy.contains('View cart').click()
        cy.title().should('contain','Cart – Testing Playground')
        cy.get('.entry-title').should('contain','Cart')
        cy.contains('Proceed to checkout').should('be.visible')
    })
})