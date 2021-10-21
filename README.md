# gap-qa-automation-bootcamp

## About the project

This automation framework cover an API integration test suite of the ecommerce page: http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/. The APIs are called by Custom commands for Cypress.

The test suite contains:

- Setup:
    - Create a new coupon.
    - Create and order using a product and the recent created coupon.
- Integration Tests:
    - Verify that a specific product can be requested (API Test).
    - Verify that a specific coupon can be requested (API Test).
    - Verify that the order shows the proper discount value (UI Test).
- Teardown / Cleanup:
    - Remove coupon
    - Remove order


## About the APIs:

- https://woocommerce.github.io/woocommerce-rest-api-docs/
- "Basic Auth" was used to authenticate to the API.
- Credentials for the basic authentication were used only for the API they were not used for WordPress login page



**About the Prerequisites**

- Git clone https://github.com/euribes/gap-qa-automation-bootcamp.git
- Nodejs
- Npm
- Cypress
- Type Script ("npm install --save-dev typescript")
- Edit the file "Cypress/support/index.js" adding this line: import './api-requests'
- A code editor


**How to run the test**

1. Clone the repository: https://github.com/euribes/gap-qa-automation-bootcamp.git 
2. Create a new branch git checkout -b branch_name
3. Install all the prerequisites
4. Open cypress: npx cypress open 
5. Click on the test: coupon.spec.js
