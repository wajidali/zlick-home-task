var request = require('request');

function getTransaction() {   
    return new Promise(resolve => {
        request('https://7np770qqk5.execute-api.eu-west-1.amazonaws.com/prod/get-transaction', function (error, response, body){        
            if(!error && response.statusCode == 200){
                var transaction = JSON.parse(body);                      
                resolve(transaction);           
            }
          });     
    });        
}

async function getTransactions() {  
    return new Promise(async (resolve) => {
        console.log("--------Started fetching transactions--------");
        var transactions = [];
        for(var i=0; i<20; i++) { // change to 100
            let transaction = await getTransaction();
            transactions.push(transaction);
        }
        console.log("--------Finished fetching transactions--------");
        resolve(transactions);
    })
   
}

module.exports = getTransactions;