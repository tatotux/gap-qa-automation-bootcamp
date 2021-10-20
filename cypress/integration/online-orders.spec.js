/// <reference types="cypress" />

import { OrderReceivedPage } from '../page-objects/pages/order-received';

import { CouponRequests } from '../support/coupon-api-requests';
import { OrderRequests } from '../support/order-api-requests';
import { ProductRequests } from '../support/product-api-requests';

describe ('Online orders', () => {

    before('Create coupon', () => {
        CouponRequests.create();
        CouponRequests.get();
        
        ProductRequests.create();
        ProductRequests.get();

        OrderRequests.create(cy.get('@productId'), cy.get('@couponId'));        
        OrderRequests.get();

    });

    after('Delete coupon', () => {
        ProductRequests.delete();
        OrderRequests.delete();
        CouponRequests.delete();
        

    });

    it('should request coupon', () => {

        cy.visit('/');
    
    });

    // it('should request product', () => {

    //     cy.visit('/');
    
    // });

    // it('should display proper discount value', (orderId, orderKey) => {

    //     cy.visit('/');
    //     // cy.visit(`${OrderReceivedPage.url()}/${orderId}/?key=${orderKey}`);
    //     // http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/checkout/order-received/796/?key=wc_order_S0xq5kj1CSk1r
    
    // });

})
