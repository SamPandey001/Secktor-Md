
const { tlang,botpic,getAdmin } = require('../../lib')
module.exports = {
    name: 'hidetag',
    category: 'group',
    desc: 'Tags everyperson of group without mentioning their numbers.',
    async exec(citel, Void,args) {
      if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
			  const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void,citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);
        
      if (!isAdmins) citel.reply(tlang().admin);
        Void.sendMessage(citel.chat, {
          text: args.join(" ") ? args.join(" ") : "",
          mentions: participants.map((a) => a.id),
        }, {
          quoted: citel,
        });
    }
 }
      
