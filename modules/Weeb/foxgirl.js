(async () => {
	switch (command) {
case "fox_girl":
      case "fgirl":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -fgirl,-fox_girl\n*🧩Category:* WEEB\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends a hot Fox Girl Pic`
          );
          return;
        }
        waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
        var wbuttssds = [
          {
            buttonId: `-${command}`,
            buttonText: {
              displayText: `Next ✨`,
            },
            type: 1,
          },
        ];
        let buttonssMessagesss = {
          image: {
            url: waifuddfg.data.url,
          },
          caption: `Now I can see how your future is going to be.😐!`,
          footer: LangG.footer,
          buttons: wbuttssds,
          headerType: 4,
        };
        await Void.sendMessage(citel.chat, buttonssMessagesss, {
          quoted: citel,
        }).catch((err) => {
          return "Error!";
        });
         break;
	
        }
    })()