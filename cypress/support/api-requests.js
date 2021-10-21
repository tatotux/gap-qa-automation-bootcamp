/// <reference types="cypress" />

export class API{

    
    //Coupon requests
    createCoupon(couponCode){
        return cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/coupons',
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            },
            body: {
                code: couponCode,
                discount_type: "percent",
                amount: "25"
            }
        }).then((resp) => {
            cy.wrap(resp.body.id).as('couponId')
        });
        
    }

    deleteCoupon(couponId){
            cy.request({
                method: 'DELETE',
                url: `/wp-json/wc/v3/coupons/${couponId}?force=true`,
                auth: {
                    user: Cypress.env('ECOMMERCE_USER'),
                    pass: Cypress.env('ECOMMERCE_PASS')
                }
            }); 

    }
    getCoupon(couponId,couponCode){
            cy.request({
                method: 'GET',
                url: '/wp-json/wc/v3/coupons/' + couponId,
                auth: {
                    user: Cypress.env('ECOMMERCE_USER'),
                    pass: Cypress.env('ECOMMERCE_PASS')
                }
            }).then((resp) => {
                expect(resp.body).to.have.property('code',couponCode)
            })
    }


    //Product requests
    getProduct(productId){
        cy.request({
            method: 'GET',
            url: 'wp-json/wc/v3/products' + '/' + productId,
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            }
        }).then((resp) => {
        expect(resp.body).to.have.property('name', 'Polo')
        });

        
    }


    //Order requests
    createOrder(productId, couponCode){
        cy.request({
            method: 'POST',
            url: 'wp-json/wc/v3/orders',
            auth: {
                user: Cypress.env('ECOMMERCE_USER'),
                pass: Cypress.env('ECOMMERCE_PASS')
            },
            body: {
                payment_method: "bacs",
                payment_method_title: "Direct Bank Transfer",
                set_paid: true,
                customer_id: 1,
                billing: {
                    first_name: "Ronald",
                    last_name: "Ramirez",
                    address_1: "969 Market",
                    address_2: "",
                    city: "San Francisco",
                    state: "CA",
                    postcode: "94103",
                    country: "US",
                    email: "john.doe@example.com",
                    phone: "(555) 555-5555"
                    },
                    shipping: {
                    first_name: "Ronald",
                    last_name: "Ramirez",
                    address_1: "969 Market",
                    address_2: "",
                    city: "San Francisco",
                    state: "CA",
                    postcode: "94103",
                    country: "US"
                    },
                    line_items: [
                    {
                        product_id: productId,
                        quantity: 1
                    }
                    ],
                    coupon_lines: [{
                                code: couponCode,
                                }],
                    shipping_lines: [
                    {
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "10.00"
                    }
                    ]
                }
        }).then((resp) => {
            cy.wrap(resp.body.id).as('orderId')
        });
        }
    
    deleteOrder(orderId){
            cy.request({
                method: 'DELETE',
                url: `/wp-json/wc/v3/orders/${orderId}?force=true`,
                auth: {
                    user: Cypress.env('ECOMMERCE_USER'),
                    pass: Cypress.env('ECOMMERCE_PASS')
                }
            });
    }  
}



export const APIRequest = new API();