module.exports = {
    name: 'readmore',
    category: 'misc',
    desc: 'Adds *readmore* in given text.',
    async exec(citel, Void,args) {
await citel.reply(args.join(' ').replace(/\+/g, (String.fromCharCode(8206)).repeat(4001)))

}
 }
