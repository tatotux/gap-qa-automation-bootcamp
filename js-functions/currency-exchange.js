const axios = require('axios');
const { Table } = require('console-table-printer');

function myExchange(currency){
    let table = new Table();
    let resp,data = []
    let url = "https://open.er-api.com/v6/latest/"
    if(currency){url += currency;}
        // Make a request for a user with a given ID
        axios.get(url)
            .then(function (response) {
            // handle success
            resp = JSON.stringify(response.data.rates).split(',')
            // for (let index = 0; index < response.data.rates.length-1; index++) {
            //     console.log(response.data.rates.length)
            //     table.addRow({Code:response.data.rates[index], Rate: response.data.rates[index+1]})          
            // }
            console.log(response.data.rates)
            //table.printTable()
        }) 
        .catch(function () {
        // handle error
        console.log("sorry, something was wrong :'(");
        })
}

const [currency] = process.argv.slice(2)
myExchange(currency)

