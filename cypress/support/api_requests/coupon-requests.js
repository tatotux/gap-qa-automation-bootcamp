class CouponRequest {

  endpoint = 'wp-json/wc/v3/coupons';

   create(){
     cy.request({
       method: 'POST',
       url: this.endpoint,
       auth: {
         user: Cypress.env('QA_USER'),
         pass: Cypress.env('QA_PASSWORD')
       },
       body: {
          code: "jose10",
          discount_type: "percent",
          amount: "10",
          individual_use: true,
          exclude_sale_items: true,
          minimum_amount: "40.00"
       }
     }).then((resp) => {
       cy.wrap(resp.body.id).as('couponId')
     });
   }

  delete(couponId){
      cy.request({
        method: 'DELETE',
        url: this.endpoint + '/' + couponId + '?force=true',
        auth: {
          user: Cypress.env('QA_USER'),
          pass: Cypress.env('QA_PASSWORD')
        }
      });
  }

  get_a_coupon(couponId){
    cy.request({
      method: 'GET',
      url: this.endpoint + '/' + couponId,
      auth: {
        user: Cypress.env('QA_USER'),
        pass: Cypress.env('QA_PASSWORD')
      }
      });
  }

 }
 export const CouponRequests = new CouponRequest();
