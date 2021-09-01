const { default: axios } = require("axios");
const { Table } = require('console-table-printer');
const { printTable } = require('console-table-printer');


getCurrency("aaa")

function getCurrency(currency =""){
   let api_user_key= "13068c1d0972fdb467b4691f"
   let host ="https://v6.exchangerate-api.com/v6/" 
   const currencyTable =  [];  
   
      if (currency == ""){
         axios.get(`${host}${api_user_key}/codes`).then(response =>{         
            for (let x in response.data.supported_codes) {            
               currencyTable.push({Currency:response.data.supported_codes[x][0], Country:response.data.supported_codes[x][1]})                               
            }  
            console.table(currencyTable)
      }) 
      }else{
       
         axios.get(`${host}${api_user_key}/latest/${currency}`).then(response =>{
           
               for (let x in response.data.conversion_rates) {            
                  currencyTable.push({Currency:x, Value:response.data.conversion_rates[x]})                               
               }  
               console.table(currencyTable)            
         }).catch(e => {
            console.log("Currency not Supported -> " + e)               
   });
    
      
      } 
}


/*function getCurrency(currency =""){
   let api_user_key= "13068c1d0972fdb467b4691f"
   let host ="https://v6.exchangerate-api.com/v6/" 
   const currencyTable =  [];
  
   if (currency == ""){
      host = `${host}${api_user_key}/codes` 
   }else{
      host = `${host}${api_user_key}/latest/${currency}` 
   }
    
   axios.get(`${host}`).then(response =>{
         
      for (let x in response.data.conversion_rates) {            
         currencyTable.push({Currency:x, Value:response.data.conversion_rates[x]})                               
      }           
      
      console.table(currencyTable)

   }).catch(e => {
            console.log("Currency not Supported -> " + e)               
   });
}*/


/*function getCurrency(currency =""){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    let api_user_key= "13068c1d0972fdb467b4691f"
    let host ="https://v6.exchangerate-api.com/v6/"

    if (currency == ""){
        host = `${host}${api_user_key}/codes` 
     }else{
        host = `${host}${api_user_key}/latest/${currency}` 
     }
     console.log(`${host}`)
     request.open("GET",`${host}`)
     request.send()
     request.onload = ()=>{

        console.log(request)

     }

}*/