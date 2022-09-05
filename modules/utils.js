(async () => {
	switch (command) {
		case "ebinary": {
			if (querie === "help") {
				await citel.reply(`*❗Command:* Ebinary\n*🍀Aliases* -ebinary\n*🧩Category:* Utils\n*🛠️Usage:* ${prefix + command} message or reply\n\n*📚Description:* Encodes given reply into binary.`);
				return;
			}
			if (!citel.quoted.text && !text) return citel.reply(`Send/reply text with caption ${prefix + command}`);
			let {eBinary} = require("./lib/binary");
			let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
			let eb = await eBinary(textt);
			reply(eb);
			return
		}
		break;
		case "dbinary": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Dbinary\n*🍀Aliases* -dbinary\n*🧩Category:* Utils\n*🛠️Usage:* ${prefix + command} message or reply\n\n*📚Description:* decodes given reply from binary.`);
				return;
			}
			if (!citel.quoted.text && !text) return citel.reply(`Send/reply text with caption ${prefix + command}`);
			let {
				dBinary
			} = require("./lib/binary");
			let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
			let db = await dBinary(textt);
			reply(db);
			return
		}
		break;
		case "gif": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Gif\n*🍀Aliases* -gif reply to any sticker\n*🧩Category:* Converter\n*🛠️Usage:* ${prefix + command} query\n\n*📚Description:* Converts sticker into Gif.`);
				return;
			}
			if (!quoted) return citel.reply("Reply to any Image");
			if (!/webp/.test(mime)) return citel.reply(`reply to sticker *${prefix + command}*`);
			let {
				webp2mp4File
			} = require("./lib/uploader");
			let media = await Void.downloadAndSaveMediaMessage(quoted);
			let webpToMp4 = await webp2mp4File(media);
			await Void.sendMessage(citel.chat, {
				video: {
					url: webpToMp4.result,
					caption: "Convert Webp To Video",
				},
				gifPlayback: true,
			}, {
				quoted: citel,
			});
			await fs.unlinkSync(media);
			return
		}
		break;
		case "emix": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*  Emoji Mix\n*🍀Aliases* -emix\n*🧩Category:* Fun\n*🛠️Usage:* ${prefix + command} 😅+🤔 \n\n*📚Description:* Mixes two emoji into one.`);
				return;
			}
			if (!text) return citel.reply(`Example : ${prefix + command} 😅+🤔`);
			let [emoji1
				, emoji2
			] = text.split`+`;
			let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1 )}_${encodeURIComponent(emoji2)}`);
			for (let res of anu.results) {
				let encmedia = await Void.sendImageAsSticker(citel.chat, res.url, citel, {
					packname: global.packname,
					author: global.author,
					categories: res.tags,
				});
				await fs.unlinkSync(encmedia);
			}
			return
		}
		break;
		case "eval": {
			if (process.env.BOT_NUMBER + "@s.whatsapp.net" !== citel.sender) {
				reply(`❌ This Command only for Owner!`);
				return;
			}
			if (args.length === 0) {
				reply(`❌ Provide  query Master!`);
				return;
			}
			try {
			  let huh = require('fs')
			  await huh.writeFileSync('./eval-code.js', querie, "utf8")
			  let evaldata = eval(fs.readFileSync('./eval-code.js','utf8'))
			  citel.reply(evaldata)
			  await sleep(4000) 
			  fs.unlinkSync('./eval-code.js')
			  /*
				let resultTest = eval(querie);
				if (typeof resultTest === "object") reply(JSON.stringify(resultTest));
				else reply(resultTest.toString());
		*/
			}
			catch (err) {
				reply(err.toString());
			}
		}
		break;
		case 'e': {
			try {
				const code = {
					script: citel.quoted.text,
					language: args[1],
					versionIndex: "0",
					stdin: arg.slice(2)
						.join(" "),
					clientId: '694805244d4f825fc02a9d6260a54a99',
					clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
				};
				request({
					url: "https://api.jdoodle.com/v1/execute",
					method: "POST",
					json: code
				}, function(_error, _response, body) {
					citel.reply("> " + args[1] + "\n\n" + "```" + body.output + "```");
				});
			}
			catch (error) {
				console.log(error);
			}
		}
		break
		case "jpeg": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   JPEG\n*🍀Aliases* ${prefix + command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${prefix + command} image link\n\n*📚Description:* Downloads image from given link and Sends that in chat.`);
				return;
			}
			if (!args[0]) return reply(`Where's the link?`);
			try {
				Void.sendMessage(from, {
					image: {
						url: args[0],
					},
					caption: "*HERE WE GO*",
					contextInfo: {
						externalAdReply: {
							title: LangG.BotName,
							body: `${global.ownername}`,
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
			catch {
				reply("Link error");
			}
			return
		}
		break;
		case "retrive": {
			if (!citel.quoted) return reply("Please reply to any message Image or Video!");
			let citadel = await Void.serializeM(await citel.getQuotedObj());
			await citadel.quoted.copyNForward(citel.chat, true);
		}
		break;
		case "url": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   URL\n*🍀Aliases* -url reply to image\n*🧩Category:* Utils\n*🛠️Usage:* ${prefix + command} reply to Image\n\n*📚Description:* Uploads replied image on Telegraph and Gives url into chat.`);
				return;
			}
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh,
			} = require("./lib/scraper");
			if (!quoted) return citel.reply(`Pls mention me any image/video and type ${prefix + command} to upload my ${LangG.greet}`);
			let media = await Void.downloadAndSaveMediaMessage(quoted);
			if (/image/.test(mime)) {
				let anu = await TelegraPh(media);
				citel.reply(util.format(anu));
			}
			else if (!/image/.test(mime)) {
				let anu = await TelegraPh(media);
				citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n` + util.format(anu));
			}
			await fs.unlinkSync(media);
		}
		break;
		case 'horo': {
			const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
			fetch(URL, {
					method: 'POST'
				})
				.then(response => response.json())
				.then(json => {
					const date = json.current_date;
					console.log(date);
					let textw = "";
					textw += `*🌟 Horoscope of  ${querie}*\n\n`;
					textw += `*Current Date:* ${json.current_date}.\n`;
					textw += `*Sign:* ${querie}.\n`;
					textw += `*Lucky Time:* ${json.lucky_time}.\n`;
					textw += `*Compatibility:* ${json.compatibility}.\n`;
					textw += `*Lucky Number:* ${json.lucky_number}.\n`;
					textw += `*Lucky Color:* ${json.color}.\n`;
					textw += `*Today Mood:* ${json.mood}.\n`;
					textw += `*Overall:* ${json.description}.\n`;
					citel.reply(textw)
				});
		}
		break
	}
})()
