const { sck1,tlang } = require('../../lib')

module.exports = {
   name: 'unban',
   category: 'owner',
   desc: 'Unbans banned user (from using bot).',
   async exec(citel, Void,args,isCreator) {
    if (!isCreator) return citel.reply("This command is onlt for my Owner")
    try {
   
   let mention = citel.mtype == "extendedTextMessage" && citel.message.extendedTextMessage.contextInfo != null ? citel.message.extendedTextMessage.contextInfo.mentionedJid : [];
   let users = await (mention[0]) || citel.msg.contextInfo.participant
 if (!users) return citel.reply("Please mention any user.❌")
let pushnamer = Void.getName(users);
sck1.findOne({ id : users }).then(async(usr) => {
      if (!usr) {
    console.log(usr.ban)
return citel.reply(`${pushnamer} is unbanned.`)
  } else {
    console.log(usr.ban)
  if(usr.ban !== "true") return citel.reply(`${pushnamer} is already unbanned.`)
               await sck1.updateOne({ id: users }, {ban: "false"})
         console.log("user banned")
           return citel.reply(`${pushnamer} is free as a bird now`)
         }
     })
          } catch {
return citel.reply("Please mention any user.❌")
  }


   }
}
