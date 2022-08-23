
(async () => {
	switch (command) {
  case "ytvd":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   YouTube Video\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads video from given YouTube link and sends in current chat.`
            );
            return;
          }
          Void.sendMessage(
            from,
            {
              video: {
                url: args[0],
              },
              mimetype: "video/mp4",
              caption: "Here it is. Enjoy💕",
              contextInfo: {
                externalAdReply: {
                  title: LangG.BotName,
                  body: `Youtube DL`,
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
        }
         break;
         }
        })()
