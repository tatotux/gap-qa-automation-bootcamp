class CouponAPIRequests {

    create() {

        cy.request({
            method: 'POST',
            url: 'http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/', // baseUrl is prepended to url
            auth: {
                username: 'automation',
                password: 'automation'
            },
            // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                code: "ssibaja_10off",
                discount_type: "percent",
                amount: "10",
                individual_use: true,
                exclude_sale_items: true,
                minimum_amount: "100.00"
            }
        }).then( (response) => {
            cy.wrap(response.body.id).as('couponId')
            cy.log(response.status);  
        });
    }

    delete() {
        cy.get('@couponId').then((couponId) => {

            cy.request({
                method: 'DELETE',
                url: `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/${couponId}?force=true`,
                auth: {
                    username: 'automation',
                    password: 'automation'
                }
                
            });
            // .then( (response) => {
            //     cy.wrap(response.body.id).as(couponId)
            // })
        });
    }
}

export const CouponRequests = new CouponAPIRequests();
