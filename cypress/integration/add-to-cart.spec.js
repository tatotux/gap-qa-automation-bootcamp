/// <reference types="cypress" />

describe('Add to cart', ()=>{
    beforeEach(()=>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('should add to cart', () =>{
        //Search for product
        cy.get('#masthead .search-field').type('Belt{enter}');
        cy.contains('.product_title', 'Belt').should('be.visible');
        //Add to cart
        cy.get('.single_add_to_cart_button.button.alt').click();
        //View cart
        cy.get('#site-header-cart .cart-contents').click();
        cy.contains('.entry-header .entry-title','Cart').should('be.visible');
        //Product appears on the cart
        cy.contains('.woocommerce-cart-form__cart-item.cart_item .product-name','Belt').should('be.visible');

    });
});