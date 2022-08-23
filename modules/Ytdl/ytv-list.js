
(async () => {
	switch (command) {
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
				}

        })()
