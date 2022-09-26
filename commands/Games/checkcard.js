const { sck, card } = require('../../lib/core')
const axios = require('axios')
const prefix = require('../../config')
const { checkcard } = require('../../lib/scraper')
module.exports = {
   name: 'checkcard',
   category: 'game',
   desc: 'Get information about your claimed card.',
   use: '<ID>',
   async exec(citel, Void,args) {
    try{
    let data = await checkcard(args.join(" "))
    console.log(data)
               let str = `*-------------------------*\n\n`
               str += `*〽️ Your collected Card*\n\n*-------------------------*\n`
        str += `*☘️Name:* ${data.name}\n*〽️About:* ${data.desc}\n*🍁Race:* ${data.race}\n*💶Price:* ${data.card_prices[0].amazon_price*1000}\n`
  str += `_type: ${prefix}collection to check your collection_`
                                  
               let buttonMessaged = {
                   image: { url: data.card_images[0].image_url },
                   caption: str,
                   footer: ` Secktor Card`,
                   headerType: 4,
                   contextInfo: {
                       externalAdReply: {
                           title: 'Secktor-Card',
                           body: `${data.name}`,
                           thumbnail: log0,
                           mediaType: 2,
                           mediaUrl: ``,
                           sourceUrl: ``,
                       },
                   }, 
               };
               await Void.sendMessage(citel.chat, buttonMessaged, {
                   quoted: citel,
               });    
            } catch  {
                return
            }     

   }
}
