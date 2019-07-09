var request = require('request');
var convertTransactions = require('./convert-transactions');

async function postTransactions() {
    let convertedTransactions = await convertTransactions();    
    let transactionsToUpload = JSON.stringify({"transactions" : convertedTransactions});    
    
    console.log("--------Started posting transactions--------");
    return new Promise(resolve => {                
        request.post('https://7np770qqk5.execute-api.eu-west-1.amazonaws.com/prod/process-transactions', { json: { transactionsToUpload} }, (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
          })
    });
}

module.exports = postTransactions;