const { warndb } = require('../../lib')
const moment = require("moment-timezone");

module.exports = {
    name: 'checkwarn',
    category: 'group',
    desc: 'Checks all given warn to the quoted member.',
    async exec(citel, Void,args,isGroup) {
        if(!citel.isGroup) return citel.reply('This command is only for Group.')
        if (!citel.quoted) return citel.reply('Quote a user master.')
teskd = `*All Warnings.*\n\n`
 let h = await warndb.find({id: citel.quoted.sender.split('@')[0]+'warn' })
console.log(h)
  teskd += `*There are total ${h.length}  warnings.*\n`
  for(let i=0;i<h.length;i++) {
  teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`
  teskd += `│ *🔰Time:-* ${h[i].date}\n`
  teskd += `│ *⚠️Warned by:-* ${h[i].warnedby}\n`
  teskd += `│ _📍Reason: ${h[i].reason}_\n╰─────────────◆\n\n`
  }
citel.reply(teskd)
 }

}
