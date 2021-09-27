export class Checkout{
    elements ={
        getfirstnameField:() => cy.get('#billing_first_name'),
        getlastnameField:() =>cy.get('#billing_last_name'),
        getcountryField:() =>cy.get('#select2-billing_country-container'),
        getaddressField:() =>cy.get('#billing_address_1'),
        getcityField:() =>cy.get('#billing_city'),
        getstateField:() =>cy.get('#billing_state'),
        getphoneField:() =>cy.get('#billing_phone'),
        getemailField:() =>cy.get('#billing_email'),

        differentAdressCheckbox:() =>cy.get('#ship-to-different-address-checkbox'),
        termsCheckbox:() =>cy.get('#terms'),

        placeOrderButton:() =>cy.get('#place_order')
    }


    fillCheckoutFields(firstname,lastname,country,address,city,state,phone,email){
        this.elements.getfirstnameField().type(firstname)
        this.elements.getlastnameField().type(lastname)
        this.elements.getcountryField().type(country)
        this.elements.getaddressField().type(address)
        this.elements.getcityField().type(city)
        this.elements.getstateField().type(state)
        this.elements.getphoneField().type(phone)
        this.elements.getemailField().type(email)
    }


    completeProcess(){
        this.elements.differentAdressCheckbox().uncheck()
        this.elements.termsCheckbox().check()
        this.elements.placeOrderButton().click()

    }
  
}

export const onCheckout = new Checkout()