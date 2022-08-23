(async () => {
	switch (command) {
	 case "join":
        {
          if (querie === "help") {
            return citel.reply(
              "*❗Command:* Join\n*🧩Category:* Owner Menu\n*🛠️Usage:* -join whatsapp group link\n\n*📚Description:* Joins whatsapp group"
            );
          }
          if (!isCreator) return citel.reply(LangG.owner);
          if (!text) return citel.reply(`Please give me Query ${LangG.greet}`);
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            citel.reply("Link Invalid sweetheart, Please Send a valid whatsapp Group Link!");
          //citel.reply(LangG.wait);
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await Void.groupAcceptInvite(result)
            .then((res) => reply("🟩Joined Group"))
            .catch((err) => reply("Error in Joining Group"));
        }
        break
	
	}
})()
