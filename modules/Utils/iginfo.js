(async () => {
	switch (command) {
case "iginfo":
        if (querie === "help") {
          return citel.reply(
            `*❗Command:* ${command}\n*🧩Category:* Search Menu\n*🛠️Usage:* ${
              prefix + command
            } username of instagram\n\n*📚Description:* Shows complete instagram information `
          );
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
          Void.sendMessage(
            citel.chat,
            {
              image: {
                url: fids.data.profile_pic,
              },
              caption: reply,
            },
            {
              quoted: citel,
            }
          );
        } catch (err) {
          console.log(err);
          return citel.reply(`${LangG.greet} That is a wrong username.`);
        }
        break;
        case "iplookup":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -iplookuo\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } ip-address\n\n*📚Description:* Runs Whois on Given IP-Address`
          );
          return;
        }
        try {
          if (!querie) return citel.reply(`_Give me an IP ${LangG.greet}._`);
          fids = await fetchJson(
            `https://api-toxic-devil.herokuapp.com/api/ip-lookup?ip=${querie}`
          );
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
          Void.sendMessage(
            citel.chat,
            {
              image: {
                url: picsecktor,
              },
              caption: reply,
            },
            {
              quoted: citel,
            }
          );
        } catch (err) {
          console.log(err)
          return citel.reply(`${LangG.greet} That is a wrong IP.`);
        }
        break;
        }
})()
