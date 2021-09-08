class HomePage {
    url = '/'
    elements = {
        getSearchBar: () => cy.get('[type="search"]').eq(0)
    }
    navigate() {
        cy.visit(this.url)
    }
    searchForProduct(productName) {
        this.elements.getSearchBar().type(`${productName}{enter}`);

    }

}

export const homePage = new HomePage();