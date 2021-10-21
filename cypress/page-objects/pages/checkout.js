class CheckoutDetailPage {
    url = '';
    elements = {
        firstName: () => cy.get('#billing_first_name'),
        lastName: () => cy.get('#billing_last_name'),
        address: () => cy.get('#billing_address_1'),
        town: () => cy.get('#billing_city'),
        postcode: () => cy.get('#billing_postcode'),
        phone: () => cy.get('#billing_phone'),
        email: () => cy.get('#billing_email'),
        shippingAddressCheckbox: () => cy.get('#ship-to-different-address-checkbox'),
        termsCheckbox: () => cy.get('#terms'),
        placeOrder: () => cy.get('#place_order'),
    };

    fllForm() {
      this.elements.firstName().type('Alex');
      this.elements.lastName().type('Esquivel');
      this.elements.address().type('Laboratorio 9103');
      this.elements.town().type('Perez Zeledón');
      this.elements.postcode().type('20193');
      this.elements.phone().type('55558741');
      this.elements.email().type('alexeg3@bootcamp.com');
      this.elements.shippingAddressCheckbox().click();
      this.elements.termsCheckbox().click();
    }
}

export const CheckoutPage = new CheckoutDetailPage();
