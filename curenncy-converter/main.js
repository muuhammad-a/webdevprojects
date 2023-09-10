let firstCurrency = document.getElementById('first-currency');
let secondCurrency = document.getElementById('second-currency');
let currency = document.getElementById('currency');
let convertBtn = document.getElementById('convertBtn');

const API_KEY = `add your API KEY from currencyapi.com `;
const baseCurrency = firstCurrency.value; // Valuta di base scelta dall'utente
const URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${baseCurrency}`;

convertBtn.addEventListener('click', function () {
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const currencyOne = firstCurrency.value;
            const currencyTwo = secondCurrency.value;
            const rateOne = data['data'][currencyOne]['value'];
            const rateTwo = data['data'][currencyTwo]['value'];
            const convertedAmount = (currency.value * rateTwo / rateOne).toFixed(2);
            console.log(convertedAmount);
            let title = document.createElement('h1');
            title.innerText = convertedAmount + ' ' + currencyTwo;
            let lastUpdete = document.createElement('p');
            lastUpdete.innerText = 'last update: ' + data['meta']['last_updated_at'];
            let result = document.getElementById('result');
            result.innerHTML='';
            result.appendChild(title);
            result.appendChild(lastUpdete);
        })
    // .catch(() => alert("Please enter a valid number"))


});

