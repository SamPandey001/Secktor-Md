const { tlang } = require('../../lib/scraper')
const { sleep } = require('../../lib/myfuncn')
module.exports = {
    name: 'promte',
    category: 'owner',
    desc: 'adds user in group',
    async exec(citel, Void,args) {
        if (!citel.quoted) return citel.reply("Please reply to user");
        if (!isCreator) citel.reply(tlang().owner);
        if (!isBotAdmins) return citel.reply(tlang().botAdmin);
        let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Void.groupParticipantsUpdate(citel.chat, [users], "promote")
				.then((res) => reply(Ltlang().promote))
				.catch((err) => console.log(err));
			
    }
 }
