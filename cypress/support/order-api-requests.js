class OrderRequests {

    create() {

        cy.request({
            method: 'POST',
            url: 'http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/', // baseUrl is prepended to url
            auth: {
                username: 'automation',
                password: 'automation'
            },
            // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                payment_method: "bacs",
                payment_method_title: "Direct Bank Transfer",
                set_paid: true,
                billing: {
                    first_name: "John",
                    last_name: "Doe",
                    address_1: "969 Market",
                    address_2: "",
                    city: "San Francisco",
                    state: "CA",
                    postcode: "94103",
                    country: "US",
                    email: "john.doe@example.com",
                    phone: "(555) 555-5555"
                },
                shipping: 
                {
                    first_name: "John",
                    last_name: "Doe",
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
            // cy.log(response.status);  
        });
    }

    delete() {
        cy.get('@orderId').then( (orderId) => {

            cy.request({
                method: 'DELETE',
                url: `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/${orderId}?force=true`,
                auth: {
                    username: 'automation',
                    password: 'automation'
                }
                
            });
            // .then( (response) => {
            //     cy.wrap(response.body.id).as(couponId)
            // })
        });
    }

}

export const OrderAPIRequest = OrderRequests();
