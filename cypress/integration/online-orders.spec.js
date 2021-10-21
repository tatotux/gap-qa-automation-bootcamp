/// <reference types="cypress" />

import { OrderReceivedPage } from '../page-objects/pages/order-received';

import { CouponRequests } from '../support/coupon-api-requests';
import { OrderRequests } from '../support/order-api-requests';
import { ProductRequests } from '../support/product-api-requests';

describe ('Online orders', () => {

    let couponId;
    let couponCode

    let productId;

    let orderId;
    let orderKey;
    let discountTotal;

    beforeEach('Create coupon, product and order for tests', () => {

        //  COUPON
        cy.log(" ===============================    COUPON   ==========================");
        CouponRequests.create();
        cy.get('@couponId').then(val => {
            couponId = val;          
        })
        cy.get('@couponCode').then(val => {
            couponCode = val;
        })
    
        //  PRODUCT 
        cy.log(" ===============================    PRODUCT   ==========================");
        ProductRequests.create();
        cy.get('@productId').then(val => {
            productId = val;          
        })


        //    ORDER 
        cy.log(" ===============================    ORDER   ==========================");
        OrderRequests.create();        
        cy.get('@orderId').then(val => {
            orderId = val;          
        });
        cy.get('@orderKey').then(val => {
            orderKey = val;          
        });
        cy.get('@discountTotal').then(val => {
            discountTotal = val;          
        });

    });

    afterEach('Clean up and delete coupon, product and order for test', () => {
        ProductRequests.delete();
        OrderRequests.delete();
        CouponRequests.delete();
    });

    it('should request coupon', () => {

        CouponRequests.get();
        cy.get('@couponStatusCode').should('eq', 200);
    
    });

    it('should request product', () => {

        ProductRequests.get();
        cy.get('@productStatusCode').should('eq', 200);
    
    });

    it('should display proper discount value', () => {

        cy.visit(`${OrderReceivedPage.getUrl()}/${orderId}/?key=${orderKey}`);
        OrderReceivedPage.elements.discountValue().should('be.visible');
        OrderReceivedPage.elements.discountValue().should('contain', discountTotal);
    });

})
