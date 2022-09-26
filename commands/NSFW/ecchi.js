const bs = require("@bochilteam/scraper")
const { sck } = require('../../lib/core')
const { tlang } = require('../../lib/scraper')

module.exports = {
   name: 'ecchi',
   category:'nsfw',
   desc: 'Sends Ecchi pic🤘',
   use: '<query>',
   async exec(citel, Void, args) {
      try {

        var ecchid = "Ecchi Porn HD PICS";
			let gis = require("g-i-s");
			let zerogroup = (await sck.findOne({
				id: citel.chat,
			})) || (await new sck({
					id: citel.chat,
				})
				.save());
			let mongoschemas = zerogroup.nsfw || "false";
            if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
			gis(ecchid, async (error, result) => {
				n = result;
				images = n[Math.floor(Math.random() * n.length)].url;
				let buttonMessage = {
					image: {
						url: images,
					},
					caption: `*----「 Ecchi 」----*`,
					footer: Void.user.name,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: `Secktor-NSFW`,
							jpegThumbnail:log0,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					}, 
				};
				Void.sendMessage(citel.chat, buttonMessage,{viewOnce : true}, {
					quoted: citel,
				});
            })
         } catch (e) {
           console.log(e)
      }
   }
}

