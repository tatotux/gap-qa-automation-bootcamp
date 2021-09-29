export const CartPage = {
  url: '/cart',
  elements: {
    productInList: () => cy.get('.product-name'),
    checkout: () => cy.contains('a','Proceed to checkout'),
  },
};
