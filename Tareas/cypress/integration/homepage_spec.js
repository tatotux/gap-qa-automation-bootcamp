/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/my-account/edit-account/')
    })
  
      it('Login returns error when incorrect data is entered', () => {
        cy.get('input#username')
          .type('admin')
        cy.get('input#password')
          .type('123456')
          cy.contains('Log in')
          .click()
          cy.contains('Unknown username. Check again or try your email address.')

        })

        it('Register without entering email', () => {
          cy.get('[name^=register]')
          .contains('Register')
          .click()
          cy.contains('Error: Please provide a valid email address.')

          })
          it('User is able to go back home by clicking the home icon', () => {
            cy.get('[rel^=home]')
            .click()
     
  
            })


    })
  
    
 
  