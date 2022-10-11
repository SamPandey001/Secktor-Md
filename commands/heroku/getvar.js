const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'getvar',
   category: 'owner',
   desc: 'To get vars from heroku.',
   use: 'OWNER|919628516236',
   async exec(citel, Void,args,isCreator) {
            if (!isCreator) return citel.reply(tlang().owner);
			if (!args[0]) return citel.reply(`Please Give me var name, ${tlang().greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
let h = await heroku.get(baseURI+'/config-vars')
for (vr in h) {
if(args[0]===vr) return citel.reply('Your var.\n'+vr+': '+h[vr])	
}
   }
}
