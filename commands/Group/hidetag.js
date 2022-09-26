const { tlang,botpic } = require('../../lib/scraper')

module.exports = {
    name: 'hidetag',
    category: 'group',
    desc: 'Tags everyperson of group without mentioning their numbers.',
    async exec(citel, Void,args,isBotAdmins) {
      if(!citel.isGroup) return citel.reply(tlang().title)
      const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
      .catch((e) => {}) : "";
      const participants = citel.isGroup ? await groupMetadata.participants : "";
  if (!isBotAdmins) citel.reply(tlang().botAdmin);
        Void.sendMessage(citel.chat, {
          text: args.join(" "),
          mentions: participants.map((a) => a.id),
        }, {
          quoted: citel,
        });
    }
 }
      
