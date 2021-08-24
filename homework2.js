const { default: axios } = require("axios");

getCurrency("")


function getCurrency(currency =""){
    let api_user_key= "13068c1d0972fdb467b4691f"
    let host ="https://v6.exchangerate-api.com/v6/"

    if (currency == ""){
        host = `${host}${api_user_key}/codes` 
     }else{
        host = `${host}${api_user_key}/latest/${currency}` 
     }
    
     axios.get(`${host}`)
        .then(response =>{
            console.log(response.data)
            
        }).catch(e => {
            console.log("Currency not Supported")               
        });

     

}

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