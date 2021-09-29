export const CheckoutPage = {
  url: '/checkout',
  elements: {
    productInList: () => cy.get('.product-name'),
    checkout: () => cy.contains('a','Proceed to checkout'),
  },
};
