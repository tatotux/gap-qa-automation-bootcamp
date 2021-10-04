class ProductDetailPage{
    url = '';
    elements = {
        addToCart: () => cy.contains('button','Add to cart'),
        viewCart: () => cy.contains('a', 'View cart'),
        title: () => cy.get('.product_title'),
    };
}

export const ProductPage = new ProductDetailPage();
