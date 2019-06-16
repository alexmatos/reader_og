const cheerio = require('cheerio')

const readLinks = ($) => {
    return Array.from($('a')).map(link => $(link).attr('href'))
}

const Spider = (err, page) => {
    if (err) 
        console.log(err)

    const $ = cheerio.load(page.data)   
    return readLinks($)
}

module.exports = Spider