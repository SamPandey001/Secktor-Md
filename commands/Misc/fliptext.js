const { tlang } = require('../../lib')
const {prefix} = require('../../config')

module.exports = {
    name: 'fliptext',
    category: 'misc',
    desc: 'Flips given text.',
    async exec(citel, Void,args) {
        if (!args.join(" ")) return citel.reply(`Example : ${prefix}fliptext Back in black`)
       flipe = args.join(" ").split('').reverse().join('')
 citel.reply(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*IGiven text :*\n${args.join(" ")}\n*Fliped text :*\n${flipe}`)

    }
 }
