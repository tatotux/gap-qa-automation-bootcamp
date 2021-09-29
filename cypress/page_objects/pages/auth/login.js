export const LoginPage = {
  url: '/wp-login.php',
  visit(){
    cy.visit(this.url)
  },
  submitLoginForm(username, password){
    cy.contains('login').find('form').then( form => {
      cy.wrap(form).find('[id="user_login"]').type(username)
      cy.wrap(form).find('[id="user_pass"]').type(password)
      cy.wrap(form).find('[id="rememberme"]').check({force: true})
      cy.wrap(form).submit()
    }
    )
  }
};
