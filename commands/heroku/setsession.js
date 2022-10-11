const { tlang } = require('../../lib')

module.exports = {
    name: 'shutdown',
    category: 'owner',
    desc: 'Shuts userbot down..',
    async exec(citel, Void,args,isGroup) {
        if (!isCreator) return citel.reply(tlang().owner);
			if (!querie) return citel.reply(`Please Give me prefix to set ${tlang().greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                ["SESSION_ID"]: args.join(" "),
				},
			});
			await citel.reply(`🟩Session has been changed Successfuly.`);
 
    }
 }