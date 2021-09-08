
const currencyName=prompt('Enter a Currency Name');
const urlAPI=`https://open.er-api.com/v6/latest/USD`;
let isValid=false;
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
"XPF": "Collectivités d'Outre-Mer","YER": "Yemen","ZAR": "South Africa","ZMW": "Zambia"};

axios({
    method: 'get',
    url: urlAPI
    //responseType: 'stream'
  })
    .then(res=>{
        if(currencyName ===''){
            for (const property in res.data.rates) {

                for (const property2 in countries){
                    
                    if (property==property2){
                        
                        console.log(countries[property2]);
                        
                    }
               }
            
                console.log(`${property}: ${res.data.rates[property]}`);   
            }
        }
        else{
            for (const property1 in res.data.rates) {
              
                if (property1==currencyName){
                
                    for (const property2 in countries){
                    
                        if (property1==property2){
                            
                            console.log(countries[property2]);
                            break;
                        }
                   }
       
                   console.log(`${property1}: ${res.data.rates[property1]}`);   
                   isValid=true;
               
                   break;
               }
            }
        if(isValid==false){
            console.log('currency is not supported')
        }
      
            
      }});

      
       

     

     
      

    