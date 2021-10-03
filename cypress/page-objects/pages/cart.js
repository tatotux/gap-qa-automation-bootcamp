class CartDetailPage {
    url = '';
    elements = {
        checkCart: () => cy.contains('.product-name', 'Sunglasses'),
        proceedToCheckout: () => cy.contains('a', 'Proceed to checkout'), 
    };    

}

export const CartPage = new CartDetailPage();
