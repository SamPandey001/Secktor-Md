const { sck, card,claim } = require('../../lib')
const axios = require('axios')
const { prefix } = require('../../config') 
module.exports = {
    name: 'claim',
    category: 'game',
    desc: 'Claims randomly appeared character into your collection.',
    async exec(citel, Void,args) {
 try{
    if(!args[9]) return citel.reply('You can only claim appeared characters.')
// cardenable
  let checkcard = await sck.findOne({id: citel.chat})
  let rej = checkcard.cardenable || "false"
  if(rej!=='active') return citel.reply("No catchable card in current group.")
  let user = citel.sender.split('@')[0]
  let data = await claim(args.join(" ").slice(9),user)
  console.log(args.join(" ").slice(9))
  
                  let str = `*-------------------------*\n\n〽️ Successfully Claimed.\n`
                      str += `*Hey ${citel.pushName}, card ${data.name} has been added in your collection*.\n\n*-------------------------*\n`
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
                
    } catch (e) {
       console.log(e)
    }
}
 }
