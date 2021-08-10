/// <reference types = 'cypress' />

describe('Testing Products', () => {
  before(()=>{
     cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/')
  });

  it('Search a product via the search field', () => {
      cy.get('#woocommerce-product-search-field-0')
      .type('Polo{enter}');
      cy.contains('Add to cart')
      .click();
      cy.contains('View cart')
      .click();
  })
  it('Use a coupon code created from API', () => {
      cy.get('#woocommerce-product-search-field-0').
      type('Polo{enter}');
      cy.contains('Add to cart')
      .click();
      cy.contains('View cart')
      .click();
      cy.get('#coupon_code')
      .type('10off_gilberto');
      cy.get('.coupon > .button')
      .click();
      cy.get('.cart-discount.coupon-10off_gilberto:visible')
      .contains('Coupon: 10off_gilberto')
  })
  it('Verify discount has applied correctly', () => {
      cy.get('#woocommerce-product-search-field-0')
      .type('Polo{enter}');
      cy.contains('Add to cart')
      .click();
      cy.contains('View cart')
      .click();
      cy.get('#coupon_code')
      .type('10off_gilberto{enter}');
      cy.contains('Proceed to checkout')
      .click();
      cy.get('#order_review')
      .contains('$16.00');

  })
})