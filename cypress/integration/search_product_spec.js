describe('My first test', () => {
    it('Search Prodcut', () => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
        cy.get('header .search-field').type('belt {enter}');
    })
})