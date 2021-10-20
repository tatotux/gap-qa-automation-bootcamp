# QA Automation Challenge

This project consists of two parts:
1. Challenge part #1 API Automation:
- Verify that a specific product can be requested (API Test).
- Verify that a specific coupon can be requested  (API Test).
All of this first section are located in the api folder from integration/tests.
2. Challenge part #2 UI Automation:
- Verify that the order shows the proper discount value (UI Test)
All of this second section are located in the ui folder from integration/tests.
### All of them automate the playground web page: http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/

## Prerequisites
- Git
- Cypress package version: 8.6.0
- Nodejs package version: 14.17.1
- Npm package version: 6.14.13
- Any source code editor tool like Visual Studio Code

## Setup for the project
1. Open a terminal
2. Clone the repository
```
git clone https://github.com/euribes/gap-qa-automation-bootcamp.git
```
3. Install the dependencies for the project
```
cd UI
npm install
```
4. Open Cypress to run the tests
```
npx cypress open
```
