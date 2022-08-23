
(async () => {
	switch (command) {
  case "music":
      case "play":
      case "ytplay":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   YouTube Video/audio\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link/query\n\n*📚Description:* Downloads video/audio from given Query  and sends in current chat.`
            );
            return;
          }
          if (!querie) return citel.reply(`Use ${prefix + command} Back in Black`);
          let yts = require("yt-search");
          let search = await yts(querie);
          let anu = search.videos[0];
          //let ytvc = await hx.youtube(anu.url)
          let thumb = await getBuffer(search.videos[0].thumbnail);
          let buttons = [
            {
              buttonId: `${prefix}ytmp4 ${anu.url}`,
              buttonText: {
                displayText: "► Video",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytmp3 ${anu.url}`,
              buttonText: {
                displayText: "♫ Audio",
              },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: {
              url: anu.thumbnail,
            },
            caption: `
*Secktor Youtube Player* ✨

*Title:* ${anu.title}
*Duration:* ${anu.timestamp}
*Viewers:* ${anu.views}
*Uploaded:* ${anu.ago}
*Author:* ${anu.author.name}
*Url* : ${anu.url}`,
            footer: LangG.footer,
            buttons: buttons,
            headerType: 4,
          };
          Void.sendMessage(citel.chat, buttonMessage, {
            quoted: citel,
          });
        }
         break;
         }
        })()
