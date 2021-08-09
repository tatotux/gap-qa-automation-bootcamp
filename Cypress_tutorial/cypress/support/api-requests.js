export class API {

  findProductByName(productName) {
    return cy.request({
      method: 'GET',
      url: '/wp-json/wc/v3/products',
      auth: {
        user: Cypress.env('ECOMMERCE_USER'),
        pass: Cypress.env('ECOMMERCE_PASS')
      }
    }).then((resp) => {
      const result = resp.body.filter((item) => item.name == productName)

      if (result.length) {
        return result[0].id
      } else {
        throw new Error(`API response: Product name not found "${productName}"`);
      }

    });
  }

  addProductToCart(productName) {
    this.findProductByName(productName).then((productId) => {
      cy.request({
        method: 'POST',
        url: '/?wc-ajax=add_to_cart',
        body: {
          product_sku: '',
          product_id: productId,
          quantity: 2
        },
        form: true
      });
    });
  }

  createProduct() {
    return cy.request({
      method: 'POST',
      url: '/wp-json/wc/v3/products',
      auth: {
        user: Cypress.env('ECOMMERCE_USER'),
        pass: Cypress.env('ECOMMERCE_PASS')
      },
      form: true,
      body: {
        name: "Pikashirt",
        type: "simple",
        regular_price: "50.00",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        categories: [
          {
            id: 18
          }
        ]
      }
    }).then((resp) => {
      console.log(resp.data);
      cy.wrap(resp.body.id).as('productId');
      cy.wrap(resp.body.name).as('productName');
    })
  }

  deleteProduct() {
    cy.get('@productId').then((productId => {
      cy.request({
        method: 'DELETE',
        url: `/wp-json/wc/v3/products/${productId}?force=true`,
        auth: {
          user: Cypress.env('ECOMMERCE_USER'),
          pass: Cypress.env('ECOMMERCE_PASS')
        }
      })
    }));
  }

  createCoupon() {
    return cy.request({
      method: 'POST',
      url: '/wp-json/wc/v3/coupons',
      auth: {
        user: Cypress.env('ECOMMERCE_USER'),
        pass: Cypress.env('ECOMMERCE_PASS')
      },
      body: {
        code: "42offMaria",
        discount_type: "percent",
        amount: "42",
        individual_use: true,
        exclude_sale_items: true,
        minimum_amount: "42.00"
      }
    }).then((resp) => {
      console.log(resp.data);
      cy.wrap(resp.body.id).as('couponId');
      cy.wrap(resp.body.code).as('couponCode');
    })
  }

  deleteCoupon() {
    cy.get('@couponId').then((couponId => {
      cy.request({
        method: 'DELETE',
        url: `/wp-json/wc/v3/coupons/${couponId}?force=true`,
        auth: {
          user: Cypress.env('ECOMMERCE_USER'),
          pass: Cypress.env('ECOMMERCE_PASS')
        }
      })
    }));
  }

  createOrder() {
    cy.get('@productId').then((productId => {
      cy.request({
        method: 'POST',
        url: '/wp-json/wc/v3/orders',
        auth: {
          user: Cypress.env('ECOMMERCE_USER'),
          pass: Cypress.env('ECOMMERCE_PASS')
        },
        body: {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          customer_id: 40,
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
          shipping: {
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
              code: '42offMaria'
            }
          ]
        }
      }).then((resp) => {
        console.log(resp.data);
        cy.wrap(resp.body.id).as('orderId');
      })
    }));
  }

  deleteOrder() {
    cy.get('@orderId').then((orderId => {
      cy.request({
        method: 'DELETE',
        url: `/wp-json/wc/v3/orders/${orderId}?force=true`,
        auth: {
          user: Cypress.env('ECOMMERCE_USER'),
          pass: Cypress.env('ECOMMERCE_PASS')
        }
      })
    }));
  }

}

export const APIRequest = new API();
