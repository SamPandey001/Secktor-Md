(async () => {
	switch (command) {
  case "mp4":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   MP4\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } video link\n\n*📚Description:* Downloads video from given link and Sends that in chat.`
            );
            return;
          }
          if (!args[0]) return reply(`Where's the link ?`);
          try {
            Void.sendMessage(
              from,
              {
                video: {
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
            citel.reply("Link error!");
          }
          return
        }
         break;
         }
})()
