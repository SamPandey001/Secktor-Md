
(async () => {
	switch (command) {
     case "status":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Status\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows  Status of ${LangG.title} bot.`
            );
            return;
          }
          let tr = await sck1.countDocuments();
          const formater = (seconds) => {
            const pad = (s) => {
              return (s < 10 ? "0" : "") + s;
            };
            const hrs = Math.floor(seconds / (60 * 60));
            const mins = Math.floor((seconds % (60 * 60)) / 60);
            const secs = Math.floor(seconds % 60);
            return " " + pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
          };
          const dbut = [
            {
              buttonId: `${prefix}help`,
              buttonText: {
                displayText: "Menu",
              },
              type: 1,
            },

            {
              buttonId: `${prefix}rank`,
              buttonText: {
                displayText: "Rank",
              },
              type: 1,
            },
          ];
          const uptime = process.uptime();
          timestampe = speed();
          latensie = speed() - timestampe;
          let ter = `
 🔰 *${LangG.title}* 🔰

*🌟Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.

*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 0.0.3
*🎯Total Hits* : ${totalhit}
*👤Owner:*  ${global.ownername}
*📡Hosting Platform:* ${os.hostname()}

*Powered by ${LangG.title}*
`;
          let buttonMessaged = {
            image: {
              url: picsecktor,
            },
            caption: ter,
            footer: LangG.footer,
            buttons: dbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: `Bot-Status`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
        }
         break;
         }
        })()
