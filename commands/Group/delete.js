const { tlang } = require('../../lib/scraper')

module.exports = {
    name: 'del',
    category: 'group',
    desc: 'Deletes message of any user.',
    async exec(citel, Void,args) {
        if (citel.quoted.isBaileys) {
            const key = {
                remoteJid: citel.chat,
                fromMe: false,
                id: citel.quoted.id,
                participant: citel.quoted.sender
            }
            await Void.sendMessage(citel.chat, { delete: key })

        }
        if (!citel.quoted.isBaileys) {
        if (!isAdmins) return citel.reply('Only Admins are allowed to delete other persons message.')
        if (!citel.quoted) return citel.reply(`Please Quote any message. ${tlang().greet}`);
        let { chat, fromMe, id } = citel.quoted;
        const key = {
            remoteJid: citel.chat,
            fromMe: false,
            id: citel.quoted.id,
            participant: citel.quoted.sender
        }
        await Void.sendMessage(citel.chat, { delete: key })
    }
    }
 }
