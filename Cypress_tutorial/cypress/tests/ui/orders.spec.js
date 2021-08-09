/// <reference types="cypress" />

import { AccountDetailPage } from '../../page-objects/pages/account-details';
import {APIRequest} from '../../support/api-requests';

describe('Search page tests', () => {
  before(() => {
    APIRequest.createProduct();
    APIRequest.createCoupon();
    APIRequest.createOrder();
    AccountDetailPage.navigate();
    AccountDetailPage.setUsername('mariafer50121');
    AccountDetailPage.setPassword('l@0Xpb8l%xQXFu03PDDH%iTY');
    AccountDetailPage.clickLoginBtn();
  });

  after(() => {
    AccountDetailPage.clickLogout();
    APIRequest.deleteOrder();
    APIRequest.deleteProduct();
    APIRequest.deleteCoupon();
  })

  it('should show the proper discount value', () => {
    cy.get('@orderId').then((orderId) => {
      cy.visit(`my-account/view-order/${orderId}/`)
      cy.get('tfoot > :nth-child(2) > td > .woocommerce-Price-amount').should('contain.text', `42.00`);
    });
  });

});
