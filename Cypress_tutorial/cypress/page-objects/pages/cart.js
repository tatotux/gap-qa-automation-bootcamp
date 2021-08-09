export class Cart {
  url = '/cart/';
  title = 'Cart';
  elements = {
    getProductName: () => cy.get('.product-name'),
    getCartSubtotal: () => cy.get('.cart-subtotal'),
    getRemoveIcon: () => cy.get('.remove'),
    getCheckoutButton: () => cy.get('.checkout-button'),
    getCouponCodeBox: () => cy.get('#coupon_code'),
    getCouponCodeButton: () => cy.get('.coupon > .button')
  };

  navigate() {
    cy.visit(this.url);
  }

  removeProduct(){
    this.elements.getRemoveIcon().click();
  }

  enterCoupon(coupon){
    this.elements.getCouponCodeBox().type(coupon);
    this.elements.getCouponCodeButton().click();
  }

  proceedToCheckout(){
    this.elements.getCheckoutButton().click();
  }

}

export const CartPage = new Cart();
