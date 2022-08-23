(async () => {
	switch (command) {
	
	 case "eval":
          {
          if (process.env.BOT_NUMBER + "@s.whatsapp.net" !== citel.sender) {
            reply(`❌ This Command only for Owner!`);
            return;
          }

          if (args.length === 0) {
            reply(`❌ Provide  query Master!`);
            return;
          }
          try {
            let resultTest = eval(querie);
            if (typeof resultTest === "object")
              reply(JSON.stringify(resultTest));
            else reply(resultTest.toString());
          } catch (err) {
            reply(err.toString());
          }
  }
  break;
	}
})()
