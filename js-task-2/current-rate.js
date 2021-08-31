const requests = require('axios')
const { printTable } = require('console-table-printer')
const readline = require("readline")

const apiKey = 'dee8767d6bcb33e15506209a'
const baseUrl = 'https://v6.exchangerate-api.com/v6/'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//Returns a list of countries with the correspondent country code
async function getCountryNames() {
    let countriesInformation = []
    try {
        const countries = await requests.get(`https://restcountries.eu/rest/v2/`)
        for (const item of countries['data']) {
            let country = {
                code: '',
                name: ''
            }
            country.code = item.currencies[0].code
            country.name = item.name
            countriesInformation.push(country)
        }
        return countriesInformation
    }
    catch (e) {
        console.log(e)
    }
}

//Prints a currency rate if specified as a parameter. Otherwise, prints all the available currencies
async function getCurrencyRate(currencyRate = '') {
    if (currencyRate == '') {
        let currencyRates = []
        let countriesInformation = await getCountryNames()

        try {
            const ratesObject = await requests.get('https://open.er-api.com/v6/latest/USD')
            for (const property of Object.entries(ratesObject.data.rates)) {
                let result = countriesInformation.find(({ code }) => code === property[0])
                if (result != undefined) {
                    result.rate = property[1]
                    currencyRates.push(result)
                }
            }
            printTable(currencyRates)
        }
        catch (e) {
            console.log(e)
        }
    }
    else {
        try {
            const rates = await requests.get(`${baseUrl}${apiKey}/latest/${currencyRate}`)
            console.log(rates.data.conversion_rates)
        }
        catch (e) {
            console.log('Rate Not Found. Please insert an existent rate.')
        }
    }
}

rl.question("Please, insert a rate code (e.g.: USD) or press ENTER to see all available rates: ", function (answer) {
    getCurrencyRate(answer)
    rl.close()
})