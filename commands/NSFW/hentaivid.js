const { sck } = require('../../lib/core')
const { tlang,hentai } = require('../../lib/scraper')

module.exports = {
   name: 'hentaivid',
   category:'nsfw',
   desc: 'Sends hentai video🤘',
   use: '<query>',
   async exec(citel, Void, args) {
      try {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.nsfw || "false";
        if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
       let h = hentai()
       Void.sendMessage(citel.chat,{video: { url: h[0].video1},caption: 'Now I can see your future.'})
         } catch (e)  {
           console.log(e)
      }
   }
}

