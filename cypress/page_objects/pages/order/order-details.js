export const OrderPage = {
  elements: {
    orderReceivedMessage: () => cy.get('.entry-title'),
    orderDetailsMessage: () => cy.get('.woocommerce-order-details__title'),
    thankingMessage: () => cy.get('.woocommerce-thankyou-order-received'),
    verifyEmail: () => cy.get('.woocommerce-order-overview__email'),
  },

};
