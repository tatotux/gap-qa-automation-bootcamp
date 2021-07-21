/// <reference types="Cypress" />
 
describe('Young Living Shopping cart test', () =>{
    before(() => {
        cy.visit('https://www.youngliving.com/es_CR')
    });

    it('Should be able to go to the Products section',() =>{
        cy.contains('a', 'Productos').click();
    })

    it('Should be able to go to the Diffuser and Accesories page',() =>{
        cy.contains('a','Difusores y Accesorios', { force: true }).click({ force: true });
    })
    //Work this one out a little bit more
    it('Should be able to go to the first product page',() =>{
        cy.contains('a','product').click();
    })
})