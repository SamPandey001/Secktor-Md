(async () => {
	switch (command) {
        case "delete":
      case "del":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -del,-delete\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } reply to message.\n\n*📚Description:* Deletes quoted/replied message if was sent by bot`
            );
            return;
          }
          if(!isCreator) return citel.reply('This command is only for Admins.')
          if (!citel.quoted) return citel.reply(`Please Quote any message. ${LangG.greet}`);
            let { chat, fromMe, id } = citel.quoted;
const key = {
    remoteJid: citel.chat,
    fromMe: false,
    id: citel.quoted.id,
    participant: citel.quoted.sender
}
await Void.sendMessage(citel.chat, { delete: key })
        }
         break;
        }
    })()
