const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'getallvar',
   category: 'owner',
   desc: 'To get all vars from heroku.',
   use: '',
   async exec(citel, Void,args,isCreator) {
            if (!isCreator) return citel.reply(tlang().owner);
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
let h = await heroku.get(baseURI+'/config-vars')
let str = '*All Your Heroku Vars*\n\n'
for (vr in h) {
str+= vr+':'+h[vr]+'\n'
}
citel.reply(str)
   }
}
