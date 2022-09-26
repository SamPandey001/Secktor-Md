let {dBinary} = require("../../lib/binary");

module.exports = {
   name: 'dbinary',
   category:'misc',
   desc: 'Decodes in ASCII from binary.',
   use: '<query>',
   async exec(citel, Void, args) {
      try {
        if (!args[0]) return citel.reply(`Send text to be decoded.`);
        let eb = await dBinary(args.join(" "));
        citel.reply(eb);
         } catch (e) {
           console.log(e)
      }
   }
}

