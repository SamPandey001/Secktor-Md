const { tlang,prefix } = require('../../lib')
let yts = require("yt-search");

module.exports = {
    name: 'yts',
    category: 'search',
    desc: 'Gives descriptive info of query from youtube.',
    use: '<text>',
    async exec(citel, Void,args,from) {
        if (!args[0]) return citel.reply(`Example : ${prefix}yts ${tlang().title} WhatsApp Bot`);
        let search = await yts(args.join(" "));
        let textt = "*YouTube Search*\n\n Result From " + args.join(" ") + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
          i.type
        }\n🙈Views : ${i.views}\n⌛Duration : ${
          i.timestamp
        }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
          i.url
        }\n\n──────────────\n\n`;
        }
        Void.sendMessage(citel.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
 }
