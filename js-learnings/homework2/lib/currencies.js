const axios = require('axios').default;
const process = require('process');
const { printTable } = require('console-table-printer');

const baseUrl = 'https://v6.exchangerate-api.com/v6';

async function currencyRates(...currencyCodes) {
  const codes = await supportedCodes();
  const rates = await getRates();
  const currencies = codes.map((code) => ({ ...code, rate: rates[code.code] }));
  let missingCodes;
  if (currencyCodes.length > 0) {
    const allIncluded = codes.every((code) => currencyCodes.includes(code.code));
    if (!allIncluded) {
      missingCodes = currencyCodes
        .filter((code) => !codes.some((c) => c.code === code))
        .map((code) => ({ code: code, currency: 'Not Supported', rate: 'N/A' }));
    }
    const filteredCurrencies = currencies.filter((currency) => currencyCodes.includes(currency.code));
    filteredCurrencies.length > 0
      ? printTable(allIncluded ? filteredCurrencies : [...filteredCurrencies, ...missingCodes])
      : console.log(`${currencyCodes} not supported`);
  } else {
    printTable(currencies);
  }
}

function getRates() {
  return axios.get(`${baseUrl}/${process.env.API_KEY}/latest/USD`).then(({ data }) => data.conversion_rates);
}

function supportedCodes() {
  return axios
    .get(`${baseUrl}/${process.env.API_KEY}/codes`)
    .then(({ data }) => data.supported_codes.map((code) => ({ code: code[0], currency: code[1] })));
}

currencyRates().then(console.log).catch(console.error);
