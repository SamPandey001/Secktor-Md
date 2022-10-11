const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix
const maker = require('mumaker')

module.exports = {
    name: 'sand',
    category: 'textpro',
    desc: 'Some text to image feature with various styles.',
    async exec(citel, Void,args,isCreator) {
       
		let anu = await maker.textpro('https://textpro.me/write-in-sand-summer-beach-free-online-991.html', args.join(" "))
				Void.sendMessage(citel.chat, {
					image: {
						url: anu
					},
					caption: `Made by ${tlang().title},For my ${tlang().greet}`
				}, {
					quoted: citel
				})
    }
    }
