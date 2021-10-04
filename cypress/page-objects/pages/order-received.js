class OrderReceived{
    url = '';
    elements = {
        message: () => cy.get('.woocommerce-thankyou-order-received'),
        email: () => cy.get('li.email strong'),
    };
}

export const OrderReceivedPage = new OrderReceived();
