const { haigu } = require('../../lib/core')
const { prefix } = require('../../config') 
const { tlang,botpic,marry,checkmarried } = require('../../lib/scraper')
 
module.exports = {
    name: 'marry',
    category: 'game',
    desc: 'Makes user marry to randomely appeared haigusha character..',
    async exec(citel, Void,args) {
        if(!args.join(" ")) return citel.reply(`*Hey ${citel.pushName}, You can only marry to a randomly appeared character.*`)
        try{
          await marry(citel.sender,args.join(" "))

          citel.reply(`You Married to ${args.join(" ")}`)
    } catch (e) { 
        console.log(e)    
      let idd = await haigu.findOne({id: citel.sender})
      let gg = idd.haig
let charadesc = await checkmarried(citel.sender)
                
 let generatebuttotn = [{
                     buttonId: `${prefix}divorce`,
                     buttonText: {
                         displayText: `Divorce`
                     },
                     type: 1
                 }
                 ]
                 let buttonMessaged = {
                     image: { url: await botpic() },
                     caption:`*-------------*\n\n*Hey ${citel.pushName}*\n\n*You are already married to ${gg}*\n*-------------*\n`+charadesc,
                     footer: ` Haigusha`,
                     headerType: 4,
                         buttons: generatebuttotn,
                     contextInfo: {
                         externalAdReply: {
                             title: 'Secktor Haigusha',
                             body: `Double wife huh!?`,
                             thumbnail: log0,
                             mediaType: 2,
                             mediaUrl: ``,
                             sourceUrl: ``,
                         },
                     },
                 };
                 await Void.sendMessage(citel.chat, buttonMessaged, {
                     quoted: citel,
                 })
                }
    }
 }