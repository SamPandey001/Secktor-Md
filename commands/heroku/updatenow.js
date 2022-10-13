const { prefix } = require('../../config')
const DB = require('../../lib')
module.exports = {
   name: 'updatenow',
   category: 'owner',
   desc: 'Updates bot with repo\'s refreshed commits.',
   async exec(citel, Void,args,isCreator) {
    if(!isCreator) return citel.reply('This command is only for my owner')
    let commits = await DB.syncgit()
  if (commits.total === 0)  {
   citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
    } else { 
       citel.reply('Build Started...')
      let update = await DB.updatedb()
        citel.reply(update)
    }
   } 
}
