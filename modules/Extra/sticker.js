     (async () => {
	switch (command) { 
      case "sticker":
      case "s":
      case "stickergif":
      case "steal":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Sticker\n*🍀Aliases* -s,-sticker,steal\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Makes Sticker of quoted image or video.`
            );
            return;
          }
          if (!quoted) return citel.reply(`*Mention any Image or video Sir.*`);
          if (args[2]) {
            anu = args.join(" ").split("|");
            pack = anu[0] !== "" ? anu[0] : global.packname;
            author = anu[1] !== "" ? anu[1] : global.author;
          } else {
            pack = global.packname;
            author = global.author;
          }
          
          if (/image/.test(mime)) {
            let media = await quoted.download();
            citel.reply("*Processing Your request*");
            let sticker = new Sticker(media, {
              pack: pack, // The pack name
              author: author, // The author name
              type: StickerTypes.FULL, // The sticker type
              categories: ["🤩", "🎉"], // The sticker category
              id: "12345", // The sticker id
              quality: 75, // The quality of the output file
              background: "transparent", // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            Void.sendMessage(
              citel.chat,
              {
                sticker: buffer,
              },
              {
                quoted: citel,
              }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 20)
              return citel.reply("Cannot fetch videos longer than *20 Seconds*");
            let media = await quoted.download();
            let sticker = new Sticker(media, {
              pack: pack, // The pack name
              author: author, // The author name
              type: StickerTypes.FULL, // The sticker type
              categories: ["🤩", "🎉"], // The sticker category
              id: "12345", // The sticker id
              quality: 75, // The quality of the output file
              background: "transparent", // The sticker background color (only for full stickers)
            });

            const stikk = await sticker.toBuffer();

            Void.sendMessage(
              citel.chat,
              {
                sticker: stikk,
              },
              {
                quoted: citel,
              }
            );
          } else {
            citel.reply("*Uhh,Please reply to any image or video*");
          }
        }
         break;
		}
})()
