//import * as axios from '/node_modules/axios/dist/axios.js';
//import * as table from '/node_modules/console-table-printer/dist/src/console-table-printer.js';
//import axios from 'axios';

//Free api key generated in the web site: valid for 2 months
const apiKey = "c28b8c95d94bcb086577896d";

//promise function to get the rates of the provided currency
function getRatesPromise(currency){
  return new Promise(resolve => {
    axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
    .then(function(response){resolve(response.data.conversion_rates);})
    .catch(function(error){console.log(`Something went wrong: ${error}`);})
  });
}

//promise function to get the supported currencies list
function getCurrenciesPromise(){
  return new Promise(resolve => {
    axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
    .then(function(response){resolve(response.data.supported_codes);})
    .catch(function(error){console.log(`Something went wrong: ${error}`);})
  });
}

//promise function to get all the existing countries and its currency code
function getCountriesPromise(){
  return new Promise(resolve => {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(function(response){resolve(response.data);})
    .catch(function(error){console.log(`Something went wrong: ${error}`);})
  });
}

//function to map the countries list to an array with only their country name and currency code
var reformatCountries = function(countries) {
  return countries.map(function(country) {
    var container = {};
    container["name"]=country.name;
    container["code"]=country.currencies[0].code;
    return container;
  })
}

//function to map the supported countries list to a printable array 
var reformatCurrencies = function(currencies) {
  return currencies.map(function(currency) {
    var container = {};
    container["Currency"]=currency[0]+" "+currency[1];
    return container;
  })
}

//function to use the results of the promises to find the match and the proper exchange rate
async function getRates(currency){
  let result
  currency ? result = await getRatesPromise(currency) : result = await getCurrenciesPromise();
  
  const rawCountries = await getCountriesPromise();
  let newFormatCountries = reformatCountries(rawCountries);
  
    for(const [key, value] of Object.entries(result)){
      for(const[code, country] of Object.entries(newFormatCountries)){
        if(currency == key && code == key){
          //when the match is gotten it is returned as result
          const match = {
            Code : key,
            Country : country,
            Exchange_Rate : value      
          }
          return console.table(match);
        }
      }
    }
  console.log("The requested currency is not supported or valid, please see below to see our supported options");
  return currency ? console.table(Object.entries(result)) : console.table(reformatCurrencies(result))
}

//Basic tests
//empty parameter to get the list of currencies
getRates();
//invalid currency 
getRates("Rupees");
//call to get over the happy path
getRates("USD");