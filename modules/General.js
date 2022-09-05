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
	}
})()
