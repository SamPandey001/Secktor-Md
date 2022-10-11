const axios = require('axios')
const { tlang } = require('../../lib')
const { prefix } = require('../../config')
module.exports = {
   name: 'google',
   category: 'search',
   desc: 'Sends info of given query from Google Search.',
   async exec(citel, Void,args) {
    if (!args[0]) throw `Example : ${prefix}google Secktor Userbot`
    let google = require('google-it')
    google({'query': args.join(" ")}).then(res => {
    let text = `Google Search From : ${args.join(" ")}\n\n`
    for (let g of res) {
    text += `➣ *Title* : ${g.title}\n`
    text += `➣ *Description* : ${g.snippet}\n`
    text += `➣ *Link* : ${g.link}\n\n────────────────────────\n\n`
    } 
    citel.reply(text)
    })

   }
}
