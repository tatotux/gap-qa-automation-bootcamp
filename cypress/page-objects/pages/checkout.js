class CheckoutPage {
    title = 'Checkout';
    url = '/checkout';
    elements = {
        checkoutButton: () => cy.get('.checkout-button'),
        billingFirstName: () => cy.get('#billing_first_name'),
        billingLastName: () => cy.get('#billing_last_name'),
        billingAddress: () => cy.get('#billing_address_1'),
        billingCity: () => cy.get('#billing_city'),
        billingPostCode: () => cy.get('#billing_postcode'),
        billingPhone: () => cy.get('#billing_phone'),
        billingEmail: () => cy.get('#billing_email'),
        shipToDifferentAddress: () => cy.get('#ship-to-different-address-checkbox'),
        terms: () => cy.get('#terms'),
        placeHolder: () => cy.get('#place_order'),
    };
}

export const Checkout = new CheckoutPage();
