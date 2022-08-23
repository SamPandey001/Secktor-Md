(async () => {
	switch (command) {
	  case "privacy":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -privacy\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Changes Privacy Settings of Group`
            );
            return;
          }
          if (!citel.isGroup) citel.reply(LangG.group);
          if (!isBotAdmins) citel.reply(LangG.botAdmin);
          if (!isAdmins) citel.reply(LangG.admin);
          if (args[0] === "open") {
            await Void.groupSettingUpdate(citel.chat, "unlocked")
              .then((res) => reply(`Successfully Opened Edit Group Info`))
              .catch((err) => reply(jsonformat(err)));
          } else if (args[0] === "close") {
            await Void.groupSettingUpdate(citel.chat, "locked")
              .then((res) => reply(`Successfully Close Edit Group Info`))
              .catch((err) => reply(jsonformat(err)));
          } else {
            let buttons = [
              {
                buttonId:`${prefix}editinfo open`,
                buttonText: {
                  displayText: "Open",
                },
                type: 1,
              },
              {
                buttonId: `${prefix}editinfo close`,
                buttonText: {
                  displayText: "Close",
                },
                type: 1,
              },
            ];
            await Void.sendButtonText(
              citel.chat,
              buttons,
              `Mode Edit Info`,
              Void.user.name,
              citel
            );
          }
        }
        break;
	
	}
})()
