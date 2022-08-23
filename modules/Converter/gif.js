(async () => {
	switch (command) {
	
	case "gif":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Gif\n*🍀Aliases* -gif reply to any sticker\n*🧩Category:* Converter\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Converts sticker into Gif.`
            );
            return;
          }

          if (!quoted) return citel.reply("Reply to any Image");
          if (!/webp/.test(mime))
            return citel.reply(`reply to sticker *${prefix + command}*`);

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
              gifPlayback: true,
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
