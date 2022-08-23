(async () => {
	switch (command) {
	
	 case "tomp4":
      case "tovideo":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*  Tomp4\n*🍀Aliases* -tomp4,tovideo\n*🧩Category:* Converter\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* changes gif into video.`
            );
            return;
          }
          if (!quoted) return citel.reply("Reply to any Image");
          if (!/webp/.test(mime))
          return citel.reply(`tag sticker and type *${prefix + command}* my ${
              LangG.greet
            }.`);

          let { webp2mp4File } = require("./lib/uploader");
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await Void.sendMessage(
            citel.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: citel,
            }
          );
          await fs.unlinkSync(media);
          return
        }
        break;
	}
})()
