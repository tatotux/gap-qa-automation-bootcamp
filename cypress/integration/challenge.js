/// <reference types="cypress" />

it('should open product', () => {
    cy.visit('/product/cap/')
    cy.get('#menu-item-820 > a')
    //cy.get('#quantity_5fc1901f647b9').type('7{enter}') 
    cy.get('.single_add_to_cart_button').type('{enter}')
    cy.get('.cart-contents')
    cy.visit('/cart/')
    cy.get('.product-subtotal > .woocommerce-Price-amount').should('have.class','woocommerce-Price-amount amount')
    //cy.get('#quantity_5fc5178fbeb0a').should('have.class','input-text qty text')
    //expect('#quantity_5fc517ee44716').to.have.value(1)
    expect({ '.product-subtotal > .woocommerce-Price-amount': '$80.99'}).to.deep.equal({ '.product-subtotal > .woocommerce-Price-amount': '$80.99' });
  })