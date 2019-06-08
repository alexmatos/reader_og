const axios = require('axios');

const DownPage = (url, callback) => {
    axios.get(url, { responseType: 'text' })
        .then(result => callback(null, result))
        .catch(err => callback(err, null))
}

module.exports = DownPage