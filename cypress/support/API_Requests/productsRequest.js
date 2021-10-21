
 export const getAllProducts = () => {
    return cy.request({
            method: 'GET',
            url: Cypress.config("baseUrl") + Cypress.config("products_url"),
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            },
        })
        .then((resp) => {
            expect(resp.status).eq(200)
            return resp.body
        })
};

export const getProduct = (productId) => {
    return  cy.request({
            method: 'GET',
            url: Cypress.config("baseUrl") + Cypress.config("products_url")+`/${productId}`,
            auth: {
                username: Cypress.env("api_username"),
                password: Cypress.env("api_password")
            },
        })
        .then((resp) => {            
            expect(resp.status).eq(200)
            return resp.body
        })
}