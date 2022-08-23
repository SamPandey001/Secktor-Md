(async () => {
	switch (command) {
	case "t-all":
      case "all":
      case "tagall":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:* TagAll\n*🍀Aliases* -t-all,-all,-tagall\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } Message\n\n*📚Description:* Tags every user of Group with a message `
            );
            return;
          }

          if (!citel.isGroup) return citel.reply(LangG.group);
          if (!isAdmins) return citel.reply(LangG.admin);

          let textt = `══✪〘 🛡️ *Tag All* 🛡️ 〙✪══
➲ *Message :* ${querie ? querie : "blank"}\n\n`;
          for (let mem of participants) {
            textt += `📍 @${mem.id.split("@")[0]}\n`;
          }
          Void.sendMessage(
            citel.chat,
            {
              text: textt,
              mentions: participants.map((a) => a.id),
            },
            {
              quoted: citel,
            }
          );
        }
        break;
	
	}
})()
