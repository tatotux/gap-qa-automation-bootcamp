class SearchBox {

    
    elements = {
        input: () => cy.get('#masthead .search-field'),
    }

    searchText(text) {
        this.elements.input().type(`${text}{enter}`);
    }

}

export const SearchBoxComponent = new SearchBox();