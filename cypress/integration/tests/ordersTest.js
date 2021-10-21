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
        let product_price;

        before('Set Up', () => {
            productsRequests.getAllProducts().then((products) => { products_list = products });
            couponRequests.createCoupon(coupon_code, coupon_percentaje.toString()).then((id) => {
                coupon_id = id;
                product_price = products_list[0].regular_price;
                ordersRequests.createOrder(products_list[0].id, coupon_code).then((order) => { 
                    order_id = order.id                    
                })
            });
        })

        after('TearDown / Clean up', () => {
            ordersRequests.deleteOrder(order_id);
            couponRequests.deleteCoupon(coupon_id);
            
        })

        it('API - A specific product can be requested', () => {
            //PLEASE REMOVE 'products_list[0].id' in case you want to use a specific product id already existing on DB         
            productsRequests.getProduct(products_list[0].id).then((productInfo) => {
                expect(productInfo).not.empty;
                expect(productInfo.id).eq(products_list[0].id);
            });
        }) 

    })

})