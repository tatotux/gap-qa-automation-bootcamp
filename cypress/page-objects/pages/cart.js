class CartPage {
    title = 'Cart';
    url = '/cart';
    elements = {
        productTitle: () => cy.get('[data-title="Product"]'),
        subtotal: () => cy.get('[data-title="Subtotal"]'),
    };

    visit() {
        cy.visit(this.url);
    }
}

export const Cart = new CartPage();
