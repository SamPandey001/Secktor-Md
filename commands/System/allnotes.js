const { allnotes } = require('../../lib/scraper')

module.exports = {
   name: 'allnotes',
   category: 'owner',
   desc: 'Shows list of all notes.',
   async exec(citel, Void,args) {
    const note_store = new Array()
    let leadtext = `All Available Notes are:-\n\n`
    leadtext += await allnotes()
    
    citel.reply(leadtext) 

   }
}
