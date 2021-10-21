class OrderAPIRequest {

    orderId;
    orderKey;

    create() {
        cy.get('@couponCode').then((couponCode) => {

            cy.request({
                method: 'POST',
                url: '/wp-json/wc/v3/orders', // baseUrl is prepended to url
                auth: {
                    username: 'automation',
                    password: 'automation'
                },
                form: true,
                body: {
                    payment_method: "bacs",
                    payment_method_title: "Direct Bank Transfer",
                    set_paid: true,
                    billing: {
                        first_name: "SONIA",
                        last_name: "SIBAJA",
                        address_1: "969 Market",
                        address_2: "",
                        city: "San Francisco",
                        state: "CA",
                        postcode: "94103",
                        country: "US",
                        email: `ssibajav${Date.now()}@gmail.com`,
                        phone: "(555) 555-5555"
                    },
                    shipping: 
                    {
                        first_name: "SONIA",
                        last_name: "SIBAJA",
                        address_1: "969 Market",
                        address_2: "",
                        city: "San Francisco",
                        state: "CA",
                        postcode: "94103",
                        country: "US",
                    },
                    line_items: [
                        {
                            product_id: 1109,  //hay un problema con el product ID revisar cómo se genera
                            quantity: 4
                        }
                    ],
                    shipping_lines: [
                        {
                            method_id: "flat_rate",
                            method_title: "Flat Rate",
                            total: "10"
                        }
                    ],
                    coupon_lines: [
                        {
                            code: couponCode
                        }
                    ]
                }
            }).then( (response) => {
                cy.wrap(response.body.id).as('orderId');
                cy.wrap(response.body.order_key).as('orderKey');
                cy.wrap(response.body.discount_total).as('discountTotal');
                cy.log(`Status code: ${response.status}`); 
                cy.log(`Order ID: ${response.body.id}`);   
                cy.log(`Order KEY: ${response.body.order_key}`);  
            });

        });
    }

    delete() {
        cy.get('@orderId').then( (orderId) => {

            cy.request({
                method: 'DELETE',
                url: `/wp-json/wc/v3/orders/${orderId}?force=true`,
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
        cy.get('@orderId').then( (orderId) => {

            cy.request({
                method: 'GET',
                url: `/wp-json/wc/v3/orders/${orderId}`,
                auth: {
                    username: 'automation',
                    password: 'automation'
                }
                
            }).then( (response) => {
                cy.log(`Status code: ${response.status}`);  
                cy.log(`Order ID: ${response.body.id}`);  
            })
        });
    }

}

export const OrderRequests = new OrderAPIRequest();
