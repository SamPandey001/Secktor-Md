let { webp2mp4File } = require("../../lib");
const fs = require('fs')

module.exports = {
   name: 'gif',
   category: 'converter',
   desc: 'Makes gif of replied image.',
   use: '<reply to audio>',
   async exec(citel, Void) {
     let mime = citel.quoted.mtype
    if (!citel.quoted) return citel.reply("Reply to any Image");
    if (!/webp/.test(mime)) return citel.reply(`reply to sticker*`);
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    let webpToMp4 = await webp2mp4File(media);
    await Void.sendMessage(citel.chat, {
        video: {
            url: webpToMp4.result,
            caption: "Convert Webp To Video",
        },
        gifPlayback: true,
    }, {
        quoted: citel,
    });
    await fs.unlinkSync(media);
   }
}
