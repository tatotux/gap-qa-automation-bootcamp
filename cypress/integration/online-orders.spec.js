/// <reference types="cypress" />

import { ProductDetailPage } from '../page-objects/pages/product-detail';
import { CartPage } from '../page-objects/pages/cart';
import { SearchBoxComponent } from '../page-objects/components/search-box';
import { CheckoutDetailsPage } from '../page-objects/pages/checkout-details';
import { CouponRequests } from '../support/coupon-api-requests';
import { OrderRequests } from '../support/order-api-requests';

import faker from 'faker';
import { orderBy } from 'cypress/types/lodash';


describe ('Online orders', () => {

    // let coupon = {
    //         code: "SSIBAJA_10off",  
    //         discount_type: "percent",
    //         amount: "10",
    //         individual_use: true,
    //         exclude_sale_items: true
    //     }

    before('Create coupon', () => {
        CouponRequests.create();
        OrderRequests.create();
    });

    after('Delete coupon', () => {
        CouponRequests.delete();
        OrderRequests.delete();
    });

    it('should checkout order', () => {

        cy.visit('/');
    
    });

    // it('should add to cart', () => {

    //     cy.visit('/');

    //     // Search for product
    //     // SearchBoxComponent.elements.input().type('Belt{enter}');
    //     SearchBoxComponent.searchText('Belt');
 
    //     // Product details page
    //     ProductDetailPage.elements.addToCart().click();
    //     ProductDetailPage.elements.addedMessage().should('be.visible');
    //     ProductDetailPage.elements.viewCart().click();

    //     // Cart page
    //     cy.url().should('include','/cart');
    //     cy.title().should('include', 'Cart');
    //     CartPage.elements.belt().should('be.visible');
    //     CartPage.elements.subtotal().should('be.visible');
    //     CartPage.elements.proceedToCheckout().click();

    // });

    // it('should checkout order', () => {

    //     //Checkout page
    //     cy.url().should('include','/checkout');
    
    //     // CheckoutDetailsPage.fillBillingDetails(faker.name.firstName(), faker.name.lastName(),'Costa Rica', faker.address.streetAddress(),
    //     //                                     faker.address.secondaryAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(),
    //     //                                     faker.phone.phoneNumber("(###)########"), faker.internet.email());
    //     CheckoutDetailsPage.fillBillingDetails(faker.name.firstName(), faker.name.lastName(),'Costa Rica', faker.address.streetAddress(),
    //                                         faker.address.secondaryAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(),
    //                                         faker.phone.phoneNumber("(###)########"), `ssibajav${Date.now()}@mail.com`);
    //     CheckoutDetailsPage.fillShippingDetails(faker.name.firstName(), faker.name.lastName(), 'UnitedStatus (US)', faker.address.streetAddress(), 
    //                                         faker.address.secondaryAddress(), 'Austin', 'Texas', faker.address.zipCode(), 'faker.lorem.sentence()');
        
    // });

    // it('should place order', () => {

    //     //Checkout page
    //     CheckoutDetailsPage.elements.termsAndConditionsCheckBox().check();
    //     CheckoutDetailsPage.elements.placeOrderButton().click();
    //     CheckoutDetailsPage.elements.orderReceivedMessage().should('be.visible');
    // });

})
