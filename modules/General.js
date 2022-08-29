(async () => {
	switch (command) {
		case "alive":
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Alive\n*🍀Aliases* ${
                  prefix + command
                },-alive\n*🧩Category:* General\n*🛠️Usage:* ${
                  prefix + command
                }\n\n*📚Description:* Shows that ,is Secktor Userbot alive?.`);
				return;
			}
			const aliveadm = isAdmins ? "True" : "False";
			let alivemessage = process.env.ALIVE_MESSAGE || `*A bot developed by CitelVoid.*`
			const alivtxt = `
*Hello, my ${pushname},*
*This is  ${LangG.title}.*
${alivemessage}
*❖Version:-* 0.0.3
*❖Uptime:-* ${runtime(process.uptime())}
*❖Owner:-* ${Config.ownername}
*❖Branch:-* ${Config.BRANCH}
*❖Edition:-* PUBLIC

*Type ${prefix}menu for my command list.*
    
*Powered by ${Config.ownername}*
    `;
			let aliveMessage = {
				image: {
					url: picsecktor,
				},
				caption: alivtxt,
				footer: LangG.footer,
				headerType: 4,
			};
			Void.sendMessage(citel.chat, aliveMessage, {
				quoted: citel,
			});
			break;
		case "tqtt":
		case "tq":
		case "repo":
		case "owner": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Developers List\n*🍀Aliases* ${
                          prefix + command
                        },-tq,-repo\n*🧩Category:* General\n*🛠️Usage:* ${
                          prefix + command
                        }\n\n*📚Description:* Shows list of Developers of Secktor.`);
				return;
			}
			anu = `Hello, my ${pushname} ${LangG.greet}.
          
          *━━━ 『 𝑺𝒆𝒄𝒌𝒕𝒐𝒓 𝑫𝒆𝒗𝒔 』 ━━━*
          *⭐Ikshwaku Pandey:* For Development and Base and Modules.
          *⭐Sasank Reddy:* For Theme Design, Development,Website.
          
           *Give a ⭐ to our work on Github if you like our team project*`;
			let message = await prepareWAMessageMedia({
				image: fs.readFileSync("./assets/SocialLogo 1.png"),
			}, {
				upload: Void.waUploadToServer,
			});
			const template = generateWAMessageFromContent(citel.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						imageMessage: message.imageMessage,
						hydratedContentText: anu,
						hydratedFooterText: LangG.BotName,
						hydratedButtons: [
							{
								urlButton: {
									displayText: "Web",
									url: "",
								},
                              },
							{
								urlButton: {
									displayText: "⭐Repo",
									url: "https://github.com/SecktorBot/Secktor-Md",
								},
                              },
							{
								quickReplyButton: {
									displayText: "Menu",
									id: `${prefix}help`,
								},
                              },
							{
								quickReplyButton: {
									displayText: "Alive",
									id: `${prefix}alive`,
								},
                              },
                            ],
					},
				},
			}), {
				userJid: citel.chat,
			});
			Void.relayMessage(citel.chat, template.message, {
				messageId: template.key.id,
			});
		}
		break;
	}
})()
