(async () => {
	switch (command) {
		case "menu": {
			 if (querie === "help") {
				await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -menu\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends Complete Menu list of Bot`);
				return;
			}
			let meh = citel.sender;
			const userq = await Levels.fetch(citel.sender, "RandomXP");
			const lvpoints = userq.level;
			var role = "GOD✨";
			if (lvpoints <= 2) {
				var role = "🏳Citizen";
			}
			else if (lvpoints <= 4) {
				var role = "👼Baby Wizard";
			}
			else if (lvpoints <= 6) {
				var role = "🧙‍♀️Wizard";
			}
			else if (lvpoints <= 8) {
				var role = "🧙‍♂️Wizard Lord";
			}
			else if (lvpoints <= 10) {
				var role = "🧚🏻Baby Mage";
			}
			else if (lvpoints <= 12) {
				var role = "🧜Mage";
			}
			else if (lvpoints <= 14) {
				var role = "🧜‍♂️Master of Mage";
			}
			else if (lvpoints <= 16) {
				var role = "🌬Child of Nobel";
			}
			else if (lvpoints <= 18) {
				var role = "❄Nobel";
			}
			else if (lvpoints <= 20) {
				var role = "⚡Speed of Elite";
			}
			else if (lvpoints <= 22) {
				var role = "🎭Elite";
			}
			else if (lvpoints <= 24) {
				var role = "🥇Ace I";
			}
			else if (lvpoints <= 26) {
				var role = "🥈Ace II";
			}
			else if (lvpoints <= 28) {
				var role = "🥉Ace Master";
			}
			else if (lvpoints <= 30) {
				var role = "🎖Ace Dominator";
			}
			else if (lvpoints <= 32) {
				var role = "🏅Ace Elite";
			}
			else if (lvpoints <= 34) {
				var role = "🏆Ace Supreme";
			}
			else if (lvpoints <= 36) {
				var role = "💍Supreme I";
			}
			else if (lvpoints <= 38) {
				var role = "💎Supreme Ii";
			}
			else if (lvpoints <= 40) {
				var role = "🔮Supreme Master";
			}
			else if (lvpoints <= 42) {
				var role = "🛡Legend III";
			}
			else if (lvpoints <= 44) {
				var role = "🏹Legend II";
			}
			else if (lvpoints <= 46) {
				var role = "⚔Legend";
			}
			else if (lvpoints <= 55) {
				var role = "🐉Immortal";
			}
			let ttms = `${userq.xp}` / 8;
			const timenow = moment(moment())
				.format('HH:mm:ss')
			moment.tz.setDefault('Asia/Jakarta')
				.locale('id')
			let hlps = `
╔════⧫ Secktor 
║ *⦿Name* ${LangG.title}
║ *⦿User:* @${meh.split("@")[0]}
║ *⦿Prefix:* "${prefix}"
║ *⦿Role*: ${role}
║ *⦿Level*: ${userq.level}
║ *⦿Time:* ${timenow}
║ *⦿Total Messages:*- ${ttms}
╚═══════════════╝
𝐌𝐲 𝐮𝐬𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐚𝐫𝐞 𝐥𝐢𝐬𝐭𝐞𝐝 𝐛𝐞𝐥𝐨𝐰
${readmore}
*--------《 🦸‍♂️𝙾𝚠𝚗𝚎𝚛🦸‍♂️ 》--------*
\`\`\`restart, shutdown, dlmod, sessionfile, lockfile,  ulmod, chatbot, allmod, emod, theme, setprefix, chatbot, mode, approve, disapprove, bcgroup, setsudo, addnote, delnote, allnotes, eval, shell\`\`\`

*-------《 🎋𝙶𝚎𝚗𝚎𝚛𝚊𝚕🎋 》-------*
\`\`\`profile, rank, repo, owner, listgc, support, qr, deck, quotely, listonline, staus, trt, ping\`\`\`

*--------《 🧩𝙶𝚛𝚘𝚞𝚙🧩 》--------*
\`\`\`grouplink, setgroupp, del, group, editinfo, add, kick, promote, demote, vote, nsfw, antilink, events, vote, request, report, steal\`\`\`

*-------《 🔎𝚂𝚎𝚊𝚛𝚌𝚑🔎 》--------*
\`\`\`gimage, pint, iplookup, imdb, magnet, iginfo, memes, pick, pack \`\`\`

*-----《 🍂𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛🍂 》----*
\`\`\`ytmp3, ytmp4, mediafire, mp3, mp4, jpeg, video, tts, igdl, twitter, \`\`\`

*---------《 🤙𝚆𝚎𝚎𝚋🤙 》---------*
\`\`\`anime pic, anime char, anime search, anime news, anime r, poke pic, poke search, waifu, foxgirl, waifu2, neko, loli,\`\`\`

*---------《 🎧𝙰𝚞𝚍𝚒𝚘🎧 》---------*
\`\`\`bass, tempo, blown, deep, earrape, fast, fat, nightcore, reverse, robot, slow, squirell\`\`\`

*-------《 〽️𝚃𝚎𝚡𝚝𝚙𝚛𝚘〽️ 》-------*
\`\`\`candy, christmas, 3dchristmas, sparklechristmas, deepsea, scifi, rainbow, waterpipe, spooky, pencil, circuit, discovery, metalic, fiction, demon, transformer, berry, thunder, magma, 3dstone, neonlight, glitch, harrypotter, brokenglass, papercut, watercolor, multicolor, neondevil, underwater, graffitibike, snow, cloud, honey, ice, fruitjuice, biscuit, wood, chocolate, strawberry, matrix, blood, dropwater, toxic, lava, rock, bloodglas, hallowen, darkgold, joker, wicker, firework, skeleton, blackpink, sand, glue, 1917, leaves\`\`\`

*-------《 🚀𝚂𝚝𝚒𝚌𝚔𝚎𝚛🚀 》-------*
\`\`\`s-cry, s-kill, s-hug, s-pat, s-lick, s-kiss, s-bite, s-yeet, s-bully, s-bonk, s-wink, s-poke, s-nom, s-slap, s-smile, s-wave, s-awoo, s-blush, s-smug, s-glomp, s-happy, s-dance, s-cringe, s-cuddle, s-highfive, s-shinobu, s-megumin, s-handhold\`\`\`

*-----《 🍭𝚁𝚎𝚊𝚌𝚝𝚒𝚘𝚗𝚜🍭 》------*
\`\`\`punch, bully, bonk, pat, lick, bite, happy, kill, kiss, slap, cuddle, wink, glomp, highfive, wave, smug, yeet, cringe, smile blush\`\`\`

*--------《 🔰𝚄𝚝𝚒𝚕𝚜🔰 》---------*
\`\`\`fact, quote, quotely, ebinary, dbinary, gif, emix, retrive, url, horo,\`\`\`

*---------《 🍑𝙽𝚜𝚏𝚠🍑 》---------*
\`\`\`vixen, rpussy, ranal, rboobs, cossplay hentai, fisting, fingering pussy, panties, anal, hentai, milf, tits, school, maid, nurse, tushy, sis, foot, boobs, solo, ecchi\`\`\`

*📌𝙽𝚘𝚝𝚎* You can use
<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
_🌟Eg: -anime help_`;
			/*
			await Void.sendMessage(from, {
					image:{url:picsecktor}, caption: hlp,
					footer: LangG.footer,
					templateButtons: [
						{ urlButton: { displayText: "⭐Web", url: "" } }

					]
				}, { quoted: citel }) */
			await Void.sendMessage(citel.chat, {
				image: { url: picsecktor },
				caption: hlps,
				footer: LangG.footer,
				mentions: [meh],
			}, {
				quoted: citel,
			});
		}
		break;
		case "list": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   List \n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends list Menu Avilable in ${LangG.title} `);
				return;
			}
			let template = await generateWAMessageFromContent(citel.chat, proto.Message.fromObject({
				listMessage: {
					title: `Hi ${pushname} ${LangG.greet}📍\nMy usable Commands are listed here
Click on the button blew to see the list.
*${LangG.title}*
 `,
					description: `Please Choose from The List\n\n`,
					buttonText: "List Menu",
					footerText: `${LangG.title}`,
					listType: "SINGLE_SELECT",
					sections: [
						{
							title: "•Zero-Two•",
							rows: [
								{
									title: "All Commands",
									description: "Displays The List Of all Features",
									rowId: `${prefix}helpt`,
                      },
                    ],
                  },
						{
							title: "•Zero-Two•",
							rows: [
								{
									title: "Group Menu",
									description: "Displays The List Of Group Features!",
									rowId: `${prefix}helpt 1`,
                      },
								{
									title: "Downloader Menu",
									description: "Displays The List Of downloading Features",
									rowId: `${prefix}helpt 2`,
                      },
								{
									title: "TextPro Menu",
									description: "Displays The List Of TextPro Features",
									rowId: `${prefix}helpt 4`,
                      },
								{
									title: "Search Menu",
									description: "Displays The List Of Searching Features",
									rowId: `${prefix}helpt 3`,
                      },
								{
									title: "Random Menu",
									description: "Displays The List Of Random Features",
									rowId: `${prefix}helpt 7`,
                      },
								{
									title: "Random Anime Menu",
									description: "Displays The List Of Random Anime Features",
									rowId: `${prefix}helpt 10`,
                      },
								{
									title: "𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊",
									description: "Displays The List Of Fun Features",
									rowId: `${prefix}helpt 11`,
                      },
								{
									title: "Convert Menu",
									description: "Displays The List Of Convert Features",
									rowId: `${prefix}helpt 6`,
                      },
								{
									title: "Misc Menu",
									description: "Displays The List Of Database Features",
									rowId: `${prefix}helpt 9`,
                      },
								{
									title: "Reaction Menu",
									description: "Displays The List Of Reaction Features",
									rowId: `${prefix}helpt 5`,
                      },
                    ],
                  },
						{
							title: "Developers",
							rows: [
								{
									title: "Bot Owner",
									description: "Displays The List Of Credit Of The Bot !!",
									rowId: `${prefix}tqtt`,
                      },
                    ],
                  },
                ],
					listType: 1,
				},
			}), {});
			Void.relayMessage(citel.chat, template.message, {
				messageId: template.key.id,
			});
		}
		break;
	}
})()
