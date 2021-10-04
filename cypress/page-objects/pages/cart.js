class CartPag{
    url = '/cart';
    title= 'Cart';
    elements = {
       productTitle: () => cy.get('[data-title="Product"]'),
       subtotal: () => cy.get('[data-title="Subtotal"]'),
       checkoutButton: () => cy.get('.wc-proceed-to-checkout'),
    };

    visit(){
        cy.visit(this.url);
    }
}

export const CartPage = new CartPag();
