const { tlang } = require('../../lib/scraper')

module.exports = {
    name: 'join',
    category: 'owner',
    desc: 'joins given group link.',
    async exec(citel,Void,args) {
        if (!isCreator) return citel.reply(tlang().owner);
    //    console.log(isCreator)
				  if (!args[0]) return citel.reply(`Please give me Query ${tlang().greet}`);
				  if (!args[0] && !args[0].includes("whatsapp.com"))
					citel.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
				  let result = args[0].split("https://chat.whatsapp.com/")[1];
				  await Void.groupAcceptInvite(result)
					.then((res) => citel.reply("🟩Joined Group"))
					.catch((err) => citel.reply("Error in Joining Group"));
 
    }
 }
