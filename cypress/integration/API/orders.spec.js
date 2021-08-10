/// <reference types = 'cypress' />

describe('Orders section', () => {

    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000')
    })
    it('Create a new order', () => {
        const data = {
            method: 'POST',
            url: '/wp-json/wc/v3/orders',
            failOnStatusCode: false,
            auth: {
                user: Cypress.env('USERNAME'),
                pass: Cypress.env('PASSWORD')
            },  
            payment_method: "bacs",
            payment_method_title: "Direct Bank Transfer",
            set_paid: true,
            billing: {
                first_name: "Gilberto",
                last_name: "Solano",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US",
                email: "testinggap@hotmail.com",
                phone: "(555) 555-5555"
            },
            shipping: {
                first_name: "Gilberto",
                last_name: "Solano",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US"
            },
            line_items: [
                {
                    product_id: 17,///Aqui va mi product ID''',
                    quantity: 2
                }
            ],
            coupon_lines: [
                {
                    code: '10off_Gilberto'//poner el id del coupon aqui
                }
            ],
            shipping_lines: [
                {
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: "10.00"
                }
            ]
        };
        cy.request(data)
    })
})