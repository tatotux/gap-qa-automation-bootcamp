const { default: axios } = require("axios");
const { Table } = require('console-table-printer');


getCurrency("XXX")

function getCurrency(currency =""){
   let api_user_key= "13068c1d0972fdb467b4691f" // mover a Variable de entorno
   let host ="https://v6.exchangerate-api.com/v6/" 
   const currencyTable =  [];  
   
   if (currency == ""){
      axios.get(`${host}${api_user_key}/codes`).then(response =>{         
         for (let x in response.data.supported_codes) {            
            currencyTable.push({Code:response.data.supported_codes[x][0], Currency:response.data.supported_codes[x][1]})  
            //agregar pais                              
         }  
         console.table(currencyTable)
      }) 
   }else{
      axios.get(`${host}${api_user_key}/latest/${currency}`).then(response =>{
         for (let x in response.data.conversion_rates) {            
            currencyTable.push({Code:x, Rate:response.data.conversion_rates[x]})   
            //SOLAMENTE LA LINEA DEL CURRENCY QUE SE PIDIO
            //agregar pais                            
         }  
         console.table(currencyTable)            
      }).catch(e => {console.log("Currency not Supported")});
   } 
}
