
(async () => {
	switch (command) {
      case "bug":
      case "report":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Report\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } bug \n\n*📚Description:* Sends bug to the Real Secktor developers.`
            );
            return;
          }
          if (!text) return citel.reply(`Enter The Bug Example\n\n${command} Menu Error `);
          Void.sendMessage(`919628516236@s.whatsapp.net`, {
            text: `*Bug Report From:* wa.me/${citel.sender.split("@")[0]}
Report Message: ${text}`,
          });
          reply(
            `Successfully Reported To The ${LangG.title} Team. If the report is valid, action will be taken soon.\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`
          );
        }
         break;
         
         case "request":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Request\n*🍀Aliases* ${command}\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } request text\n\n*📚Description:* Sends your request to main ${
                LangG.title
              } developers.`
            );
            return;
          }
          if (!args.join(" "))
            return reply(
              `Example : ${
                prefix + command
              } hello dev please add a downloader feature`
            );
          textt = `*| REQUEST |*`;
          teks1 = `\n\n*User* : @${
            citel.sender.split("@")[0]
          }\n*Request* : ${args.join(" ")}`;
          teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
          for (let i of owner) {
            Void.sendMessage(
              i + "@s.whatsapp.net",
              {
                text: textt + teks1,
                mentions: [citel.sender],
              },
              {
                quoted: citel,
              }
            );
          }
          Void.sendMessage(
            citel.chat,
            {
              text: textt + teks2 + teks1,
              mentions: [citel.sender],
            },
            {
              quoted: citel,
            }
          );
        }
         break;
		}
})()
