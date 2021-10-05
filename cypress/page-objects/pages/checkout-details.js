class CheckoutDetails {

    url = '';
    elements = {

        //Billing details
        firstNameInput: () => cy.get('#billing_first_name'),
        lastNameInput: () => cy.get('#billing_last_name'),
        countryComboBox: () => cy.get('#select2-billing_country-container'),

        // lastNameInput: () => cy.get('[name="billing_last_name"]'),

        // addToCart: () => cy.contains('button', 'Add to cart'),
        // addedMessage: () => cy.contains('div', 'has been added to your cart.'),
        // viewCart: () => cy.contains('a', 'View cart'),


        //Shipping details

        //Checkout details
        termsAndConditionsCheckBox: () => cy.get('#terms'),
        placeOrderButton: () => cy.contains('button', 'Place order'),
    }

    fillBillingDetails(firstName, lastName) {
        // this.elements.firstNameInput().type(`${firstName}`);
        // this.elements.lastNameInput().type(`${lastName}`);
        this.elements.countryComboBox().click();
    }

    // viewCart() {
    //     this.elemets.viewCart().click();
    // }
}

export const CheckoutDetailsPage = new CheckoutDetails();
