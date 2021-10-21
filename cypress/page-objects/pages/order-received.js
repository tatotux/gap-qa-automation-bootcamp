class OrderReceived {

    url = '/checkout/order-received';

    elements = {
        // discountValue: () => cy.contains('span.woocommerce-Price-amount.amountt'),
        discountValue: () => cy.get('span.woocommerce-Price-amount.amountt'),
    }

    getUrl(){
        return this.url;
    }

}

export const OrderReceivedPage = new OrderReceived();
