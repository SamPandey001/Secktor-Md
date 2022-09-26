const { tlang } = require('../../lib/scraper')

module.exports = {
    name: 'grouppic',
    category: 'group',
    desc: 'Sets a profile pic in Group.',
    async exec(citel, Void,args,isBotAdmins,isAdmins) {
       let mime = citel.quoted.mtype
        if (!citel.isGroup) citel.reply(tlang().group);
			if (!isAdmins) citel.reply(tlang().admin);
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