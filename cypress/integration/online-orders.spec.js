/// <reference types="cypress" />

import { OrderReceivedPage } from '../page-objects/pages/order-received';

import { CouponRequests } from '../support/coupon-api-requests';
import { OrderRequests } from '../support/order-api-requests';


describe ('Online orders', () => {

    let couponDetails = {
        code: `SSIBAJA_10off_${Date.now()}` ,
        discount_type: "percent",
        amount: "10",
        individual_use: true,
        exclude_sale_items: true,
        minimum_amount: "100.00"
    }

    let orderDetails = {
        paymentMethod: "bacs",
        paymentMethodTitle: "Direct Bank Transfer",
        setPaid: true,
        billing: {
            firstName: "SONIA",
            lastName: "SIBAJA",
            address1: "969 Market",
            address2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: `ssibajav${Date.now()}@gmail.com`,
            phone: "(555) 555-5555"
        },
        shipping: {
            firstName: "SONIA",
            lastName: "SIBAJA",
            address1: "969 Market",
            address2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
        },
        lineItem: {
            productId: 93,
            quantity: 2
        },
        shippingLine:{
            methodId: "flat_rate",
            methodTitle: "Flat Rate",
            total: "10.00"
        }
    }
    
    // let couponId;
    // let orderId;

    before('Create coupon', () => {
        CouponRequests.create(couponDetails);
        CouponRequests.get();

        OrderRequests.create(orderDetails);
        OrderRequests.get();
    });

    after('Delete coupon', () => {
        CouponRequests.delete();
        OrderRequests.delete();
    });

    it('should request coupon', () => {

        cy.visit('/');
    
    });

    it('should request product', () => {

        cy.visit('/');
    
    });

    it('should display proper discount value', (orderId, orderKey) => {

        cy.visit(`${OrderReceivedPage.url()}/${orderId}/?key=${orderKey}`);
        // http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/checkout/order-received/796/?key=wc_order_S0xq5kj1CSk1r
    
    });

})
