(async () => {
	switch (command) {
        case 'shutdown' : {
		    const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
		     if (!isCreator) return citel.reply(LangG.owner);
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
		     await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
       citel.reply(`Sutting ${LangG.title} down`)
        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
    }).catch(async (err) => {
       citel.reply(`Uhhh,Got an Error`)
    });
}
		    break
       }
         })()
