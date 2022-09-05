(async () => {
	switch (command) {
		case "help":
			let Languagey = require("./lib/scraper");
			let Langt = Languagey.getString("global");
    let helpbutton = [{
					buttonId: `${prefix}repo`,
					buttonText: {
						displayText: 'Repo'
					},
					type: 1
				},{
					buttonId: `${prefix}support`,
					buttonText: {
						displayText: 'Support'
					},
					type: 1
				}
				]
    let helptext = `
*Hii ${pushname}, This is ${LangG.title}.*
*An Advaned bot by CitelVoid.*

My usable commmands are listed below.
${readmore}
*--------《 🦸‍♂️𝙾𝚠𝚗𝚎𝚛🦸‍♂️ 》--------*
\`\`\`restart, shutdown, dlmod, sessionfile, lockfile,  ulmod, chatbot, allmod, emod, theme, setprefix, chatbot, mode, approve, disapprove, bcgroup, setsudo, addnote, delnote, allnotes, eval, shell\`\`\`

*-------《 🎋𝙶𝚎𝚗𝚎𝚛𝚊𝚕🎋 》-------*
\`\`\`profile, rank, repo, owner, listgc, support, qr, deck, quotely, listonline, staus, trt, ping\`\`\`

*--------《 🧩𝙶𝚛𝚘𝚞𝚙🧩 》--------*
\`\`\`grouplink, setgroupp, del, group, editinfo, add, kick, promote, demote, vote, nsfw, antilink, events, vote, request, report, steal\`\`\`

*-------《 🔎𝚂𝚎𝚊𝚛𝚌𝚑🔎 》--------*
\`\`\`gimage, google, pint, iplookup, imdb, magnet, iginfo, memes, pick, pack \`\`\`

*-----《 🍂𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛🍂 》----*
\`\`\`ytmp3, ytmp4, mediafire, mp3, mp4, jpeg, video, tts, igdl, igstory, twitter, \`\`\`

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
\`\`\`fact, jid, ssweb, quote, quotely, ebinary, dbinary, gif, emix, retrive, url, horo,\`\`\`

*---------《 🍑𝙽𝚜𝚏𝚠🍑 》---------*
\`\`\`vixen, rpussy, ranal, rboobs, cossplay hentai, fisting, fingering pussy, panties, anal, hentai, milf, tits, school, maid, nurse, tushy, sis, foot, boobs, solo, ecchi\`\`\`

    `
				let buttonMessaged = {
					image: { url: picsecktor },
					caption: helptext,
					footer: Langt.title,
					headerType: 4,
				        buttons: helpbutton,
					contextInfo: {
						externalAdReply: {
							title: 'Help List',
							body: 'Secktor-Bot',
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
			break
	}
})()
