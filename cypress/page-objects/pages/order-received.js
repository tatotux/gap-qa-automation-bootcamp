class OrderReceived {

    url = '/checkout/order-received';

    elements = {
        discountValue: () => cy.get('tfoot>tr:nth-child(2)>td>span.woocommerce-Price-amount.amount'),
    }

    getUrl(){
        return this.url;
    }

}

export const OrderReceivedPage = new OrderReceived();
