/// <reference types="cypress" />

import { ProductDetailPage } from '../page-objects/pages/product-detail';
import { CartPage } from '../page-objects/pages/cart';
import { SearchBoxComponent } from '../page-objects/components/search-box';
import { CheckoutDetailsPage } from '../page-objects/pages/checkout-details';

import faker from 'faker';



describe ('Online orders', () => {
    beforeEach(() => {
        // cy.visit('/');
    });

    it('should add to cart', () => {

        cy.visit('/');

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

        // //Checkout page
        // cy.url().should('include','/checkout');
        // // CheckoutDetailsPage.fillBillingDetails('Sonia', 'Sibaja','Costa Rica', 'Condominio', 'casa', 'Concepcion', 'Cartago','30305','88915387', faker.internet.email());
        // // CheckoutDetailsPage.fillShippingDetails('Sonia', 'Sibaja', 'UnitedStatus (US)', '9130 Jollyville Rd', 'Suite 175', 'Austin', 'Texas', '78759', faker.lorem.sentence());

        // CheckoutDetailsPage.fillBillingDetails(faker.name.firstName(), faker.name.lastName(),'Costa Rica', faker.address.streetAddress(),
        //                                     faker.address.secondaryAddress, faker.address.city(), faker.address.state(), faker.address.zipCode(),
        //                                     faker.phone.phoneNumber("(###)########"), faker.internet.email());
        // CheckoutDetailsPage.fillShippingDetails(faker.name.firstName(), faker.name.lastName(), 'UnitedStatus (US)', faker.address.streetAddress(), 
        //                                     faker.address.streetName(), 'Austin', 'Texas', faker.address.zipCode(), faker.lorem.sentence());
        // CheckoutDetailsPage.elements.termsAndConditionsCheckBox().check();
        // CheckoutDetailsPage.elements.placeOrderButton().click();
        // CheckoutDetailsPage.elements.orderReceivedMessage().should('be.visible');


        // checkoutDetails = {

        //     firstName: () => faker.name.firstName(),
        //     lastName: () => faker.name.lastName(),
        //     Address: () => faker.address.streetAddress(),
        //     billingAddressOptional: () => faker.address.streetName,
        //     city: () => faker.address.city(),
        //     state: () => faker.address.state(),
        //     postCode: () => faker.address.zipCode(),
        //     phone: () => faker.phone.phoneNumber(),
        //     email: () => faker.internet.email(),
        // }

        


    });

    it('should checkout order', () => {

        //Checkout page
        cy.url().should('include','/checkout');
    
        // CheckoutDetailsPage.fillBillingDetails(faker.name.firstName(), faker.name.lastName(),'Costa Rica', faker.address.streetAddress(),
        //                                     faker.address.secondaryAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(),
        //                                     faker.phone.phoneNumber("(###)########"), faker.internet.email());
        CheckoutDetailsPage.fillBillingDetails(faker.name.firstName(), faker.name.lastName(),'Costa Rica', faker.address.streetAddress(),
                                            faker.address.secondaryAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(),
                                            faker.phone.phoneNumber("(###)########"), `ssibajav${Date.now()}@mail.com`);
        CheckoutDetailsPage.fillShippingDetails(faker.name.firstName(), faker.name.lastName(), 'UnitedStatus (US)', faker.address.streetAddress(), 
                                            faker.address.secondaryAddress(), 'Austin', 'Texas', faker.address.zipCode(), 'comments');
        
    });

    it('should place order', () => {

        //Checkout page
        CheckoutDetailsPage.elements.termsAndConditionsCheckBox().check();
        CheckoutDetailsPage.elements.placeOrderButton().click();
        CheckoutDetailsPage.elements.orderReceivedMessage().should('be.visible');
    });

    
    

})
