class CartDetailPage {
    title = 'Cart';
    url = '/cart';
    elements = {
        productTitle: () => cy.get('[data-title="Product"]'),
        subTotal: () => cy.get('[data-title="Subtotal"]'),
        proceedToCheckout: () => cy.contains('a', 'Proceed to checkout'),
    };

}

export const CartPage = new CartDetailPage();