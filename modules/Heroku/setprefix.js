(async () => {
	switch (command) {
          case "setprefix":
        {
          if (querie === "help") {
            return citel.reply(
              "*❗Command:* Chages Bot Prefixl\n*🧩Category:* Owner Menu\n*🛠️Usage:* -prefix -\n\n*📚Description:* Changes Prefix of bot."
            );
          }  if (!isCreator) return citel.reply(LangG.owner);
		if (!querie) return citel.reply(`Please Give me prefix to set ${LangG.greet}`)
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["PREFIX"]: querie,
              },
            });
            await citel.reply(
              `🟩Prefix has been changes to ${querie} Successfuly.`
            );
        }
        break
       }
         })()
