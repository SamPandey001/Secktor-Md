const axios = require('axios')

module.exports = {
   name: 'meme',
   category: 'misc',
   desc: 'Sends meme in chat.',
   async exec(citel, Void,args) {
    waifudd = await axios.get("https://meme-api.herokuapp.com/gimme");
			let button2Messages = {
				image: {
					url: waifudd.data.url,
				},
				caption: waifudd.data.title,
				headerType: 1,
			};
			await Void.sendMessage(citel.chat, button2Messages, {
					quoted: citel,
				})
   }
}