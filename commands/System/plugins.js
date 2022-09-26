const { plugins } = require('../../lib/scraper')
const axios = require('axios')

module.exports = {
   name: 'plugins',
   category: 'owner',
   desc: 'Shows list of all externally installed modules.',
   async exec(citel, Void,args) {
let allmodtext = `*All Installed Modules are:-*\n\n`
allmodtext += await plugins()
		citel.reply(allmodtext) 

   }
}