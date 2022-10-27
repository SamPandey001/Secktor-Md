const { tlang,sleep,getAdmin } = require('../../lib')

module.exports = {
    name: 'add',
    category: 'owner',
    desc: 'adds user in group',
    async exec(citel, Void,args) {
		    if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void,citel)
			const botNumber =  await Void.decodeJid(Void.user.id) 
			const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
			const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
	    
        if (!args[0]) return citel.reply("Please reply to user");
        if (!isAdmins) return citel.reply(tlang().admin);
	if (!isBotAdmins) return citel.reply(tlang().botAdmin);
        let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Void.groupParticipantsUpdate(citel.chat, [users], "add");
			
    }
 }
 
