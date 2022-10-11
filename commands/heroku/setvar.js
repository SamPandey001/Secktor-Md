const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'setvar',
   category: 'owner',
   desc: 'TO add any var in heroku.',
   use: 'OWNER|919628516236',
   async exec(citel, Void,args,isCreator) {
            if (!isCreator) return citel.reply(tlang().owner);
			if (!args[0]) return citel.reply(`Please Give me var to set ${tlang().greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                [args.join(" ").split('|')[0]]: args.join(" ").split('|')[1],
				},
			});
			await citel.reply(`🟩var ${args.join(" ").split('|')[0]} : ${args.join(" ").split('|')[1]} has been set Successfuly.`);
   }
}
