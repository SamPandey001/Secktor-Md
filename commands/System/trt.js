const axios = require('axios')

module.exports = {
   name: 'trt',
   category: 'misc',
   desc: 'Translate\'s given text in desird language.',
   async exec(citel, Void,args) {
    const translatte = require("translatte");
			if (!citel.quoted) return citel.reply("*Please reply to any message.*");
			if (!citel.quoted) return citel.reply(`Please mention or give tex.`);
			let textt = citel.quoted.text;
			whole = await translatte(textt, {
				from: args[1] || "auto",
				to: args[0] || "hi",
			});
			if ("text" in whole) {
				return await citel.reply("*Translated Into🔎:* " + " ```" + (args[0] || "Auto to Hindi") + "```\n" + " *From Language🔎:* " + " ```" + (args[1] || "Auto Detect") + "```\n" + "*Result♦️:* " + " ```" + whole.text + "```");
			}

   }
}