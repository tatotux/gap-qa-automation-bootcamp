/// <reference types="Cypress" />

context('Testing Playground - homework 1',() =>{
    describe('Exercise 1',()=>{

        beforeEach(()=>{
            cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/')            
        })

        it('Add to cart',()=>{
            cy.get('#menu-custom-menu a[href *= "/shop/"]').click();
            cy.get('.products .product').first().click();
            cy.contains('Belt').click();
            cy.get('button[name="add-to-cart"]').click()
            cy.get('div[role="alert"]').contains('“Belt” has been added to your cart.')
        })

    })

})