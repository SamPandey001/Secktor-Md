
(async () => {
	switch (command) {
     
         
      case "alive":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:*   Alive\n*🍀Aliases* ${
              prefix + command
            },-alive\n*🧩Category:* General\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Shows that ,is Secktor Botto alive?.`
          );
          return;
        }
        const aliveadm = isAdmins ? "True" : "False";
        waifudl = await axios.get("https://waifu.pics/api/sfw/waifu");
        const alivtxt = `
 Hello, my ${pushname}, I am ${LangG.title} . A bot developed by Team ${global.ownername} 💓.
Type ${prefix}menu for my command list.

*Powered by ${global.ownername}*
`;
        const alivebutton = [
          {
            buttonId: `${prefix}help`,
            buttonText: {
              displayText: "HELP",
            },
            type: 1,
          },
          {
            buttonId: `${prefix}repo`,
            buttonText: {
              displayText: "REPO",
            },
            type: 1,
          },
        ];
        let aliveMessage = {
          image: {
            url: waifudl.data.url,
          },
          caption: alivtxt,
          footer: LangG.footer,
          buttons: alivebutton,
          headerType: 4,
        };
        Void.sendMessage(citel.chat, aliveMessage, {
          quoted: citel,
        });

        break;
     
		}
} )()
