/// <reference types="Cypress" />

export const homePage = require('../../Pages/home') 
export const productDetailsPage = require('../../Pages/productDetails') 
export const cartPage = require('../../Pages/cart')
export const checkoutPage = require('../../Pages/checkout') 

context('Testing Playground - homework 2',() =>{
    describe('Exercise 2',()=>{

        before(()=>{
            cy.visit("")            
        })

        it('E2E - Verify a full order process',()=>{
            const item = "Belt"
            cy.get(homePage.elements.search).should('be.visible').type(`${item} {enter}`);
            cy.get(productDetailsPage.elements.add_to_cart_button).should('be.visible').click();
            cy.get(productDetailsPage.elements.success_message).should('be.visible')
                .invoke('text')
                .should('contain',`“${item}” has been added to your cart.`);
            cy.visit(cartPage.elements.url);
            cy.get(cartPage.elements.checkout_button).should('be.visible').click();
            cy.fixture("/userData.json").then(data => checkoutPage.fill_billing_info(data));
            cy.get(checkoutPage.elements.ship_to_different_address).should('be.visible').uncheck();
            cy.get(checkoutPage.elements.terms_checkbox).should('be.visible').click({force:true});
            cy.get(checkoutPage.elements.place_order_button).should('be.visible').click({force:true});
            cy.get('.entry-header .entry-title').should('be.visible')
            cy.url().should('contain', '/checkout/order-received/')
            
        })

    })

})