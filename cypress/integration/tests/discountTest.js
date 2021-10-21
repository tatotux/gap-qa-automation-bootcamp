/// <reference types="Cypress" />

export const couponRequests = require('../../support/API_Requests/couponsRequest')
export const productsRequests = require('../../support/API_Requests/productsRequest')
export const ordersRequests = require('../../support/API_Requests/ordersRequest')


context('Testing Playground', () => {
    describe('The Challenge - Final Project', () => {
        let couponCode = `cuponOff${Math.floor(Math.random() * 10000000)}`;
        let couponPercentaje = 25;
        let couponId;
        let productsList;
        let orderId;
        let orderKey;
        let productPrice;

        before('Set Up', () => {
            productsRequests.getAllProducts().then((products) => { productsList = products });
            couponRequests.createCoupon(couponCode, couponPercentaje.toString()).then((id) => {
                couponId = id;
                productPrice = productsList[0].regular_price;
                ordersRequests.createOrder(productsList[0].id, couponCode).then((order) => {                     
                    orderId = order.id
                    orderKey = order.order_key
                })
            });
        })

        after('TearDown / Clean up', () => {
            ordersRequests.deleteOrder(orderId);
            couponRequests.deleteCoupon(couponId);
            
        })        

        it('UI Testing - Verify the order shows the proper discount value', () => {
            let discount;
            cy.visit(`checkout/order-received/${orderId}/?key=${orderKey}`);            
            discount = parseFloat((couponPercentaje/100) * parseFloat(productPrice) ).toFixed(2);
            cy.get(":nth-child(2) > td > .woocommerce-Price-amount").should('be.visible').last().invoke('text').should('contain',(`$${discount}`));  
        })


    })

})