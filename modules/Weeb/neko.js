(async () => {
	switch (command) {
	case "neko":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:*  Neko\n*🍀Aliases* -neko\n*🧩Category:* Random\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends Hot Neko Pic`
          );
          return;
        }
        nekodds = await axios.get("https://waifu.pics/api/sfw/neko");
        var wbuttsssrd = [
          {
            buttonId: `${prefix}neko`,
            buttonText: {
              displayText: `Neko`,
            },
            type: 1,
          },

          {
            buttonId: `${prefix}waifu`,
            buttonText: {
              displayText: `Waifu`,
            },
            type: 1,
          },
        ];
        let button4Messagesp = {
          image: {
            url: nekodds.data.url,
          },
          caption: "*Here we go😊!!!!*",
          buttons: wbuttsssrd,
          headerType: 1,
        };
        await Void.sendMessage(citel.chat, button4Messagesp, {
          quoted: citel,
        }).catch((err) => {
          return "error..";
        });
        break;
	
	}
})()
