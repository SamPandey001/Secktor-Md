
const { tlang } = require('../../lib')

module.exports = {
   name: 'animepic',
   alias: ['char'],
   category: 'weeb',
   async exec(citel, Void,args) {
   var pictured = "Anime Pics HD ";
    gis(args.join(" ") + pictured, async (error, result) => {
      n = result;
      images = n[Math.floor(Math.random() * n.length)].url;
      let buttonMessage = {
        image: {
          url: images,
        },
        caption: `*-----「 Anime Image 」-----*`,
        footer: Void.user.name,
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            title: tlang().title,
            body: `Anime Pics`,
            thumbnail: log0,
            mediaType: 2,
            mediaUrl: ``,
            sourceUrl: ``,
          },
        },
      };
      await SendYes()
      Void.sendMessage(citel.chat, buttonMessage, {
        quoted: citel,
      });
    });
     
   }
}
