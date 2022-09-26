const { tlang } = require('../../lib/scraper')

module.exports = {
    name: 'grouplink',
    category: 'group',
    desc: 'Provides current group link.',
    async exec(citel, Void,args,isAdmins,isBotAdmins,groupName) {
        if (!isBotAdmins) return citel.reply(tlang().botAdmin)
        if (!citel.isGroup) return citel.reply(tlang().group)
        let response = await Void.groupInviteCode(citel.chat);
          let linkk = `https://chat.whatsapp.com/${response}`
        
Void.sendMessage(citel.chat, {
text: `Group Link of ${groupName}`,
templateButtons: [{
index: 1,
urlButton: {
displayText: 'Tap Here',
url: 'https://www.whatsapp.com/otp/copy/'+linkk
}
}],
footer: `© ${tlang().title}`
})
        
    }
 }
