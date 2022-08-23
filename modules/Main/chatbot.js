
(async () => {
	switch (command) {
	      case "chat":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*  Chat with Ai\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General \n*🛠️Usage:* ${
                prefix + command
              }  your text\n\n*📚Description:* Chat with the Most Powerfull + Highly Skilled AI..`
            );
            return;
          }

          let zx = querie.length;
          if (zx < 14) {
            var diffuser = citel.sender.split("@")[0];
            let fetchk = require("node-fetch");
            var textuser = args.join(" ");
            let fetchtext = await fetchk(
              `http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${ttextuser}]`

            );
            let json = await fetchtext.json();
            let { cnt } = json;
            citel.reply(cnt);
            return;
          }

          if (!querie && !quoted)
            return citel.reply(
              `Hey there! ${pushname}. How are you doing these days?`
            );
          const { Configuration, OpenAIApi } = require("openai");

          const configuration = new Configuration({
            apiKey:
              process.env.OPENAI_API_KEY ||
              "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",
          });
          const openai = new OpenAIApi(configuration);
          let textt = text
            ? text
            : citel.quoted && citel.quoted.text
            ? citel.quoted.text
            : citel.text;
          const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: textt,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
          });
          citel.reply(completion.data.choices[0].text);
          return
        }
        break;

		}
})()
