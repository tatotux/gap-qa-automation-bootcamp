# gap-qa-automation-bootcamp

# UI Cypress Automation Challenge

This project tests the application `Testing Playground` as the Final project for GAP's Internal QA Automation Bootcamp. The following description was the main goal of the project.

# Setup:

- Create a new coupon
- Create an order using a product and the recent created coupon

# Integration Tests:

- Verify that a specific product can be requested (API Test)
  - **Note:** To have a reliable test that did not depend on the existence of a specific product then a new product was created via API.
- Verify that a specific coupon can be requested (API Test)
- Verify that the order shows the proper discount value (UI Test)
  - **Note:** In order to have a reliable test and since a product, coupon and order were created as part of the setup then the validation made did not involve dynamic calculatioins since we already know the values that should be returned.

**NOTE:** For those 3 tests above, please make sure to use the coupon, and order that were created as part of the setup steps.

# Teardown / Cleanup:

- Remove coupon
- Remove order
- Remove Product

**NOTE:** Clean up the objects that were created during the setup stage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to install NodeJS before using Cypress

### Installing

on Mac:

1. Install NodeJS
2. Create a folder in your local machine and clone the repository
3. Install the dependencies from `package.json`by executing the command `npm install`

## Running the tests

1. Using the terminal navigate to the folder you created to clone the repository
   - To open Cypress' GUI run `npx cypress open` Then you will have the ability to pick the tests to run (`order-w-coupon.spec.js`)

# API Tests

The API tests were designed following [woocommerce's documentation](https://woocommerce.github.io/woocommerce-rest-api-docs/#) for its REST API
