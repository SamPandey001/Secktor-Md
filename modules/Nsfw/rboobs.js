
(async () => {
	switch (command) {
       case "rboobs":
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
          var boobsd = "tits oily Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: citel.chat,
            })) ||
            (await new sck({
              id: citel.chat,
            }).save());
          let mongoschemag = zerogroup.nsfw || "false";
          gis(boobsd, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*----「 RealBoobs 」----*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `Secktor-NSFW`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: ``,
                  sourceUrl: ``,
                },
              },
            };
            if (mongoschemag == "false") return citel.reply("*NSFW* is not active.");
            Void.sendMessage(citel.chat, buttonMessage, {
              quoted: citel,
            });
          });
        }
         break;
         }
        })()
