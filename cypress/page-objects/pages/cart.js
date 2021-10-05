class Cart {
    
    url = '';
    elements = {
        belt: () => cy.contains('a', 'Belt'),
        subtotal: () => cy.contains('[data-title="Subtotal"]','$55'),
        proceedToCheckout: () => cy.contains('div', 'Proceed to checkout'),

    }

}

export const CartPage = new Cart();
