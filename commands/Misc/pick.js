module.exports = {
    name: 'pick',
    category: 'misc',
    desc: 'Pics random user from Group.',
    async exec(citel, Void,args) {
        if (!args) return citel.reply("*Which type of User you want?*");
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
        .catch((e) => {}) : "";
             const participants = citel.isGroup ? await groupMetadata.participants : "";
			let member = participants.map((u) => u.id);
			let me = citel.sender;
			let pick = member[Math.floor(Math.random() * member.length)];
			Void.sendMessage(citel.chat, {
				text: `The most ${querie} around us is *@${pick.split("@")[0]}*`,
				mentions: [pick],
			}, {
				quoted: citel,
			});
    }
 }