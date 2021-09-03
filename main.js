import axios from 'axios';

// axios({
//     method:'GET',
//     url: 'https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/',
//     responseType: 'json'
// })



const getConversionRates = async (currencyCode) => {
     return await new Promise((resolve, reject) => {

        //value >10 ? resolve (''), reject('');   EJEMPLO DE LA CLASE
        resolve (

            axios({
                method:'GET',
                // baseURL: 'https://v6.exchangerate-api.com/',
                url: 'https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/USD',
                responseType: 'json'
            }),

            axios.get(currencyCode)
            .then( function (response){

                /// aqui la carnita de loq ue debería hacer con el response

                console.log('    ==================  DATA  ==========================');

                if (response.status === 200){
                    // console.log(response.data);
                    const data = response.data;
                    console.log(typeof data);
                    console.log(data['conversion_rates']);

                    console.log('    ==================  CURRENCIES  ==========================');

                    const conversionRates = data['conversion_rates'];
                    console.log(conversionRates.AUD);
                } 
                
                

            })
            .catch(function(error){
                 if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }
            })
            .then(function(){})
        )
        reject((e) => console.log(e))

    });
};

//con await y async yo no necesito el then - carch para resolver la promesa, 
//con await y async se seresuelven automaticamente
async function getExchangeRate(currencyCode) {
    try {
        const data = await getConversionRates(currencyCode);
    } catch (e) {
        console.log(e)
    }
};

getExchangeRate('https://v6.exchangerate-api.com/v6/0b7f1a21180a722c55a6d05b/latest/USD');
