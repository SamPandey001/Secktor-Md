const Config = require('../../config')
const Heroku = require('heroku-client');
const { prefix } = require('../../config')
const DB = require('../../lib/scraper')
const { execSync } = require('child_process')
module.exports = {
   name: 'update',
   category: 'owner',
   desc: 'Shows repo\'s refreshed commits.',
   async exec(citel, Void,args,isCreator) {
    if(!isCreator) return citel.reply('This command is only for my owner')
    // execSync('git init && git remote add origin https://sampandey001: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@github.com/citel-x/n.git -m --main')
    let commits = await DB.syncgit()
  if (commits.total === 0)  {
   citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
    } else {
     let update = await DB.sync()  
     let buttons = [
      { buttonId: `${prefix}updatenow`, buttonText: { displayText: '𝑈𝑝𝑑𝑎𝑡𝑒' }, type: 1 },
  ]
  await Void.sendButtonText(citel.chat, buttons, update,Void.user.name)
           
    }

   }
}
