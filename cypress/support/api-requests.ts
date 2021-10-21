declare global{
    namespace Cypress{
        interface Chainable{
            /**
            *Create a new coupon using the given parameters
            * @memberof chainable
            */
            createNewCoupon: (couponInfo) => Chainable<Element>

             /**
            *Delete coupon created
            * @memberof chainable
            */
            deleteCoupon: (couponId) => Chainable<Element>
            
            /**
            *Create a new order using the given parameters and a coupon
            * @memberof chainable
            */
            createNewOrder: (codeName,orderuserInfo) => Chainable<Element>

            /**
            *Delete coupon created
            * @memberof chainable
            */
            deleteOrder: (orderId) => Chainable<Element>

            /**
            *Get a product information
            * @memberof chainable
            */
            getProduct: (productId,prodResponse) => Chainable<Element>

            /**
            *Get a coupon information
            * @memberof chainable
            */
            getCoupon: (couponId,couponStatus) => Chainable<Element>
        }   
    }
}



// Creating the new custom command to create a new coupon
export function createNewCoupon (couponInfo) {
    return cy.request({
        method: 'POST',
        url:'/wp-json/wc/v3/coupons',
        auth:{
            user: Cypress.env("username"),
            pass: Cypress.env("password")
        },
        body: {
            code: couponInfo.codeName,
            discount_type: 'percent',
            amount: couponInfo.amount,
            individual_use: true,
            exclude_sale_items: true,
            minimum_amount: couponInfo.minAmount
        }
    }).then((resp)=>{
        //return resp.body
        cy.wrap(resp.body.id).as(couponInfo.couponAlias)
    });
   
}

export function deleteCoupon (couponId) {
    
    cy.request({
    method: 'DELETE',
    url:`wp-json/wc/v3/coupons/${couponId}?force=true`,
    auth:{
        user: Cypress.env("username"),
        pass: Cypress.env("password")
    }  
    });
    
}


export function createNewOrder (codeName,orderuserInfo) {
    return cy.request({
        method: 'POST',
        url:'/wp-json/wc/v3/orders',
        auth:{
            user: Cypress.env("username"),
            pass: Cypress.env("password")
        },
        body: {
            payment_method: "bacs",
            payment_method_title: "Direct Bank Transfer",
            set_paid: true,
            customer_id:'187',
            billing: {
                first_name: 'Alejandra',
                last_name: 'Parra',
                address_1: '969 Market',
                address_2: '',
                city: 'San Francisco',
                state: 'CA',
                postcode: '94103',
                country: 'US',
                email: orderuserInfo.email,
                phone: '(555) 555-5555'
            },
            shipping: {
                first_name: 'Alejandra',
                last_name: 'Parra',
                address_1: '969 Market',
                address_2: '',
                city: 'San Francisco',
                state: 'CA',
                postcode: '94103',
                country: 'US'
            },
            line_items: [
                {
                product_id: orderuserInfo.productId,
                quantity: 2
                }
            ],
            shipping_lines: [
                {
                method_id: 'flat_rate',
                method_title: 'Flat Rate',
                total: '10.00'
                }
            ],
            coupon_lines: [
                {
                code: codeName
                }
            ]
            }
    }).then((resp)=>{
        //return resp.body
        cy.wrap(resp.body).as(orderuserInfo.orderAlias)
    });
}

export function deleteOrder (orderId) {
    
    cy.request({
        method: 'DELETE',
        url:`/wp-json/wc/v3/orders/${orderId}?force=true`,
        auth:{
            user: Cypress.env("username"),
            pass: Cypress.env("password")
        } 
    });  
   
}


export function getProduct (productId,prodResponse) {

    return cy.request({
        method: 'GET',
        url:`/wp-json/wc/v3/products/${productId}`,
        auth:{
            user: Cypress.env("username"),
            pass: Cypress.env("password")
        },  
        }).then((resp)=>{
            cy.wrap(resp.status).as(prodResponse)
        
        });  

}

export function getCoupon (couponId,couponStatus) {
    
    cy.request({
        method: 'GET',
        url:`/wp-json/wc/v3/coupons/${couponId}`,
        auth:{
            user: Cypress.env("username"),
            pass: Cypress.env("password")
        },  
        }).then((resp)=>{
            cy.wrap(resp.status).as(couponStatus)
        
    });  
}


//Adding the custom command to the Cypress commands
Cypress.Commands.add('createNewCoupon', createNewCoupon)
Cypress.Commands.add('deleteCoupon', deleteCoupon)
Cypress.Commands.add('createNewOrder', createNewOrder)
Cypress.Commands.add('deleteOrder', deleteOrder)
Cypress.Commands.add('getProduct', getProduct)
Cypress.Commands.add('getCoupon', getCoupon)




// Making the custom commnads global
export{}
