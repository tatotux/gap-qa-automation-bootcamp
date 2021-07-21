export class AddToCart {
    actions = {
    getUrl : () => cy.url(),
    getTitle: () => cy.title()
    }

    elements = {
        getAddCart: () => cy.contains('Add to cart'),
        getViewCart: () => cy.contains('View cart')
    };

    getAddCart(){
        this.elements.getAddCart().click();
    }
    getViewCart(){
        this.elements.getViewCart().click();
    }
}
export const CartComponent = new AddToCart();