
(async () => {
	switch (command) {
 case "tts":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:* Text-To-Speech\n*🍀Aliases* -tts\n*🧩Category:* Downloader/Utils\n*🛠️Usage:* ${
                prefix + command
              } Text\n\n*📚Description:* Changes your text into Voice`
            );
            return;
          }
          let texttts = text
            ? text
            : citel.quoted && citel.quoted.text
            ? citel.quoted.text
            : citel.text;
          const googleTTS = require("google-tts-api"); // CommonJS
          const ttsurl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          Void.sendMessage(
            citel.chat,
            {
              audio: {
                url: ttsurl,
              },
              mimetype: "audio/mpeg",
              fileName: `ttsCitelVoid.m4a`,
            },

            {
              quoted: citel,
            }
          );
        }
        break;


		}
})()
 
