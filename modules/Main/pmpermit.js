
(async () => {
	switch (command) {
      case "a":
      case "approve":
      case "permit":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* Pm Permit Approve*\n🍀Aliases* -a,-approve,-permit\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } reply to user\n\n*📚Description:* It gives replied user permission to pm you.`
            );
          }
          if (!botNumber)
            return citel.reply("This feature is only for bot Number.");
          if (!citel.quoted) return citel.reply("Please reply to user");
          let samkk = citel.quoted
            ? citel.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (Config.pmpermit == "true") {
            await pmpermit.privillage(samkk);
            let tname = Void.getName(citel.quoted.sender);
            //citel.reply();
            Void.sendMessage(
              citel.chat,
              {
                image: {
                  url: picsecktor,
                },
                caption: `*Hey ${tname}*\n\nNow You are permitted by my owner to pm now.\n\n *${LangG.title}*`,
                footer: "Personal Assistant",
              },
              {
                quoted: citel,
              }
            );
          }
        }
        break;

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "da":
      case "disapprove":
      case "revoke":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* Pm Permit Disapprove\n*🍀Aliases* -da, -disapprove , -revoke\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } reply to user \n\n*📚Description:* It take pm permit permission back.`
            );
          }
          if (!botNumber)
            return citel.reply("This feature is only for bot Number.");
          if (!citel.quoted) return citel.reply("Please reply to user");
          let samkk = citel.quoted
            ? citel.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (config.pmpermit == "true") {
            await pmpermit.bhagbe(samkk);
            let tname = Void.getName(citel.quoted.sender);
            //	citel.reply();  don't change this text without discussion with Tuhin
            Void.sendMessage(
              citel.chat,
              {
                image: {
                  url: picsecktor,
                },
                caption: `*Hey ${tname}  ${LangG.greet}*\n\nYour pm permit permission has been revoked now.\n\n _Powered by ${LangG.title}_`,
                footer: "Personal Assistant",
              },
              {
                quoted: citel,
              }
            );
          }
        }
        break        
		}
})()
