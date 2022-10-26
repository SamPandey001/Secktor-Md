
const { tlang,botpic } = require('../../lib')
module.exports = {
    name: 'repo',
    category: 'general',
    alias: ["script", "git", "sc"],
    desc: 'Sends userbot github repo link.',
    async exec(citel, Void) {
        
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: `Hey ${citel.pushName}\n*This is 🅿🆁🅸🅽🅲🅴🅶🅳🆂 Repo*\n\n*Repo:* https://github.com/Princegds786/princemd\n\n*Whatsapp Group:* https://chat.whatsapp.com/FlKXZwF37NS1kKy3HTWh4z\n\n*Deploy Your Own:*-\nSecktorBot.herokuapp.com/deploy `,
            footer: ` ` + tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "Secktor-Repo",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://github.com/Princegds786/princemd`,
                sourceUrl: `https://github.com/Princegds786/princemd`,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
 
    }
 }
      
