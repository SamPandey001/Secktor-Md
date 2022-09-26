const { tlang,botpic } = require('../../lib/scraper')
const Config = require('../../config')
const ytdl = require('ytdl-core')
const fs = require('fs')

module.exports = {
    name: 'ytmp4',
    alias: ['mp4dl'],
    category: 'downloader',
    desc: 'Downloads audio from youtube.',
    async exec(citel, Void,args) {
      let { ytv } = require('../../lib/yt')
                if (!args.join(" ")) return citel.reply(`Example : ${Config.prefix}ytmp4 https://youtube.com/watch?v=ID 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(args.join(" "), quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                let buttonMessage = {
            video:{ url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, 
            caption: ` ⿻ Title : ${media.title}\n ⿻ File Size : ${media.filesizeF}`,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: media.title,
                body: `${tlang().title}`,
                thumbnail: { url: await botpic()},
                mediaType: 2,
                mediaUrl: args[0],
                sourceUrl: args[0]
              }
            }
          }
          Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
    }
 }
