// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createCoupon', (code, percentaje) => {
    cy.request({
            method: 'POST',
            url: Cypress.config("baseUrl") + Cypress.config("coupon_url"),
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            },
            body: {
                code: code,
                discount_type: "percent",
                amount: percentaje,
                description: "Cupon used on final project - Jose Garcia",
            },
        })
        .then((resp) => {
            expect(resp.status).eq(201)
            return resp.body.id
        })
    })

Cypress.Commands.add('getCoupon', (couponId) => {
        cy.request({
                method: 'GET',
                url: Cypress.config("baseUrl") + Cypress.config("coupon_url") + `/${couponId}`,
                auth: {
                    username: Cypress.env("api_username"),
                    password: Cypress.env("api_password")
                },
            })
            .then((resp) => {
                expect(resp.status).eq(200)
                return resp.body
            })
    })

Cypress.Commands.add('deleteCoupon', (couponId) => {
        cy.request({
                method: 'DELETE',
                url: Cypress.config("baseUrl") + Cypress.config("coupon_url") + `/${couponId}`,
                auth: {
                    username: Cypress.env("api_username"),
                    password: Cypress.env("api_password")
                },
                body: {
                    force: "true"
                },
            })
            .then((resp) => {
                expect(resp.status).eq(200)
            })
    })




Cypress.Commands.add('getAllProducts', () => {
    cy.request({
            method: 'GET',
            url: Cypress.config("baseUrl") + Cypress.config("products_url"),
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            },
        })
        .then((resp) => {
            expect(resp.status).eq(200)
            return resp.body
        })
})

Cypress.Commands.add('getProduct', (productId) => {
    cy.request({
            method: 'GET',
            url: Cypress.config("baseUrl") + Cypress.config("products_url")+`/${productId}`,
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            },
        })
        .then((resp) => {            
            expect(resp.status).eq(200)
            return resp.body
        })
})



Cypress.Commands.add('createOrder', (productId,couponCode) => {
    cy.request({
            method: 'POST',
            url: Cypress.config("baseUrl") + Cypress.config("orders_url"),
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            },
            body: {
                customer_id:"1",
                payment_method: "bacs",
                payment_method_title: "Direct Bank Transfer",
                set_paid: true,
                billing: {
                    first_name: "John",
                    last_name: "Doe",
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
                    first_name: "John",
                    last_name: "Doe",
                    address_1: "969 Market",
                    address_2: "",
                    city: "San Francisco",
                    state: "CA",
                    postcode: "94103",
                    country: "US"
                },
                line_items: [{
                    product_id: productId,
                    quantity: 1
                }],
                coupon_lines: [{
                    code: couponCode
                }],
                shipping_lines: [{
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: "10.00"
                }]

            },
        })
        .then((resp) => {
            expect(resp.status).eq(201)
            return resp.body.id
        })
})

Cypress.Commands.add('deleteOrder', (orderId) => {
    cy.request({
            method: 'DELETE',
            url: Cypress.config("baseUrl") + Cypress.config("orders_url")+`/${orderId}`,
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            }, 
            body: {
                force: "true"
            },             
        })
        .then((resp) => {
            expect(resp.status).eq(200)
        })
})