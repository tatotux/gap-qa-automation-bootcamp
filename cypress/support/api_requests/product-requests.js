class ProductRequest {

  endpoint = 'wp-json/wc/v3/products';

   get(productId){
     cy.request({
       method: 'GET',
       url: this.endpoint + '/' + productId,
       auth: {
         user: Cypress.env('QA_USER'),
         pass: Cypress.env('QA_PASSWORD')
       }
     }).then((resp) => {
      expect(resp.body).to.have.property('name', 'Polo')
     });
   }
 }
 export const ProductRequests = new ProductRequest();
