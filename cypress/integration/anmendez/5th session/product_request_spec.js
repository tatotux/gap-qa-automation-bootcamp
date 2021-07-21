/// <reference types="Cypress" />

context('Verify a specific product can be requested', () => {
    describe('Request/Add to cart a specific product', () =>{
        before(() => {
            cy.visit('/');
        });
    
        it('Should be able to request/add to cart the first shirt found', () =>{
            cy.contains('Vneck Tshirt').click();
            cy.contains('Add to cart').click();
            cy.contains('a', 'View cart').click();
            cy.get('.cart_item').its('length').should('be.gt', 0);
        })
    })
})
context('Verify that a specific coupon can be used', () => {
    describe('Apply a specific discount coupon',() =>{
        before(() => {
            cy.visit('cart/');
        });

        it('Should be able to accept 10off_amendez coupon', () =>{
            cy.contains('Vneck Tshirt').click();
            cy.contains('Add to cart').click();                         //esto esta repitiendo el codigo de agregar al carrito
            cy.contains('a', 'View cart').click();                      //plus la aplicacion de cupon
            cy.get('.coupon .input-text').type('10off_amendez');
            cy.contains('Apply coupon').click();
            cy.contains('Coupon code applied successfully.');
        })
    })
})
context('Verify that the order shows the proper discount value', () => {
    describe('Validate order subtotal and total after applying a coupon',() =>{
        before(() => {
            cy.visit('cart/');
        })
        it('Should be able to verify the total after 10% of discount', () =>{
            cy.contains('Vneck Tshirt').click();                        //esto esta repitiendo el codigo de agregar al carrito y aplicacion de cupon
            cy.contains('Add to cart').click();                         //plus revision de total
            cy.contains('a', 'View cart').click();

            cy.get('.coupon .input-text').type('10off_amendez');
            cy.contains('Apply coupon').click();
            cy.contains('Coupon code applied successfully.');

            cy.get('.order-total .amount').should('contain.text', '22.50');


        })

    })
})