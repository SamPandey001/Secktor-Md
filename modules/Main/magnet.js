(async () => {
	switch (command) {
case "magnet":
        case "torrent":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Magnet\n*🍀Aliases* ${prefix}magnet,${prefix}torrent\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query on Piratesbay and Gives result.`
            );
            return;
          }
          const TorrentSearchApi = require("torrent-search-api");
          TorrentSearchApi.enableProvider(
            "ThePirateBay",
            "Torrent9",
            "TorrentLeech"
          );
          listSerch = [];
          const magnet = await TorrentSearchApi.search(querie).then((res) => {
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

              footer: LangG.footer,

              title: " *Huh,All Searched Magnets are listed below*",

              buttonText: "FOUND",

              sections,
            };
            Void.sendMessage(from, listMessage, {
              quoted: citel,
            });
          });
          return
        }
         break;
	}
})()
