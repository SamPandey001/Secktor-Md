const { sck1,tlang } = require('../../lib')

module.exports = {
   name: 'ban',
   category: 'owner',
   desc: 'Bans user from using bot.',
   async exec(citel, Void,args,isCreator) {
    if (!isCreator) return citel.reply(tlang().owner)
    const mentionByTag = citel.mtype == "extendedTextMessage" && citel.message.extendedTextMessage.contextInfo != null ? citel.message.extendedTextMessage.contextInfo.mentionedJid : [];
    try {
     let mention = mentionByTag
     let users = await (mention[0]) || citel.msg.contextInfo.participant
   if (!users) return citel.reply(`❌ Please mention any user ${tlang().greet}.`)
let pushnamer = Void.getName(users);
  sck1.findOne({ id : users }).then(async(usr) => {
        if (!usr) {
      await new sck1({ id: users, ban: "true" }).save()
return citel.reply(`Banned ${pushnamer} from Using Commands`)
    } else {
    if(usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)
                 await sck1.updateOne({ id: users }, {ban: "true"})
             return citel.reply(`Successfully Banned ${pushnamer} from Using Commands`)
           }
       })
            } catch (e) {
              console.log(e)
return citel.reply("Please mention any user.❌ ")
    }


   }
}


