const { tlang,prefix } = require('../../lib')
module.exports = {
    name: 'poll',
    category: 'group',
    desc: 'Makes poll in group.',
    async exec(citel, Void,args) {
let [poll,opt] = args.join(" ").split(";");
    if (args.join(" ").split(";") < 2)
      return await citel.reply(
        `${prefix}poll question;option1,option2,option3.....`
      );  
    let options = [];
        for (let i of opt.split(',')) {
            options.push(i);
        }
        await Void.sendMessage(citel.chat, {
            poll: {
                name: poll,
                values: options
            }
        })
    }
 }

