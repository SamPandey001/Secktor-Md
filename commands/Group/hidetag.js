
const { tlang,botpic } = require('../../lib/scraper')
module.exports = {
    name: 'hidetag',
    category: 'group',
    desc: 'Tags everyperson of group without mentioning their numbers.',
    async exec(citel, Void,args) {
      if(!citel.isGroup) return citel.reply(tlang().group)
      const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
      .catch((e) => {}) : "";
      const participants = citel.isGroup ? await groupMetadata.participants : "";
  if (!Admins) return citel.reply(tlang().admin);
        Void.sendMessage(citel.chat, {
          text: args.join(" ") ? args.join(" ") : "",
          mentions: participants.map((a) => a.id),
        }, {
          quoted: citel,
        });
    }
 }
      
