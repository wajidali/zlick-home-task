var expect = require('chai').expect;
var getTransactions = require('./get-transactions');
var getExchangeRates = require('./get-exchange-rates');
var convertTransactions = require('./convert-transactions');
var postTransactions = require('./post-transactions');

// describe('getTransactions()', async function () {
//     it('should get 100 transactions', async function () {
//       getTransactions().then(t => {
//         expect(t).to.be.an('array');
//       });
//     });
//   });

// describe('getExchangeRates()', async function () {
//     it('should get latest exchange rates', async function () {
//         getExchangeRates().then(r => {                     
//             expect(r).to.be.an('object');
//       });
//     });
//   });

// describe('convertTransactions()', async function () {
//     it('should convert Transactions', async function () {
//       convertTransactions().then(c=> {          
//         expect(c).to.be.an('array');
//       })
//     });
//   });

describe('postTransactions()', async function () {
    it('should post Transactions', async function () {
        postTransactions().then(u=> {                  
        expect(c).to.be.an('array');
      })
    });
  });