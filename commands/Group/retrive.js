const djs = require("@discordjs/collection")
const {tlang} = require('../../lib/')
module.exports = {
   name: 'retrive',
   category: 'group',
   desc: 'Copies and Forwords viewonce message.',
   use: ' reply to any message',
   async exec(citel, Void, args) {
    if (!citel.quoted) return reply("Please reply to any message Image or Video!");
    let mime = citel.quoted.mtype
     if (/viewOnce/.test(mime))  {
      const mtype = Object.keys(quoted.message)[0];
      delete quoted.message[mtype].viewOnce;
      const msgs = proto.Message.fromObject({
         ...quoted.message,
      });
      const prep = generateWAMessageFromContent(citel.chat, msgs, { quoted: citel });
      await Void.relayMessage(citel.chat, prep.message, { messageId: prep.key.id });
   } else {
      await msg.reply("please, reply to viewOnceMessage");
   }
   }
}

