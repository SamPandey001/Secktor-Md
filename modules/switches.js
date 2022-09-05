(async () => {
	switch (command) {
              case 'enable':
		case 'act':
			if (!querie) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)
			if (!isGroup) return citel.reply("This command is only for group")
			const privileges = isAdmins || isCreator
			if (!privileges) return citel.reply("❌ This command is only for admin")
			if (args[0] == "antilink") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, antilink: "true" })
								.save()
							return citel.reply(' Antilink Enabled Successfully')
						}
						else {
							if (gc.antilink == "true") return citel.reply("Antilink was alredy enabled is already enabled")
							await sck.updateOne({ id: citel.chat }, { antilink: "true" })
							return citel.reply('Enabled antilink in current chat.')
						}
					})
			}
			else if (args[0] == "events") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, events: "true" })
								.save()
							return citel.reply("Successfully Enabled *Events*")
						}
						else {
							if (gc.events == "true") return citel.reply("*Events* are already enabled")
							await sck.updateOne({ id: citel.chat }, { events: "true" })
							return citel.reply("Successfully Enabled *Events*")
						}
					})
			}
			else if (args[0] == "bot") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, botenable: "true" })
								.save()
							return citel.reply(`Successfully Enabled *${LangG.title}*`)
						}
						else {
							if (gc.botenable == "true") return citel.reply("*Bot* was already enabled")
							await sck.updateOne({ id: citel.chat }, { botenable: "true" })
							console.log(gc.botenable)
							return citel.reply(`Successfully Enabled *${LangG.title}*`)
						}
					})
			}
			else if (args[0] == "nsfw") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, nsfw: "true" })
								.save()
							return citel.reply("Successfully Enabled *NSFW*")
						}
						else {
							if (gc.nsfw == "true") return citel.reply("*NSFW* is already enabled")
							await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
							console.log(gc.invite)
							return citel.reply("Successfully Enabled *NSFW*")
						}
					})
			}
			else {
				citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
			}
			break
			//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
		case 'disable':
		case 'deact':
			if (!querie) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)
			if (!isGroup) return citel.reply("This feature in only for Group.")
			let privilegess = isAdmins || isCreator
			if (!privilegess) return citel.reply("❌ This Command is only for Admin")
			if (args[0] == "antilink") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("Antilink disabled")
						}
						else {
							if (usr.antilink !== "true") return citel.reply(" Antlinki was already disabled")
							await sck.updateOne({ id: citel.chat }, { antilink: "false" })
							return citel.reply("Disabled antilink Successfully.");
						}
					})
			}
			else if (args[0] == "events") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("Events were already disabled")
						}
						else {
							if (usr.events !== "true") return citel.reply("Events was already disabled")
							await sck.updateOne({ id: citel.chat }, { events: "false" })
							return citel.reply("Successfully Disabled *Events*");
						}
					})
			}
			else if (args[0] == "bot") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("*Bot* is already disabled")
						}
						else {
							if (usr.botenable !== "true") return citel.reply("*Bot* was already disabled")
							await sck.updateOne({ id: citel.chat }, { botenable: "false" })
							return citel.reply("🧩 Successfully Disabled *Bot*");
						}
					})
			}
			else if (args[0] == "nsfw") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("*NSFW* is already disabled")
						}
						else {
							if (usr.nsfw !== "true") return citel.reply("*NSFW* is already disabled")
							await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
							return citel.reply("Successfully Disabled *NSFW*");
						}
					})
			}
			else {
				citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
			}
			break
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
		case "antilink": {
			if (querie === "help") {
				return citel.reply("*❗Command:* toggle antilink\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${prefix}antilink\n\n*📚Description:* Turns antilink off and on in specific group.");
			}
			if (!args[0]) {
				let chatbotbutton = [{
            buttonId: `${prefix}act antilink`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}deact antilink`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `Antilink`,
					headerType: 4,
				        buttons: chatbotbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
			}
		}
		break;
		case "pmpermit": {
			if (querie === "help") {
				return citel.reply("*❗Command:* toggle pmpermit\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${prefix}pmpermit on/off\n\n*📚Description:* Turns pmpermit off and on.");
			}
			if (!args[0]) {
				let pmpermitbutton = [{
            buttonId: `${prefix}pmpermit on`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}pmpermit off`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `pmpermit`,
					headerType: 4,
				        buttons: pmpermitbutton,
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
                ["PMPERMIT"]: "true",
					},
				});
				await citel.reply(` 🟩Turning pmpermit on`);
				return;
			}
			if (querie === "off") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["PMPERMIT"]: "false",
					},
				});
				await citel.reply(`🟨Turning pmpermit off.`);
				return
			}
		}
		break;
	
               case "events": {
			if (querie === "help") {
				return citel.reply("*❗Command:* toggle events\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${prefix}events\n\n*📚Description:* Turns events off and on in specific group.");
			}
			if (!args[0]) {
				let chatbotbutton = [{
            buttonId: `${prefix}act events`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}deact events`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `Events`,
					headerType: 4,
				        buttons: chatbotbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
			}
		}
		break;
        case "nsfw": {
			if (querie === "help") {
				return citel.reply("*❗Command:* toggle nsfw\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${prefix}nsfw\n\n*📚Description:* Turns nsfw off and on in specific group.");
			}
			if (!args[0]) {
				let chatbotbutton = [{
            buttonId: `${prefix}act nsfw`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}deact nsfw`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `NSFW-Switch`,
					headerType: 4,
				        buttons: chatbotbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
			}
		}
		break;
	}
})()
