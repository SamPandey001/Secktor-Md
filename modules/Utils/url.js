(async () => {
	switch (command) {

 case "url":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   URL\n*🍀Aliases* -url reply to image\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } reply to Image\n\n*📚Description:* Uploads replied image on Telegraph and Gives url into chat.`
            );
            return;
          }

          let {
            UploadFileUgu,
            webp2mp4File,
            TelegraPh,
          } = require("./lib/scraper");
          if (!quoted)
            return citel.reply(`Pls mention me any image/video and type ${
              prefix + command
            } to upload my ${LangG.greet}`);
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            citel.reply(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await TelegraPh(media);
            citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n`+util.format(anu));
          }
          await fs.unlinkSync(media);
        }
         break;

		}
})()
