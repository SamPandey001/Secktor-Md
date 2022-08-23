
(async () => {
	switch (command) {
case "q":

        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:* Quotely Maker\n*🍀Aliases* -q,-quotely\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } reply to any message\n\n*📚Description:* Makes quote sticker of replied message like Quotely Telegram Bot.`
            );

            return;
          }
 if (!citel.quoted) return citel.reply("Please quote/reply to any message");

          //let pfp = await Void.profilePictureUrl(citel.quoted.sender, 'image');
          let textt = citel.quoted.text;

          try {
            pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
          } catch (e) {
            pfp =
              "https://raw.githubusercontent.com/SamPandey001/Secktor-Md/main/assets/SocialLogo%201.png";
          }

          // var randomColor= Math.floor(Math.random()*16777215).toString(16);
          let todlinkf = ["#FFFFFF", "#000000"];
          let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
          let samhh = args[1] || todf;
          let tname = args[0] || Void.getName(citel.quoted.sender);
          let body = {
            type: "quote",
            format: "png",
            backgroundColor: samhh,
            width: 512,
            height: 400,
            scale: 3,
            messages: [
              {
                avatar: true,
                from: {
                  first_name: tname,
                  language_code: "en",
                  name: tname,
                  photo: {
                    url: pfp,
                  },
                },
                text: textt,
                replyMessage: {},
              },
            ],
          };

          let res = await axios.post("https://bot.lyo.su/quote/generate", body);
          let img = Buffer.alloc(
            res.data.result.image.length,
            res.data.result.image,
            "base64"
          );

          await Void.sendImageAsSticker(citel.chat, img, citel, {
            packname: global.packname,
            author: global.author,
          });
        }
         break;        
		}
})()
