export const ProductPage = {
  elements: {
    addToCart: () => cy.contains('button','Add to cart'),
    title: () => cy.get('.product_title'),
    confirmationMessage: () => cy.get('.woocommerce-message'),
    viewCart: () => cy.contains('a','View cart'),
  },

};
