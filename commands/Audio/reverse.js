const { tlang,ffmpeg  } = require('../../lib')
const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
    name: 'reverse',
    category: 'audio',
    desc: 'Adds reverse(equilizer) in quoted audio.[reduce distortion by equalizing its response over a specified frequency range.]',
    use: '<reply to audio>',
    async exec(citel, Void,args,from) {
      let mime = citel.quoted.mtype
       let set = '-filter_complex "areverse"';
       if (/audio/.test(mime)) {
        citel.reply(tlang().wait);
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let ran = citel.sender.slice(6)+(".mp3");
        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media);
          if (err) return reply(err);
          let buff = fs.readFileSync(ran);
          Void.sendMessage(
            from,
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