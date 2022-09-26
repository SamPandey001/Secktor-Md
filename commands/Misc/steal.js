const Config = require('../../config')
const {Sticker,createSticker,StickerTypes} = require("wa-sticker-formatter");

module.exports = {
    name: 'steal',
    alias: ["take"],
    category: 'sticker',
    desc: 'Makes sticker of replied image/video.',
    async exec(citel, Void,args) {
        if (!citel.quoted) return citel.reply(`*Mention any Image or video Sir.*`);
        let mime = citel.quoted.mtype
        if (args.join(" ")) {
            anu = args.join(" ")
                .split("|");
            pack = anu[0] !== "" ? anu[0] : citel.pushName+'♥️';
            author = anu[1] !== "" ? anu[1] : Config.author;
        }
        else {
            pack = citel.pushName;
            author = "♥️";
        }
        if (citel.quoted) {
            let media = await citel.quoted.download();
            citel.reply("*Processing Your request*");
            let sticker = new Sticker(media, {
                pack: pack, // The pack name
                author: author, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 75, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const buffer = await sticker.toBuffer();
            Void.sendMessage(citel.chat, {
                sticker: buffer,
            }, {
                quoted: citel,
            });
        }
        else if (/video/.test(mime)) {
            if ((quoted.msg || quoted)
                .seconds > 20) return citel.reply("Cannot fetch videos longer than *20 Seconds*");
            let media = await quoted.download();
            let sticker = new Sticker(media, {
                pack: pack, // The pack name
                author: author, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 70, // The quality of the output file
                background: "transparent", // The sticker background color (only for full stickers)
            });
            const stikk = await sticker.toBuffer();
            Void.sendMessage(citel.chat, {
                sticker: stikk,
            }, {
                quoted: citel,
            });
        }
        else {
            citel.reply("*Uhh,Please reply to any image or video*");
        }
    }
 }
