module.exports = {
    name: 'request',
    category: 'group',
    desc: 'Sends requst to main Bot developer.',
    async exec(citel, Void,args) {
        if (!args.join(" ")) return reply(`Example : ${
            prefix + command
          } hello dev please add a downloader feature`);
        textt = `*| REQUEST |*`;
        teks1 = `\n\n*User* : @${
        citel.sender.split("@")[0]
      }\n*Request* : ${args.join(" ")}`;
        teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
        for (let i of owner) {
            Void.sendMessage(i + "@s.whatsapp.net", {
                text: textt + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });
        }
        Void.sendMessage(citel.chat, {
            text: textt + teks2 + teks1,
            mentions: [citel.sender],
        }, {
            quoted: citel,
        });
 
    }
 }