const { tlang,getAdmin,prefix } = require('../../lib')

module.exports = {
    name: 'kick',
    category: 'group',
    desc: 'Kicks replied/quoted user from group.',
    async exec(citel, Void,args) {	    
			  if (!citel.isGroup) return citel.reply(tlang().group);
			  const groupAdmins = await getAdmin(Void,citel)
			  const botNumber =  await Void.decodeJid(Void.user.id) 
			  const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
			  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
			  
	      if (!isAdmins) return citel.reply(tlang().admin);
	      if (!isBotAdmins) return citel.reply(tlang().botAdmin);
			  try {
				let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
				if (!users) return;
				await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
			  } catch  {
		//		citel.reply(tlang().botAdmin);

			  }
    }
 } 
