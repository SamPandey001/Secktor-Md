(async () => {
	switch (command) {
	  case "pick":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -pick\n*🧩Category:* FUN\n*🛠️Usage:* ${
              prefix + command
            } chutiya\n\n*📚Description:* Use it for fun,huh`
          );
          return;
        }
        if (!querie) return citel.reply("*Which type of User you want?*");
        let member = participants.map((u) => u.id);
        let me = citel.sender;
        let pick = member[Math.floor(Math.random() * member.length)];
        Void.sendMessage(
          citel.chat,
          {
            text: `The most ${querie} around us is *@${pick.split("@")[0]}*`,
            mentions: [pick],
          },
          {
            quoted: citel,
          }
        );
        break;
	}
})()
