const axios = require('axios')
const cheerio = require('cheerio')

const mediafire = async (url) => {
const response  = await axios.get(url)
const $ = cheerio.load(response.data)
const data = []
const link = $('a#downloadButton').attr('href'),
const size = $('a#downloadButton')
        .text()
        .replace('Download', '')
        .replace('(', '')
        .replace(')', '')
        .replace('\n', '')
        .replace('\n', '')
        .replace('                         ', ''),
const seplit = link.split('/')
const name = seplit[5]
mime = name.split('.')
mime = mime[1] 
 data.push({
      nama: name,
      mime: mime,
      size: size,
      link: link
    })
 return data
}

module.exports = mediafire
