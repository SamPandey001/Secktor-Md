(async () => {
	switch (command) {
	        case "retrive":
        {
          if (!citel.quoted) return reply("Please reply to any message Image or Video!");
          let citadel = await Void.serializeM(await citel.getQuotedObj());
          await citadel.quoted.copyNForward(citel.chat, true);
        }
         break;
	}
})()
	  
