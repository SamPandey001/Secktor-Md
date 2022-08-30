(async () => {
	switch (command) {
	
	 case "leave":
        {
          if (querie === "help") {
            return citel.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Leaves group`
            );
          }
          if (!isCreator) citel.reply(LangG.owner);
          await Void.groupLeave(citel.chat)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        }
         break;
	}
})()
