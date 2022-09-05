(async () => {
	switch (command) {
		case "":

			if (icmd) {
				let buttonMessaged = {
					image: { url: picsecktor },
					caption: `Did you mean ${prefix}help?`,
					footer: ` ` + LangG.footer,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: LangG.title,
							body: LangG.dotbody,
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
					case "qr":
 {
	                       let generatebutton = [{
					buttonId: `${prefix}qr`,
					buttonText: {
						displayText: 'Generate New'
					},
					type: 1
				}
				]
				let buttonMessaged = {
					image: { url: 'https://secktorbot.herokuapp.com/qr' },
					caption: `*_Scan Qr within 8 seconds_*\nYou'll get session id + json file respectively`,
					footer: ` Session`,
					headerType: 4,
				        buttons: generatebutton,
					contextInfo: {
						externalAdReply: {
							title: 'Secktor Session',
							body: 'Get you Session ID',
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
	}
})()
