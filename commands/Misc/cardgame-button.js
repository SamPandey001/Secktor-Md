const { tlang,getAdmin,prefix } = require('../../lib')

module.exports = {
    name: 'cardgame',
    category: 'misc',
    desc: 'activates and deactivates cardgame.\nuse buttons to toggle.',
    async exec(citel, Void,args) {
		if (!citel.isGroup) return citel.reply(tlang().group);
		const groupAdmins = await getAdmin(Void,citel)
		const botNumber =  await Void.decodeJid(Void.user.id) 
		const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;  
        if(!isAdmins) return citel.reply(tlang().admin) 
        if(!isBotAdmins) return citel.reply(tlang().botadmin)
        {
				let buttons = [
					{
						buttonId: `${prefix}act cardgame`,
						buttonText: {
							displayText: "Turn On",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}deact cardgame`,
						buttonText: {
							displayText: "Turn Off",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `Activate cardgame:Appreares Card`, Void.user.name, citel);
			}
    }
 }
