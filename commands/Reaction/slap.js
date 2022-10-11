const axios = require('axios')
const { fetchJson ,GIFBufferToVideoBuffer} = require('../../lib')

module.exports = {
   name: 'slap',
   category: 'reaction',
   async exec(citel, Void) {

    var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`);
			try {
				let usep = citel.sender;
				let recp = ``;
				try {
					users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
					ment = [usep, users];
				}
				catch {
					users = "none";
					ment = [usep, citel.sender];
				}
				if (!citel.quoted) {
					recp = `@${citel.sender.split("@")[0]} *_slaped everyone over here._*`;
				}
				else {
					const rcpp = `@${users.split("@"[0])}`;
					recp = `@${citel.sender.split("@")[0]} slaped to @${
          users.split("@")[0]
        } `;
				}
				const response = await axios.get(pat.url, {
					responseType: "arraybuffer",
				});
				const buffer = Buffer.from(response.data, "utf-8");
				var sgif = await GIFBufferToVideoBuffer(buffer);
				Void.sendMessage(citel.chat, { video: sgif, gifPlayback: true, mentions: ment, caption: recp }, { quoted: citel });
			}
			catch (error) {
				//console.log(error);
			}
   }
}
