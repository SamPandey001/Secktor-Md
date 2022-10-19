const { tlang,botpic } = require('../../lib')
const Config = require('../../config')
const fs = require('fs')
const prefix = Config.prefix
const ytdl = require('ytdl-core')

module.exports = {
    name: 'ytmp4',
    alias: ['mp4dl'],
    category: 'downloader',
    desc: 'Downloads audio from youtube.',
    async exec(citel, Void,args) {
   const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (!args[0]) {
            citel.reply(`❌Please provide me a url`);
            return;
        }
        try {
            let urlYt = args[0];
            if (!urlYt.startsWith("http"))  return citel.reply(`❌ Give youtube link!`);
            let infoYt = await ytdl.getInfo(urlYt);
            if (infoYt.videoDetails.lengthSeconds >= 1800) return citel.reply(`❌ Video file too big!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp4");
            
            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= 140) {
                let buttonMessage = {
            video:fs.readFileSync(`./${randomName}`),
            mimetype: 'video/mp4',
            fileName: `${titleYt}.mp4`, 
            caption: ` ⿻ Title : ${titleYt}\n ⿻ File Size : ${fileSizeInMegabytes} MB`,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: titleYt,
                body: `${tlang().title}`,
                renderLargerThumbnail: true,
                thumbnailUrl: gurl,
                thumbnail: log0,
                mediaType: 1,
                mediaUrl: args[0],
                sourceUrl: args[0]
              }
            }
          }
          Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            } else {
                citel.reply(`❌ File size bigger than 140mb.`);
            }
            
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }
    }
 }
