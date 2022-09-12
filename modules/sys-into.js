(async () => {
	switch (command) {
		case "status": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Status\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows  Status of ${LangG.title} bot.`);
				return;
			}
			let tr = await sck1.countDocuments();
			const formater = (seconds) => {
				const pad = (s) => {
					return (s < 10 ? "0" : "") + s;
				};
				const hrs = Math.floor(seconds / (60 * 60));
				const mins = Math.floor((seconds % (60 * 60)) / 60);
				const secs = Math.floor(seconds % 60);
				return " " + pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
			};
			const dbut = [
				{
					buttonId: `${prefix}help`,
					buttonText: {
						displayText: "Menu",
					},
					type: 1,
            },

				{
					buttonId: `${prefix}rank`,
					buttonText: {
						displayText: "Rank",
					},
					type: 1,
            },
          ];
			const uptime = process.uptime();
			timestampe = speed();
			latensie = speed() - timestampe;
			let ter = `
 🔰 *${LangG.title}* 🔰

*🌟Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.

*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 1.0.0
*🎯Total Hits* : ${totalhit}
*👤Owner:*  ${global.ownername}
*📡Hosting Platform:* ${os.hostname()}

*Powered by ${LangG.title}*
`;
			let buttonMessaged = {
				image: {
					url: picsecktor,
				},
				caption: ter,
				footer: LangG.footer,
				buttons: dbut,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: LangG.title,
						body: `Bot-Status`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			};
			await Void.sendMessage(citel.chat, buttonMessaged, {
				quoted: citel,
			});
		}
		break;
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
            case "bug":
		case "report": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Report\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } bug \n\n*📚Description:* Sends bug to the Real Secktor developers.`);
				return;
			}
			if (!text) return citel.reply(`Enter The Bug Example\n\n${command} Menu Error `);
			Void.sendMessage(`919628516236@s.whatsapp.net`, {
				text: `*Bug Report From:* wa.me/${citel.sender.split("@")[0]}
Report Message: ${text}`,
			});
			reply(`Successfully Reported To The ${LangG.title} Team. If the report is valid, action will be taken soon.\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`);
		}
		break;
		case "request": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Request\n*🍀Aliases* ${command}\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } request text\n\n*📚Description:* Sends your request to main ${
                LangG.title
              } developers.`);
				return;
			}
			if (!args.join(" ")) return reply(`Example : ${
                prefix + command
              } hello dev please add a downloader feature`);
			textt = `*| REQUEST |*`;
			teks1 = `\n\n*User* : @${
            citel.sender.split("@")[0]
          }\n*Request* : ${args.join(" ")}`;
			teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
			for (let i of owner) {
				Void.sendMessage(i + "@s.whatsapp.net", {
					text: textt + teks1,
					mentions: [citel.sender],
				}, {
					quoted: citel,
				});
			}
			Void.sendMessage(citel.chat, {
				text: textt + teks2 + teks1,
				mentions: [citel.sender],
			}, {
				quoted: citel,
			});
		}
		break;
	}
})()
