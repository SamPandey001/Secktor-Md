(async () => {
	switch (command) {
case "afk":
        {
          let user = global.db.users[citel.sender];

          user.afkTime = +new Date();
          user.afkReason = text;
          reply(`${citel.pushName} is now Afk${text ? ": " + text : ""}`);
        }
         break;
	}
})()
