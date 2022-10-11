const { tlang,getAdmin } = require('../../lib')

module.exports = {
    name: 'del',
    category: 'group',
    desc: 'Deletes message of any user.',
    async exec(citel, Void,args,isAdmins) {
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
       if (!citel.isGroup) return citel.reply(tlang().group)
       const groupAdmins = await getAdmin(Void,citel)
       const botNumber =  await Void.decodeJid(Void.user.id) 
       const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
       const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
       if (!isAdmins) return citel.reply('Only Admins are allowed to delete other persons message.')
       if(!isBotAdmins) return citel.reply('I can delete anyones message without getting Admin Role.')
       if (!citel.quoted) return citel.reply(`Please reply to any message. ${tlang().greet}`);
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


  
    
