
(async () => {
	switch (command) {
         case "sudo":
        {
          if (querie === "help") {
            return citel.reply(
              "*❗Command:* Chages Bot Worktypel\n*🧩Category:* Owner Menu\n*🛠️Usage:* -mode public/private\n\n*📚Description:* Switches between two avilable modes"
            );
          }
		if (!isCreator) return citel.reply(LangG.owner);
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["SUDO"]: querie,
              },
            });
            await citel.reply(
              `🟦Sudo provided`
            );
        }
         break;
       }
         })()
