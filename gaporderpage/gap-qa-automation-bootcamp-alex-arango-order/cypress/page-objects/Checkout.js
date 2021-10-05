const faker = require('faker');
faker.locale = "en";
class Checkout {
    url = '/checkout/';
    elements = {
        getCheckoutBtn: () => cy.get('.wc-proceed-to-checkout')
    }
    form = {
        getFirstName: () => cy.get('#billing_first_name'),
        getLastName: () => cy.get('#billing_last_name'),
        getBillingAddress: () => cy.get('#billing_address_1'),
        getBilingCity: () => cy.get('#billing_city'),
        getZipCode: () => cy.get('#billing_postcode'),
        getBillingPhone: () => cy.get('#billing_phone'),
        getBillingEmail: () => cy.get('#billing_email'),
        getDifferentAddressCheckbox: () => cy.get('#ship-to-different-address-checkbox'),
        getTermsCheckbox: () => cy.get('#terms'),
        getPlaceOrderButton: () => cy.get('#place_order')

    }
    navigate() {
        cy.visit(this.url)
    }
    clickCheckout() {
        this.elements.getCheckoutBtn().click();
    }
    agreeToTerms() {
        this.form.getAgreeTermsCheckbox();
    }
    checkSameShippingAddress() {
        this.form.getSameShippingAddressCheckbox();
    }

    placeOrder() {
        this.form.getPlaceOrderButton().click();
    }
    fillOutForm() {

        this.form.getFirstName().type(cy.faker.name.firstName());
        this.form.getLastName().type(cy.faker.name.lastName());
        this.form.getBillingAddress().type(cy.faker.address.secondaryAddress());
        this.form.getBilingCity().type(cy.faker.address.city());
        this.form.getZipCode().type(cy.faker.address.zipCode());
        this.form.getBillingPhone().type(cy.faker.phone.phoneNumber());
        this.form.getBillingEmail().type(cy.faker.internet.email());

    }
}
export const checkout = new Checkout();