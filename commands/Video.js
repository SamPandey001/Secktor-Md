const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')

const ytdl = require('ytdl-secktor')

const fs = require('fs-extra')

var videotime = 60000 // 1000 min

var dlsize = 1000 // 1000mb



cmd({

        pattern: "testvideo",

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📽️",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const ytvideo = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp4?url=${anu.url}&apikey=prabath}`)

        const linkget = ytvideo.download

        const name = ytvideo.title

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

                citel.reply(`*Give Video Name!*❗`);

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

            

            let vdescget = `

☍ ⦁ *Title:* ${anu.title}
☍ ⦁ *Duration:* ${anu.timestamp}
☍ ⦁ *Viewers:* ${anu.views}
☍ ⦁ *Uploaded:* ${anu.ago}
☍ ⦁ *Author:* ${anu.author.name}
☍ ⦁ *Url:* ${anu.url}
`;    

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            const vdlr = await Void.sendMessage(citel.chat, { image: { url: anu.thumbnail }, caption: vdescget }, { quoted: citel });

            await Void.sendMessage(citel.chat, { react: { text: '🔄', key: vdlr.key } });

                let search = await yts(text);

    

                let buttonMessage = {

                        document: linkget ,

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ\nʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,

                        headerType: 4,

                    }

                  const vdl = await Void.sendMessage(citel.chat, {

                document: {

                    url: linkget ,

                },

                mimetype: "video/mp4",

                caption: `ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ

ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,

                fileName: name ,

            }, {

                quoted: citel,

            });

await Void.sendMessage(citel.chat, { react: { text: '📽️', key: vdl.key } });

await Void.sendMessage(citel.chat, { react: { text: '✅', key: vdlr.key } });

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )
