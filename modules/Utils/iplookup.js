(async () => {
	switch (command) {

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
