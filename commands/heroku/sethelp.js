const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'setalive',
   category: 'owner',
   desc: 'Changes currnet alive text',
   async exec(citel, Void,args,isCreator) {
            if (!isCreator) return citel.reply(tlang().owner);
			if (!args) return citel.reply(`Please Give me text to set ${tlang().greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                ["ALIVE_MESSAGE"]: args.join(" "),
				},
			});
			await citel.reply(`🟩Alive Text has been changes to ${args.join(" ")} Successfuly.`);

   }
}
