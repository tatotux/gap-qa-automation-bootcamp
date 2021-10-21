/// <reference types="cypress" />

import { APIRequest } from '../support/api-requests';

describe('Create order with coupon', () => {
    let couponCode = "rrtest";
    let couponId;
    let orderId;
    const productId = 37

    before('Create Coupon and Order', () => {
        APIRequest.createCoupon(couponCode);
        cy.get('@couponId').then((id) => couponId = id);
        APIRequest.createOrder(productId,couponCode);
        cy.get('@orderId').then((id) => orderId = id);
        cy.visit('/my-account/edit-account/');
    });

    after('Delete Coupon and Order', () => {
        APIRequest.deleteCoupon(couponId);
        APIRequest.deleteOrder(orderId);

    });

    it('Verify that a specific product can be requested', () => {
        APIRequest.getProduct(productId);
    });

    it('Verify that a specific coupon can be requested', () => {
        APIRequest.getCoupon(couponId,couponCode);
    });

    it('Verify that the order shows the proper discount value' , () => {
        cy.get('#username').type('username');
        cy.get('#password').type('password');
        cy.get(':nth-child(3) > .woocommerce-button').click();
        cy.get('.woocommerce-MyAccount-navigation-link--orders > a').click(); 
        cy.contains('a',orderId).click();
        cy.get(':nth-child(2) > td > .woocommerce-Price-amount').should('contain', '5.00');
    });

    
});

