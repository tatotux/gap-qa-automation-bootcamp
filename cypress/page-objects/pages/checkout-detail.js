class CheckoutDetailPage {
    elements = {
        firstNameInput: () => cy.get('#billing_first_name'),
        lastNameInput: () => cy.get('#billing_last_name'),
        countryInput: () => cy.get('#billing_country'),
        street1Input: () => cy.get('.woocommerce-input-wrapper #billing_address_1'),
        street2Input: () => cy.get('.woocommerce-input-wrapper #billing_address_2'),
        cityInput: () => cy.get('.woocommerce-input-wrapper #billing_city'),
        stateInput: () => cy.get('#billing_state'),
        zipInput: () => cy.get('.woocommerce-input-wrapper #billing_postcode'),
        phoneInput: () => cy.get('#billing_phone'),
        emailInput: () => cy.get('#billing_email'),
        shipSameAddress: () => cy.get('#ship-to-different-address-checkbox'),
        terms: () => cy.get('#terms'),
        placeOrder: () => cy.contains('button', 'Place order'),
        orderReceived: () => cy.get('.woocommerce-thankyou-order-received'),
    };

    fillinForm(firstName, lastName, country, streetName, streetApartment, city, state, zip, phone, email) {
        this.elements.firstNameInput().type(firstName);
        this.elements.lastNameInput().type(lastName);
        this.elements.countryInput().select(country,{force: true});
        this.elements.street1Input().type(streetName);
        this.elements.street2Input().type(streetApartment);
        this.elements.cityInput().type(city);
        this.elements.stateInput().select(state,{force: true});
        this.elements.zipInput().type(zip);
        this.elements.phoneInput().type(phone);
        this.elements.emailInput().type(email);
    }

}

export const CheckoutPage = new CheckoutDetailPage();