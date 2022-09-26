const { warndb } = require('../../lib/core')

module.exports = {
   name: 'resetwarn',
   category: 'group',
   desc: 'Deletes all previously given warns to quoted user.',
   async exec(citel, Void,args) {
   await warndb.deleteMany({id: citel.quoted.sender.split('@')[0]+'warn'});
     citel.reply('User is free as a bird.\nAll previously given warn has been deleted.')
   }
}
