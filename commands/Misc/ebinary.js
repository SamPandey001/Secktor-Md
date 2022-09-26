let {eBinary} = require("../../lib/binary");

module.exports = {
   name: 'ebinary',
   category:'misc',
   desc: 'Encodes in binary',
   use: '<query>',
   async exec(citel, Void, args) {
      try {
        if (!args[0]) return citel.reply(`Send text to be encoded.`);

        let textt = args.join(" ") || citel.quoted.text
        let eb = await eBinary(textt);
        citel.reply(eb);
         } catch (e) {
           console.log(e)
      }
   }
}

