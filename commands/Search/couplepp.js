const { fetchJson } = require('../../lib')

module.exports = {
    name: 'couplepp',
    category: 'search',
    desc: 'Sends two couples pics.',
    async exec(citel, Void,args) {

        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
        let random = anu[Math.floor(Math.random() * anu.length)]
        Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: citel })
        Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: citel })
    }
    }

 