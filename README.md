# API Automation Exercise

## Instructions
* Complete the challenge below and share the result with us.
* Make sure to follow best practices for automation and programming.
* Your solution should include a readme file with relevant details about this assessment.


The testing playground:
The application under test is a dummy shopping site that comes already filled with sample products and realistic user workflows.
* URL: http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/ 
* User & Password: Configured in ..
* Notes: 
    * You can use "Basic Auth" to authenticate to the API.
    * These credentials can only be used with the API, they won’t work on the WordPress login page



## The Challenge

Using an API automation framework/tool of your preference, please automate the following API integration test suite:

1. Setup:
    * Create a new coupon
    * Create an order using a product and the recent created coupon
2. Integration Tests:
    * Verify that a specific product can be requested (API Test)
    * Verify that a specific coupon can be requested (API Test) 
    * Verify that the order shows the proper discount value (UI Test)
    * **NOTE**: For those 3 tests above, please make sure to use the coupon, and order that were created as part of the setup steps.
3. Teardown / Cleanup:
    * Remove coupon
    * Remove order
    * **NOTE**: Clean up the objects that were created during the setup stage.

**API Documentation**:
https://woocommerce.github.io/woocommerce-rest-api-docs/


## Additional notes

* API authentication was implemented with environment variables. You should set your credentials in your local `cypress.env.json` file. 