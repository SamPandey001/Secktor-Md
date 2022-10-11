const { tlang,getAdmin,prefix,Config } = require('../../lib')

module.exports = {
    name: 'chatbot',
    category: 'misc',
    desc: 'activates and deactivates chatbot.\nuse buttons to toggle.',
    async exec(citel, Void,args,isCreator) {
		if(!isCreator) return citel.reply(tlang().owner)
	        switch(args[0]) {
        case "on": {
            if(!isCreator) return citel.reply(tlang().owner)
	const Heroku = require("heroku-client");
	const heroku = new Heroku({
		token: Config.HEROKU.API_KEY,
	});
	let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
	await heroku.patch(baseURI + "/config-vars", {
		body: {
		["CHATBOT"]: 'true',
		},
	});
	await citel.reply(`Activated chatbot Successfuly.`);

        }
        break
        case "off": {
         if(!isCreator) return citel.reply(tlang().owner)
	const Heroku = require("heroku-client");
	const heroku = new Heroku({
		token: Config.HEROKU.API_KEY,
	});
	let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
	await heroku.patch(baseURI + "/config-vars", {
		body: {
		["CHATBOT"]: 'flase',
		},
	});
	await citel.reply(`Deactivated chatbot Successfuly.`);
        }
        break
        default:
            {
				let buttons = [
					{
						buttonId: `${prefix}chatbot on`,
						buttonText: {
							displayText: "Turn On",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}chatbot off`,
						buttonText: {
							displayText: "Turn Off",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `Chatbot Manager`, Void.user.name, citel);
			}
        }

        
    }
 }
