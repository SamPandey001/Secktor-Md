module.exports = {
    name: 'delcmd',
    category: 'sticker',
    desc: 'Make delete previousely made /image/video a command.',
    async exec(citel, Void,args) {
        let hash = citel.quoted.fileSha256.toString('base64')
        if (!hash) return reply(`No Hashes`)
        if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return citel.reply(`You Have No Permission To Delete This Sticker Command`)
        delete global.db.data.sticker[hash]
        citel.reply(`Done!`)


    }
 }
 