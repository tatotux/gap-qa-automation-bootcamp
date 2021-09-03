/// <reference types="cypress" />

describe('As an admin user, I go to Insights', () => {

    beforeEach('Open Testing Playground', () => {
        cy.visit("http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/")
    })

    it('goes to the cart and verify it is empty.', function() {
        
       cy.get("ul.site-header-cart a").click()
       cy.contains("Your cart is currently empty.").should("be.visible")
       
    
    })

})
