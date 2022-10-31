const axios = require('axios')
const {Sticker,createSticker,StickerTypes} = require("wa-sticker-formatter");

module.exports = {
   name: 'quotely',
   category: 'sticker',
   alias: ["q"],
   desc: 'Makes Sticker of quoted text.',
   use: '<reply to any users message>',  
   async exec(citel, Void,args) {
   if (!citel.quoted) return citel.reply("Please quote/reply to any message");
			let textt = citel.quoted.text;
			let pfp;
			try {
				pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
			}
			catch (e) {
				pfp = THUMB_IMAGE;
			}
			let todlinkf = ["#FFFFFF", "#000000"];
			let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
			let tname = Void.getName(citel.quoted.sender) || citel.pushName
			let body = {
				type: "quote",
				format: "png",
				backgroundColor: todf,
				width: 512,
				height: 512,
				scale: 3,
				messages: [
					{
						avatar: true,
						from: {
							first_name: tname,
							language_code: "en",
							name: tname,
							photo: {
								url: pfp,
							},
						},
						text: textt,
						replyMessage: {},
              },
            ],
			};
			let res = await axios.post("https://bot.lyo.su/quote/generate", body);
			let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
			let sticker = new Sticker(img, {
				pack: 'Secktor-Quotely',
				author: 'SamPandey001', 
				type: StickerTypes.FULL,
				categories: ['🤩', '🎉'],
				id: '12345', 
				quality: 85,
				background: 'transparent'
			})
			const buffer = await sticker.toBuffer()
			Void.sendMessage(citel.chat, {
				sticker: buffer
			}, {
				quoted: citel
			})
   }
}
