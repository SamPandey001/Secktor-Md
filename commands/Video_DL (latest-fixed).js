const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')

const { mediafire } = require("../lib/mediafire.js");

const googleTTS = require("google-tts-api");

const ytdl = require('ytdl-secktor')

const fs = require('fs-extra')

var videotime = 60000 // 1000 min

var dlsize = 1000 // 1000mb



cmd({

            pattern: "video",

            desc: "Downloads video from youtube.",

            category: "downloader",
  
            react: "📽️",

            filename: __filename,

            use: '<yt video url>',

        },

        async(Void, citel, text) => {

            const getRandom = (ext) => {

                return `${Math.floor(Math.random() * 10000)}${ext}`;

            };

            if (!text) {

                citel.reply(`Please Give Me A Topic ❗`);

             

            

       

                return;

            }

            try {

                let yts = require("secktor-pack");

                let search = await yts(text);

                let anu = search.videos[0];

                let urlYt = anu.url;

                let infoYt = await ytdl.getInfo(urlYt);

                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);

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
                let descget = `

☍ ⦁ *Title:* ${anu.title}
☍ ⦁ *Duration:* ${anu.timestamp}
☍ ⦁ *Viewers:* ${anu.views}
☍ ⦁ *Uploaded:* ${anu.ago}
☍ ⦁ *Author:* ${anu.author.name}
☍ ⦁ *Url:* ${anu.url}

ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`;   

                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

                if (fileSizeInMegabytes <= dlsize) {

                    let yts = require("secktor-pack");

                    let search = await yts(text);
                const sdlr = await Void.sendMessage(citel.chat, { image: { url: anu.thumbnail }, caption: descget }, { quoted: citel });
                await Void.sendMessage(citel.chat, { react: { text: '🔄', key: sdlr.key } });
                    let buttonMessage = {

                        document: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,

                        headerType: 4,

                    }

               const getr = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
               await Void.sendMessage(citel.chat, { react: { text: '📽️', key: getr.key } });
               return await Void.sendMessage(citel.chat, { react: { text: '✅', key: sdlr.key } });

                 return fs.unlinkSync(`./${randomName}`);

                } else {

                    citel.reply(`❌ File size bigger than 100mb.`);

                }

                return fs.unlinkSync(`./${randomName}`);      

            } catch (e) {

                console.log(e)

            }

        }

    )
