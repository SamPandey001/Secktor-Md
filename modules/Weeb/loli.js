(async () => {
	switch (command) {
	case "loli":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -loli\n*🧩Category:* Weeb\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Send a Hot loli at your chat.`
          );
          return;
        }
        waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
        var wbutss = [
          {
            buttonId: `${prefix}loli`,
            buttonText: {
              displayText: `Next Loli✨`,
            },
            type: 1,
          },
        ];
        let buttonsMessage = {
          image: await getBuffer(waifud.data.url),
          caption: `Here you go!`,
          footer: LangG.footer,
          buttons: wbutss,
          headerType: 4,
        };
        await Void.sendMessage(citel.chat, buttonsMessage, {
          quoted: citel,
        }).catch((err) => {
          return "Error!";
        });
        break;
	
	}
})()
