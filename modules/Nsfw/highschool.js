
(async () => {
	switch (command) {
       case "highschool":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Highschool DXD pic at chat.`
            );
            return;
          }
          if (!isGroup)
            return citel.reply("*This Feature is only available for group.*");
          var fuyq = "Highschool DXD hd wallpaper";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: citel.chat,
            })) ||
            (await new sck({
              id: citel.chat,
            }).save());
          //		let mongoschemat = zerogroup.nsfw || "false"
          gis(fuyq, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*---「 HIGHSCHOOL DXD」---*`,
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
            //		if (hht == 'false') return citel.reply("*NSFW* is not active ${LangG.greet}")
            Void.sendMessage(citel.chat, buttonMessage, {
              quoted: citel,
            });
          });
        }
         break;
         }
        })()
        
