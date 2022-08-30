(async () => {
	switch (command) {
		case "ytvd": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   YouTube Video\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads video from given YouTube link and sends in current chat.`);
				return;
			}
			Void.sendMessage(from, {
				video: {
					url: args[0],
				},
				mimetype: "video/mp4",
				caption: "Here it is. Enjoy💕",
				contextInfo: {
					externalAdReply: {
						title: LangG.BotName,
						body: `Youtube DL`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			}, {
				quoted: citel,
			});
		}
		break;
		case 'yta': {
			if (querie === 'help') {
				return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends song in Whatsapp `)
			}
			if (!args.join(" ")) return citel.reply(`Example : ${prefix + command} Back in black`)
			let yts = require("yt-search")
			let search = await yts(args.join(" "))
			listSerch = []
			teskd = `\n📂Result From *${args.join(" ")}*.\n\n*Select any Song🎵*`
			for (let i of search.all) {
				listSerch.push({
					title: i.title,
					rowId: `${prefix}ytmp3 ${i.url}`,
					description: `Author : ${i.author.name} / ${i.timestamp}`
				})
			}
			const sections = [

				{
					title: "Total Search🔍" + search.all.length,
					rows: listSerch
					}

				]
			const listMessage = {
				text: teskd,
				footer: LangG.title,
				title: `*📂Youtube Search by ${LangG.title} 𝐌𝐝*`,
				buttonText: "FOUND",
				mentions: await Void.parseMention(teskd),
				sections
			}
			Void.sendMessage(from, listMessage, {
				quoted: citel
			})
		}
		break
		case 'video':
		case 'ytv': {
			if (querie === 'help') {
				return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Downloder\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends youtube video in Whatsapp `)
			}
			if (!args.join(" ")) return citel.reply(`Example : ${prefix + command} Back in black`)
			let yts = require("yt-search")
			let search = await yts(args.join(" "))
			listSerch = []
			teskd = `\n📁Result From ${args.join(" ")}.\n`
			for (let i of search.all) {
				listSerch.push({
					title: i.title,
					rowId: `${prefix}ytmp4 ${i.url}`,
					description: `Secktor / ${i.timestamp}`
				})
			}
			const sections = [

				{
					title: "Total Search🔍" + search.all.length,
					rows: listSerch
					}

				]
			const listMessage = {
				text: teskd,
				footer: LangG.footer,
				title: ` *🎥Youtube Search results by  ${LangG.title}📽️*`,
				buttonText: "FOUND",
				mentions: await Void.parseMention(teskd),
				sections
			}
			Void.sendMessage(from, listMessage, {
				quoted: citel
			})
		}
		break
		case "yts":
		case "ytsearch": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   ${command}\n*🍀Aliases* -yts,-ytsearch\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query onto YouTube and Gives text result.`);
				return;
			}
			if (!text) return citel.reply(`Example : ${prefix + command} ${LangG.title} WhatsApp Bot`);
			let yts = require("yt-search");
			let search = await yts(text);
			let textt = "*YouTube Search*\n\n Result From " + text + "\n\n─────────────────────\n";
			let no = 1;
			for (let i of search.all) {
				textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
              i.type
            }\n🙈Views : ${i.views}\n⌛Duration : ${
              i.timestamp
            }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
              i.url
            }\n\n─────────────────\n\n`;
			}
			Void.sendMessage(citel.chat, {
				image: {
					url: search.all[0].thumbnail,
				},
				caption: textt,
			}, {
				quoted: citel,
			});
		}
		break;
		case "ytad": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   YouTube Audio\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads Audio from given YouTube link and sends in current chat.`);
				return;
			}
			Void.sendMessage(from, {
				audio: {
					url: args[0],
				},
				mimetype: "audio/mpeg",
				contextInfo: {
					externalAdReply: {
						title: LangG.BotName,
						body: `FEEL THE SONG💕`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			}, {
				quoted: citel,
			});
		}
		break;
	}
})()
