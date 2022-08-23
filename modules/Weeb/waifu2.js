(async () => {
	switch (command) {
	 case "waifu2":
        if (querie === "help") {
        await citel.reply(`*❗Command:* Waifu\n*🍀Aliases* -waifu2\n*🧩Category:* Random\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Sends Hot Waifu Pic`)
          return;
        }
        waifuddd = await axios.get("https://waifu.pics/api/sfw/waifu");
        var wbuttsssr = [
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
        let button4Messageshs = {
          image: {
            url: waifuddd.data.url,
          },
          caption: " *Here we go!!!!*",
          buttons: wbuttsssr,
          headerType: 1,
        };

        await Void.sendMessage(citel.chat, button4Messageshs, {
          quoted: citel,
        }).catch((err) => {
          return "error..";
        });
         break;
	
	}
})()
