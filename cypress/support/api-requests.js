class ApiRequest {

    //Coupon Requests
    createNewCoupon(code, amount) {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/coupons',
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            },
            body: {
                code: code,
                discount_type: "percent",
                amount: amount,
                individual_use: true,
                exclude_sale_items: true,
                minimum_amount: "100.00"
            }
        }).then((resp) => {
            cy.wrap(resp.body.id).as('couponId')
        });
    }

    deleteCoupon(couponId) {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/coupons/${couponId}`,
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            },
            body: {
                force: true
            },
        })
        .then((resp) => {
            expect(resp.status).eq(200)
        })        
    }

    retrieveCoupon(couponId) {
        cy.request({
            method: 'GET',
            url: `/wp-json/wc/v3/coupons/${couponId}`,
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            }
        })
    }

    //Order requests
    createNewOrder(productId, couponId) {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/orders',
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            },
            body: {
                payment_method: "cdr",
                payment_method_title: "Credit Card",
                set_paid: true,
                billing: {
                    first_name: "Alex",
                    last_name: "Esquivel",
                    address_1: "Laboratorio",
                    address_2: "",
                    city: "PZ",
                    state: "SJ",
                    postcode: "40103",
                    country: "CR",
                    email: "axeg@example.com",
                    phone: "(555) 555-5555"
                },
                shipping: {
                    first_name: "Alex",
                    last_name: "Esquivel",
                    address_1: "Laboratorio",
                    address_2: "",
                    city: "PZ",
                    state: "SJ",
                    postcode: "40103",
                    country: "CR"
                },
                line_items: [
                    {
                        product_id: productId,
                        quantity: 3
                    }
                ],
                shipping_lines: [
                    {
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "10.00"
                    }
                ],
                coupon_lines: [
                    {
                        id: couponId,
                        code: "blackFriday3"
                    }
                ]
            }
        }).then((resp) => {
            cy.wrap(resp.body.id).as('orderId')
        })
    }

    deleteOrder(orderId) {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/orders/${orderId}`,
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            },
            body: {
                force: true
            },
        })
        .then((resp) => {
            expect(resp.status).eq(200)
        })        
    }

    retrieveProduct(productId) {
        cy.request({
            method: 'GET',
            url: `/wp-json/wc/v3/products/${productId}`,
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            }
        })
    }

}

export const APIRequest = new ApiRequest();
