import axios from 'axios';
import { printTable } from 'console-table-printer';
import {csvToArray} from './get-country-currencies.js';
 

const getAllExchangeRates =  currencyCode => {

    return new Promise((resolve, reject) => {

            axios({
                method:'GET',
                // baseURL: 'https://v6.exchangerate-api.com/',
                url: 'https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/USD',
                responseType: 'json'
            }),

            axios.get(currencyCode)
            .then( function (response){
            
                if (response.status === 200){
                    const data = response.data;
                    resolve(data);
                }
            })
            .catch(function(error){
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                // OR Something happened in setting up the request that triggered an Error
                error.request ? console.log(error.request) : console.log('Error', error.message);
                reject(error);
                  
            })
            .then(function(){})
    });
};

//con await y async la promesa se seresuelve automaticamente. no necesito el then - catch
async function getExchangeRate(currencyCode) {
    try {
        const httpResponse = await getAllExchangeRates(currencyCode);
        const exchangeRates = httpResponse.conversion_rates;

        const supportedCountries = await csvToArray()
                                .then(res =>{
                                    return(res);
                                })
                                .catch(error =>{
                                    console.log(error);
                                });

       
        let exchangeRateTable = supportedCountries.map(function (element){

            let rate = 0;

            for (const key in exchangeRates) {
                key == element['code'] ? rate = exchangeRates[key] : '';
            }

            const exchangeRateInfo = {
                'code': element['code'],
                'country' : element['country'],
                'rate' : rate
            }
            return exchangeRateInfo;

        });
  
        printTable(exchangeRateTable);

    } catch (e) {
        console.log(e)
    }
};

getExchangeRate('https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/USD');
