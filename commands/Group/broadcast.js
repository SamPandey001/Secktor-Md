const { tlang } = require('../../lib/scraper')
const { sleep } = require('../../lib/myfuncn')
module.exports = {
    name: 'broadcast',
    category: 'owner',
    desc: 'Sends SECKTOR userbot group link.',
    async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
			let groups = Object.entries(getGroups)
				.slice(0)
				.map((entry) => entry[1]);
			let anu = groups.map((v) => v.id);
			citel.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${
              anu.length * 1.5
            } second`);
			for (let i of anu) {
				await sleep(1500);
				let txt = `*❗${tlang().title} Broadcast❗*\n\n *🍀Author:* ${citel.pushName}\n\n${args.join(" ")}`;
				let buttonMessaged = {
					image:  log0,
					caption: txt,
					footer: citel.pushName,
					headerType: 1,
					contextInfo: {
                                                forwardingScore: 999,
		                                isForwarded: false,
						externalAdReply: {
							 title: 'Broadcast by '+citel.pushName,
							 body: tlang().title,
							 thumbnail: log0,
							 mediaUrl: '',
                                                         mediaType: 2,
							 sourceUrl: gurl,
                                                         showAdAttribution: true,
						},
					},
				};
				await Void.sendMessage(i, buttonMessaged, {
					quoted: citel,
				});  
			}
			citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
 }
