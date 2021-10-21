/// <reference types="cypress" />

import { APIRequest } from '../support/api-requests';
import { Login } from '../page-objects/pages/login';
import { OrderPage} from '../page-objects/pages/order-detail';

describe('Product Coupons', () => {

    const code = 'blackFriday3';
    const amount = '50';
    const productId = 34;
    let couponId;
    let orderId;
    
    before('Create a coupon and an order for the tests', () => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
        APIRequest.createNewCoupon(code, amount);
        cy.get('@couponId').then((id) => {
            couponId = id
        })
        APIRequest.createNewOrder(productId, couponId);
        cy.get('@orderId').then((id) => {
            orderId = id
        })
    });

    after('Clean up and delete coupon', () => {
        APIRequest.deleteCoupon(couponId);
        APIRequest.deleteOrder(orderId);
    });

    it('should request for a specific product', () => {
        APIRequest.retrieveProduct(productId);
    });

    it('should request for a specific coupon', () => {
        APIRequest.retrieveCoupon(couponId);
    });

    it('should show proper discount value for an order', () => {
        Login.login(orderId);
        OrderPage.checkDiscount();
    });
});
