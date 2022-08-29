(async () => {
	switch (command) {
case "afk":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:* ${command}
              *🍀Aliases* ${prefix}afk
              *🧩Category:* Personal
              *🛠️Usage:* ${prefix + command} I am busy for a while

              *📚Description:* Makes you away from keyboard`
                                                                          );
            return;
          }
          let user = global.db.users[citel.sender];

          user.afkTime = +new Date();
          user.afkReason = text;
          reply(`${citel.pushName} is now Afk${text ? ": " + text : ""}`);
        }
         break;
	}
})()
