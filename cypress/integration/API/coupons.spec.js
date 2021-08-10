/// <reference types = 'Cypress' />

describe('Coupons', () => {
    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000')
    })
    it('Create Coupon', () => {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/coupons',
            failOnStatusCode: false,
            auth: {
                user: Cypress.env('USERNAME'),
                pass: Cypress.env('PASSWORD')
            },
            body: {
                form: true,
                code: '10off_Gilberto',
                discount_type: 'percent',
                amount: '100',
                individual_use: true,
                exclude_sale_items: true,
                minimum_amount: '10.00'
            }
        })
    })
})




