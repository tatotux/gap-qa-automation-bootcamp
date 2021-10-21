class Order {

    elements = {
        getDiscountTotal: () => cy.get(':nth-child(2) > td > .woocommerce-Price-amount'),
        getTotal: () => cy.get(':nth-child(5) > td > .woocommerce-Price-amount')
    }
    visitOrder(orderID, orderKey) {
        cy.visit(`checkout/order-received/${orderID}/?key=${orderKey}`)
    }
    navigate() {
        cy.visit(this.url)
    }
    getDiscountTotal() {
        return this.elements.getDiscountTotal();
    }
    getTotal() {
        return this.elements.getTotal();
    }
}
export const order = new Order();
