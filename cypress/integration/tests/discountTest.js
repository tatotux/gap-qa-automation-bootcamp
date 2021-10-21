/// <reference types="Cypress" />

export const couponRequests = require('../../support/API_Requests/couponsRequest')
export const productsRequests = require('../../support/API_Requests/productsRequest')
export const ordersRequests = require('../../support/API_Requests/ordersRequest')


context('Testing Playground', () => {
    describe('The Challenge - Final Project', () => {
        let coupon_code = `cuponOff${Math.floor(Math.random() * 10000000)}`;
        let coupon_percentaje = 25;
        let coupon_id;
        let products_list;
        let order_id;
        let order_key;
        let product_price;

        before('Set Up', () => {
            productsRequests.getAllProducts().then((products) => { products_list = products });
            couponRequests.createCoupon(coupon_code, coupon_percentaje.toString()).then((id) => {
                coupon_id = id;
                product_price = products_list[0].regular_price;
                ordersRequests.createOrder(products_list[0].id, coupon_code).then((order) => {                     
                    order_id = order.id
                    order_key = order.order_key
                })
            });
        })

        after('TearDown / Clean up', () => {
            ordersRequests.deleteOrder(order_id);
            couponRequests.deleteCoupon(coupon_id);
            
        })        

        it('UI Testing - Verify the order shows the proper discount value', () => {
            let discount;
            cy.visit(`checkout/order-received/${order_id}/?key=${order_key}`);            
            discount = parseFloat((coupon_percentaje/100) * parseFloat(product_price) ).toFixed(2);
            cy.get(":nth-child(2) > td > .woocommerce-Price-amount").should('be.visible').last().invoke('text').should('contain',(`$${discount}`));  
        })


    })

})