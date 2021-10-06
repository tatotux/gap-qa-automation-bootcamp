class CheckoutDetails {

    url = '';
    elements = {

        //Billing details
        firstNameInput: () => cy.get('#billing_first_name'),
        lastNameInput: () => cy.get('#billing_last_name'),
        countryComboBox: () => cy.get('#select2-billing_country-container'),
        comboBoxInput: () => cy.get('input.select2-search__field'),
        billingAddressInput: () => cy.get('#billing_address_1.input-text'),
        billingAddressOptionalInput: () => cy.get('#billing_address_2.input-text'),
        cityInput: () => cy.get('#billing_city.input-text'),
        stateInput: () => cy.get('#billing_state.input-text'),
        postCodeInput: () => cy.get('#billing_postcode.input-text'), 
        phoneInput: () => cy.get('#billing_phone.input-text'),
        emailInput: () => cy.get('#billing_email.input-text'),
        
        //Shipping details
        shippingFirstNameInput: () => cy.get('#shipping_first_name'),
        shippingLastNameInput: () => cy.get('#shipping_last_name'),
        shippingCountryComboBox: () => cy.get('#select2-shipping_country-container'),
        shippingAddressInput: () => cy.get('#shipping_address_1.input-text'),
        shippingAddressOptionalInput: () => cy.get('#shipping_address_2.input-text'),
        shippingCityInput: () => cy.get('#shipping_city.input-text'),
        shippingStateComboBox: () => cy.get('#select2-shipping_state-container'),

        shippingPostCodeInput: () => cy.get('#shipping_postcode.input-text'), 
        orderCommentsInput : () => cy.get('#order_comments'),

        //Checkout details
        termsAndConditionsCheckBox: () => cy.get('#terms'),
        placeOrderButton: () => cy.contains('button', 'Place order'),

        orderReceivedMessage: () => cy.contains('h1', 'Order received'),
    }

    fillBillingDetails(firstName, lastName, country, streetLine1, streetLine2, city, state, postcode, phone, email) {
        this.elements.firstNameInput().type(`${firstName}`);
        this.elements.lastNameInput().type(`${lastName}`);
        this.elements.countryComboBox().click();
        this.elements.comboBoxInput().type(`${country}{enter}`);
        this.elements.billingAddressInput().type(`${streetLine1}`);
        this.elements.billingAddressOptionalInput().type(`${streetLine2}`);
        this.elements.cityInput().type(`${city}`);
        this.elements.stateInput().type(`${state}`);
        this.elements.postCodeInput().type(`${postcode}`);
        this.elements.phoneInput().type(`${phone}`);
        this.elements.emailInput().type(`${email}`);
    }

    fillShippingDetails(firstName, lastName, country, streetLine1, streetLine2, city, state, postcode, orderNotes) {
        this.elements.shippingFirstNameInput().type(`${firstName}`);
        this.elements.shippingLastNameInput().type(`${lastName}`);
        this.elements.countryComboBox().click();
        this.elements.comboBoxInput().type(`${country}{enter}`);
        this.elements.shippingAddressInput().type(`${streetLine1}`);
        this.elements.shippingAddressOptionalInput().type(`${streetLine2}`);
        this.elements.shippingCityInput().type(`${city}`);
        this.elements.shippingStateComboBox().click();
        this.elements.comboBoxInput().type(`${state}{enter}`);
        this.elements.shippingPostCodeInput().type(`${postcode}`);
        this.elements.orderCommentsInput().type(`${orderNotes}`);
    }
}

export const CheckoutDetailsPage = new CheckoutDetails();
