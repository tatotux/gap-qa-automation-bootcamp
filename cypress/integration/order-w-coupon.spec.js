/// <reference types="cypress" />
import { api } from '../support/api-requests'
import { homePage } from '../page-objects/HomePage';
import { order } from '../page-objects/Order';

describe('Verify the total amount of products in the shopping cart is calculated correctly', () => {
    before(() => {
        homePage.navigate()
        api.createProduct()
        api.createCoupon(`${Math.floor(Math.random() * 10000).toString()} off`)
        api.createOrderWithCoupon(Cypress.env('code'))
    })
    after(() => {
        api.deleteProduct(Cypress.env('newProductID'))
        api.deleteCoupon(Cypress.env('couponID'))
        api.deleteOrder(Cypress.env('orderID'))
    })
    it('Verify that a specific product can be requested - API', () => {


        api.getProduct(Cypress.env('newProductID')).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(Cypress.env('newProductID'));
        });
    })

    it('Verify that a specific coupon can be requested - API', () => {
        api.getCoupon(Cypress.env('couponID'))
        api.getCoupon(Cypress.env('couponID')).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(Cypress.env('couponID'));
        });
    })

    it('Verify that the order shows the proper discount value - UI', () => {
        order.visitOrder(Cypress.env('orderID'), Cypress.env('orderKey'))
        order.getDiscountTotal().should('have.text', '$300.00')
        order.getTotal().should('have.text', '$200.00')
    })

})
