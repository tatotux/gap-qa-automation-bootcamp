class LoginCompon{
    url='/my-account/edit-account/';
    elements = {
        userNameBox: () => cy.get('[name="username"]'),
        passwordBox: () => cy.get('[name="password"]'),
        loginButton: () => cy.get('[name="login"]')
    };

    login(username,password){
        cy.visit(this.url);
        this.elements.userNameBox().type(username);
        this.elements.passwordBox().type(password);
        this.elements.loginButton().click();
    }
}


export const LoginComponent = new LoginCompon();