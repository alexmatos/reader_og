const readlineSync = require('readline-sync');

const URLReader = function () {
    const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi
    const regex = new RegExp(pattern)
    const url = readlineSync.question('Entre com uma URL: ');
  
    return url.match(regex) ? url : null
  }

  module.exports = URLReader