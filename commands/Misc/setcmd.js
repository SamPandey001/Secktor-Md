module.exports = {
    name: 'setcmd',
    category: 'misc',
    desc: 'Make audio/image/video a command.',
    async exec(citel, Void,args) {
      let text = args.join(" ")
        if (!citel.quoted.fileSha256) return citel.reply(`SHA256 Hash Missing`)
        if (!args[0]) return citel.reply(`For What Command?`)
        let hash = citel.quoted.fileSha256.toString('base64')
        if (global.db.sticker[hash] && global.db.sticker[hash].locked) return citel.reply(`You Have No Permission To Change This Sticker Command`)
        global.db.sticker[hash] = {
            text,
            mentionedJid: citel.mentionedJid,
            creator: citel.sender,
            at: + new Date,
            locked: false,
        }
        citel.reply(`Done!`)
    }
 }
 