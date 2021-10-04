class SearchCompon{
    elements = {
        searchBox: () => cy.get('#masthead input.search-field'),
    };

    searchText(text){
        this.elements.searchBox().type(`${text}{enter}`);
    }
}


export const SearchComponent = new SearchCompon();
