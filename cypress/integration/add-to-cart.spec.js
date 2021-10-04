/// <reference types="cypress" />

import { ProductPage } from '../page-objects/pages/product-detail';
import { Cart } from '../page-objects/pages/cart';
import { Search, SearchComponent } from '../page-objects/components/search-input';
import { Checkout } from '../page-objects/pages/checkout';

describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should add to cart', () => {
        // Search for product
        Search.searchText('Belt');

        //Product details page
        ProductPage.elements.title().should('contain', 'Belt');
        ProductPage.elements.addToCart().click();
        ProductPage.elements.viewCart().click();
        
        // Cart page
        Cart.elements.productTitle().should('contain', 'Belt');
        Cart.elements.subtotal().should('contain', '$55.00');
        cy.url().should('include', Cart.url);
        cy.title().should('include', Cart.title);

        // Checkout Page
        Checkout.elements.checkoutButton().click();
        Checkout.elements.billingFirstName().type('Ronald');
        Checkout.elements.billingLastName().type('Ramirez');
        Checkout.elements.billingAddress().type('Test Address');
        Checkout.elements.billingCity().type('Test City');
        Checkout.elements.billingPostCode().type('07024');
        Checkout.elements.billingPhone().type('+15555555');
        Checkout.elements.billingEmail().type('test@test.com');
        Checkout.elements.shipToDifferentAddress().uncheck();
        Checkout.elements.terms().check();
        Checkout.elements.placeHolder().click();
        cy.get('.entry-title').should('contain', 'Order received');
        

    });

});
