const { install } = require('../../lib/scraper')
const axios = require('axios')

module.exports = {
   name: 'install',
   category: 'owner',
   desc: 'Installs external modules.',
   async exec(citel, Void,args) {
    const { tlang } = require('../../lib/scraper')
    if(!isCreator) return citel.reply(tlang().owner)
 if (!args[0].includes('gist.')) return citel.reply("🔍 Please provide me a valid gist url.")
   await install(args[0])
	citel.reply(`New plugin ${args[0]} added in db.`)
}
}