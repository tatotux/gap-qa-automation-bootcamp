class checkoutDetailPage{

    title = 'Checkout';
    url = '/checkout';
    elements = {
        firstName: () => cy.get('#billing_first_name'),
        lastName : () => cy.get('#billing_last_name'),
        address :  () => cy.get('#billing_address_1'),
        city :     () => cy.get('#billing_city'),
        zipCode :  () => cy.get('#billing_postcode'),
        phone :    () => cy.get('#billing_phone'),
        email :    () => cy.get('#billing_email_field > label'),
        shipping : () => cy.get('#ship-to-different-address-checkbox'),
        terms:     () => cy.get('#terms'),
        placeOrder:() => cy.get('#place_order'),
    };

    fillBillingForm(){
        var faker = require('faker')

        this.elements.firstName().type(faker.name.firstName())
        this.elements.lastName().type(faker.name.lastName())
        this.elements.address().type(faker.address.streetAddress())
        this.elements.city().type(faker.address.cityName())
        this.elements.zipCode().type(faker.address.zipCode())
        this.elements.phone().type(faker.phone.phoneNumber())
        this.elements.email().type(faker.internet.email())
    }

}
export const CheckoutPage = new checkoutDetailPage();