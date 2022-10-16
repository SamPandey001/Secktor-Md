const { tlang,sleep } = require('../../lib')

module.exports = {
    name: 'broadcast',
    category: 'owner',
    desc: 'Sends SECKTOR userbot group link.',
    async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
      if(!args[0]) return citel.reply('_Provide me text to broadcast._')
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
				let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${args.join(" ")}`;
				Void.send5ButImg(i, txt, Void.user.name,log0);
			}
			citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
 }
