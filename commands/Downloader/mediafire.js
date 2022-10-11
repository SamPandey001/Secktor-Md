const { tlang } = require('../../lib')
const { mediafire } = require("../../lib/mediafire.js");

module.exports = {
    name: 'mediafire',
	alias: ['mediafiredl','mfdl'],
    category: 'downloader',
    desc: 'Downloads zip from Mediafire and sends in chat.',
    use: '<url>',
	async exec(citel, Void,args) {
        if (!args[0]) return citel.reply(`Give link ${tlang().greet}`);
			if (!isUrl(args[0]) && !args[0].includes("mediafire.com")) return reply(`The link you provided is invalid`);
			const baby1 = await mediafire(args.join(" "));
			if (baby1[0].size.split("MB")[0] >= 999) return reply("*File Over Limit* " + util.format(baby1));
			const result4 = `*Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* : ${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}
*Lɪɴᴋ* : ${baby1[0].link}`;
			reply(`${result4}`);
			Void.sendMessage(citel.chat, {
					document: {
						url: baby1[0].link,
					},
					fileName: baby1[0].nama,
					mimetype: baby1[0].mime,
				}, {
					quoted: citel,
				})
				.catch((err) => reply("could not found anything"));
 
    }
 }