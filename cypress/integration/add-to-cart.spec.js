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
        CheckoutDetailsPage.fillBillingDetails('Sonia', 'Sibaja','Costa Rica', 'Condominio', 'casa', 'Concepcion', 'Cartago','30305','88915387','ssibajav3@mail.com');
        CheckoutDetailsPage.fillShippingDetails('Sonia', 'Sibaja', 'UnitedStatus (US)', '9130 Jollyville Rd', 'Suite 175', 'Austin', 'Texas', '78759', 'Shipping');
        CheckoutDetailsPage.elements.termsAndConditionsCheckBox().check();
        CheckoutDetailsPage.elements.placeOrderButton().click();
        CheckoutDetailsPage.elements.orderReceivedMessage().should('be.visible');
        //cy.title().should('include', 'Order received');

    });

    // it('should checkout order', () => {});

    // it('should place order', () => {});
    

})
