const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')

const ytdl = require('ytdl-secktor')

const fs = require('fs-extra')

var videotime = 60000 // 1000 min

var dlsize = 1000 // 1000mb



cmd({

        pattern: "song",
   
        alias: ["සෝන්ග්","සොන්ග්","ගීතය"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "🎶",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`*Give Song Name!*❗`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(anu.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            

            let descget = `

☍ ⦁ *Title:* ${anu.title}
☍ ⦁ *Duration:* ${anu.timestamp}
☍ ⦁ *Viewers:* ${anu.views}
☍ ⦁ *Uploaded:* ${anu.ago}
☍ ⦁ *Author:* ${anu.author.name}
☍ ⦁ *Url:* ${anu.url}
  
  ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ •
`;    

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            const sdlr = await Void.sendMessage(citel.chat, { image: { url: anu.thumbnail }, caption: descget }, { quoted: citel });

            await Void.sendMessage(citel.chat, { react: { text: '🔄', key: sdlr.key } });

                let search = await yts(text);

            

                let buttonMessage = {

                        audio: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'audio/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ\nʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,

                        headerType: 4,

                    }

                  const getaudio = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });

                await Void.sendMessage(citel.chat, { react: { text: '🎧', key: getaudio.key } });

               return await Void.sendMessage(citel.chat, { react: { text: '✅', key: sdlr.key } });

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )
