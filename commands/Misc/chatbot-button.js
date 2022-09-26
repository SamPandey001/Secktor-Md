const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix

module.exports = {
    name: 'chatbot',
    category: 'owner',
    desc: 'Buttons for turning chatbot on and off.',
    async exec(citel, Void,args,isCreator) {
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
			if (!isCreator) return citel.reply(tlang().owner);
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			if (args.join(" ") === "on") {
				// await Void.updateProfileName(`tlang().title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["CHATBOT"]: "on",
					},
				});
				await citel.reply(` 🟩Turning chatbot on`);
				return;
			}
			if (args.join(" ") === "off") {
				//      await Void.updateProfileName(`tlang().title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["CHATBOT"]: "off",
					},
				});
				await citel.reply(`🟨Turning chatbot off.`);
				return
			}
    }
    }
