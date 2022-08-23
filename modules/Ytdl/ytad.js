
(async () => {
	switch (command) {
       case "ytad":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   YouTube Audio\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads Audio from given YouTube link and sends in current chat.`
            );
            return;
          }
          Void.sendMessage(
            from,
            {
              audio: {
                url: args[0],
              },
              mimetype: "audio/mpeg",
              contextInfo: {
                externalAdReply: {
                  title: LangG.BotName,
                  body: `FEEL THE SONG💕`,
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
