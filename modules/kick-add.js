(async () => {
	switch (command) {
	        
         case "kick":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } tag/reply user\n\n*📚Description:* kicks replied member from group`
            );
          }

          if (!citel.isGroup) return citel.reply(LangG.group);
          if (!isAdmins) return citel.reply(LangG.admin);
          if (!isBotAdmins) return citel.reply(LangG.botAdmin);
          try {
            let mention = mentionByTag;
            let users = (await mention[0]) || citel.msg.contextInfo.participant;
            if (!users) return;
//  await sleep(3000)
            await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
          } catch (e) {
            console.log(e)
            
          }
        }
        break;
 case "add":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } number \n\n*📚Description:* Addes user to Group`
            );
          }
          if (!citel.isGroup) return reply(`${LangG.group}`);
          if (!isBotAdmins) return reply(`${LangG.botAdmin}`);
          if (!isAdmins) return reply(`${LangG.admin}`);
          let users = citel.quoted
            ? citel.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.groupParticipantsUpdate(citel.chat, [users], "add");
        }
         break;
	
	}
})()
