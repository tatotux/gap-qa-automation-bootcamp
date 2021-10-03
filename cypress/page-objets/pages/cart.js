class CartDetailPage{
    title = 'Cart';
    url = '/cart';
    elements = {
        title: () => cy.get('[data-title="Product"]'),
        subTotal: () => cy.get('[data-title="Subtotal"]'),
        checkout: () => cy.get('.checkout-button'),
    };

    visit(){cy.visit(this.url);} // use when need to visit an specific page
}
export const CartPage = new CartDetailPage();