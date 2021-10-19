class OrderReceived {

    url = '/checkout/order-received';
    elements = {
        discountValue: () => cy.contains('span.woocommerce-Price-amount.amountt'),
    }

}

export const OrderReceivedPage = new OrderReceived();
