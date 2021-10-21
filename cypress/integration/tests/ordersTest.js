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
        let productPrice;

        before('Set Up', () => {
            productsRequests.getAllProducts().then((products) => { productsList = products });
            couponRequests.createCoupon(couponCode, couponPercentaje.toString()).then((id) => {
                couponId = id;
                productPrice = productsList[0].regular_price;
                ordersRequests.createOrder(productsList[0].id, couponCode).then((order) => { 
                    orderId = order.id                    
                })
            });
        })

        after('TearDown / Clean up', () => {
            ordersRequests.deleteOrder(orderId);
            couponRequests.deleteCoupon(couponId);
            
        })

        it('API - A specific product can be requested', () => {
            //PLEASE REMOVE 'productsList[0].id' in case you want to use a specific product id already existing on DB         
            productsRequests.getProduct(productsList[0].id).then((productInfo) => {
                expect(productInfo).not.empty;
                expect(productInfo.id).eq(productsList[0].id);
            });
        }) 

    })

})