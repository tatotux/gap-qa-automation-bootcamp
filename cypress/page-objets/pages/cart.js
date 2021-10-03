class CartDetailPage{
    title = 'Cart';
    url = '/cart';
    elements = {
        title: () => cy.get('[data-title="Product"]'),
        subTotal: () => cy.get('[data-title="Subtotal"]'),
    };

    visit(){cy.visit(this.url);}
}
export const CartPage = new CartDetailPage();