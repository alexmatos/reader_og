const readlineSync = require('readline-sync');
const axios = require('axios');


const readUrl = function () {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi
  const regex = new RegExp(pattern)
  const url = readlineSync.question('Entre com uma URL: ');

  return url.match(regex) ? url : null
}

const downloadPage = (url, callback) => {
  axios.get(url, { responseType: 'text' })
    .then(result => callback(null, result))
    .catch(err => callback(err, null))
}

const scrapingOG = (err, page) => {
  if (err) console.log(err)

  console.log(page)
}

const main = function () {

  const url = readUrl()
  if (!url) {
    console.log('URL inválida')
    return
  }

  downloadPage(url, scrapingOG)

}

main()