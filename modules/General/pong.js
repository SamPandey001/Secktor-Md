
(async () => {
	switch (command) {
       case "ping":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Ping\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows ping speed of ${LangG.title}.`
            );
            return;
          }
          timestampe = speed();
          latensie = speed() - timestampe;
          const pong = `
*Pong📍* ${latensie.toFixed(4)} ms`;
          citel.reply(pong);
        }
         break;
         }
        })()
