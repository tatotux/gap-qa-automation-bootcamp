class OrderAPIRequest {

    orderId;

    create() {
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
                    country: "US"
                },
                line_items: [
                {
                    product_id: 93,
                    quantity: 2
                }
                ],
                shipping_lines: [
                {
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: "10.00"
                }
                ]
            }
        }).then( (response) => {
            cy.wrap(response.body.id).as('orderId')
            cy.log(`Status code: ${response.status}`); 
            cy.log(`Coupon ID: ${response.body.id}`);   
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
}

export const OrderRequests = new OrderAPIRequest();
