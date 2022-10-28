
const { RandomXP,tlang,botpic} = require('../../lib')
const { prefix } = require('../../config') 
const Levels = require("discord-xp");
const moment = require("moment-timezone");
module.exports = {
    name: 'profile',
    category: 'group',
    desc: 'Shows profile of user.',
    async exec(citel, Void,args,isAdmins) {
        var bio = await Void.fetchStatus(citel.sender);
			var bioo = bio.status;
			let meh = citel.sender;
			   const userq = await Levels.fetch(citel.sender, "RandomXP");
			   const lvpoints = userq.level;
			   var role = "GOD✨";
			   if (lvpoints <= 2) {
				   var role = "🏳Citizen";
			   }
			   else if (lvpoints <= 4) {
				   var role = "👼Baby Wizard";
			   }
			   else if (lvpoints <= 6) {
				   var role = "🧙‍♀️Wizard";
			   }
			   else if (lvpoints <= 8) {
				   var role = "🧙‍♂️Wizard Lord";
			   }
			   else if (lvpoints <= 10) {
				   var role = "🧚🏻Baby Mage";
			   }
			   else if (lvpoints <= 12) {
				   var role = "🧜Mage";
			   }
			   else if (lvpoints <= 14) {
				   var role = "🧜‍♂️Master of Mage";
			   }
			   else if (lvpoints <= 16) {
				   var role = "🌬Child of Nobel";
			   }
			   else if (lvpoints <= 18) {
				   var role = "❄Nobel";
			   }
			   else if (lvpoints <= 20) {
				   var role = "⚡Speed of Elite";
			   }
			   else if (lvpoints <= 22) {
				   var role = "🎭Elite";
			   }
			   else if (lvpoints <= 24) {
				   var role = "🥇Ace I";
			   }
			   else if (lvpoints <= 26) {
				   var role = "🥈Ace II";
			   }
			   else if (lvpoints <= 28) {
				   var role = "🥉Ace Master";
			   }
			   else if (lvpoints <= 30) {
				   var role = "🎖Ace Dominator";
			   }
			   else if (lvpoints <= 32) {
				   var role = "🏅Ace Elite";
			   }
			   else if (lvpoints <= 34) {
				   var role = "🏆Ace Supreme";
			   }
			   else if (lvpoints <= 36) {
				   var role = "💍Supreme I";
			   }
			   else if (lvpoints <= 38) {
				   var role = "💎Supreme Ii";
			   }
			   else if (lvpoints <= 40) {
				   var role = "🔮Supreme Master";
			   }
			   else if (lvpoints <= 42) {
				   var role = "🛡Legend III";
			   }
			   else if (lvpoints <= 44) {
				   var role = "🏹Legend II";
			   }
			   else if (lvpoints <= 46) {
				   var role = "⚔Legend";
			   }
			   else if (lvpoints <= 55) {
				   var role = "🐉Immortal";
			   }
			   let ttms = `${userq.xp}` / 8;
			   const timenow = moment(moment())
				   .format('HH:mm:ss')
			   moment.tz.setDefault('Asia/Kolakata')
				   .locale('id')
			try {
				pfp = await Void.profilePictureUrl(citel.sender, "image");
			}
			catch (e) {
				pfp = await botpic();
			}
			const profile = `
*Hii ${citel.pushName},*
*Here is your profile information*
*👤Username:* ${citel.pushName}
*⚡Bio:* ${bioo}
*🧩Role:* ${role}
*🍁Level:* ${userq.level}
*📥 Total Messages* ${ttms}
*Powered by ${tlang().title}*
`;
			const buttonsd = [
				{
					buttonId: `${prefix}rank`,
					buttonText: {
						displayText: "Rank",
					},
					type: 1,
          },
				{
					buttonId: `${prefix}help`,
					buttonText: {
						displayText: " Help",
					},
					type: 1,
          },
        ];
			let buttonMessage = {
				image: {
					url: pfp,
				},
				caption: profile,
				footer: tlang().footer,
				buttons: buttonsd,
				headerType: 4,
			};
			Void.sendMessage(citel.chat, buttonMessage, {
				quoted: citel,
			});
 
    }
 }
