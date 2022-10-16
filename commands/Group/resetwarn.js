const { warndb,tlang} = require('../../lib/')

module.exports = {
   name: 'resetwarn',
   category: 'group',
   desc: 'Deletes all previously given warns to quoted user.',
   async exec(citel, Void,args) {
    if(!isCreator) return citel.reply(tlang().owner)
   await warndb.deleteMany({id: citel.quoted.sender.split('@')[0]+'warn'});
     citel.reply('User is free as a bird.\nAll previously given warn has been deleted.')
   }
}
