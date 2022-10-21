const { tlang,getAdmin,prefix,addCommand,Config,sck } = require('../../lib')

module.exports = {
    name: 'antilink',
    category: 'misc',
    desc: 'activates and deactivates antilink.\nuse buttons to toggle.',
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
						buttonId: `${prefix}act antilink`,
						buttonText: {
							displayText: "Turn On",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}deact antilink`,
						buttonText: {
							displayText: "Turn Off",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `Activate antilink:Deletes Link + kick`, Void.user.name, citel);
			}
    }
 }


 addCommand({ on: "body" }, async (Void,citel) => {
	if (Config.autoreaction ==='true' && citel.text.startsWith(prefix)) {
		const emojis = ['❤','💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌','🙂','🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
		const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
		Void.sendMessage(citel.chat, {
			  react: {
				text: emokis,
				key: citel.key
			  }})
	}
 })
