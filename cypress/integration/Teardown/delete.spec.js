/// <reference types = 'Cypress' />

describe('Products section', () => {
    beforeEach(() => {
      cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000')
    })
    it('Delete a product', () => {
    cy.request({
        method: 'DELETE',
        failOnStatusCode: false,
        url: '/wp-json/wc/v3/products/405',
        auth: {
          user: Cypress.env('USERNAME'),
          pass: Cypress.env('PASSWORD')
        }
        
        }
      )
    })
    it('Delete a coupon', () => {
        cy.request({
            method: 'DELETE',
            failOnStatusCode: false,
            url: '/wp-json/wc/v3/coupons/283',
            auth: {
              user: Cypress.env('USERNAME'),
              pass: Cypress.env('PASSWORD')
            }
            
            }
          )
        })
        it('Delete an order', () => {
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: '/wp-json/wc/v3/orders/286',
                auth: {
                  user: Cypress.env('USERNAME'),
                  pass: Cypress.env('PASSWORD')
                }
                }
              )
            })
})