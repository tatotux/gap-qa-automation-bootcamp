

class ConfirmationPage {
    elements = {
        getConfirmationMessage: () => cy.get('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received'),
        getOrderNumber: () => cy.get('woocommerce-order-overview__order order')
    }
}
export const confirmationPage = new ConfirmationPage();