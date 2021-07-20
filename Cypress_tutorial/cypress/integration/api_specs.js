/// <reference types="Cypress" />

describe('My Product request Test', () => {

    it('should be able to verify that a specific product can be requested', () => {
        cy.request('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/product/belt/').its('body').should('include', 'Belt');
     })

  })

  describe('My apply coupon Test', () => {

    const coupon = '10off';

    before(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/?add-to-cart=31');
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/?add-to-cart=31');
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/cart/');
        cy.get('#coupon_code').type(coupon);
        cy.get('.coupon > .button').click();
    });

     //10off
    it('should be able to verify that a specific coupon can be used', () => {
        cy.get('.woocommerce-message').should('be.visible')
    })

    it('should be able to verify that the order shows the proper discount value', () => {
        cy.get('.cart-discount > th').contains(coupon)
    })

  })