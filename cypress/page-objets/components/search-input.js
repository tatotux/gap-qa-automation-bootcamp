class SearchComponents{
    elements = {
        searchInput: () => cy.get('#woocommerce-product-search-field-0'),
    };

    searchText(text){this.elements.searchInput().type(`${text}{enter}`)}

}
export const SearchComponent = new SearchComponents();