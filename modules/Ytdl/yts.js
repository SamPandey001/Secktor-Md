
(async () => {
	switch (command) {
 case "yts":
      case "ytsearch":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   ${command}\n*🍀Aliases* -yts,-ytsearch\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query onto YouTube and Gives text result.`
            );
            return;
          }

          if (!text)
          return citel.reply(`Example : ${prefix + command} ${LangG.title} WhatsApp Bot`);
          let yts = require("yt-search");
          let search = await yts(text);
          let textt =
            "*YouTube Search*\n\n Result From " +
            text +
            "\n\n─────────────────────\n";
          let no = 1;
          for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
              i.type
            }\n🙈Views : ${i.views}\n⌛Duration : ${
              i.timestamp
            }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          Void.sendMessage(
            citel.chat,
            {
              image: {
                url: search.all[0].thumbnail,
              },
              caption: textt,
            },
            {
              quoted: citel,
            }
          );
        }
        break;
        }
        })()
