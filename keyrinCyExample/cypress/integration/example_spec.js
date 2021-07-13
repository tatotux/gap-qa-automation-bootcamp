// <reference types="Cypress" />

describe('Shopping cart tests', () => {
    before(()=>{
       cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/')
    });

    it('should be able to add a product to the shopping cart', () => {
        cy.contains('a', 'Vneck Tshirt').click();
        cy.contains('Add to cart').click();
    })

}


)