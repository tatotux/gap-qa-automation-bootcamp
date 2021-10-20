/// <reference types="cypress" />

import { CouponRequests } from '../../support/api_requests/coupon-requests'
import { ProductRequests } from '../../support/api_requests/product-requests'
import { OrderRequests } from '../../support/api_requests/order-requests'
import { LoginPage } from '../../page_objects/pages/auth/login'
import { AccountPage } from '../../page_objects/pages/user/account-details'

describe('Final Challenge API/UI Automation', () => {
    const productId = 37;
    let couponId;
    let orderId;
    let user;

    before('Create the coupon/order for set up', () => {
        CouponRequests.create();
        cy.get('@couponId').then((coupon) => couponId = coupon)
        OrderRequests.create(productId);
        cy.get('@orderId').then((order) => orderId = order)
        cy.fixture('user').then(function(dataJson){
            user = dataJson
            return user
        })
    })

    after('Delete the coupon/order for cleanup', () => {
        CouponRequests.delete(couponId);
        OrderRequests.delete(orderId);
    })

    it('Verify that a specific product can be requested', () => {
        ProductRequests.get(productId);
    });

    it('Verify that a specific coupon can be requested', () => {
        CouponRequests.get_a_coupon(couponId);
    });

    it('Verify that the order shows the proper discount value' , () => {
        LoginPage.visit();
        LoginPage.submitLoginForm(user.Username, user.Password);
        AccountPage.elements.logoutMessage();
        AccountPage.clickInOrders();
        AccountPage.clickTheOrder(orderId);
        AccountPage.elements.discountValue();
        AccountPage.clickLogOut();
    });
});
