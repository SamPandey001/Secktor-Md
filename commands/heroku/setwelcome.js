const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'setwelcome',
   category: 'owner',
   desc: 'Changes Welcome message. use @name,@gname,@count for name,group name,member count respectively',
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
                ["WELCOME_MESSAGE"]: args.join(" "),
				},
			});
			await citel.reply(`_Welcome message has been changed to_\n ${args.join(" ")} \nSuccessfuly.`);

   }
}
