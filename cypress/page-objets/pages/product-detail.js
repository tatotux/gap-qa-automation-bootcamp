class ProductDetailPage{
    url = '';
    elements = {
        title: () => cy.get('product_title'),
        message: () => cy.get('.woocommerce-message'),
        addToCart: () => cy.contains('button', 'Add to cart'),
        viewCart: () => cy.contains('a', 'View cart')
    };

    addToCart(){this.elements.addToCart()}
    
    viewCart(){this.elements.viewCart()}
}
export const ProductPage = new ProductDetailPage();