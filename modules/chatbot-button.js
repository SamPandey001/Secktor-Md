(async () => {
	switch (command) {
		case "chatbot": {
			if (querie === "help") {
				return citel.reply("*❗Command:* toggle chatbot\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${prefix}chatbot on/off\n\n*📚Description:* Turns chatbot off and on.");
			}
			if (!args[0]) {
				let chatbotbutton = [{
            buttonId: `${prefix}chatbot on`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}chatbot off`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `ChatBot`,
					headerType: 4,
				        buttons: chatbotbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
			}
			if (!isCreator) return citel.reply(LangG.owner);
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			if (querie === "on") {
				// await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["CHATBOT"]: "on",
					},
				});
				await citel.reply(` 🟩Turning chatbot on`);
				return;
			}
			if (querie === "off") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["CHATBOT"]: "off",
					},
				});
				await citel.reply(`🟨Turning chatbot off.`);
				return
			}
		}
		break;
	}
})()
