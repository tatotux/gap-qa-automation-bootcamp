/// <reference types = 'Cypress' />

describe('Products section', () => {
  beforeEach(() => {
    cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000')
  })
  it('Creating a product', () => {
    cy.request({
      method: 'POST',
      url: '/wp-json/wc/v3/products',
      failOnStatusCode: false,
      auth: {
        user: Cypress.env('USERNAME'),
        pass: Cypress.env('PASSWORD')
      },
        name: 'Gilberto Product',
        type: 'testing type',
        regular_price: '600',
        description: 'Here goes a long description',
        short_description: 'Here goes a short description',
        categories: [
          {
            id: 18,
          }
        ],
        images: [
          {
            src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
          },
          {
            src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
          }
        ]
      },
    
    )
  })
})

