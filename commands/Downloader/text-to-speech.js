const googleTTS = require("google-tts-api"); // CommonJS

module.exports = {
    name: 'tts',
    category: 'downloader',
    desc: 'Makes audio of Given text',
	use: '<This is Secktor Userbot.>',
	async exec(citel, Void,args) {
        if (!args[0]) return citel.reply('Please give me Sentence to change into audio.')
        let texttts = args.join(" ")
			const ttsurl = googleTTS.getAudioUrl(texttts, {
				lang: "en",
				slow: false,
				host: "https://translate.google.com",
			});
			Void.sendMessage(citel.chat, {
				audio: {
					url: ttsurl,
				},
				mimetype: "audio/mpeg",
				fileName: `ttsCitelVoid.m4a`,
			}, {
				quoted: citel,
			});
		}
 
    }