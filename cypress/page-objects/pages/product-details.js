//const cypress = require("cypress");

class ProductDetailsPage {

    elements = {
        productName: () => cy.get('h1[class="product_title entry-title"]'),
        addToCart: () => cy.contains('button', 'Add to cart'),
        amountOfProducts: () => cy.get('input[name="quantity"]'),
        productPrice: () => cy.get('span[class="woocommerce-Price-amount amount"]'),
        description: () => cy.get('#tab-description > p'),
        addedToCartConfirmationMessage: () => cy.get('div[class="woocommerce-message"]'),
        viewCartButtonConfirmationMessage: () => cy.contains('a', 'View cart')
    }

    clickOnAddToCartButton(){
        this.elements.addToCart().click()
    }

}

export const productDetails = new ProductDetailsPage()