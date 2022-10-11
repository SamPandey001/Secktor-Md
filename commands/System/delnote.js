const { delnote } = require('../../lib')

module.exports = {
   name: 'delnote',
   category: 'owner',
   desc: 'Deletes note from db.',
   async exec(citel, Void,args,isCreator) {
      const { tlang } = require('../../lib/scraper')
      if(!isCreator) return citel.reply(tlang().owner)
await delnote(args[0])
      citel.reply(`Id: ${args[0]}\'s note has been deleted from mongodb.`)

   }
}
