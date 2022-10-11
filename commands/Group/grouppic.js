const { tlang,getAdmin } = require('../../lib')

module.exports = {
    name: 'grouppic',
    category: 'group',
    desc: 'Sets a profile pic in Group.',
    async exec(citel, Void,args) {
        if (!citel.isGroup) return citel.reply(tlang().group);
		const groupAdmins = await getAdmin(Void,citel)
		const botNumber =  await Void.decodeJid(Void.user.id) 
		const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;


       let mime = citel.quoted.mtype
        if (!citel.isGroup) citel.reply(tlang().group);
			if (!isAdmins) citel.reply(tlang().admin);
			if (!isBotAdmins) citel.reply(tlang().botadmin);
			if (!citel.quoted) return citel.reply(`Send/Reply Image With Caption ${command}`);
			if (!/image/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
			if (/webp/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
			let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
			await Void.updateProfilePicture(citel.chat, {
					url: media,
				})
				.catch((err) => fs.unlinkSync(media));
			citel.reply(tlang().success);
 
    }
 }