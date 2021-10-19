class CouponAPIRequests {

    couponId;

    create(coupon) {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/coupons', // baseUrl is prepended to url
            form: true,
            auth: {
                username: 'automation',
                password: 'automation'
            },
            body: {
                code: coupon.code() ,
                discount_type: coupon.discount_type(),
                amount: coupon.amount(),
                individual_use: coupon.individual_use(),
                exclude_sale_items: coupon.exclude_sale_items(),
                minimum_amount: coupon.minimum_amount()
            }
        }).then((response) => {
            cy.wrap(response.body.id).as('couponId');
            cy.log(`Status code: ${response.status}`); 
            cy.log(`Coupon ID: ${response.body.id}`); 
        });
    }

    delete() {
        cy.get('@couponId').then((couponId) => {

            cy.request({
                method: 'DELETE',
                url: `/wp-json/wc/v3/coupons/${couponId}?force=true`,
                auth: {
                    username: 'automation',
                    password: 'automation'
                }
            }).then( (response) => {
                cy.log(`Status code: ${response.status}`);  
            })
        });
    }

    get() {
        cy.get('@couponId').then((couponId) => {

            cy.request({
                method: 'GET',
                url: `/wp-json/wc/v3/coupons/${couponId}`,
                auth: {
                    username: 'automation',
                    password: 'automation'
                }
            }).then( (response) => {
                cy.log(`Status code: ${response.status}`); 
                cy.log(`Coupon ID: ${response.body.id}`);  
 
            })
        });
    }

}

export const CouponRequests = new CouponAPIRequests();
