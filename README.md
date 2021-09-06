# gap-qa-automation-bootcamp
GET CURRENCY RATES

This code queries the exchange rate per country and prints it to the console in a table. 
The exchange rates come from this Public API: https://www.exchangerate-api.com/docs/overview and match the supported countries described in https://www.exchangerate-api.com/docs/supported-currencies

How to make this work?
1. Get a Free Key from the API documentation: https://www.exchangerate-api.com/docs/overview
2. Set an environment variable in .env file as EXCHANGE_API_KEY=keyValue.
3. Execute the command: node main.js < code base > where base is the Country code. Example: node main.js 'CRC'.
