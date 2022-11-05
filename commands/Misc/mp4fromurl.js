const axios = require('axios')
const { tlang } = require('../../lib')
module.exports = {
   name: 'mp4fromurl',
   category: 'misc',
   desc: 'download mp4 from url.',
   async exec(citel, Void,args) {
    if (!args[0]) return citel.reply(`Where's the link ?`);
        await Void.sendMessage(citel.chat, {
            video: {
                url: args[0],
            },
            caption: "*Media from url.*",
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `MP4 From URL`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        }, {
            quoted: citel,
        });

   }
}
