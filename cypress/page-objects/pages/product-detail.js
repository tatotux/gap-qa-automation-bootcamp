class ProductDetailPage {
    url = '';
    elements = {
        title: () => cy.get('.product_title'),
        addToCart: () => cy.contains('button', 'Add to cart'),
        viewCart: () => cy.contains('a', 'View cart'),
    };    

}

export const ProductPage = new ProductDetailPage();
