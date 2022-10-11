const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'setprefix',
   category: 'owner',
   desc: 'Changes currnet prefix',
   async exec(citel, Void,args,isCreator) {
            if (!isCreator) return citel.reply(tlang().owner);
			if (!args) return citel.reply(`Please Give me prefix to set ${tlang().greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                ["PREFIX"]: args.join(" "),
				},
			});
			await citel.reply(`🟩Prefix has been changes to ${args.join(" ")} Successfuly.`);

   }
}
