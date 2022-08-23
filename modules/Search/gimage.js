(async () => {
	switch (command) {
	  case "gimage":
      case "img":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Google Image\n*🍀Aliases* -gimage,-img\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query on Google Images and sends one randomly.`
            );
            return;
          }
          if (!args[0])
            return reply("Hey bie please tell me for which pic you're looking");
            let name1 = querie.split("|")[0]
 let name2 = querie.split("|")[1] || `1`
citel.reply(`Sending ${name2} image(s) of ${name1} in chat`)
             let nn= name2
for (let i = 0; i < nn; i++) {
          let gis = require("g-i-s");
          gis(name1, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            /*let buttons = [
              {
                buttonId: `-gimage ${args.join(" ")}`,
                buttonText: {
                  displayText: "🪄Next Image ",
                },
                type: 1,
              },
            ];
            */
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: ` `,
              headerType: 4,
            };

  Void.sendMessage(citel.chat, buttonMessage, {
              quoted: citel,
            });
})
          };
        }
         break;
	}
})()
	  
