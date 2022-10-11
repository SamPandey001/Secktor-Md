const prefix = require('../../config')
const { fetchJson } = require('../../lib')
const fs = require('fs')

module.exports = {
   name: 'emix',
   category: 'misc',
   desc: 'Mixes two emojies..',
   async exec(citel, Void,args) {

    let text = args.join(" ")
    if (!text) return citel.reply(`Example : ${prefix}emix 😅,🤔`);
			let [emoji1
				, emoji2
			] = text.split`,`;
			let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1 )}_${encodeURIComponent(emoji2)}`);
			for (let res of anu.results) {
				let encmedia = await Void.sendImageAsSticker(citel.chat, res.url, citel, {
					packname: global.packname,
					author: global.author,
					categories: res.tags,
				});
				await fs.unlinkSync(encmedia);
   }
}
}
