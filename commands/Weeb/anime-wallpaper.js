
const { tlang } = require('../../lib')

module.exports = {
   name: 'animewall',
   category:'weeb',
   desc: 'Anime Wallpaper Random',
   async exec(citel, Void, args) {
      try {

        var ecchid = "anime wallpaper for desktop full hd";
			let gis = require("g-i-s");
			gis(ecchid, async (error, result) => {
				n = result;
				images = n[Math.floor(Math.random() * n.length)].url;
				let buttonMessage = {
					image: {
						url: images,
					},
					caption: `*--- Anime Wallpaper---*`,
					footer: Void.user.name,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: `Anime-Wallpaper`,
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
