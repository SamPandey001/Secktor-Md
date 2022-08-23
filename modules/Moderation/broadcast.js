(async () => {
	switch (command) {
	  case "bcgroup":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*  Broadcast\n*🍀Aliases* -bcgc,-bcgroup\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } Broadcast Text\n\n*📚Description:* Broadcasts given texts in all Avilable groups.`
            );
            return;
          }
          if (!isCreator) return citel.reply(LangG.owner);
          if (!text) return citel.reply(`Where is the text?\n\nExample : ${
              prefix + command
            } hello guys, am back`);
          let getGroups = await Void.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          reply(
            `Send Broadcast To ${anu.length} Group Chat, Finish Time ${
              anu.length * 1.5
            } second`
          );
          for (let i of anu) {
            await sleep(1500);
            let btn = [
              {
                quickReplyButton: {
                  displayText: "Menu",
                  id: `${prefix}help`,
                },
              },
              {
                quickReplyButton: {
                  displayText: "Alive",
                  id: `${prefix}alive`,
                },
              },
            ];
            fatihgans = fs.readFileSync("./assets/SocialLogo 1.png");
            let txt = `「 ${LangG.title}  」\n\n${text}`;
            Void.send5ButImg(
              i,
              txt,
              Void.user.name,
              fatihgans,
              btn
            );
          }
          reply(`Successful Sending Broadcast To ${anu.length} Group(s)`);
        }
         break;
	}
})()
	  
