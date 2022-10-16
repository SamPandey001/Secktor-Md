let { UploadFileUgu,webp2mp4File,TelegraPh,tlang} = require("../../lib");
const util = require("util");
const fs = require('fs')

module.exports = {
   name: 'url',
   category: 'misc',
   desc: 'Tells runtime/uptime of bot.',
   async exec(citel, Void,args) {
    if (!citel.quoted) return citel.reply(`Pls mention me any image/video and type ${prefix + command} to upload my ${tlang().greet}`);
    let mime = citel.quoted.mtype
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    if (/image/.test(mime)) {
        let anu = await TelegraPh(media);
        citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n` +util.format(anu));
    }
    else if (!/image/.test(mime)) {
        let anu = await TelegraPh(media);
        citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n` + util.format(anu));
    }
    await fs.unlinkSync(media);
   }
}
