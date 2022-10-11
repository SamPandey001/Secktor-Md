const { tlang } = require('../../lib')

module.exports = {
    name: 'botpic',
    category: 'misc',
    desc: 'Sets profile pic on userbot.',
    async exec(citel, Void,args,isCreator) {
        let mime = citel.quoted.mtype
        if (!isCreator) citel.reply(tlang().owner);
        if (!citel.quoted) return citel.reply(`Send/Reply Image With Caption ${command}`);
        if (!/image/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
        if (/webp/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        await Void.updateProfilePicture(Void.user.id, {
                url: media,
            })
            .catch((err) => fs.unlinkSync(media));
        citel.reply(tlang().success);
    }
 }