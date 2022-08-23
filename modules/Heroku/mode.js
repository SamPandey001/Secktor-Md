
(async () => {
	switch (command) {
        
         case "mode":
        {
          if (querie === "help") {
            return citel.reply(
              "*❗Command:* Chages Bot Worktypel\n*🧩Category:* Owner Menu\n*🛠️Usage:* -mode public/private\n\n*📚Description:* Switches between two avilable modes"
            );
          }
		if (!isCreator) return citel.reply(LangG.owner);
          if (querie === "public") {
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["WORKTYPE"]: "public",
              },
            });
            await citel.reply(
              `🟦Public Mode has been integrated successfully by ${LangG.title}`
            );
            return;
          }

          if (querie === "private") {
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["WORKTYPE"]: "private",
              },
            });
            await citel.reply(
              `🟩Private Mode has been integrated successfully`
            );
          }
        }
         break;
         }
         })()
