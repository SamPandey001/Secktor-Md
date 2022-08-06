const cheerio = require('cheerio');
const axios = require('axios');


const baseUrl = "https://gogoanime.run"

async function newSeason(page) {
    var anime_list = []


    res = await axios.get(`${baseUrl}/new-season.html?page=${page}`)
    const body = await res.data;
    const $ = cheerio.load(body)

    $('div.main_body div.last_episodes ul.items li').each((index, element) => {
        $elements = $(element)
        name = $elements.find('p').find('a')
        img = $elements.find('div').find('a').find('img').attr('src')
        link = $elements.find('div').find('a').attr('href')
        anime_name = { 'name': name.html(), 'img_url': img, 'anime_id': link.slice(10,) }
        anime_list.push(anime_name)

    })

    return await (anime_list)
}


async function popular(page) {
    var anime_list = []


    res = await axios.get(`${baseUrl}/popular.html?page=${page}`)
    const body = await res.data;
    const $ = cheerio.load(body)

    $('div.main_body div.last_episodes ul.items li').each((index, element) => {
        $elements = $(element)
        name = $elements.find('p').find('a')
        img = $elements.find('div').find('a').find('img').attr('src')
        link = $elements.find('div').find('a').attr('href')
        anime_name = { 'name': name.html(), 'img_url': img, 'anime_id': link.slice(10,) }
        anime_list.push(anime_name)

    })

    return await (anime_list)
}

async function search(query) {
    var anime_list = []


    res = await axios.get(`${baseUrl}/search.html?keyword=${query}`)
    const body = await res.data;
    const $ = cheerio.load(body)

    $('div.main_body div.last_episodes ul.items li').each((index, element) => {
        $elements = $(element)
        name = $elements.find('p').find('a')
        img = $elements.find('div').find('a').find('img').attr('src')
        link = $elements.find('div').find('a').attr('href')
        anime_name = { 'name': name.html(), 'img_url': img, 'anime_id': link.slice(10,) }
        anime_list.push(anime_name)

    })

    return await (anime_list)
}

async function anime(_anime_name) {


    episode_array = []

    res = await axios.get(`${baseUrl}/category/${_anime_name}`)
    const body = await res.data;
    const $ = cheerio.load(body)

    img_url = $('div.anime_info_body_bg  img').attr('src')
    anime_name = $('div.anime_info_body_bg  h1').text()
    anime_about = $('div.main_body  div:nth-child(2) > div.anime_info_body_bg > p:nth-child(5)').text()

    anime_about = $('div.main_body  div:nth-child(2) > div.anime_info_body_bg > p:nth-child(5)').text()

    //add the new code here
    el = $('#episode_page')

    ep_start = 1

    ep_end = el.children().last().find('a').attr('ep_end')


    for (let i = ep_start; i <= ep_end; i++) {
        episode_array.push(`${_anime_name}-episode-${i}`)

    }



    anime_result = { 'name': anime_name, 'img_url': img_url, 'about': anime_about, 'episode_id': episode_array }

    return await (anime_result)


}

async function watchAnime(episode_id) {

    res = await axios.get(`${baseUrl}/${episode_id}`)
    const body = await res.data;
    $ = cheerio.load(body)

    episode_link = $('li.dowloads > a').attr('href')

    ep = await getDownloadLink(episode_link)

    return await (ep)



}

async function getDownloadLink(episode_link) {

    ep_array = []

    res = await axios.get(episode_link)
    const body = await res.data;
    $ = cheerio.load(body)

    $('div.mirror_link div').each((index, element) => {
        ep_name = $(element).find('a').html()
        ep_link = $(element).find('a').attr('href')

        ep_dic = { 'quality': ep_name.replace('Download\n', 'watch').replace(/ +/g, ""), 'ep_link': ep_link }

        ep_array.push(ep_dic)
    })


    return await (ep_array)


}

module.exports = {
    popular,
    newSeason,
    search,
    anime,
    watchAnime
}
