/// <reference types="Cypress" />

export const couponRequests = require('../../support/API_Requests/couponsRequest')

context('Testing Playground', () => {
    describe('The Challenge - Final Project', () => {
        let couponCode = `cuponOff${Math.floor(Math.random() * 10000000)}`;
        let couponPercentaje = 25;
        let couponId;
        

        before('Set Up', () => {
            couponRequests.createCoupon(couponCode, couponPercentaje.toString()).then((id) => { couponId = id });
        })

        after('TearDown / Clean up', () => {           
            couponRequests.deleteCoupon(couponId);            
        })

        it('API - A specific coupon can be requested', () => {
            couponRequests.getCoupon(couponId).then((coupon) => {
                expect(coupon.id).eq(couponId);
                expect(coupon.code).eq(couponCode.toLowerCase());
                expect(coupon.amount).eq("25.00");
                expect(coupon.description).eq("Cupon used on final project - Jose Garcia");
            });
        })

    })

})