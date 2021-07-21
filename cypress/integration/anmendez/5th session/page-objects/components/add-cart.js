export class AddToCart {
    actions = {
    getUrl : () => cy.url(),
    getTitle: () => cy.title()
    }
};
elements = {
    getAddCart: () => cy.contains('Add to cart'),
    getViewCart: () => cy.contains('View cart')
};

addProduct(){
    this.elements.getAddCart().click();
}

export const AddToCart = new AddToCart();