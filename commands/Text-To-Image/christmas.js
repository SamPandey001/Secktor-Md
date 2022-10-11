const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix
const maker = require('mumaker')

module.exports = {
    name: 'christmas',
    category: 'textpro',
    desc: 'Some text to image feature with various styles.',
    async exec(citel, Void,args,isCreator) {
       
		let anu = await maker.textpro('https://textpro.me/christmas-tree-text-effect-online-free-1057.html', args.join(" "))
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
