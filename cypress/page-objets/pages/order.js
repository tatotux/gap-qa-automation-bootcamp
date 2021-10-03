class OrderDetailPage{
    url = '';
    elements = {
        title: () => cy.get('.entry-title'),
        orderNumber: () => cy.get('woocommerce-order-overview__order order'),
        date: () => cy.get('woocommerce-order-overview__date date'),
        email: () => cy.get('woocommerce-order-overview__email email'),
        total: () => cy.get('woocommerce-order-overview__total toal'),
    };
}
export const OrderPage = new OrderDetailPage();