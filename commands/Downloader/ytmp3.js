const { tlang,botpic } = require('../../lib')
const Config = require('../../config')
const fs = require('fs')
const ytdl = require('ytdl-core')
const prefix = Config.prefix

module.exports = {
    name: 'ytmp3',
    alias: ['mp3dl'],
    category: 'downloader',
    desc: 'Downloads audio from youtube.',
    async exec(citel, Void,args,command) {
 const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        
        if (!args[0]) return citel.reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
        try {
            let urlYt = args[0];
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            if (infoYt.videoDetails.lengthSeconds >= 7200) {
                citel.reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Audio downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 120) {
                let buttonMessage = { 
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                              headerType: 4,
                              contextInfo: {
                            externalAdReply: {
                              title: titleYt,
                              body: tlang().title,
                              renderLargerThumbnail: true,
                               thumbnailUrl: gurl,
                               mediaUrl: '',
                               mediaType: 1,
                              thumbnail: log0,
                              sourceUrl: gurl,
                            },
                          },
                            }
          Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            } else {
                citel.reply(`❌ File size bigger than 120mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log('Got an error during downloading song.')
        }
      
    }
 }
 
 
