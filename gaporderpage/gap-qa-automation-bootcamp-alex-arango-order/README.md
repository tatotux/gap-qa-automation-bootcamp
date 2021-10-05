# gap-qa-automation-bootcamp

# UI Cypress Automation Challenge

This project tests the application `Testing Playground` and adds the test `place-order.spec.js`that has the objective of testing the completion of an order.
The process to complete an order involves:

1. Searching for a product
2. Adding the product to the cart
3. Filling out the form for the Shipping and Billing information
4. Processing the order

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
   - To open Cypress' GUI run `npx cypress open` Then you will have the ability to pick the tests to run (`place-order.spec.js`)

## Available Tests to Execute

- `place-order.spec.js`
- `remove-from-cart.spec.js`
