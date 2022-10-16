const { tlang,sleep } = require('../../lib/')

module.exports = {
    name: 'block',
    category: 'owner',
    desc: 'Blocks to the quoted user.',
    async exec(citel, Void,args,isCreator) {
        if (!citel.quoted) return citel.reply("Please reply to user");
        if (!isCreator) citel.reply(tlang().owner);
        let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : args.join(" ").replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await Void.updateBlockStatus(users, "block")
        .then((res) => console.log(jsonformat(res)))
        .catch((err) => console.log(jsonformat(err)));
			
    }
 }
