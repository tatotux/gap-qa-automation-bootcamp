export class API {
    getUtilities(){
        cy.fixure('utilities').then(function (utilities){
        this.utilities = utilities;
    })
    }
    createProduct(){ //This is setting up the product
        return cy.request({
            method: 'POST',
            url: Cypress.env('create_product_request'),
            body: this.utilities.product,
            auth:{
                user: Cypress.env('ECOMMERSE_USER'),
                pass: Cypress.env('ECOMMERSE_PASS')
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201) //201 means 'Created'
        })
    }
    createCoupon(){ //This is setting up the coupon
        return cy.request({
            method: 'POST',
            url: Cypress.env('create_coupon_request'),
            body: this.utilities.coupon,
            auth:{
                user: Cypress.env('ECOMMERSE_USER'),
                pass: Cypress.env('ECOMMERSE_PASS')
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201) //201 means 'Created'
        })
    }
    createOrder(){ //This is setting up the order
        return cy.request({
            method: 'POST',
            url: Cypress.env('create_order_request'),
            body: this.utilities.order,
            auth:{
                user: Cypress.env('ECOMMERSE_USER'),
                pass: Cypress.env('ECOMMERSE_PASS')
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201) //201 means 'Created'
        })
    }
    deleteProduct(){        //This is deleting the product
        return cy.request({
            method: 'DELETE',
            url: Cypress.env('delete_product_request'),
            auth:{
                user: Cypress.env('ECOMMERSE_USER'),
                pass: Cypress.env('ECOMMERSE_PASS')
            }
        })
    }
    deleteCoupon(){        //This is deleting the coupon
        return cy.request({
            method: 'DELETE',
            url: Cypress.env('delete_coupon_request'),
            auth:{
                user: Cypress.env('ECOMMERSE_USER'),
                pass: Cypress.env('ECOMMERSE_PASS')
            }
        })
    }
    deleteOrder(){        //This is deleting the order
        return cy.request({
            method: 'DELETE',
            url: Cypress.env('delete_order_request'),
            auth:{
                user: Cypress.env('ECOMMERSE_USER'),
                pass: Cypress.env('ECOMMERSE_PASS')
            }
        })
    }
}
export const APIRequest = new API();