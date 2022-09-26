
const { tlang,botpic } = require('../../lib/scraper')
module.exports = {
    name: 'repo',
    category: 'general',
    desc: 'Sends userbot github repo link.',
    async exec(citel, Void) {
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: `Hey ${citel.pushName}\n*This is Secktor Repo*\n\nhttps://github.com/SamPandey001/Secktor-Md `,
            footer: ` ` + tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "Secktor-Repo",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
 
    }
 }
      
