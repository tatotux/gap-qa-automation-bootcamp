/// <reference types="Cypress" />

export const couponRequests = require('../../support/API_Requests/couponsRequest')

context('Testing Playground', () => {
    describe('The Challenge - Final Project', () => {
        let coupon_code = `cuponOff${Math.floor(Math.random() * 10000000)}`;
        let coupon_percentaje = 25;
        let coupon_id;


        before('Set Up', () => {
            couponRequests.createCoupon(coupon_code, coupon_percentaje.toString()).then((id) => {
                coupon_id = id
            });
        })

        after('TearDown / Clean up', () => {
            couponRequests.deleteCoupon(coupon_id);
        })

        it('API - A specific coupon can be requested', () => {
            couponRequests.getCoupon(coupon_id).then((coupon) => {
                expect(coupon.id).eq(coupon_id);
                expect(coupon.code).eq(coupon_code.toLowerCase());
                expect(coupon.amount).eq("25.00");
                expect(coupon.description).eq("Cupon used on final project - Jose Garcia");
            });
        })

    })

})