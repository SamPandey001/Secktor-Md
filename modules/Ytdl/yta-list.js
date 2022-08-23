
(async () => {
	switch (command) {
 case 'yta':
 {
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
}
        })()
