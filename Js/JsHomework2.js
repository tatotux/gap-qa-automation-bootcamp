console.log(getRate('usd'));


async function getRate(cur) {

    if (cur) {
        currency = cur.toUpperCase();
        //Get data from the API
        let currencyInfo = await getInfo(currency);
        if (currencyInfo.result !== 'error') {
            let data = currencyInfo.target_data;
            let display = {
                'currency_code': currencyInfo.target_code,
                'currency_name': data.currency_name,
                'country': data.locale,
                'conversaion_rate': currencyInfo.conversion_rate
            }
            console.table({ display });
        } else {
            console.log(`The currency ${currency} is not supported.`);
        }

    } else displayAll();
};

//Function to get all data from the api 
async function getApiData() {
    let url = 'https://open.er-api.com/v6/latest/USD';
    let response = fetch(url)
    return (await response).json();
}

//Function to get data from the api based on a single currency
async function getInfo(cur) {
    const api_key = 'd4592897fdbb98bbe5b48709';
    let url = 'https://v6.exchangerate-api.com/v6/' + api_key + '/enriched/USD/' + cur;
    let response = fetch(url)
    return (await response).json();

};

//Function to display all data
async function displayAll() {
    const data = await getApiData();
    let rates = data.rates;
    console.table(data.rates);
};