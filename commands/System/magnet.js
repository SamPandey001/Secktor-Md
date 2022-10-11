 
const { tlang } = require('../../lib')

module.exports = {
    name: 'magnet',
    category: 'system',
    desc: 'Searches for magnet on internet and gives related info.',
    async exec(citel, Void,args) {
        const TorrentSearchApi = require("torrent-search-api");
        TorrentSearchApi.enableProvider("ThePirateBay", "Torrent9", "TorrentLeech");
        listSerch = [];
        const magnet = await TorrentSearchApi.search(args.join(" "))
            .then((res) => {
                //  //console.log(magnet);
                let teskd = `*Magnet Avilable on Internet.*\n\n`;
                for (let g of res) {
                    listSerch.push({
                        title: g.magnet,
                        rowId: `nothing`,
                        description: `${g.title} *Size* : ${g.size} `,
                    });
                }
                const sections = [
                    {
                        title: "ALL Magnests🔍\\",
                        rows: listSerch,
          },
        ];
                const listMessage = {
                    text: teskd,
                    footer: tlang().footer,
                    title: " *Huh,All Searched Magnets are listed below*",
                    buttonText: "FOUND",
                    sections,
                };
                Void.sendMessage(citel.chat, listMessage, {
                    quoted: citel,
                });
            });
    }
 }