(async () => {
	switch (command) {
  
  case "jpeg":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   JPEG\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } image link\n\n*📚Description:* Downloads image from given link and Sends that in chat.`
            );
            return;
          }
          if (!args[0]) return reply(`Where's the link?`);
          try {
            Void.sendMessage(
              from,
              {
                image: {
                  url: args[0],
                },
                caption: "*HERE WE GO*",
                contextInfo: {
                  externalAdReply: {
                    title: LangG.BotName,
                    body: `${global.ownername}`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                  },
                },
              },
              {
                quoted: citel,
              }
            );
          } catch {
            reply("Link error");
          }
          return
        }
         break;
         }
})()
