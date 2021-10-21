
export class API {

    createProduct() {
        cy.request({
            method: 'POST',
            url: Cypress.env('productsEndpoint'),
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
            body: {
                "name": "Colombian Jersey",
                "type": "simple",
                "regular_price": "100.00",
                "description": "Official Colombian Jersey from the Copa America 2021.",
                "short_description": "",
                "categories": [
                    {
                        "id": 18
                    }
                ],
            }
        }).then((response) => {
            Cypress.env('newProductID', response.body.id)
            return response.body.id;
        })
    }

    getProduct(productID) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('productsEndpoint')}${productID}`,
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
        })
    }

    deleteProduct(productID) {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('productsEndpoint')}${productID}?force=true`,
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
        })
    }

    createCoupon(code) {
        cy.request({
            method: 'POST',
            url: Cypress.env('couponsEndpoint'),
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
            body: {
                "code": code,
                "discount_type": "percent",
                "amount": "60",
                "description": "60% off"
            },
        }).then((response) => {
            Cypress.env("couponID", response.body.id)
            Cypress.env("code", code)
            return response.body.id
        })
    }

    getCoupon(couponID) {
        return cy.request({
            method: 'GET',
            url: `/wp-json/wc/v3/coupons/${couponID}`,
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
        })
    }

    deleteCoupon(couponID) {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('couponsEndpoint')}${couponID}?force=true`,
        })
    }

    createOrderWithCoupon(code) {
        return cy.request({
            method: 'POST',
            url: Cypress.env('ordersEndpoint'),
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
            body: {

                "payment_method": "bacs",
                "payment_method_title": "Direct Bank Transfer",
                "set_paid": true,
                "billing": {
                    "first_name": "Alejandra",
                    "last_name": "Cubillos",
                    "address_1": "Apto 1203",
                    "address_2": "",
                    "city": "Medellin",
                    "state": "Antioquia",
                    "postcode": "94103",
                    "country": "Colombia",
                    "email": "ale.cubillos@example.com",
                    "phone": "(555) 555-5555"
                },
                "shipping": {
                    "first_name": "Alejandra",
                    "last_name": "Cubillos",
                    "address_1": "969 Market",
                    "address_2": "",
                    "city": "Medellin",
                    "state": "Antioquia",
                    "postcode": "94103",
                    "country": "Colombia"
                },
                "line_items": [
                    {
                        "product_id": Cypress.env('newProductID'),
                        "quantity": 5
                    }],
                "shipping_lines": [
                    {
                        "method_id": "flat_rate",
                        "method_title": "Flat Rate",
                        "total": "0.00"
                    }
                ],
                "coupon_lines": [
                    {
                        "code": code,
                    }]
            },
        }).then((response) => {

            Cypress.env('orderID', response.body.id)
            Cypress.env('orderKey', response.body.order_key)

        })
    }
    deleteOrder(orderID) {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('ordersEndpoint')}${orderID}?force=true`,
        })
    }
}

export const api = new API();