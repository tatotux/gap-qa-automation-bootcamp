/// <reference types="Cypress" />
 
describe('Young Living Membership', () =>{
    before(() => {
        cy.visit('https://www.youngliving.com/es_CR')
    });

    it('Should be able to go to the Hagase Miembro section',() =>{
        cy.contains('a', 'Hágase Miembro').click();
    })

    it('Should be able to select the Member option',() =>{
        cy.contains('.active','Miembro').click();
        
    })
    it('Should be able to select the checkbox and go to next page',() =>{
        cy.contains('label','Nadie me ha recomendado / No tengo ningún inscriptor ni patrocinador').click();
        cy.get('.button-group .button-cta').last().should('contain', 'Continuar').click({ force: true });
        
        //add an assertion here to verify it is actually in the next page
    })
    it('Should be able to select the Premium Starter Kit con difusor Aria',() =>{
        
        cy.get('.vo-track-checkbox').click();
    })


    //it('Should be able to select No in the Special Awards section and go to next page',() =>{
        //cy.get('.yesno-buttons'.children('label').should('contain','No');
        //cy.contains('span', 'Siguiente', { force: true }).click({ force: true })  
    //)
})