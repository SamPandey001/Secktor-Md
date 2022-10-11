const { plugins } = require('../../lib')
const axios = require('axios')

module.exports = {
   name: 'plugins',
   category: 'owner',
   desc: 'Shows list of all externally installed modules.',
   async exec(citel, Void,args,isCreator) {
      const { tlang } = require('../../lib/scraper')
      if(!isCreator) return citel.reply(tlang().owner)
let allmodtext = `*All Installed Modules are:-*\n\n`
allmodtext += await plugins()
		citel.reply(allmodtext) 

   }
}