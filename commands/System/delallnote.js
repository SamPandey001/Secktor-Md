const { delallnote } = require('../../lib/scraper')

module.exports = {
   name: 'delallnotes',
   category: 'owner',
   desc: 'Deletes all notes from db.',
   async exec(citel, Void,args) {
      const { tlang } = require('../../lib/scraper')
      if(!isCreator) return citel.reply(tlang().owner)
   await delallnote()
    citel.reply(`All notes deleted from mongodb.`)

   }
}
