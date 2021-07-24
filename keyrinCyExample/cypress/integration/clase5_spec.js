// <reference types="Cypress" />

describe('Shopping cart tests', () => {
    before(()=>{
       cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/')
    });

    it('should be able to find a specific product and added it to cart', () => {
        cy.get('#masthead .search-field:visible').type('Polo{enter}');
        cy.contains('Add to cart').click();
        cy.contains('View cart').click();
        cy.get('.cart_item').contains('Polo').should('be.visible');
        cy.get('.cart_item').its('length').should('be.eq', 1);
    })

    it('should be able to apply a specific cupon', () => {
        cy.get('#masthead .search-field:visible').type('Polo{enter}');
        cy.contains('Add to cart').click();
        cy.get('#masthead .search-field:visible').type('Sunglasses{enter}');
        cy.contains('Add to cart').click();
        cy.contains('View cart').click();
        //cy.get('#coupon_code').type('10off{enter}'); para probarlo simulando el enter
        cy.get('#coupon_code').type('10off');//para probarlo con el click en el botón
        cy.get('button[name=apply_coupon]').click();
        cy.get('.cart-discount.coupon-10off:visible').contains('Coupon: 10off').should('be.visible');

    })

    it('should show the proper discount value', () => {
        cy.get('#masthead .search-field:visible').type('Polo{enter}');
        cy.contains('Add to cart').click();
        cy.get('#masthead .search-field:visible').type('Sunglasses{enter}');
        cy.contains('Add to cart').click();
        cy.contains('View cart').click();
        cy.get('#coupon_code').type('10off{enter}');
        cy.get('.checkout-button.button.alt.wc-forward').click();
        cy.get('.woocommerce-Price-amount.amount').contains('$11.00');

    })
})