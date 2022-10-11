const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'restart',
   category: 'owner',
   desc: 'Restarts Bot Node Server.',
   async exec(citel, Void,args,isCreator) {
            if (!isCreator) return citel.reply(tlang().owner);
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			citel.reply(`Restarting ${tlang().title}`)
			//console.log(baseURI);
			await heroku.delete(baseURI + '/dynos')
				.catch(async (error) => {
					citel.reply('got an error')
				});
   }
}
