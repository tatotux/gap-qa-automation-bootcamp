import axios from 'axios';

//provides autocmplete and parameter typings
//const axios = require('axios').default;

axios({
    method:'GET',
    URL: 'https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/',
    responseType: 'stream'
})


axios.get('https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/USD')
    .then(function (response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
    .then(function(){});

function getCurrency(){
    return axios.get();
}

getCurrency();
