(async () => {
	switch (command) {
		case "group":
		case "activate": {
			if (querie === "help") {
				await citel.reply(`*❗Command:* ${command}
              *🍀Aliases* -group,-activate
              *🧩Category:* Moderation
              *🛠️Usage:* ${prefix + command} SamPandey001

              *📚Description:* Changes Privacy Settings of Group`);
				return;
			}
			if (!citel.isGroup) citel.reply(LangG.group);
			if (!isBotAdmins) citel.reply(LangG.botAdmin);
			if (!isAdmins) citel.reply(LangG.admin);
			if (args[0] === "close") {
				await Void.groupSettingUpdate(citel.chat, "announcement")
					.then((res) => reply(`Group Chat Muted :)`))
					.catch((err) => reply(jsonformat(err)));
			}
			else if (args[0] === "open") {
				await Void.groupSettingUpdate(citel.chat, "not_announcement")
					.then((res) => reply(`Group Chat Unmuted :)`))
					.catch((err) => reply(jsonformat(err)));
			}
			else {
				let buttons = [
					{
						buttonId: `${prefix}group oope`,
						buttonText: {
							displayText: "📍Open",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}group close`,
						buttonText: {
							displayText: "📍Close",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `Group Mode`, Void.user.name, m);
			}
		}
		break;
	}
})()
