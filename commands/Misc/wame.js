module.exports = {
    name: 'wm',
    category: 'misc',
    desc: 'Makes wa me of quoted or mentioned user.',
    async exec(citel, Void,args) {
let users = 'https://wa.me/' +citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : args.join(' ').replace(':'||'@')
console.log(users)
citel.reply(`${users}`)

}
 }
