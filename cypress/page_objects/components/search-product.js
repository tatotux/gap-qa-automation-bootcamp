class SearchComponent {
  elements = {
    searchTxt: () => cy.get('#woocommerce-product-search-field-0'),
    title: () => cy.get('.product_title'),
  };

  typeSearchProduct(text) {
    this.elements.searchTxt().type(`${text}{enter}`);
  }
}

export const SearchProduct = new SearchComponent();
