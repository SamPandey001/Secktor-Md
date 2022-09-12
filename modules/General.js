(async () => {
	switch (command) {
		case "repo": {
			let buttonMessaged = {
			  image: { url: picsecktor },
			  caption: `Hey ${pushname}\n*This is Secktor Repo*\n\nhttps://github.com/SecktorBot/Secktor-Md `,
			  footer: ` ` + LangG.footer,
			  headerType: 4,
			  contextInfo: {
				externalAdReply: {
				  title: "Secktor-Repo",
				  body: "Easy to Use",
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
		  break
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
