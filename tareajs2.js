const apiKey = '9fe562b8f6630fa10fba1cad';
const allCurrency =[];

//Get currency
function getCurrency (coin){
    coin.length > 0 ? getSpecificCurrency(coin) :  showAll();
}

//Print all the currency supported
const showAll= ()=>{
    console.table(allCurrency, ['currency','currencyName','country','rate']);
}

//get an specific currency
const getSpecificCurrency= (coin)=> {
   axios.get('https://v6.exchangerate-api.com/v6/'+apiKey+'/enriched/USD/'+ coin)
    .then(response => {
       showOnlyRate(response.data, response.data['target_data']);//displays the currency
      })
      .catch(error=> {
       let error_type= error.response.data['error-type'];
       if (error_type== 'unsupported-code') console.error('The currency is not supported');
       else console.error(error);
      });

};

function getAllCurrency (){
    axios.get('https://v6.exchangerate-api.com/v6/'+apiKey+'/latest/USD')
    .then(response => {
         fillAllRate(response.data['conversion_rates']);
      })
      .catch(error=> {
            console.log(error);
      });
 
 };
const showOnlyRate = (jsonData, currencyData) =>
{
console.log(currencyData);
 let rate= {
     currencyName: currencyData['currency_name_short'],
     country: currencyData['locale'],
     rate:   jsonData['conversion_rate']
    };
    console.table([rate], ['currencyName','country','rate']);
}

const getCurrencyData =(code)=>{
    axios.get('https://v6.exchangerate-api.com/v6/'+apiKey+'/enriched/USD/'+ code)
    .then(response => {
        fillCountry(code,response.data['target_data']);
      })
      .catch(function (error) {
        console.log(error);
      });

}

const fillCountry=(code,currencyData)=>{
    let indexElement= allCurrency.findIndex ( (element) => element.currency == code);
    allCurrency[indexElement].country =currencyData['locale'];
    allCurrency[indexElement].currencyName =currencyData['currency_name_short'];

}

const fillAllRate = (jsonData) =>
{
    for (const key in jsonData) {
    let rate=
   {
    currency : key,
    currencyName: '',
    rate: jsonData[key],
    country: ''
   }
allCurrency.push(rate);
}
allCurrency.forEach(element => {
    getCurrencyData(element.currency);
});
}

getAllCurrency();








