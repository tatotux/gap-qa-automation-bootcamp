/// <reference types="cypress" />

// import { CheckoutPage } from '../page-objects/pages/checkout-detail';
import { ProductPage } from '../page-objects/pages/product-detail';
import { CartPage } from '../page-objects/pages/cart-detail';
import { CheckoutPage } from '../page-objects/pages/checkout-detail';

let randomEmail = new Date().toJSON();
randomEmail = randomEmail.replace(/:/g, '') + '@mailinator.com';

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('order a single product', () => {
    // Search Product
      cy.searchProduct('cap');
      ProductPage.elements.productTitle().should('contain', 'Cap');

    // Add to cart
      ProductPage.elements.addToCart().click();
      ProductPage.elements.cartMessage().should('contain', '\“Cap\” has been added to your cart.');

    // Go to Cart
      ProductPage.elements.viewCart().click();

    //Product appears on the cart
      CartPage.elements.productTitle().should('contain', 'Cap');
      CartPage.elements.subTotal().should('contain', '$16.00');

      // Go to Checkout
      CartPage.elements.proceedToCheckout().click();

    //Fill form and place order
      CheckoutPage.fillinForm('Geivin', 'Bellanero', 'United States (US)', '1 Aeropost Way', 'SJO30316', 'Miami', 'Florida', '33122', '888888', randomEmail);
      CheckoutPage.elements.shipSameAddress().uncheck();
      CheckoutPage.elements.terms().check();
      CheckoutPage.elements.placeOrder().click();

    // Confirm order placed
      CheckoutPage.elements.orderReceived().should('contain', 'Thank you. Your order has been received.');
    })
})