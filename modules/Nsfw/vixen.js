
(async () => {
	switch (command) {
 case "vixen":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw from vixen at chat.`
            );
            return;
          }
          if (!isGroup)
            return citel.reply("*This Feature is only available for group.*");
          var picture = "Vixen Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: citel.chat,
            })) ||
            (await new sck({
              id: citel.chat,
            }).save());
          let mongoschemat = zerogroup.nsfw || "false";
            let name1 = querie.split("|")[0]
 let name2 = querie.split("|")[1] || `1`
          let nn= name2

for (let i = 0; i < nn; i++) {
          gis(picture, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*-------「 VIXEN」-------*`,
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
            if (mongoschemat == "false") return citel.reply("*NSFW* is not active");
            Void.sendMessage(citel.chat, buttonMessage, {
              quoted: citel,
            });
          });
}
        }
         break;
         }
        })()
