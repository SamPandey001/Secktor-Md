const { tlang } = require('../../lib/scraper')
const { sleep } = require('../../lib/myfuncn')
module.exports = {
    name: 'broadcast',
    category: 'owner',
    desc: 'Sends SECKTOR userbot group link.',
    async exec(citel, Void,args) {
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
				fatihgans = fs.readFileSync("../../lib/assets/SocialLogo 1.png");
				let txt = `*--❗${LangG.title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${args.join(" ")}`;
				Void.send5ButImg(i, txt, Void.user.name, fatihgans);
			}
			citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
 }
