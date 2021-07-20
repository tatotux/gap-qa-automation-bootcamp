describe('Shopping cart tests', () => {    

    context('Shopping cart add and coupon can be requested', () =>{
        before(() => {
            cy.visit('/');
        });

        it('should be able to add a product to the shopping cart and a cupon can be used', () =>{
            //a specific product requested
            cy.get('#masthead .search-field').type('cap{enter}');
            cy.contains('a', 'Home').click();

            //Shopping cart add
            cy.contains('a', 'Sunglasses').click();
            cy.contains('Add to cart').click();
            cy.contains('a', 'Home').click();
            cy.contains('a', 'Vneck Tshirt').click();
            cy.contains('Add to cart').click();
            cy.contains('View cart').click();

            //Using a specific coupon 
            cy.contains('.cart_item', 'Sunglasses', 'Vneck Tshirt').should('be.visible');
            cy.get('input[name="coupon_code"]').type('10off');
            cy.contains('Apply coupon').click();
            cy.contains('Proceed to checkout').click();

            //Verifying that the order show the proper discount
            cy.get('input[name="billing_first_name"]').type('John');
            cy.get('input[name="billing_last_name"]').type('Smith');
            cy.get('input[name="billing_address_1"]').type('99 John Street');
            cy.get('input[name="billing_city"]').type('San Francisco');
            cy.get('input[name="billing_postcode"]').type('94016');
            cy.get('input[name="billing_phone"]').type('3333333333');
            cy.get('input[name="billing_email"]').type('test@test.com');
            cy.get('input[name="ship_to_different_address"]').click();
            cy.get('input[name="terms"]').click();
            cy.contains('Place order').click();
            cy.contains('Discount:').should('be.visible');
        })
    });

})