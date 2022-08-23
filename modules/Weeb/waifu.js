(async () => {
	switch (command) {
	case 'waifu': {
				if (querie === 'help') {
					await citel.reply(`*❗Command:* Waifu\n*🍀Aliases* -waifu\n*🧩Category:* Random\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Sends Hot Waifu Pic`)
					return
				};
				const data = await fetchJson(`https://api.waifu.im/random/?selected_tags=waifu`)
				const buffer = await getBuffer(data.images[Math.floor(Math.random() * data.images.length)]?.url)

				Void.sendMessage(from, {
					image: buffer,
					caption: '*Here we go*',
					footer: LangG.footer,
				}, {
					quoted: citel
				})
			}
				break
	
	}
})()
