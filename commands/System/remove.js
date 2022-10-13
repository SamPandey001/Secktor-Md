const { remove,tlang } = require('../../lib')
module.exports = {
   name: 'remove',
   category: 'owner',
   desc: 'removes external modules.',
   async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
    if (!args[0].includes('raw')) return citel.reply("🔍 Please provide me a valid gist url.")
    await remove(args[0])
           citel.reply(`Plugin ${args.join(" ")} deleted from mongodb.`)
}
} 
