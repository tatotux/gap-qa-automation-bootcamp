import dotenv from 'dotenv';
dotenv.config({path:'.env'});
import axios from 'axios';
import {printTable} from 'console-table-printer';
import {csvToArray} from './get-country-currencies.js';

 

const getAllExchangeRates =  currencyCode => {

    return new Promise((resolve, reject) => {

        const apiKey = process.env.EXCHANGE_API_KEY;
        
        if(apiKey){
            const url = 'https://v6.exchangerate-api.com/v6/' + process.env.EXCHANGE_API_KEY + '/latest/' + currencyCode;

            axios.get(url)
            .then(function(response){
            
                if (response.status === 200){
                    const data = response.data;
                    resolve(data);
                }

                if (response.status === 404){
                    const data = response.data.error-type;
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
        }else{ 
            reject('ERROR: API Key not found');
        }
    
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
                                    creturn(error);
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
        console.log(`Exchange Rates for base code ${currencyCode}`);
        printTable(exchangeRateTable);

    } catch (e) {
        console.log(e)
    }
};

const baseCode = process.argv.slice(2);
getExchangeRate(baseCode)
.then(res =>{
    return(res);
})
.catch(error =>{
    return (error);
});
