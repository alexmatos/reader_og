const axios = require('axios');

const DownPage = (url, ...callbacks) => {
    axios.get(url, { responseType: 'text' })
        .then(result => {
            for (let callback of callbacks) {
                result = callback(null, result)
                if (!result) {
                    console.log("Não foi possível capturar todos os dados da página: " + url)
                    break
                }
            }
        })
        .catch(err => callbacks[0](err, null))
}

module.exports = DownPage