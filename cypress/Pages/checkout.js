export const elements = {
    "first_name":'#billing_first_name',
    "last_name":'#billing_last_name',
    "company":'#billing_company',
    "country":'[id="select2-billing_country-container"]',
    "billing_address1":"#billing_address_1",
    "billing_city":"#billing_city",
    "state":"#select2-billing_state-container",
    "post_code":"#billing_postcode",
    "phone":"#billing_phone",
    "billing_email":"#billing_email",

    "ship_to_different_address":"#ship-to-different-address-checkbox",
    "terms_checkbox":"#terms",
    "place_order_button":"#place_order"    
};

export function fill_billing_info(data){
    let email_user = "user"+Math.floor(Math.random() * 10000);

    cy.get(this.elements.first_name).should('be.visible').type(data.first_name);
    cy.get(this.elements.last_name).should('be.visible').type(data.last_name);
    cy.get(this.elements.company).should('be.visible').type(data.company_name);
    cy.get(this.elements.country).should('be.visible').type(`{downarrow}${data.country}{enter}`);
    cy.get(this.elements.billing_address1).should('be.visible').type(data.street);
    cy.get(this.elements.billing_city).should('be.visible').type(data.city);
    cy.get(this.elements.state).should('be.visible').type(`{downarrow}${data.state}{enter}`);
    cy.get(this.elements.post_code).should('be.visible').type(data.post_code);
    cy.get(this.elements.phone).should('be.visible').type(data.phone);
    cy.get(this.elements.billing_email).should('be.visible').type(`${email_user}${data.email}`);
};
