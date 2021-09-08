/// <reference types="cypress" />

import { onFormLoginPage } from '../../support/page_objects/formLoginPage'

describe('Test suite for login page', () => {
  beforeEach('open the login page', () => {
      cy.openLogin()
  })

  it('should show the invalid username error' , () => {
        onFormLoginPage.submitLoginFormWithEmailAndPassword('tester','test')
        cy.contains('Unknown username. Check again or try your email address.').should('be.visible')
  })
})
