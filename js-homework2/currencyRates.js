const currencyName='COP'; //Input
const requests = require('axios');
const { printTable } = require('console-table-printer');


getCurrencyRate(currencyName);

async function getRatesByAPI(){
    try {
        const ratesObject = await requests.get('https://open.er-api.com/v6/latest/USD');
        return ratesObject;
    }catch(e){
        console.log(e);
    }
    return '';
}

async function getCurrencyRate(currencyName) {
    //Get all rates for USD Currrency
    const ratesObject = await getRatesByAPI();
    let countries=[];

    //If the argument is not passed in, then a table with all the supported currencies should be displayed
    if (!currencyName)
    {
        let rowTable;
        const currencyRatesTable = [];
        countries=  getCountries();
                   
        for (let rate of Object.entries(ratesObject.data.rates)){
            rowTable = {
                Code:rate[0],
                Country: countries[rate[0]],
                value:rate[1]
            };
            currencyRatesTable.push(rowTable);
        } 
          
        //print
        printTable(currencyRatesTable);
        return;
    }
    //Given the currency name the respective currency rate will be returned
    for (let rate of Object.entries(ratesObject.data.rates)){
        if (rate[0]===currencyName) {
            console.log('The currency name is:',rate[0],'Rate= ',rate[1]); 
            return rate[1];
        }
    }
        
    //When the currency name was not found, an error message should be displayed saying that the currency is not supported
    console.error('ERROR: The currency',currencyName,'is not supported')
    
}

function getCountries(){
    const countries = {"AED": "United Arab Emirates","AFN": "Afghanistan","ALL": "Albania","AMD": "Armenia","ANG": "Netherlands Antilles","AOA": "Angola","ARS": "Argentina","AUD": "Australia","AWG": "Aruba",
    "AZN": "Azerbaijan","BAM": "Bosnia and Herzegovina","BBD": "Barbados","BDT": "Bangladesh","BGN": "Bulgaria",
    "BHD": "Bahrain","BIF": "Burundi","BMD": "Bermuda","BND": "Brunei","BOB": "Bolivia","BRL": "Brazil","BSD": "Bahamas",
    "BTN": "Bhutan","BWP": "Botswana","BYN": "Belarus","BZD": "Belize","CAD": "Canada","CDF": "Democratic Republic of the Congo",
    "CHF": "Switzerland","CLP": "Chile","CNY": "China","COP": "Colombia","CRC": "Costa Rica","CUC": "Cuba","CUP": "Cuba",
    "CVE": "Cape Verde","CZK": "Czech Republic","DJF": "Djibouti","DKK": "Denmark","DOP": "Dominican Republic",
    "DZD": "Algeria","EGP": "Egypt","ERN": "Eritrea","ETB": "Ethiopia","EUR": "European Union","FJD": "Fiji","FKP": "Falkland Islands",
    "FOK": "Faroe Islands","GBP": "United Kingdom","GEL": "Georgia","GGP": "Guernsey","GHS": "Ghana","GIP": "Gibraltar",
    "GMD": "The Gambia","GNF": "Guinea","GTQ": "Guatemala","GYD": "Guyana","HKD": "Hong Kong","HNL": "Honduras",
    "HRK": "Croatia","HTG": "Haiti","HUF": "Hungary","IDR": "Indonesia","ILS": "Israel","IMP": "Isle of Man",
    "INR": "India","IQD": "Iraq","IRR": "Iran","ISK": "Iceland","JMD": "Jamaica","JOD": "Jordan","JPY": "Japan",
    "KES": "Kenya","KGS": "Kyrgyzstan","KHR": "Cambodia","KID": "Kiribati","KMF": "Comoros","KRW": "South Korea",
    "KWD": "Kuwait","KYD": "Cayman Islands","KZT": "Kazakhstan","LAK": "Laos","LBP": "Lebanon","LKR": "Sri Lanka",
    "LRD": "Liberia","LSL": "Lesotho","LYD": "Libya","MAD": "Morocco","MDL": "Moldova","MGA": "Madagascar","MKD": "North Macedonia",
    "MMK": "Myanmar","MNT": "Mongolia","MOP": "Macau","MRU": "Mauritania","MUR": "Mauritius","MVR": "Maldives",
    "MWK": "Malawi","MXN": "Mexico","MYR": "Malaysia","MZN": "Mozambique","NAD": "Namibia","NGN": "Nigeria","NIO": "Nicaragua",
    "NOK": "Norway","NPR": "Nepal","NZD": "New Zealand","OMR": "Oman","PAB": "Panama","PEN": "Peru","PGK": "Papua New Guinea",
    "PHP": "Philippines","PKR": "Pakistan","PLN": "Poland","PYG": "Paraguay","QAR": "Qatar","RON": "Romania","RSD": "Serbia",
    "RUB": "Russia","RWF": "Rwanda","SAR": "Saudi Arabia","SBD": "Solomon Islands","SCR": "Seychelles","SDG": "Sudan",
    "SEK": "Sweden","SGD": "Singapore","SHP": "Saint Helena", "SLL": "Sierra Leone","SOS": "Somalia","SRD": "Suriname",
    "SSP": "South Sudan","STN": "São Tomé and Príncipe","SYP": "Syria","SZL": "Eswatini","THB": "Thailand","TJS": "Tajikistan",
    "TMT": "Turkmenistan","TND": "Tunisia","TOP": "Tonga","TRY": "Turkey","TTD": "Trinidad and Tobago","TVD": "Tuvalu",
    "TWD": "Taiwan", "TZS": "Tanzania","UAH": "Ukraine","UGX": "Uganda","USD": "United States","UYU": "Uruguay",
    "UZS": "Uzbekistan","VES": "Venezuela", "VND": "Vietnam","VUV": "Vanuatu","WST": "Samoa","XAF": "CEMAC",
    "XCD": "Organisation of Eastern Caribbean States","XDR": "International Monetary Fund","XOF": "CFA",
    "XPF": "Collectivités d'Outre-Mer","YER": "Yemen","ZAR": "South Africa","ZMW": "Zambia"
 }
  return countries;
}








