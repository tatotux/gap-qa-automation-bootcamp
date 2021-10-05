/// <reference types="cypress" />
import { ProductPage } from '../page-objects/pages/product-detail'
import { cartPage } from '../page-objects/pages/cart'
import { searchComponent } from '../page-objects/components/search-input'

describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('/');
    });


    it('should add product to cart', () => {
        //Search Page
        // SearchComponent.elements.searchInput().type('Belt{enter}');
        searchComponent.searchText('Belt');


        //Product Detail page
        ProductPage.elements.title().should('contain', 'Belt');
        ProductPage.elements.addToCart().click();
        ProductPage.elements.viewCart().click();

        //Cart page
        cartPage.elements.productTitle().should('contain', 'Belt');
        cartPage.elements.subtotal().should('contain', '$55.00');
        cy.url().should('include', cartPage.url);
        cy.title().should('include', cartPage.title);


    });

});