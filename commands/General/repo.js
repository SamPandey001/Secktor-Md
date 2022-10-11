
const { tlang,botpic } = require('../../lib')
module.exports = {
    name: 'repo',
    category: 'general',
    alias: ["script", "git", "sc"],
    desc: 'Sends userbot github repo link.',
    async exec(citel, Void) {
        
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: `Hey ${citel.pushName}\n*This is Secktor Repo*\n\n*Repo:* https://github.com/SamPandey001/Secktor-Md\n\n*Whatsapp Group:* https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbCl\n\n*Deploy Your Own:*-\nSecktorBot.herokuapp.com/deploy `,
            footer: ` ` + tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "Secktor-Repo",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://github.com/SamPandey001/Secktor-Md`,
                sourceUrl: `https://github.com/SamPandey001/Secktor-Md`,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
 
    }
 }
      
