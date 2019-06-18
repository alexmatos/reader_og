const URLReader = require('./botURLReader')
const DownPage = require('./botDownPage')
const ScrapingOG = require('./botScrapingOG')
const Spider = require('./botSpider')

module.exports = {
    download: DownPage,
    scrap: ScrapingOG,
    spider: Spider,
    seeder: URLReader,

    run: async function (url) {
        const pages = []
        let count = 0
        try {
            const result = await this.download(url)
            let spiderResult = this.spider(result)
            for (let urlPage of spiderResult) {
                try {
                    const result = await this.download(urlPage)
                    const page = this.scrap(result)
                    if (page) {
                        pages.push(page)
                        console.log(`${count} Lendo ${spiderResult.indexOf(urlPage) + 1} de ${spiderResult.length} ${urlPage}`)
                    }
                    if (++count >= 10) {
                        break
                    }
                } catch (err) {
                    // console.log(`${count} Erro: ${spiderResult.indexOf(urlPage) + 1} ${urlPage}`)
                    continue
                }
            }
            return pages
        } catch (err) {
            return null
        }

    }
}