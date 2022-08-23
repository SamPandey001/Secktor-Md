(async () => {
	switch (command) {
	
	case "dbinary":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Dbinary\n*🍀Aliases* -dbinary\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } message or reply\n\n*📚Description:* decodes given reply from binary.`
            );
            return;
          }
          if (!citel.quoted.text && !text)
            return citel.reply(`Send/reply text with caption ${prefix + command}`);
          let { dBinary } = require("./lib/binary");
          let textt = text
            ? text
            : citel.quoted && citel.quoted.text
            ? citel.quoted.text
            : citel.text;
          let db = await dBinary(textt);
          reply(db);
          return
        }
         break;
    }
})()
