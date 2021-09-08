/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/')
    })

    it('add item to cart', () => {
      cy.get('#masthead .search-field').type('cap{enter}')
      cy.get('.product_title').contains('Cap').should('be.visible')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').contains('\“Cap\” has been added to your cart.').should('be.visible')
    })
})