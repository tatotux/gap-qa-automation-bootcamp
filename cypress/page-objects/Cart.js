class Cart {
    elements = {
        getCartProduct: () => cy.get('td.product-name'),
        getRemoveFromCart: () => cy.get('a.remove'),
        getCartContentsCount: () => cy.get('.cart-contents .count')
    }
    clickRemoveProduct() {
        this.elements.getRemoveFromCart().click();
    }
}
export const cart = new Cart();
