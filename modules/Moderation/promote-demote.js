(async () => {
	switch (command) {
	case "promote":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${
                prefix + command
              } tag/reply user\n\n*📚Description:* Provides Admin role to tagged/replied user`
            );
          }
          if (!citel.isGroup) return citel.reply(LangG.group);
          if (!isBotAdmins) return citel.reply(LangG.botAdmin);
          if (!isAdmins) return citel.reply(LangG.admin);
          let users = citel.mentionedJid[0]
            ? citel.mentionedJid[0]
            : citel.quoted
            ? citel.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.groupParticipantsUpdate(citel.chat, [users], "promote")
            .then((res) => reply(LangG.promote))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "demote":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } tag/reply user\n\n*📚Description:* Demotes from Admin Role`
            );
          }
          if (!citel.isGroup) return citel.reply(LangG.group);
          if (!isBotAdmins) return citel.reply(LangG.botAdmin);
          if (!isAdmins) return citel.reply(LangG.admin);
          let users = citel.mentionedJid[0]
            ? citel.mentionedJid[0]
            : citel.quoted
            ? citel.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.groupParticipantsUpdate(citel.chat, [users], "demote")
            .then((res) => reply(LangG.demote))
            .catch((err) => reply(jsonformat(err)));
        }
         break;
	
	}
})()
