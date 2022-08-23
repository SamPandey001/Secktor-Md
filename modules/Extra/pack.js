(async () => {
	switch (command) {
	
	 case "pack":
        {
          if (!querie) return citel.reply("Please give me a pack Name");
        if (querie === "1") var gfd = "hot girl animation";
          if (querie === "2") var gfd = "telegram sticker dragon with fire";
          if (querie === "3") var gfd = "cat animation";
          if (querie === "4") var gfd = "little dragon with fire animation";
          if (querie === "5") var gfd = "turtle cute animation";
          if (querie === "6") var gfd = "slap anime animation";
          //console.log(gfd);

          let { data: samig } = await axios.get(
            `https://g.tenor.com/v1/search?q=${querie}&key=LIVDSRZULELA&limit=50`
          );

          let webg =
            samig.results?.[Math.floor(Math.random() * samig.results.length)]
              ?.media[0]?.mp4?.url;
          await Void.sendImageAsSticker(citel.chat, webg, citel, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;
	}
})()
