
module.exports = {
    name: 'tovn',
    category: 'converter',
    desc: 'Changes video to vn',
    use: '<reply to audio>',
    async exec(citel, Void,args) {
        let mime = citel.quoted.mtype
        if (!/video/.test(mime) && !/audio/.test(mime)) return citel.reply('Please reply to any audio/video')
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        const  { toPTT } = require('../../lib')
        let audio = await toPTT(media, 'mp4')
        Void.sendMessage(citel.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : citel })
        await fs.unlinkSync(media)
        await fs.unlinkSync(audio)
    }
 }
 
