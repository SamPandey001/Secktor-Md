(async () => {
	switch (command) {
case "":
let Languagey = require("./lib/string");
let Langt = Languagey.getString("global");
let todlinkt = [
      `${Langt.pic1}`,
      `${Langt.pic2}`,
      `${Langt.pic3}`,
      `${Langt.pic4}`,
      `${Langt.pic5}`,
      `${Langt.pic6}`,
    ];

   let picsecktorr = todlinkt[Math.floor(Math.random() * todlinkt.length)];
  //  console.log(picsecktor)
        if (icmd) {
          let buttonMessaged = {
           image:{ url : picsecktorr},
            caption: `Did you mean ${prefix}help?`,
            footer: ` ` + LangG.footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.dotbody,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
        }
        break
		}
})()
