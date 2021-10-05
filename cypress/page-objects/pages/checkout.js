const faker = require('faker');
faker.locale = "en";

class Checkout {
    
    elements = {
        
        form : {
            firstName: () => cy.get('#billing_first_name'),
            lastName: () => cy.get('#billing_last_name'),
            billingAddress: () => cy.get('#billing_address_1'),
            bilingCity: () => cy.get('#billing_city'),
            zipCode: () => cy.get('#billing_postcode'),
            billingPhone: () => cy.get('#billing_phone'),
            billingEmail: () => cy.get('#billing_email'),
            differentAddressShip: () => cy.get('#ship-to-different-address-checkbox'),
            agreedTerms: () => cy.get('#terms'),
            placeOrderButton: () => cy.get('#place_order'),
            shippingFirstName: () => cy.get('#shipping_first_name'),
            shippingLastName: () => cy.get('#shipping_last_name'),
            shippingAddress: () => cy.get('#shipping_address_1'),
            shippingCity: () => cy.get('#shipping_city'),
            shippingZipCode: () => cy.get('#shipping_postcode'),
            
        },
        placeOrderButton: () => cy.contains('button','Place order')
    }
    
    fillOutFormWithDifferentAddress(){
        this.elements.form.firstName().type(faker.name.firstName())
        this.elements.form.lastName().type(faker.name.lastName())
        this.elements.form.billingAddress().type(faker.address.secondaryAddress())
        this.elements.form.bilingCity().type(faker.address.city())
        this.elements.form.zipCode().type(faker.address.zipCode())
        this.elements.form.billingPhone().type("123-2323-23")
        this.elements.form.billingEmail().type(faker.internet.email())

        this.elements.form.differentAddressShip().check()

        this.elements.form.shippingFirstName().type(faker.name.firstName())
        this.elements.form.shippingLastName().type(faker.name.lastName())
        this.elements.form.shippingAddress().type(faker.address.secondaryAddress())
        this.elements.form.shippingCity().type(faker.address.city())
        this.elements.form.shippingZipCode().type(faker.address.zipCode())
        
        this.elements.form.agreedTerms().check()
    }

}

export const checkout = new Checkout()