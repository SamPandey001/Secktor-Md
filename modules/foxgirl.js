(async () => {
	switch (command) {
		case "fox_girl":
		case "fgirl":
			if (querie === "help") {
				await citel.reply(`*❗Command:* ${command}
            *🍀Aliases* ${prefix}fgirl,${prefix}fox_girl
            *🧩Category:* WEEB
            *🛠️Usage:* ${prefix}fgirl
            
            *📚Description:* Sends a hot Fox Girl Pic`);
				return;
			}
			waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
			let buttonssMessagesss = {
				image: {
					url: waifuddfg.data.url
				},
			};
			await Void.sendMessage(citel.chat, buttonssMessagesss, {
					quoted: citel,
				})
				.catch((err) => {
					return "Error!";
				});
			break;
	}
})()
