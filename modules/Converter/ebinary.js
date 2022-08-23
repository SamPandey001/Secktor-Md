(async () => {
	switch (command) {
	
	 case "ebinary":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Ebinary\n*🍀Aliases* -ebinary\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } message or reply\n\n*📚Description:* Encodes given reply into binary.`
            );
            return;
          }
          if (!citel.quoted.text && !text)
            return citel.reply(`Send/reply text with caption ${prefix + command}`);
          let { eBinary } = require("./lib/binary");
          let textt = text
            ? text
            : citel.quoted && citel.quoted.text
            ? citel.quoted.text
            : citel.text;
          let eb = await eBinary(textt);
          reply(eb);
          return
        }
         break;
	}
})()
