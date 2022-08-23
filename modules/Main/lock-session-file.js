(async () => {
	switch (command) {
	
	case "lockfile":
  {
    if (querie === "help") {
      return citel.reply(
        `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
          prefix + command
        }\n\n*📚Description:* Sends session.sam.json in log number`
      );
    }
    if (!isCreator) return citel.reply(LangG.owner);
    citel.reply(
      `*Hey ${LangG.greet},Here it is.*`
    );
    const lockfile = fs.readFileSync("./package-lock.json");

    await Void.sendMessage(citel.chat, {
      document: lockfile,
      mimetype: "application/json",
      fileName: `package-lock.json`,
    });
  }
   break;

      case "session":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends session.sam.json in log number`
            );
          }
          if (!isCreator) return citel.reply(LangG.owner);
          citel.reply(
            `*Hey ${LangG.greet},Session.sam.json has been sent in pm*\n\n*Enjoy♥️*`
          );
          const dbut = [
            {
              buttonId: `${prefix}repo`,
              buttonText: {
                displayText: "⭐Repo",
              },
              type: 1,
            },

            {
              buttonId: `${prefix}status`,
              buttonText: {
                displayText: "⚙️Status",
              },
              type: 1,
            },
          ];
          let buttonMessaged = {
            image: {
              url: picsecktor,
            },

            caption: `Hey ${pushname} ${LangG.greet}📍` + LangG.session,

            footer: LangG.footer,

            buttons: dbut,

            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          await Void.sendMessage(Void.user.id, buttonMessaged, {
            quoted: citel,
          });
          const sessionfile = fs.readFileSync("./session.sam.json");

          await Void.sendMessage(Void.user.id, {
            document: sessionfile,
            mimetype: "application/json",
            fileName: `${"session.sam.json"}`,
          });
        }
         break;
	}
})()
