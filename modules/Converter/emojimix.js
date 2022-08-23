(async () => {
	switch (command) {
	
	case "emix":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*  Emoji Mix\n*🍀Aliases* -emix\n*🧩Category:* Fun\n*🛠️Usage:* ${
                prefix + command
              } 😅+🤔 \n\n*📚Description:* Mixes two emoji into one.`
            );
            return;
          }
          if (!text) return citel.reply(`Example : ${prefix + command} 😅+🤔`);
          let [emoji1, emoji2] = text.split`+`;
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anu.results) {
            let encmedia = await Void.sendImageAsSticker(
              citel.chat,
              res.url,
              citel,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
            await fs.unlinkSync(encmedia);
          }
          return
        }
        break;
    }
})()
