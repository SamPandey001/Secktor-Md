const axios = require('axios')
const { prefix } = require('../../config') 
const { collection } = require('../../lib/scraper')

module.exports = {
   name: 'collection',
   category: 'game',
   desc: 'Sends user\'s total card collection.',
   async exec(citel, Void,args) {
const user = citel.sender.split("@")[0]
let check = await collection(user)
teskd = `*〽️ All your collection.*\n\n`
teskd += `*There are total ${check.length} cards in your current collection.*\n`
for(let i=0;i<check.length;i++) {
//
teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁Name:-* ${check[i].name}\n`
teskd += `│ *🕸Race:-* ${check[i].race}\n`
teskd += `│ *🔖Price:-* ${check[i].price}\n`
teskd += `│ *🤼Attack:-* ${check[i].atk}\n`
teskd += `│ *🏋️‍♂️Defence:-* ${check[i].def}\n`
teskd += `│ *To check card info*\n│ _🎋${prefix}checkcard ${check[i].id}_\n`,
teskd += `│ *To Transfer Card*\n│ _🍀${prefix}tranferc ${check[i].id} [number]_\n`
teskd += `│ *To Have Party*\n│ _🍿${prefix}partyc ${check[i].id}_\n╰─────────────◆\n\n`
}
citel.reply(teskd)


   }
}
