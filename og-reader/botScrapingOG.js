const cheerio = require('cheerio')
const Page = require('./page')

const readMetaTag = ($, meta) => {
    return $(`meta[property="og:${meta}"]`).attr('content')
}

const ScrapingOG = (page) => {
    const $ = cheerio.load(page.data)

    let title = readMetaTag($, 'title')
    let type = readMetaTag($, 'type')
    let image = readMetaTag($, 'image')
    let url = readMetaTag($, 'url')
    let pageOG = new Page(url, title, image, type)

    if (!pageOG.isValid)
        return false

    return pageOG
}

module.exports = ScrapingOG