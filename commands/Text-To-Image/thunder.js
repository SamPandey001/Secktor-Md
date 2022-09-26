const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix
const maker = require('mumaker')

module.exports = {
    name: 'thunder',
    category: 'textpro',
    desc: 'Some text to image feature with various styles.',
    async exec(citel, Void,args,isCreator) {
       
		let anu = await maker.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', args.join(" "))
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
