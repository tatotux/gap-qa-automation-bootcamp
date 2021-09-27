class ProductDetailPage{

    url = '';
    elemets = {
        addToCart: () => cy.contains('button', 'Add to cart'),
        addedMessage: () => cy.contains('div', 'has been added to your cart.'),
        viewCart: () => cy.contains('a', 'View cart'),
    }

    addToCart() {
        this.elemets.addToCart().click();
    }

    viewCart() {
        this.elemets.viewCart().click();
    }
}

export const ProductDetail = new ProductDetailPage();
