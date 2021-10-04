class CheckoutPage{
    url = '';
    elements = {
        firstNameBox: () => cy.get('[name="billing_first_name"]'),
        lastNameBox: () => cy.get('[name="billing_last_name"]'),
        companyBox: () => cy.get('[name="billing_company"]'),
        countryList: () => cy.get('[name ="billing_country"]'),//country
        addressBox1: () => cy.get('[name="billing_address_1"]'),
        addressBox2: () => cy.get('[name="billing_address_2"]'),
        cityBox: () => cy.get('[name="billing_city"]'),
        stateBox: () => cy.get('[name="billing_state"]'),  //state
        postcodeBox: () => cy.get('[name="billing_postcode"]'),
        phoneNumberBox: () => cy.get('[name="billing_phone"]'),
        emailBox: () => cy.get('[name="billing_email"]'),
        shipCheckBox: () => cy.get('[name="ship_to_different_address"]'),
        productName: () => cy.get('td.product-name'),
        total: () => cy.get('.order-total'),
        paymentMethod: () => cy.get('#payment_method_cod'), 
        termsCheckBox: () => cy.get('[name="terms"]'),
        placeOrcerButton: () => cy.get('[name="woocommerce_checkout_place_order"]'),
        
    };

/**
 * 
 * @param {*} inputObject: firstName, lastName, company, countryList, addressBox1, addressBox2, cityBox, cityBox, postcodeBox, phoneNumberBox
 */
    fillForm(input,inputEmail){     
        this.elements.firstNameBox().type(input.firstName);
        this.elements.lastNameBox().type(input.lastName);
        this.elements.companyBox().type(input.company);
        this.elements.countryList().select(input.countryList,{force:true});       
        this.elements.addressBox1().type(input.addressBox1);
        this.elements.addressBox2().type(input.addressBox2);
        this.elements.cityBox().type(input.cityBox);
        this.elements.stateBox().type(input.stateBox);
        this.elements.postcodeBox().type(input.postcodeBox);
        this.elements.phoneNumberBox().type(input.phoneNumberBox);
        this.elements.emailBox().type(inputEmail); 
        this.elements.shipCheckBox().click();
    }

    placeOrder(){
        this.elements.paymentMethod().click({force:true});
        this.elements.termsCheckBox().click();
        this.elements.placeOrcerButton().click();
    }
}

export const CheckoutInfoPage = new CheckoutPage();
