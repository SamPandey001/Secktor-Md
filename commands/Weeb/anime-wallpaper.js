const { tlang } = require('../../lib/scraper')
const {prefix} = require('../../config')
const { AnimeWallpaper } =require("anime-wallpaper")

module.exports = {
    name: 'wallpaper',
    category: 'weeb',
    desc: 'Downloads wallpaper.',
    async exec(citel, Void,args) {
        if (!args.join(" ")) return citel.reply(`Please give me Name.\nExample : ${prefix}wallpaper Zero Two`)
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: args.join(" "), type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: ` `,
            footer: `tlang().footer`,
            buttons: buttons,
            headerType: 4
        }
        Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
    }
 }
