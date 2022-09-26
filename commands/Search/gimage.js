let gis = require("g-i-s");

module.exports = {
   name: 'image',
   alias: ['img','gimg'],
   category: 'search',
   desc: 'Searches Image on Google',
   use: '<query>',
   async exec(citel, Void, args) {
    if (!args.join(" ")) return citel.reply("Provide me a query!")
    if (!args[0]) return reply("Hey bie please tell me for which pic you're looking");
    let name1 = args.join(" ").split("|")[0]
    let name2 = args.join(" ").split("|")[1] || `1`
    citel.reply(`Sending ${name2} image(s) of ${name1} in chat`)
    let nn = name2
    for (let i = 0; i < nn; i++) {

        gis(name1, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: ` `,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        })
   }
}
}
