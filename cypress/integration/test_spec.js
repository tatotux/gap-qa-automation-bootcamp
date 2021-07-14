describe('Search a product', () => {
    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000')
    })

    it('Search shirt should return at ;east one result', () => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
        cy.get('header .search-field').type('shirt {enter}');
        cy.get('ul.products').find('li.product').its('length').should('be.gt', 0);
    })
})  