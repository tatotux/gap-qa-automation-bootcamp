
export class AccountDetail {
  url = '/my-account/edit-account/';
  elements = {
    getUserInput: () => cy.get('#username'),
    getPasswordInput: () => cy.get('#password'),
    getLoginBtn: () => cy.get('[name="login"]'),
    getEditAccountForm: () => cy.get('form.edit-account'),
    getLogout: () => cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a')
  };

  navigate() {
    cy.visit(this.url);
  }

  setUsername(username) {
    this.elements.getUserInput().type(Cypress.env(username) || username);
  }

  setPassword(password) {
    this.elements.getPasswordInput().type(Cypress.env(password) || password);
  }

  clickLoginBtn() {
    this.elements.getLoginBtn().click();
  }

  clickLogout() {
    this.elements.getLogout().click();
  }
}

export const AccountDetailPage = new AccountDetail();
