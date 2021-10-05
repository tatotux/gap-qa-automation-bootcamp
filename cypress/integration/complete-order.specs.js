/*Taking into consideration please automate with the number of test cases you see fit the Completion of an Order. 
Make sure to understand that the workflow includes: 
1. Searching for a product
2. Adding the product to the cart
3. Filling out the form for the Shipping and Billing information
4. Processing the order
*/

/// <reference types="cypress" />
import { ProductPage } from '../page-objects/pages/product-detail'
import { cartPage } from '../page-objects/pages/cart'
import { searchComponent } from '../page-objects/components/search-input'
import { orderCheckout } from '../page-objects/pages/checkout'

const { fake } = require('faker');
const faker = require("faker");

describe('Complete order', () => {

    beforeEach(() => {
        cy.visit('/');
    });


    it('should complete an order', () => {
        //Search Page
        searchComponent.searchText('Belt');

        //Product Detail page
        ProductPage.elements.addToCart().click();
        ProductPage.elements.viewCart().click();

        //Cart page
        cartPage.elements.productTitle().should('contain', 'Belt');
        cartPage.elements.subtotal().should('contain', '$55.00');
        //cy.url().should('include', cartPage.url);
        //cy.title().should('include', cartPage.title);

        cartPage.elements.checkout().click()

        //Fill Billing form
        orderCheckout.fillBillingform.firstName().type(faker.name.firstName());
        orderCheckout.fillBillingform.lastName().type(faker.name.lastName());
        orderCheckout.fillBillingform.company().type(faker.company.companyName());
        orderCheckout.fillBillingform.country().click().type(`Colombia{enter}`);
        orderCheckout.fillBillingform.address().type(faker.address.streetAddress());
        orderCheckout.fillBillingform.billingCity().type(faker.address.cityName());
        orderCheckout.fillBillingform.billingState().type(faker.address.state());
        orderCheckout.fillBillingform.phone().type('000000');
        orderCheckout.fillBillingform.email().type(faker.internet.email());

        //Fill Shipping form
        orderCheckout.fillShippingform.firstName().type(faker.name.firstName());
        orderCheckout.fillShippingform.lastName().type(faker.name.lastName());
        orderCheckout.fillShippingform.company().type(faker.company.companyName());
        orderCheckout.fillShippingform.country().click().type(`Colombia{enter}`);
        orderCheckout.fillShippingform.address().type(faker.address.streetAddress());
        orderCheckout.fillShippingform.shippingCity().type(faker.address.cityName());
        orderCheckout.fillShippingform.shippingState().type(faker.address.state());
        orderCheckout.fillShippingform.zip().type(faker.address.zipCode());

        orderCheckout.elements.terms().click();
        orderCheckout.elements.placeOrder().click();
        orderCheckout.elements.confirmation().should('contain', 'Order received')


    });


});