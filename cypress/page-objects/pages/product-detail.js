class ProductDetailPage {
    elements = {
        addToCart: () => cy.contains('button', 'Add to cart'),
        viewCart: () => cy.get('.woocommerce-message .wc-forward'),
        cartMessage: () => cy.get('.woocommerce-message'),
        productTitle: () => cy.get('.product_title'),
    };

}

export const ProductPage = new ProductDetailPage();