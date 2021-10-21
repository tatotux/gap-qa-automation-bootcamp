/// <reference types="cypress" />

import { OrderReceivedPage } from '../page-objects/pages/order-received';

import { CouponRequests } from '../support/coupon-api-requests';
import { OrderRequests } from '../support/order-api-requests';
import { ProductRequests } from '../support/product-api-requests';

let couponId;
let couponCode
let productId;
let orderId;
let orderKey;
let discountTotal;

describe ('Online orders', () => {

    before('Create coupon, product and order for tests', () => {

        //  COUPON
        CouponRequests.create();
        CouponRequests.get();
        
        cy.get('@couponId').then(val => {
            couponId = val;          
        })

        cy.get('@couponCode').then(val => {
            couponCode = val;
        })
    
        //  PRODUCT 
        ProductRequests.create();
        ProductRequests.get();
        cy.get('@productId').then(val => {
            productId = val;          
        })


        //    ORDER 
        cy.log(" ===============================    ORDER   ==========================");
        OrderRequests.create();        
        OrderRequests.get();

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

    after('Clean up and delete coupon, product and order for test', () => {
        ProductRequests.delete();
        OrderRequests.delete();
        CouponRequests.delete();
    });

    // it('should request coupon', () => {

    //     cy.visit('/');
    
    // });

    // it('should request product', () => {

    //     cy.visit('/');
    
    // });

    it('should display proper discount value', () => {

        cy.visit(`${OrderReceivedPage.getUrl()}/${orderId}/?key=${orderKey}`);
        OrderReceivedPage.elements.discountValue().should('be.visible');
        OrderReceivedPage.elements.discountValue().should('equal',discountTotal);
    });

})
