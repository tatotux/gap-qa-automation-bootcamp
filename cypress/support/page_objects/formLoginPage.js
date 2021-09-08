
export class FormLoginPage{

  submitLoginFormWithEmailAndPassword(username, password){
    cy.contains('login').find('form').then( form => {
      cy.wrap(form).find('[id="user_login"]').type(username)
      cy.wrap(form).find('[id="user_pass"]').type(password)
      cy.wrap(form).find('[id="rememberme"]').check({force: true})
      cy.wrap(form).submit()
    }
    )
  }

}

export const onFormLoginPage = new FormLoginPage()
