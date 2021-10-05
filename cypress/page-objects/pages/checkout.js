class OrderCheckout {

    elements = {
        checkout: () => cy.contains('a', 'Proceed to checkout'),
        terms: () => cy.get('[name="terms"]'),
        placeOrder: () => cy.get('[data-value="Place order"]'),
        confirmation: () => cy.get('h1.entry-title')

    }

    fillBillingform = {
        firstName: () => cy.get('[name="billing_first_name"]'),
        lastName: () => cy.get('[name="billing_last_name"]'),
        company: () => cy.get('[name="billing_company"]'),
        country: () => cy.get('#select2-billing_country-container'),
        address: () => cy.get('[name="billing_address_1"]'),
        billingCity: () => cy.get('input#billing_city'),
        billingState: () => cy.get('[name="billing_state"]'),
        phone: () => cy.get('[name="billing_phone"]'),
        email: () => cy.get('[name="billing_email"]'),

    }

    fillShippingform = {
        firstName: () => cy.get('[name="shipping_first_name"]'),
        lastName: () => cy.get('[name="shipping_last_name"]'),
        company: () => cy.get('[name="billing_company"]'),
        country: () => cy.get('#select2-shipping_country-container'),
        address: () => cy.get('[name="shipping_address_1"]'),
        shippingCity: () => cy.get('input#shipping_city'),
        shippingState: () => cy.get('[name="shipping_state"]'),
        zip: () => cy.get('[name="shipping_postcode"]'),

    }

}

export const orderCheckout = new OrderCheckout();