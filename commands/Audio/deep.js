const { tlang,ffmpeg  } = require('../../lib')
const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
    name: 'deep',
    category: 'audio',
   desc: 'Adds deep(equilizer) in quoted audio.[reduce distortion by equalizing its response over a specified frequency range.]',
   use: '<reply to audio>',
   async exec(citel, Void,args) {
      let mime = citel.quoted.mtype
       let set = "-af atempo=4/4,asetrate=44500*2/3";
       if (/audio/.test(mime)) {
        citel.reply(tlang().wait);
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let ran = citel.sender.slice(6)+(".mp3");
        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media);
          if (err) return reply(err);
          let buff = fs.readFileSync(ran);
          Void.sendMessage(
            citel.chat,
            {
              audio: buff,
              mimetype: "audio/mpeg",
            },
            {
              quoted: citel,
            }
          );
          fs.unlinkSync(ran);
        });
      } else
        citel.reply(
          `Reply to the audio you want to change with.*`
        );
    }
 }