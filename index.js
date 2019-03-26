const readlineSync = require('readline-sync');
const ogs = require('open-graph-scraper');

const url = readlineSync.question('Entre com uma URL: ');

console.log('Processando...');


let options = {'url': url};
ogs(options, function (error, results) {
  console.log('error:', error); 
  console.log('results:', results);
});