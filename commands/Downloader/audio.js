const { tlang } = require('../../lib/scraper')
const {prefix} = require('../../config')

module.exports = { 
    name: 'audio',
    alias: ['yta','ytaudio'],
    category: 'downloader',
    desc: 'Downloads audio from youtube.',
    use: 'text',
    async exec(citel, Void,args) {
        if (!args.join(" ")) return citel.reply(`Example : ${prefix + command} Back in black`)
        let yts = require("yt-search")
        let search = await yts(args.join(" "))
        listSerch = []
        teskd = `\n📁Result From ${args.join(" ")}.\n`
        for (let i of search.all) {
            listSerch.push({
                title: i.title,
                rowId: `${prefix}ytmp3 ${i.url}`,
                description: `Secktor / ${i.timestamp}`
            })
        }
        const sections = [

            {
                title: "Total Search🔍" + search.all.length,
                rows: listSerch
                }

            ]
        const listMessage = {
            text: teskd,
            footer: tlang().footer,
            title: ` *🎥Youtube Search results by  ${tlang().title}📽️*`,
            buttonText: "Songs",
            mentions: await Void.parseMention(teskd),
            sections
        }
        Void.sendMessage(citel.chat, listMessage, {
            quoted: citel
        })
    }
 }