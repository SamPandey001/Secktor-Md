const { tlang } = require('../../lib')
const {prefix} = require('../../config')
let { ringtone } = require('../../lib')

module.exports = {
    name: 'ringtone',
    category: 'downloader',
    desc: 'Downloads ringtone.',
    use: '<text>',
    async exec(citel, Void,args) {
 if (!args.join(" ")) return citel.reply(`Example: ${prefix}ringtone back in black`)
		let anu = await ringtone(args.join(" "))
		let result = anu[Math.floor(Math.random() * anu.length)]
		Void.sendMessage(citel.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: citel })
    }
 }
