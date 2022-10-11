module.exports = {
   name: 'attp',
   category: 'sticker',
   desc: 'Makes glowing sticker of text.',
   async exec(citel, Void,args) {
Void.sendMessage(citel.chat, {
		sticker: {
			url: `https://api.xteam.xyz/attp?file&text=${encodeURI(args.join(" "))}`
		}
	}, {
		quoted: citel
	})
    
   }
}
