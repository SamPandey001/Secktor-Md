
(async () => {
	switch (command) {
 case "tr":
      case "trt":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*  Translator \n*🍀Aliases* -tr,-trt\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } lang + reply to any message \n\n*📚Description:* Translates replied message into desired language\n\nEg- -tr en hi (it will translate from hindi to english) `
            );
            return;
          }
          const translatte = require("translatte");
          if (!citel.quoted) return citel.reply("*Please reply to any message.*");
          if (!citel.quoted)
            return citel.reply(`Please mention or give text ${LangG.greet}.`);
          let textt = citel.quoted.text;
          whole = await translatte(textt, {
            from: args[1] || "auto",
            to: args[0] || "hi",
          });
          if ("text" in whole) {
            return await citel.reply(
              "*Translated Into🔎:* " +
                " ```" +
                (args[0] || "Auto to Hindi") +
                "```\n" +
                " *From Language🔎:* " +
                " ```" +
                (args[1] || "Auto Detect") +
                "```\n" +
                "*Result♦️:* " +
                " ```" +
                whole.text +
                "```"
            );
          }
        }
        break;        
		}
})()
