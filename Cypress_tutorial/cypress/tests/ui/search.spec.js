/// <reference types="cypress" />

import {HeaderComponent} from '../../page-objects/components/header';
import {ProductDetailPage} from '../../page-objects/pages/product-detail';
import {HomePage} from '../../page-objects/pages/home';
import {APIRequest} from '../../support/api-requests';

describe('Search page tests', () => {
  beforeEach(() => {
    HomePage.navigate();
    APIRequest.createProduct();
  });

  after(() => {
    APIRequest.deleteProduct();
  })

  it('should be able to search a keyword that matches one single product', () => {
    cy.get('@productName').then((productName) => {
      HeaderComponent.searchKeyword(`${productName}`);
      ProductDetailPage.elements.getProductTitle().should('contain.text', `${productName}`);
    });
  });

});
