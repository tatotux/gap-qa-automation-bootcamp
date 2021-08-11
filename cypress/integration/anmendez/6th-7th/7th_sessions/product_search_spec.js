/// <reference types="Cypress" />
import {APIRequest} from '../../../support/api-requests'

//this is the setup
before(() => {                          //this is a hook
    APIRequest.createProduct();
    APIRequest.createCoupon();
    APIRequest.createOrder();
})

//This is the set of tests
context('Verify a product can be searched', () => {
    describe('Search for a specific product', () =>{
        before(() => {
            cy.visit('/')
        });
        it('Should be able to search for the product One Plus 8T', () =>{           //abstraer esto como search a product
            cy.get('#masthead .search-field').type('One Plus 8T{enter}');
            cy.contains('One Plus 8T').should('be.visible');
        })
    })
})
context('Verify that a specific coupon can be used)', () => {
    describe('Use a specific coupon', () =>{
        before(() => {                                                              //abstraer esto como use coupon
            cy.visit('/')
            cy.request('');
        });
        it('Should be able to use 10off_andrea coupon code', () =>{
            cy.get('.actions > .coupon').type('10off_andrea');
            cy.contains('Apply coupon').click();
        });
    });
});
context('Verify that the order shows the proper discount value', () => {
    describe('Validate order subtotal and total after applying a coupon',() =>{
        before(() => {                                                                  //abstraer esto como coupon applied
            cy.visit('/product/one-plus-8t22/');
        })
        it('Should be able to verify the total after 10% of discount', () =>{
            cy.contains('Add to cart').click();                         
            cy.contains('a', 'View cart').click();

            cy.get('.coupon .input-text').type('10off_andrea');
            cy.contains('Apply coupon').click();
            cy.contains('Coupon code applied successfully.');

            cy.get('.order-total .amount').should('contain.text', '494.991');
        })

    })
})

//this is the teardown / cleanup
after(() => {                           //this is another hook
    APIRequest.deleteProduct();
    APIRequest.deleteCoupon();
    APIRequest.deleteOrder();
})