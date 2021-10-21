class ProductAPIRequests {

    productId;

    create() {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products', // baseUrl is prepended to url
            form: true,
            auth: {
                username: 'automation',
                password: 'automation'
            },
            body: {
                name: `ANAKIN t-shirt ${Date.now()}`,
                type: "simple",
                regular_price: "150",
                description: "ANAKIN cool t-shirt. 100% Cotton",
                short_description: "ANAKIN cool t-shirt",
                categories: [
                    {
                        id: 18
                    }
                ]
            }
        }).then((response) => {
            cy.wrap(response.body.id).as('productId');
            cy.log(`Status code: ${response.status}`); 
            cy.log(`Product ID: ${response.body.id}`); 
        });
    }

    delete() {
        cy.get('@productId').then((productId) => {

            cy.request({
                method: 'DELETE',
                url: `/wp-json/wc/v3/products/${productId}?force=true`,
                auth: {
                    username: 'automation',
                    password: 'automation'
                }
            }).then( (response) => {
                cy.log(`Status code: ${response.status}`);  
            })
        });
    }

    get() {
        cy.get('@productId').then((productId) => {

            cy.request({
                method: 'GET',
                url: `/wp-json/wc/v3/products/${productId}`,
                auth: {
                    username: 'automation',
                    password: 'automation'
                }
            }).then( (response) => {
                cy.log(`Status code: ${response.status}`); 
                cy.log(`Product ID: ${response.body.id}`);  
            })
        });
    }

}

export const ProductRequests = new ProductAPIRequests();
