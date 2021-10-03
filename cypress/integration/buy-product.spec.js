/// <reference types="cypress" />

import {ProductPage} from '../page-objets/pages/product-detail';
import {CartPage} from '../page-objets/pages/cart';
import {SearchComponent} from '../page-objets/components/search-input';
import { CheckoutPage } from '../page-objets/pages/checkout';
import { OrderPage } from '../page-objets/pages/order';

describe('Session 2 - Bootcamp', () => {
  
    it('Add product to cart', () => {
        const product = 'Polo';
        const message = ` “${product}” has been added to your cart.	`;
        
        cy.visit('/');
        //Search for product
        SearchComponent.searchText(product);
        
        //Product details page, add to cart
        ProductPage.elements.title().should('contain',product);
        ProductPage.elements.title().should('be.visible');
        cy.title().should('include',product);
  
        ProductPage.elements.addToCart().click();
        ProductPage.elements.message().should('be.visible').should('contain', message);

        //View cart
        ProductPage.elements.viewCart().click();
        
        //Cart page
        CartPage.elements.title().should('contain',product).should('be.visible');
        CartPage.elements.subTotal().should('contain','$20.00').should('be.visible');
        cy.url().should('include', CartPage.url);
        cy.title().should('include', CartPage.title);
        cy.contains('Proceed to checkout').should('be.visible');
        CartPage.elements.checkout().click();
    })

    it('Proceed to checkout', () => {
      //Checkout
      cy.url().should('include', CheckoutPage.url);
      cy.title().should('include', CheckoutPage.title);
      
      //Fill Billing form
      CheckoutPage.fillBillingForm()
      cy.wait(10000)

      //confirm Order
      CheckoutPage.elements.shipping().uncheck()
      CheckoutPage.elements.terms().check({force: true})
      CheckoutPage.elements.placeOrder().click({force:true})

      //Order received
      OrderPage.elements.title().should('include','Order received')
      OrderPage.elements.orderNumber().should('not.be.empty')
      OrderPage.elements.date().should('not.be.empty')
      OrderPage.elements.email().should('not.be.empty')
      OrderPage.elements.total().should('not.be.empty')
  })
})