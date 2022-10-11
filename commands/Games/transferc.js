const { sck, card } = require('../../lib')
const axios = require('axios')
const { prefix } = require('../../config')

module.exports = {
   name: 'transferc',
   category: 'game',
   desc: 'You can transfer your card to  anyone with this command.',
   async exec(citel, Void,args) {
    try{
    let cdata = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${args.join(" ")}`)
    let data = cdata.data.data[0]
    let cname = await card.findOne({
      id: args[0],
    user: citel.sender })
      await card.deleteOne({
       id: args[0],
       user: citel.sender
     })
   //   button - are you sure
       let generatebutton = [{
                   buttonId: `${prefix}transfercc ${args.join(" ")}`,
                   buttonText: {
                       displayText: `Are you Sure?`
                   },
                   type: 1
               }
               ]

   let str = `*----------------------------*\n\n〽️ Are you sure??.\n`
               str += `*Hey ${citel.pushName}, Do you want to transfer ${data.name}?.\n\n*----------------------------*\n`
        str += `*☘️Name:* ${data.name}\n*〽️About:* ${data.desc}\n*🍁Race:* ${data.race}\n*💶Price:* ${data.card_prices[0].amazon_price*1000}\n\n`
  str += `*Powered by Secktor Bot*`
console.log(str)
               let buttonMessaged = {
                   image: { url: data.card_images[0].image_url },
                   caption: str,
                   footer: ` Secktor Card`,
                   headerType: 4,
                   buttons: generatebutton,
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

            } catch {
                return
            }

   }
}