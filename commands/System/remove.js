const { remove,tlang } = require('../../lib')
module.exports = {
   name: 'remove',
   category: 'owner',
   desc: 'removes external modules.',
   async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
   try{
      await remove(args[0])
   } catch {
      citel.reply('No such plugin installed')
      
   }
           citel.reply(`Plugin ${args.join(" ")} deleted from mongodb.`)
}
} 
