const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix
const maker = require('mumaker')

module.exports = {
    name: 'neonlight',
    category: 'textpro',
    desc: 'Some text to image feature with various styles.',
    async exec(citel, Void,args,isCreator) {
       
		let anu = await maker.textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', args.join(" "))
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
