const { tlang } = require('../../lib/scraper')
const { prefix } = require('../../config') 

module.exports = {
    name: 'kick',
    category: 'group',
    desc: 'Kicks replied/quoted user from group.',
    async exec(citel, Void,args) {	    
		const mentionByTag = citel.mtype == "extendedTextMessage" && citel.message.extendedTextMessage.contextInfo != null ? citel.message.extendedTextMessage.contextInfo.mentionedJid : [];
			  if (!citel.isGroup) return citel.reply(tlang().group);
			  if (!isAdmins) return citel.reply(tlang().admin);
	 if (!isBotAdmins) return citel.reply(tlang().botAdmin);
			  
			  try {
				let mention = mentionByTag;
				let users = (await mention[0]) || citel.msg.contextInfo.participant;
				if (!users) return;
				await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
			  } catch  {
		//		citel.reply(tlang().botAdmin);
				
			  }
    }
 } 
 
