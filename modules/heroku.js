(async () => {
	switch (command) {
		case "setprefix": {
			if (querie === "help") {
				return citel.reply("*❗Command:* Chages Bot Prefixl\n*🧩Category:* Owner Menu\n*🛠️Usage:* -prefix -\n\n*📚Description:* Changes Prefix of bot.");
			}
			if (!isCreator) return citel.reply(LangG.owner);
			if (!querie) return citel.reply(`Please Give me prefix to set ${LangG.greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                ["PREFIX"]: querie,
				},
			});
			await citel.reply(`🟩Prefix has been changes to ${querie} Successfuly.`);
		}
		break
		case "sudo": {
			if (querie === "help") {
				return citel.reply("*❗Command:* Chages Bot Worktypel\n*🧩Category:* Owner Menu\n*🛠️Usage:* -mode public/private\n\n*📚Description:* Switches between two avilable modes");
			}
			if (!isCreator) return citel.reply(LangG.owner);
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                    ["SUDO"]: querie,
				},
			});
			await citel.reply(`🟦Sudo provided`);
		}
		break;
		case 'shutdown': {
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			if (!isCreator) return citel.reply(LangG.owner);
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.get(baseURI + '/formation')
				.then(async (formation) => {
					forID = formation[0].id;
					citel.reply(`Sutting ${LangG.title} down`)
					await heroku.patch(baseURI + '/formation/' + forID, {
						body: {
							quantity: 0
						}
					});
				})
				.catch(async (err) => {
					citel.reply(`Uhhh,Got an Error`)
				});
		}
		break
		case "setsession": {
			if (querie === "help") {
				return citel.reply("*❗Command:* Chages Bot Prefixl\n*🧩Category:* Owner Menu\n*🛠️Usage:* -\n\n*📚Description:* Changes Prefix of bot.");
			}
			if (!isCreator) return citel.reply(LangG.owner);
			if (!querie) return citel.reply(`Please Give me prefix to set ${LangG.greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                ["SESSION_ID"]: querie,
				},
			});
			await citel.reply(`🟩Session has been changed Successfuly.`);
		}
		break
		case "mode": {
			if (querie === "help") {
				return citel.reply("*❗Command:* Chages Bot Worktypel\n*🧩Category:* Owner Menu\n*🛠️Usage:* -mode public/private\n\n*📚Description:* Switches between two avilable modes");
			}
			if (!isCreator) return citel.reply(LangG.owner);
			if (querie === "public") {
				const Heroku = require("heroku-client");
				const heroku = new Heroku({
					token: Config.HEROKU.API_KEY,
				});
				let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["WORKTYPE"]: "public",
					},
				});
				await citel.reply(`🟦Public Mode has been integrated successfully by ${LangG.title}`);
				return;
			}
			if (querie === "private") {
				const Heroku = require("heroku-client");
				const heroku = new Heroku({
					token: Config.HEROKU.API_KEY,
				});
				let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["WORKTYPE"]: "private",
					},
				});
				await citel.reply(`🟩Private Mode has been integrated successfully`);
			}
		}
		break;
		case "theme": {
			if (querie === "help") {
				return citel.reply("*❗Command:* Chages Bot Running Theme\n*🧩Category:* Owner Menu\n*🛠️Usage:* -theme zerotwo/secktor\n\n*📚Description:* Switches between two avilable themes");
			}
			if (querie === "list") {
				await citel.reply(`💠Avilable Models in Secktor💠\n\n1-Secktor\n2-Zerotwo\n3-Friday\n4-Luffy\n5-Nezuko\n6-Goku\n7-Genos\n8-Ayanokoji\n9-Naruto\n10-Gideon\n11-parker\n12-adam`);
				return
			}
			if (!isCreator) return citel.reply(LangG.owner);
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			if (querie === "secktor") {
				// await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "SECKTOR",
					},
				});
				await citel.reply(` 🟩Secktor Theme has been integrated successfully.\nIt will require couple seconds to configure databse`);
				return;
			}
			if (querie === "zerotwo") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "ZEROTWO",
					},
				});
				await citel.reply(`🟨Integrating Zero-Two,\nDarling Please give me a bit time,Hiro sucks`);
				return
			}
			if (querie === "adam") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                      ["THEME"]: "ADAM",
					},
				});
				await citel.reply(`🟨Integrating Black Adam,\nThis will require few seconds to configure`);
				return
			}
			if (querie === "friday") {
				//        await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "FRIDAY",
					},
				});
				await citel.reply(` 🟪Integrating Friday\nSir, please may I request just a few seconds to calibrate`);
				return
			}
			if (querie === "ayanokoji") {
				//       await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "AYANOKOJI",
					},
				});
				await citel.reply(` 🔷Integrating AYANOKOJI.\nPlease give me a couple seconds to configure databse.`);
				return
			}
			if (querie === "rimuru") {
				//        await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "Rimuru",
					},
				});
				await citel.reply(` 🔷Rimuru Theme has been integrated successfully`);
				return
			}
			if (querie === "nezuko") {
				//     await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "NEZUKO",
					},
				});
				await citel.reply(` 🔴NEZUKO Theme has been integrated successfully`);
				return
			}
			if (querie === "goku") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "GOKU",
					},
				});
				await citel.reply(` ✔️GOKU Theme has been integrated successfully`);
				return
			}
			if (querie === "genos") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "GENOS",
					},
				});
				await citel.reply(`🟩GENOS  Theme has been integrated successfully`);
				return
			}
			if (querie === "naruto") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "NARUTO",
					},
				});
				await citel.reply(`🟩NARUTO Theme has been integrated successfully`);
				return
			}
			if (querie === "luffy") {
				//     await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "LUFFY",
					},
				});
				await citel.reply(` 🔵Luffy Theme has been integrated successfully`);
				return
			}
			if (querie === "gideon") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "GIDEON",
					},
				});
				await citel.reply(` 🟩Gideon Theme has been integrated successfully`);
				return
			}
			if (querie === "parker") {
				//      await Void.updateProfileName(`LangG.title`)
				await heroku.patch(baseURI + "/config-vars", {
					body: {
                ["THEME"]: "PARKER",
					},
				});
				await citel.reply(` 🟩Parker Peter Theme has been integrated successfully`);
				return
			}
		}
		break;
	}
})()
