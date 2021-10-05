class CartPage {
    title = 'Cart';
    url = '/cart';
    elements = {
        productTitle: () => cy.get('[data-title="Product"]'),
        subtotal: () => cy.get('[data-title="Subtotal"]'),
        checkout: () => cy.contains('a', 'Proceed to checkout'),

    }

    visit() {
        cy.visit(this.url);
    }

}

export const cartPage = new CartPage();