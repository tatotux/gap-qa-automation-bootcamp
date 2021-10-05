class SearchPage{

    elements = {
        searchBox: () => cy.get('#woocommerce-product-search-field-0'),
        searchPageTitle: () => cy.get('h1'),
        searchPageResults: () => cy.get('li > a[class="woocommerce-LoopProduct-link woocommerce-loop-product__link"]')
    }

    searchProduct(searchString){
        this.elements.searchBox().type(`${searchString}{enter}`)
    }

    getFirstItemInSearchPage(){
        return this.elements.searchPageResults().first()
    }
}

export const searchPage = new SearchPage()