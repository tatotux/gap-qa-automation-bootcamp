class ProductPage {
    elements = {
        getProductTitle: () => cy.get('.product_title.entry-title'),
        getAddToCartBtn: () => cy.get('[name="add-to-cart"]'),
        getConfirmationMsg: () => cy.get('.woocommerce-message'),
        getViewCartContentsBtn: () => cy.get('.woocommerce-message a.button.wc-forward')
    }
    clickAddToCartBtn() {
        this.elements.getAddToCartBtn().click();
    }
    clickViewCartContentsBtn() {
        this.elements.getViewCartContentsBtn().click();
    }
}
export const productPage = new ProductPage();