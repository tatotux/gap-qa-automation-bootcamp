//import cypress = require("cypress");

class ConfirmationPage{

    elements = {
        confirmationPageTitle: () => cy.get('h1'),
        confirmationMessage: () => cy.get('div[class="woocommerce-order"]').find('p')

    }
}

export const confirmationPage = new ConfirmationPage()