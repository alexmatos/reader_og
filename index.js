const URLReader = require('./bots/botURLReader')
const DownPage = require('./bots/botDownPage')
const ScrapingOG = require('./bots/botScrapingOG')
const Spider = require('./bots/botSpider')

const main = function () {
  const url = URLReader()

  if (!url) {
    console.log('URL inválida')
    return
  }

  console.log('Estamos processando a extração dos dados da página...')

  DownPage(url, Spider, (err, result) => {
    console.log(result)
    return true
  })
  
  // DownPage(url, ScrapingOG)


}

main()