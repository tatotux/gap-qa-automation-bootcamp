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
                ordersRequests.createOrder(productsList[0].id, couponCode).then((order) => { orderId = order })
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

        it('API - A specific coupon can be requested', () => {
            couponRequests.getCoupon(couponId).then((coupon) => {
                expect(coupon.id).eq(couponId);
                expect(coupon.code).eq(couponCode.toLowerCase());
                expect(coupon.amount).eq("25.00");
                expect(coupon.description).eq("Cupon used on final project - Jose Garcia");
            });
        })

        it('UI Testing - Verify the order shows the proper discount value', () => {
            let discount;
            cy.visit(`my-account/view-order/${orderId}`);
            cy.get("#username").should('be.visible').type(Cypress.env("api_username"));
            cy.get("#password").should('be.visible').type(Cypress.env("api_password"));
            cy.get("[name=login]").should('be.visible').click();
            discount = parseFloat((couponPercentaje/100) * parseFloat(productPrice) ).toFixed(2);
            cy.get(":nth-child(2) > td > .woocommerce-Price-amount").should('be.visible').last().invoke('text').should('contain',(`$${discount}`));  
        })


    })

})