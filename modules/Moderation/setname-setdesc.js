(async () => {
	switch (command) {
	case "setname":
      case "setsubject":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } Title\n\n*📚Description:* Sets New Subjet in Group`
            );
          }
          if (!citel.isGroup) citel.reply(LangG.group);
          if (!isBotAdmins) citel.reply(LangG.botAdmin);
          if (!isAdmins) citel.reply(LangG.admin);
          if (!text) citel.reply("Text ?");
          await Void.groupUpdateSubject(citel.chat, text)
            .then((res) => console.log(LangG.success))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "setdesc":
      case "setdesk":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } Description\n\n*📚Description:* Sets Description in Group`
            );
          }
          if (!citel.isGroup) citel.reply(LangG.group);
          if (!isBotAdmins) citel.reply(LangG.botAdmin);
          if (!isAdmins) citel.reply(LangG.admin);
          if (!text) citel.reply("Text ?");
          await Void.groupUpdateDescription(citel.chat, text)
            .then((res) => console.log(LangG.success))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
	
	}
})()
