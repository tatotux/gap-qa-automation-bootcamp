class OrderAPIRequest {

    orderId;

    create(orderDetails) {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/orders', // baseUrl is prepended to url
            auth: {
                username: 'automation',
                password: 'automation'
            },
            form: true,
            body: {
                payment_method: orderDetails.paymentMethod(),
                payment_method_title: orderDetails.paymentMethodTitle(),
                set_paid: orderDetails.setPaid(),
                billing: {
                    first_name: orderDetails.billing.firstName(),
                    last_name: orderDetails.billing.lastName(),
                    address_1: orderDetails.billing.address1(),
                    address_2: "",
                    city: orderDetails.billing.city(),
                    state: orderDetails.billing.state(),
                    postcode: orderDetails.billing.postcode(),
                    country: orderDetails.billing.country(),
                    email: orderDetails.billing.email(),
                    phone: orderDetails.billing.phone()
                },
                shipping: 
                {
                    first_name: orderDetails.shipping.firsNname(),
                    last_name: orderDetails.shipping.lastName(),
                    address_1: orderDetails.shipping.address1(),
                    address_2: "",
                    city: orderDetails.shipping.city(),
                    state: orderDetails.shipping.state(),
                    postcode: orderDetails.shipping.postcode(),
                    country: orderDetails.shipping.country(),
                },
                line_items: [
                    {
                        product_id: orderDetails.lineItem.productId(),
                        quantity: orderDetails.lineItem.quantity()
                    }
                ],
                shipping_lines: [
                    {
                        method_id: orderDetails.shippingLines.methodId(),
                        method_title: orderDetails.shippingLines.methodTitle,
                        total: orderDetails.shippingLines.total()
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
