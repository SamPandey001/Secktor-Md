(async () => {
	switch (command) {
		case "bcgroup": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*  Broadcast
              *🍀Aliases* -bcgc,-bcgroup
              *🧩Category:* Utils
              *🛠️Usage:* ${prefix+comand} Broadcast Text
              
              *📚Description:* Broadcasts given texts in all Avilable groups.`);
				return;
			}
			if (!isCreator) return citel.reply(LangG.owner);
			if (!text) return citel.reply(`Provide me text baka\n\nExample : ${
              prefix + command
            } hello guys, am back`);
			let getGroups = await Void.groupFetchAllParticipating();
			let groups = Object.entries(getGroups)
				.slice(0)
				.map((entry) => entry[1]);
			let anu = groups.map((v) => v.id);
			reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${
              anu.length * 1.5
            } second`);
			for (let i of anu) {
				await sleep(1500);
				fatihgans = fs.readFileSync("./assets/SocialLogo 1.png");
				let txt = `*--❗${LangG.title} Broadcast❗--*\n\n *🍀Author:* ${pushname}\n\n${text}`;
				Void.send5ButImg(i, txt, Void.user.name, fatihgans);
			}
			reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
		}
		break;
	}
})()
