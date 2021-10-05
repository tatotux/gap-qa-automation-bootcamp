/// <reference types="cypress" />

import { ProductDetailPage } from '../page-objects/pages/product-detail';
import { CartPage } from '../page-objects/pages/cart';
import { SearchBoxComponent } from '../page-objects/components/search-box';
import { CheckoutDetailsPage } from '../page-objects/pages/checkout-details';


describe ('Add to cart', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should add to cart', () => {

        // Search for product
        // SearchBoxComponent.elements.input().type('Belt{enter}');
        SearchBoxComponent.searchText('Belt');
 
        // Product details page
        ProductDetailPage.elements.addToCart().click();
        ProductDetailPage.elements.addedMessage().should('be.visible');
        ProductDetailPage.elements.viewCart().click();

        // Cart page
        cy.url().should('include','/cart');
        cy.title().should('include', 'Cart');
        CartPage.elements.belt().should('be.visible');
        CartPage.elements.subtotal().should('be.visible');
        CartPage.elements.proceedToCheckout().click();

        //Checkout page
        cy.url().should('include','/checkout');
        CheckoutDetailsPage.fillBillingDetails('Sonia', 'Sibaja');

    });

    it('should checkout order', () => {

        // cy.visit('/che');
        

        // CheckoutDetailsPage.fillBillingDetails('Sonia');
    });

    it('should place order', () => {});
    

})
