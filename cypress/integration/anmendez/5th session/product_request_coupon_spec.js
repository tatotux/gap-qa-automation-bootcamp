/// <reference types="Cypress" />

import {CartComponent} from './page-objects/components/add-cart';
import {CouponComponent} from './page-objects/components/apply-coupon';

context('Verify a specific product can be requested', () => {
    describe('Request/Add to cart a specific product', () =>{
        before(() => {
            cy.visit('/product/vneck-tee/');
        });
    
        it('Should be able to request/add to cart the first shirt found', () =>{
            CartComponent.getAddCart();
            CartComponent.getViewCart();
            cy.get('.cart_item').its('length').should('be.gt', 0);
        })
    })
})

context('Verify that a specific coupon can be used', () => {
    describe('Apply a specific discount coupon',() =>{
        before(() => {
            cy.visit('/product/vneck-tee/');
        });
    
        it('Should be able to verify a coupon can be used', () =>{
            CartComponent.getAddCart();
            CartComponent.getViewCart();

            CouponComponent.setCouponInput();
            CouponComponent.getCouponApplied();

            cy.contains('Coupon code applied successfully.');
        })
    })
})
context('Verify that the order shows the proper discount value', () => {
    describe('Apply a specific discount coupon',() =>{
        before(() => {
            cy.visit('/product/vneck-tee/');
        });
    
        it('Should be able to verify an order shows the proper discount value', () =>{
            CartComponent.getAddCart();
            CartComponent.getViewCart();

            CouponComponent.setCouponInput();
            CouponComponent.getCouponApplied();

            cy.contains('Coupon code applied successfully.');

            cy.get('.order-total .amount').should('contain.text', '22.50');
        })

    })
})