var getTransactions = require('./get-transactions');
var getExchangeRates = require('./get-exchange-rates');

async function convertTransactions() {
    let transactions = await getTransactions();
    let exchangeRates = await getExchangeRates();
    console.log("--------Started converting transactions--------");
    transactions.forEach(element => {
        element.convertedAmount = parseFloat(element.amount / exchangeRates.rates[element.currency]).toFixed(4);
        delete element.exchangeUrl;        
    });
    console.log("--------Finished converting transactions--------");
    return transactions;
}

module.exports = convertTransactions;