const cheerio = require('cheerio')

const readMetaTag = ($, meta) => {
    return $(`meta[property="og:${meta}"]`).attr('content')
}

const ScrapingOG = (err, page) => {
    if (err) 
        console.log(err)

    const $ = cheerio.load(page.data)

    const title = readMetaTag($, 'title');
    const type = readMetaTag($, 'type');
    const image = readMetaTag($, 'image');
    const url = readMetaTag($, 'url');
    console.log(title, type, image, url)
}

module.exports = ScrapingOG