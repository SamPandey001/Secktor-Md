(async () => {
	switch (command) {
	 case "pp":
      case "setbotpp":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } reply/tag a pic\n\n*📚Description:* Sets New Profile pic at Bot`
            );
          }
          if (!isCreator) citel.reply(LangG.owner);
          if (!quoted)
            return citel.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (!/image/.test(mime))
          return citel.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (/webp/.test(mime))
          return citel.reply(`Send/Reply Image With Caption ${prefix + command}`);
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          await Void.updateProfilePicture(botNumber, {
            url: media,
          }).catch((err) => fs.unlinkSync(media));
          citel.reply(LangG.success);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ppgroup":
      case "setgrouppp":
      case "setgcpp":
      case "setppgrup":
      case "setppgc":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } reply/tag a pic\n\n*📚Description:* Sets New Profile pic at Group`
            );
          }
          if (!citel.isGroup) citel.reply(LangG.group);
          if (!isAdmins) citel.reply(LangG.admin);
          if (!quoted)
          return citel.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (!/image/.test(mime))
          return citel.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (/webp/.test(mime))
          return citel.reply(`Send/Reply Image With Caption ${prefix + command}`);
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          await Void.updateProfilePicture(citel.chat, {
            url: media,
          }).catch((err) => fs.unlinkSync(media));
          citel.reply(LangG.success);
        }
        break;
	
	}
})()
