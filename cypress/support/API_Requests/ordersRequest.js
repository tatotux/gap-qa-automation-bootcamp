export const createOrder = (productId,couponCode) => {
   return cy.request({
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
};

export const deleteOrder = (orderId) => {
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
}