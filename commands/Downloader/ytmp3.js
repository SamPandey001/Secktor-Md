const { tlang,botpic } = require('../../lib/scraper')
const Config = require('../../config')
const ytdl = require('ytdl-core')
const fs = require('fs')


module.exports = {
    name: 'ytmp3',
    alias: ['mp3dl'],
    category: 'downloader',
    desc: 'Downloads audio from youtube.',
    async exec(citel, Void,args) {
 
      let { yta } = require('../../lib/yt')
                if (!args.join(" ")) return citel.reply(`Example : ${command} https://youtube.com/watch?v=ID 320kbps`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(args.join(" "), quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
let buttonMessage = { 
  audio: { url: media.dl_link },
  mimetype: 'audio/mpeg',
  fileName: `${media.title}.mp3`,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: media.title,
                body: `${tlang().title}`,
                thumbnail: { url :await botpic() },
                mediaType: 2,
                mediaUrl: args[0],
                sourceUrl:args[0]
              }
            }
          }
          Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    }
 }
