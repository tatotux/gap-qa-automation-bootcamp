describe('Create Product Test Suite', () => {
    
    before(() => {
        cy.visit('/');
    });

    it('should add to cart', () =>{
        //Search for product
        cy.get('#masthead .search-field').type('Belt{enter}');
        cy.contains('.product_title', 'Belt').should('be.visible');
        
        //Add to cart
        cy.contains('button','Add to cart').click();

        //View cart
        cy.contains('a', 'View cart').click();
        
        //Product appears on the cart
        cy.contains('.woocommerce-cart-form__cart-item.cart_item .product-name','Belt').should('be.visible');

    });

})