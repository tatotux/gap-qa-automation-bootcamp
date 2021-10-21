/// <reference types="cypress" />

class LoginPage {
        
    elements = {
        username: () => cy.get('#username'),
        email: () => cy.get('#reg_email'),
        password: () => cy.get('#password'),
        login: () => cy.get(':nth-child(3) > .woocommerce-button'),
    }; 
    
    login(orderId) {
        cy.visit(`http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/my-account/view-order/${orderId}`);
        this.elements.username().type('aesquivel@growthaccelerationpartners.com');
        this.elements.email().type('aesquivel@growthaccelerationpartners.com');
        this.elements.password().type('(Vcma8mltrp#hi)DJICX8m91');
        this.elements.login().click();
    }

}

export const Login = new LoginPage();
