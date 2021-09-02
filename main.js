import axios from 'axios';

// axios({
//     method:'GET',
//     URL: 'https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/',
//     responseType: 'stream'
// })


const httpGetRequest = (currencyCode) => {
    return new Promise((resolve, reject) => {

        axios.get(currencyCode)
            .then(function (response){
                console.log(response);
            })
            .catch(function(error){
                
                console.log(error);
            })
            .then(function(){});

    });
};


async function getExchangeRate(currencyCode) {
    try {
        const res = await httpGetRequest(currencyCode);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
};

getExchangeRate('https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/USD')
