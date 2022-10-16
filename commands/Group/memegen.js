let { TelegraPh } = require('../../lib')
const fs = require('fs-extra')

module.exports = {
   name: 'memegen',
   category: 'group',
   desc: 'Write text on quoted image.',
   async exec(citel, Void,args) {
   let mime = citel.quoted.mtype
   if (!/image/.test(mime)) return citel.reply(`Reply to Photo With Caption *text*`)
mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${args.join(" ")}.png?background=${mem}`
memek = await Void.sendImageAsSticker(citel.chat, meme, citel, { packname: citel.pushName, author: 'Secktor' })
await fs.unlinkSync(memek)

   }
}
