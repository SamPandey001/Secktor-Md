const { tlang,ffmpeg  } = require('../../lib')
const fs = require('fs')
const { exec } = require('child_process')
module.exports = {
    name: 'bass',
    category: 'audio',
    desc: 'Adds Base to the given sound [describes tones of low (also called "deep") frequency, pitch and range]',
    use: '<reply to audio>',
    async exec(citel, Void,args) {
      let mime = citel.quoted.mtype
       let set = "-af equalizer=f=54:width_type=o:width=2:g=20";
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
          `Reply to the audio you want to change with*`
        );
    }
 }
