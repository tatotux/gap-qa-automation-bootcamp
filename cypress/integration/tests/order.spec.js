/// <reference types="cypress" />

import { SearchProduct } from '../../page_objects/components/search-product'
import { ProductPage } from '../../page_objects/pages/product/product-details'
import { CartPage } from '../../page_objects/pages/cart/cart-details'
import { CheckoutPage } from '../../page_objects/pages/checkout/checkout-details'
import { LoginPage } from '../../page_objects/pages/auth/login'
import { AccountPage } from '../../page_objects/pages/user/account-details'
import { OrderPage } from '../../page_objects/pages/order/order-details'

describe('Test suite for process a order', () => {
  beforeEach('open the login web page', () => {
      LoginPage.visit();
  })

  it('should process a order' , () => {
    LoginPage.submitLoginForm(Cypress.env('QA_USER'), Cypress.env('QA_PASSWORD'));
    AccountPage.elements.verifyLogout();
    SearchProduct.typeSearchProduct('Polo');
    ProductPage.elements.title().should('contain','Polo');
    ProductPage.elements.addToCart().click();
    ProductPage.elements.confirmationMessage().should('contain','“Polo” has been added to your cart.');
    ProductPage.elements.viewCart().click();
    CartPage.elements.productInList().should('contain','Polo');
    cy.url().should('include', CartPage.url);
    CartPage.elements.checkout().click();
    cy.url().should('include', CheckoutPage.url);
    cy.clearPlaceOrderForm();
    cy.submitPlaceOrderForm('Jose Antonio','Ledezma Mendez','company-test','CR','70 en la avenida San Juan',
    'San Juan','Alajuela','21000','12345678','test@gmail.com','Jose Antonio','Ledezma Mendez','company-test',
    'CR','70 en la avenida San Juan','San Juan','Alajuela','21000','12345678','test@gmail.com');
    OrderPage.elements.orderReceivedMessage().should('contain','Order received');
    OrderPage.elements.orderDetailsMessage().should('contain','Order details');
    OrderPage.elements.thankingMessage().should('contain','Thank you. Your order has been received.');
    OrderPage.elements.verifyEmail().should('contain', Cypress.env('QA_USER'));
  })
})
