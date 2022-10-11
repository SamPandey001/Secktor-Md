const { tlang } = require('../../lib')
const Config = require('../../config')

module.exports = {
   name: 'mode',
   category: 'owner',
   desc: 'Changes currnet worktype of bot.',
   async exec(citel, Void,args,isCreator) {
    if (!isCreator) return citel.reply(tlang().owner);
    if (args.join(" ") === "public") {
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
            token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["WORKTYPE"]: "public",
            },
        });
        await citel.reply(`🟦Public Mode has been integrated successfully by ${tlang().title}`);
        return;
    }
    if (args.join(" ") === "private") {
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
            token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["WORKTYPE"]: "private",
            },
        });
        await citel.reply(`🟩Private Mode has been integrated successfully`);
   }
}
}
