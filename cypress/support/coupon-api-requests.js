class CouponAPIRequests {

    couponId;

    create() {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/coupons', // baseUrl is prepended to url
            form: true,
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            },
            body: {
                code: `SSIBAJA_10off_${Date.now()}`,
                discount_type: "percent",
                amount: "10",
                individual_use: true,
                exclude_sale_items: true,
                minimum_amount: "100.00"

            }
        }).then((response) => {
            cy.wrap(response.body.id).as('couponId');
            cy.wrap(response.body.code).as('couponCode');
            
            cy.log(`Status code: ${response.status}`); 
            cy.log(`Coupon ID: ${response.body.id}`); 
            cy.log(`Coupon Code: ${response.body.code}`); 
        });
    }

    delete() {
        cy.get('@couponId').then((couponId) => {

            cy.request({
                method: 'DELETE',
                url: `/wp-json/wc/v3/coupons/${couponId}?force=true`,
                auth: {
                    username: Cypress.env("api_username"),
                    password: Cypress.env("api_password")
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
                    username: Cypress.env("api_username"),
                    password: Cypress.env("api_password")
                }
            }).then( (response) => {
                cy.wrap(response.status).as('couponStatusCode');
                
                cy.log(`Status code: ${response.status}`); 
                cy.log(`Coupon ID: ${response.body.id}`);
            })
        });
    }

}

export const CouponRequests = new CouponAPIRequests();
