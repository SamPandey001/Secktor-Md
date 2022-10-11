const { install } = require('../../lib')
const axios = require('axios')

module.exports = {
   name: 'install',
   category: 'owner',
   desc: 'Installs external modules.',
   async exec(citel, Void,args,isCreator) {
    const { tlang } = require('../../lib/scraper')
    if(!isCreator) return citel.reply(tlang().owner)
 if (!args[0].includes('raw.')) return citel.reply("🔍 Please provide me a valid gist url.\nhttps://raw.githubusercontent.com/SamPandey001/Secktor-Md/main/commands/System/alive.js")
   await install(args[0])
	citel.reply(`New plugin ${args[0]} added in db.`)
}
}
