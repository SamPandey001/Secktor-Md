
(async () => {
	switch (command) {
  case "solo":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return citel.reply("*This Feature is only available for group.*");
          var futq = "SOLO Anime Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: citel.chat,
            })) ||
            (await new sck({
              id: citel.chat,
            }).save());
          let mongoschematj = zerogroup.nsfw || "false";
          gis(futq, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*-------「 SOLO」-------*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: ``,
                  sourceUrl: ``,
                },
              },
            };
            if (mongoschematj == "false") return citel.reply("*NSFW* is not active.");
            Void.sendMessage(citel.chat, buttonMessage, {
              quoted: citel,
            });
          });
        }
        break;
        }
        })()
        
