const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
    name: 'shutdown',
    category: 'owner',
    desc: 'Shuts userbot down..',
    async exec(citel, Void,args,isCreator) {
        const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			if (!isCreator) return citel.reply(tlang().owner);
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.get(baseURI + '/formation')
				.then(async (formation) => {
					forID = formation[0].id;
					citel.reply(`Sutting ${tlang().title} down`)
					await heroku.patch(baseURI + '/formation/' + forID, {
						body: {
							quantity: 0
						}
					});
				})
 
    }
 }