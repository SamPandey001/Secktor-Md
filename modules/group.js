(async () => {
	switch (command) {
		case 'getjids': {
          	let getGroups = await Void.groupFetchAllParticipating();
			let groups = Object.entries(getGroups)
				.slice(0)
				.map((entry) => entry[1]);
			let anu = groups.map((v) => v.id);
			let jackhuh = `All groups jid\n\n`
			reply(`Fetching jid from ${anu.length} Groups`)
			for (let i of anu) {
			  let metadata = await Void.groupMetadata(i);
				await sleep(500)
				jackhuh += `*Subject:-* ${metadata.subject}\n`
				jackhuh += `*Member :* ${metadata.participants.length}\n`
				jackhuh += `*Jid:-* ${i}\n\n`
				
                                         }
                               citel.reply(jackhuh)
                               }
                 break
		case "group":
		case "activate": {
			if (querie === "help") {
				await citel.reply(`*❗Command:* ${command}
              *🍀Aliases* -group,-activate
              *🧩Category:* Moderation
              *🛠️Usage:* ${prefix + command} SamPandey001

              *📚Description:* Changes Privacy Settings of Group`);
				return;
			}
			if (!citel.isGroup) citel.reply(LangG.group);
			if (!isBotAdmins) citel.reply(LangG.botAdmin);
			if (!isAdmins) citel.reply(LangG.admin);
			if (args[0] === "close") {
				await Void.groupSettingUpdate(citel.chat, "announcement")
					.then((res) => reply(`Group Chat Muted :)`))
					.catch((err) => reply(jsonformat(err)));
			}
			else if (args[0] === "open") {
				await Void.groupSettingUpdate(citel.chat, "not_announcement")
					.then((res) => reply(`Group Chat Unmuted :)`))
					.catch((err) => reply(jsonformat(err)));
			}
			else {
				let buttons = [
					{
						buttonId: `${prefix}group oope`,
						buttonText: {
							displayText: "📍Open",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}group close`,
						buttonText: {
							displayText: "📍Close",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `Group Mode`, Void.user.name, m);
			}
		}
		break;
		case "kick":
			{
			  if (querie === "help") {
				return citel.reply(
				  `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
					prefix + command
				  } tag/reply user\n\n*📚Description:* kicks replied member from group`
				);
			  }
	
			  if (!citel.isGroup) return citel.reply(LangG.group);
			  if (!isAdmins) return citel.reply(LangG.admin);
			  if (!isBotAdmins) return citel.reply(LangG.botAdmin);
			  try {
				let mention = mentionByTag;
				let users = (await mention[0]) || citel.msg.contextInfo.participant;
				if (!users) return;
	//  await sleep(3000)
				await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
			  } catch (e) {
				console.log(e)
				
			  }
			}
			break;
			case "setname":
		case "setsubject": {
			if (querie === "help") {
				return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } Title\n\n*📚Description:* Sets New Subjet in Group`);
			}
			if (!citel.isGroup) citel.reply(LangG.group);
			if (!isBotAdmins) citel.reply(LangG.botAdmin);
			if (!isAdmins) citel.reply(LangG.admin);
			if (!text) citel.reply("Text ?");
			await Void.groupUpdateSubject(citel.chat, text)
				.then((res) => console.log(LangG.success))
				.catch((err) => console.log(jsonformat(err)));
		}
		break;
		//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
		case "setdesc":
		case "setdesk": {
			if (querie === "help") {
				return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } Description\n\n*📚Description:* Sets Description in Group`);
			}
			if (!citel.isGroup) citel.reply(LangG.group);
			if (!isBotAdmins) citel.reply(LangG.botAdmin);
			if (!isAdmins) citel.reply(LangG.admin);
			if (!text) citel.reply("Text ?");
			await Void.groupUpdateDescription(citel.chat, text)
				.then((res) => console.log(LangG.success))
				.catch((err) => console.log(jsonformat(err)));
		}
		break;
			case "join":
				{
				  if (querie === "help") {
					return citel.reply(
					  "*❗Command:* Join\n*🧩Category:* Owner Menu\n*🛠️Usage:* -join whatsapp group link\n\n*📚Description:* Joins whatsapp group"
					);
				  }
				  if (!isCreator) return citel.reply(LangG.owner);
				  if (!text) return citel.reply(`Please give me Query ${LangG.greet}`);
				  if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
					citel.reply("Link Invalid sweetheart, Please Send a valid whatsapp Group Link!");
				  //citel.reply(LangG.wait);
				  let result = args[0].split("https://chat.whatsapp.com/")[1];
				  await Void.groupAcceptInvite(result)
					.then((res) => reply("🟩Joined Group"))
					.catch((err) => reply("Error in Joining Group"));
				}
				break
	 case "add":
			{
			  if (querie === "help") {
				return citel.reply(
				  `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
					prefix + command
				  } number \n\n*📚Description:* Addes user to Group`
				);
			  }
			  if (!citel.isGroup) return reply(`${LangG.group}`);
			  if (!isBotAdmins) return reply(`${LangG.botAdmin}`);
			  if (!isAdmins) return reply(`${LangG.admin}`);
			  let users = citel.quoted
				? citel.quoted.sender
				: text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			  await Void.groupParticipantsUpdate(citel.chat, [users], "add");
			}
			 break;
		
		case "delete":
		case "del": {
			if (querie === "help") {
				await citel.reply(`*❗Command:* ${command}
              *🍀Aliases* -del,-delete
              *🧩Category:* Utils
              *🛠️Usage:* ${prefix + command} reply to message.
              
              *📚Description:* Deletes quoted/replied message if was sent by bot`);
				return;
			}
			if (!isAdmins) return citel.reply('This command is only for Admins.')
			if (!citel.quoted) return citel.reply(`Please Quote any message. ${LangG.greet}`);
			let { chat, fromMe, id } = citel.quoted;
			const key = {
				remoteJid: citel.chat,
				fromMe: false,
				id: citel.quoted.id,
				participant: citel.quoted.sender
			}
			await Void.sendMessage(citel.chat, { delete: key })
		}
		break;
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
		case "block": {
			if (querie === "help") {
				return citel.reply(`*❗Command:* ${command}
              *🧩Category:* Owner Menu
              *🛠️Usage:* ${prefix+command} reply
              
              *📚Description:* Blocks that person`);
			}
			if (!citel.quoted) return citel.reply("Please reply to user");
			if (!isCreator) citel.reply(LangG.owner);
			let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			await Void.updateBlockStatus(users, "block")
				.then((res) => console.log(jsonformat(res)))
				.catch((err) => console.log(jsonformat(err)));
		}
		break;
		//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
		case "unblock": {
			if (querie === "help") {
				return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } in pm or reply\n\n*📚Description:* Unlocks that person`);
			}
			if (!isCreator) citel.reply(LangG.owner);
			let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			await Void.updateBlockStatus(users, "unblock")
				.then((res) => console.log(jsonformat(res)))
				.catch((err) => console.log(jsonformat(err)));
		}
		break;
	}
})()
