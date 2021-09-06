console.log(getRate('usd'));


async function getRate(cur) {
    const data = await getApiData();
    //const country = await getCountry();
    //console.log(countries);
    let rates = data.rates;
    let found = false;
    if (cur) {
        currency = cur.toUpperCase();
        for (key of Object.keys(rates)) {
            if (currency === key) {
                console.log(`The exchange rate for ${currency} is ${rates[key]  }`);
                found = true;
                break;
            }
        }
        if (found === false)
            console.log(`The currency ${currency} is not supported.`);
    } else
        console.log('This are all the available currency rates', data.rates);
};

async function getApiData() {
    let url = 'https://open.er-api.com/v6/latest/USD';
    let response = fetch(url)
    return (await response).json();
}

async function getApiCountry() {
    api_key = 'd4592897fdbb98bbe5b48709';
    let url = 'https://v6.exchangerate-api.com/v6/d4592897fdbb98bbe5b48709/codes';
    let response = fetch(url);
    return (await response).json();

}

async function findCountry(cur) {
    const country = await getApiCountry();
    let countries = country.supported_codes;
    let found = Object.keys(countries)
    found.filter(function(element) {
        if (element === cur)
            console.log()
        return countries[key];
    });

    // let rateCountry = countries[key];
    //console.log(found);


}
console.log(findCountry('USD'))