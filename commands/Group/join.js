const { tlang } = require('../../lib')

module.exports = {
    name: 'join',
    category: 'owner',
    desc: 'joins given group link.',
    async exec(citel,Void,args,isCreator) {
      if (!isCreator) return citel.reply(tlang().owner);
	 if (!args[0]) return citel.reply('Provide me url.')
            if (!/https?:\/\/(chat\.whatsapp\.com)\/[A-Za-z]/.test(args[0])) return citel.reply(`Please give me valid url, ${tlang().greet}`);
				  let result = args[0].split("https://chat.whatsapp.com/")[1];
				  await Void.groupAcceptInvite(result)
					.then((res) => citel.reply("🟩Joined Group"))
					.catch((err) => citel.reply("Error in Joining Group."));
 
    }
 }
