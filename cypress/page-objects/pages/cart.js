//import { get } from "cypress/types/lodash"

class CartPage {

    elements = {
        cartTitle: () => cy.get('h1'),
        productRows: () => cy.get('tr[class="woocommerce-cart-form__cart-item cart_item"]'),
        productExistsInCart: (productName) => cy.contains('td', productName),
        proceedToCheckoutButton: () => cy.contains('a', 'Proceed to checkout')
    }

}

export const cart = new CartPage()