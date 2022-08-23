(async () => {
	switch (command) {
	
	 case "meme":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:*  Meme\n*🍀Aliases* -meme\n*🧩Category:* Fun*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends meme Pic`
          );
          return;
        }
        waifudd = await axios.get("https://meme-api.herokuapp.com/gimme");
        let button2Messages = {
          image: {
            url: waifudd.data.url,
          },
          caption: waifudd.data.title,
          headerType: 1,
        };
        await Void.sendMessage(citel.chat, button2Messages, {
          quoted: citel,
        }).catch((err) => {
          return "Umm,Could not found";
        })
        return
        break;
	}
})() 
