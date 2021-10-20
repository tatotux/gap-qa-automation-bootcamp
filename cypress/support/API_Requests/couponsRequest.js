   export function createCoupon(code) {
       cy.request({
               method: 'POST',
               url: Cypress.config("baseUrl") + Cypress.config("coupon_url"),
               auth: {
                   username: Cypress.env("api_username"),
                   password: Cypress.env("api_password")
               },
               body: {
                   code: code,
                   discount_type: "percent",
                   amount: "25",
                   description: "Cupon used on final project - Jose Garcia",
               },
           })
           .then((resp) => {
               expect(resp.status).eq(201)
               return resp.body.id
           });
   }


   /*Cypress.Commands.add('createCoupon', (code) => {
       cy.request({
               method: 'POST',
               url: Cypress.config("baseUrl") + Cypress.config("coupon_url"),
               auth: {
                   username: Cypress.env("api_username"),
                   password: Cypress.env("api_password")
               },
               body: {
                   code: code,
                   discount_type: "percent",
                   amount: "25",
                   description: "Cupon used on final project - Jose Garcia",
               },
           })
           .then((resp) => {
               expect(resp.status).eq(201)
               return resp.body.id
           })
       })*/


   /*Cypress.Commands.add('getCoupon', (couponId) => {
       cy.request({
               method: 'GET',
               url: Cypress.config("baseUrl") + Cypress.config("coupon_url") + `/${couponId}`,
               auth: {
                   username: Cypress.env("api_username"),
                   password: Cypress.env("api_password")
               },
           })
           .then((resp) => {
               expect(resp.status).eq(200)
               return resp.body.id
           })
   })*/


   export function deleteCoupon(couponId) {
       cy.request({
               method: 'DELETE',
               url: Cypress.config("baseUrl") + Cypress.config("coupon_url") + `/${couponId}`,
               auth: {
                   username: Cypress.env("api_username"),
                   password: Cypress.env("api_password")
               },
               body: {
                   force: true
               },
           })
           .then((resp) => {
               expect(resp.status).eq(200)
           })

   }

   /*Cypress.Commands.add('deleteCoupon', (couponId) => {
       cy.request({
               method: 'DELETE',
               url: Cypress.config("baseUrl") + Cypress.config("coupon_url") + `/${couponId}`,
               auth: {
                   username: Cypress.env("api_username"),
                   password: Cypress.env("api_password")
               },
               body: {
                   force: true
               },
           })
           .then((resp) => {
               expect(resp.status).eq(200)
           })
   })*/