class OrderRequest {

  endpoint = 'wp-json/wc/v3/orders';

   create(productId, couponId){
     cy.request({
       method: 'POST',
       url: this.endpoint,
       auth: {
         user: Cypress.env('QA_USER'),
         pass: Cypress.env('QA_PASSWORD')
       },
       body: {
        payment_method: "cheque",
        payment_method_title: "Check payments",
        customer_id: "62",
        set_paid: true,
        billing: {
            first_name: "Jose Antonio",
            last_name: "Ledezma Mendez",
            company: "company-test",
            address_1: "70 en la avenida San Juan",
            address_2: "",
            city: "San Juan",
            state: "Alajuela",
            postcode: "21000",
            country: "CR",
            email: "test@gmail.com",
            phone: "12345678"
        },
        shipping: {
            first_name: "Jose Antonio",
            last_name: "Ledezma Mendez",
            company: "company-test",
            address_1: "70 en la avenida San Juan",
            address_2: "",
            city: "San Juan",
            state: "Alajuela",
            postcode: "21000",
            country: "CR"
        },
        line_items: [
            {
                product_id: productId,
                quantity: 2
            }
        ],
        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00"
            }
        ],
        coupon_lines: [
            {
                id: couponId,
                code: "jose10",
            }
      ]
       }
     }).then((resp) => {
       cy.wrap(resp.body.id).as('orderId')
     });
   }

   delete(orderId){
      cy.request({
        method: 'DELETE',
        url: this.endpoint + '/' + orderId + '?force=true',
        auth: {
          user: Cypress.env('QA_USER'),
          pass: Cypress.env('QA_PASSWORD')
        }
      });
  }

 }
 export const OrderRequests = new OrderRequest();
