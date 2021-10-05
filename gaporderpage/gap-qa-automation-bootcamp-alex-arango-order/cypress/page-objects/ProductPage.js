class ProductPage {
    elements = {
        getProductTitle: () => cy.get('.product_title.entry-title'),
        getAddToCartBtn: () => cy.get('[name="add-to-cart"]'),
        getConfirmationMsg: () => cy.get('.woocommerce-message'),
        getViewCartBtn: () => cy.get('.woocommerce-message a.button.wc-forward')
    }
    clickAddToCart() {
        this.elements.getAddToCartBtn().click();
    }
    clickViewCartBtn() {
        this.elements.getViewCartBtn().click();
    }
}
export const productPage = new ProductPage();