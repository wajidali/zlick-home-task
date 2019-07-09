var request = require('request');

function getExchangeRates() {   
    return new Promise(resolve => {
        console.log("--------Started fetching exchange rates--------");
        request('https://api.exchangeratesapi.io/latest', function (error, response, body){        
            if(!error && response.statusCode == 200){
                var rates = JSON.parse(body);    
                console.log("--------Finished fetching exchange rates--------");                  
                resolve(rates);           
            }
          });     
    });        
}

module.exports = getExchangeRates;