describe('My First Test - Add a product to shopping cart',  () => {
    
  before(() => {
    cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
  });
  
  it('clicks the link "Vneck Tshirt"', () => {
      cy.contains('a', 'Vneck Tshirt').click();
      cy.contains('Add to cart').click();
    })
  })