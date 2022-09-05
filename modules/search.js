(async () => {
	switch (command) {
		case "gimage":
		case "img": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Google Image\n*🍀Aliases* -gimage,-img\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query on Google Images and sends one randomly.`);
				return;
			}
			if (!args[0]) return reply("Hey bie please tell me for which pic you're looking");
			let name1 = querie.split("|")[0]
			let name2 = querie.split("|")[1] || `1`
			citel.reply(`Sending ${name2} image(s) of ${name1} in chat`)
			let nn = name2
			for (let i = 0; i < nn; i++) {
				let gis = require("g-i-s");
				gis(name1, async (error, result) => {
					n = result;
					images = n[Math.floor(Math.random() * n.length)].url;
					/*let buttons = [
					  {
					    buttonId: `-gimage ${args.join(" ")}`,
					    buttonText: {
					      displayText: "🪄Next Image ",
					    },
					    type: 1,
					  },
					];
					*/
					let buttonMessage = {
						image: {
							url: images,
						},
						caption: ` `,
						headerType: 4,
					};
					Void.sendMessage(citel.chat, buttonMessage, {
						quoted: citel,
					});
				})
			};
		}
		break;
		case "iginfo":
			if (querie === "help") {
				return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Search Menu\n*🛠️Usage:* ${
              prefix + command
            } username of instagram\n\n*📚Description:* Shows complete instagram information `);
			}
			try {
				if (!querie) return citel.reply(`Give me username ${LangG.greet}.`);
				fids = await axios.get(`https://api.popcat.xyz/instagram?user=${querie}`);
				const reply = `
╔════◇
║*🏮Name:* ${fids.data.full_name}
║*🎋Username:* ${fids.data.username}
║*👥Followers:* ${fids.data.followers}
║*✨Type:* ${fids.data.private}
║*✔Verified:* ${fids.data.verified}
║*📲Following:* ${fids.data.following}
║*📪Posts:* ${fids.data.posts}
║*🚀Bio:* ${fids.data.biography}
║   *Powered by ${LangG.title}
╚════════════╝ `;
				Void.sendMessage(citel.chat, {
					image: {
						url: fids.data.profile_pic,
					},
					caption: reply,
				}, {
					quoted: citel,
				});
			}
			catch (err) {
				console.log(err);
				return citel.reply(`${LangG.greet} That is a wrong username.`);
			}
			break;
		case "iplookup":
			if (querie === "help") {
				await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -iplookuo\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } ip-address\n\n*📚Description:* Runs Whois on Given IP-Address`);
				return;
			}
			try {
				if (!querie) return citel.reply(`_Give me an IP ${LangG.greet}._`);
				fids = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/ip-lookup?ip=${querie}`);
				const reply = `
╔════◇
║ *🏮IP:* ${fids.result.ip}
║ *🎋Continent:* ${fids.result.continent}
║ *👥ORG:* ${fids.result.org}
║ *👥Mobile:* ${fids.result.mobile}
║ *✨CountryCode:* ${fids.result.countryCode}
║ *✔City:* ${fids.result.city}
║ *📲Timezone:* ${fids.result.timezone}
║ *📪Latitude:* ${fids.result.latitude}
║ *📪Latitude:* ${fids.result.longitude}
║ *🚀ISP:* ${fids.result.isp}
║   *Powered by ${LangG.title}*
╚════════════╝`;
				Void.sendMessage(citel.chat, {
					image: {
						url: picsecktor,
					},
					caption: reply,
				}, {
					quoted: citel,
				});
			}
			catch (err) {
				console.log(err)
				return citel.reply(`${LangG.greet} That is a wrong IP.`);
			}
			break;
	}
})()
