/// <reference types="cypress" />

import {CartPage} from '../../page-objects/pages/cart';
import {APIRequest} from '../../support/api-requests';

describe('Cart page tests', () => {
  before(() => {
    APIRequest.createProduct();
    APIRequest.createCoupon();
  })

  after(() => {
    APIRequest.deleteProduct();
    APIRequest.deleteCoupon();
  })

  it('should be able add products to the cart from the category page', () => {
    cy.get('@productName').then((productName) => {
      APIRequest.addProductToCart(productName);
      CartPage.navigate();
      cy.get('@couponCode').then((couponCode) => {
        CartPage.enterCoupon(couponCode);
        cy.get('.cart-discount > th').should('contain.text', couponCode)
      })
    });
  });

});
