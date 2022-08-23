(async () => {
	switch (command) {
	case "manga-search":
        const { Manga } = require("@shineiichijo/marika");
        const manga = new Manga();
        if (!querie) return reply("Which manga do you want to search My Lord");
        let srh = await manga.searchManga(querie);
        let mang = `*🎀Title: ${srh.data[0].title}*\n`;
        mang += `*📈Status: ${srh.data[0].status}*\n`;
        mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`;
        mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`;
        mang += `*🧧Genres:*\n`;
        for (let i = 0; i < srh.data[0].genres.length; i++) {
          mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
        }
        mang += `*✨Published on: ${srh.data[0].published.from}*\n`;
        mang += `*🌟Score: ${srh.data[0].scored}*\n`;
        mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`;
        mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`;
        mang += `*✍Authors:*\n`;
        for (let i = 0; i < srh.data[0].authors.length; i++) {
          mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
        }
        mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
        if (srh.data[0].background !== null)
          mang += `*🎆Background:* ${srh.data[0].background}`;
        mang += `*❄️Description:* ${srh.data[0].synopsis.replace(
          /\[Written by Sam]/g,
          ""
        )}`;
        Void.sendMessage(
          citel.chat,
          {
            image: {
              url: srh.data[0].images.jpg.large_image_url,
            },
            caption: mang,
          },
          {
            quoted: citel,
          }
        );
         break;
	
	}
})()
