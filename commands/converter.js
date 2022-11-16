/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const axios = require('axios')
const { sck1, tiny, fancytext, listall,cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')

    //---------------------------------------------------------------------------
cmd({
            pattern: "photo",
            desc: "Makes photo of replied sticker.",
            category: "converter",
            use: '<reply to any gif>',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`
            }
            if (!citel.quoted) return citel.reply('_Need Media._')
            let mime = citel.quoted.mtype
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let name = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${name}`, (err) => {
                let buffer = fs.readFileSync(ran)
                Void.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
            })
            fs.unlinkSync(media)
            fs.unlinkSync(name)
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "quotely",
            desc: "Makes Sticker of quoted text.",
            alias: ["q"],
            category: "converter",
            use: '<reply to any message.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("Please quote/reply to any message");
            let textt = citel.quoted.text;
            let pfp;
            try {
                pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
            } catch (e) {
                pfp = THUMB_IMAGE;
            }
            let todlinkf = ["#FFFFFF", "#000000"];
            let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
            let username = await sck1.findOne({ id: citel.quoted.sender })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = Void.getName(citel.quoted.sender)
            }
            let body = {
                type: "quote",
                format: "png",
                backgroundColor: todf,
                width: 512,
                height: 512,
                scale: 3,
                messages: [{
                    avatar: true,
                    from: {
                        first_name: tname,
                        language_code: "en",
                        name: tname,
                        photo: {
                            url: pfp,
                        },
                    },
                    text: textt,
                    replyMessage: {},
                }, ],
            };
            let res = await axios.post("https://bot.lyo.su/quote/generate", body);
            let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
            return citel.reply(img,{packname:'Secktor',author:'Quotely'},"sticker")

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "fancy",
            desc: "Makes stylish/fancy given text",
            category: "converter",
            use: '56 Secktor',
            react: "✅",
        },
        async(Void, citel, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "Fancy text generator\n\nExample: .fancy 32 Secktor\n\n"
                );
                listall("Secktor Bot").forEach((txt, num) => {
                    text += `${(num += 1)} ${txt}\n`;
                });
                return await citel.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            citel.reply(fancytextt)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tiny",
            desc: "Makes url tiny.",
            category: "converter",
            use: '<url>',
            react: "✅",
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Provide me a link')
            try {
                link = text.split(" ")[0];
                anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                citel.reply(`*🛡️Your Shortened URL*\n\n${anu.data}`);
            } catch (e) {
                console.log(e);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "toaudio",
        desc: "changes type to audio.",
        category: "converter",
        use: '<reply to any audio>',
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply('_Need Media._')
        let mime = citel.quoted.mtype
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        const { toAudio } = require('../lib')
        let audio = await toAudio(media, 'mp4')
        Void.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel })
        await fs.unlinkSync(media)
        await fs.unlinkSync(audio)
    }
)
