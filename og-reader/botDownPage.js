const axios = require('axios');

const DownPage = (url) => {
    return axios.get(url, {
        responseType: 'text'
    })
}

module.exports = DownPage