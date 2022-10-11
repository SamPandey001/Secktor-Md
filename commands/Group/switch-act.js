const { sck,getAdmin,tlang,prefix} = require('../../lib')
const Config = require('../../config')

module.exports = {
    name: 'act',
    category: 'group',
    desc: 'Switches for varios works.',
    async exec(citel, Void,args,isCreator) {
//-----------------------------------------
if (!citel.isGroup) return citel.reply(tlang().group);
const groupAdmins = await getAdmin(Void,citel)
const botNumber =  await Void.decodeJid(Void.user.id) 
const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
//-----------------------------------------   
			if (!citel.isGroup) return citel.reply("This command is only for group")
			if (!args.join(" ")) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-cardgame\n5-bot`)
			if (!isAdmins) return citel.reply("❌ This command is only for admin")
			if (args[0] == "antilink") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, antilink: "true" })
								.save()
							return citel.reply(' Antilink Enabled Successfully')
						}
						else {
							if (gc.antilink == "true") return citel.reply("Antilink was alredy enabled is already enabled")
							await sck.updateOne({ id: citel.chat }, { antilink: "true" })
							return citel.reply('Enabled antilink in current chat.')
						}
					})
			}
			else if (args[0] == "events") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, events: "true" })
								.save()
							return citel.reply("Successfully Enabled *Events*")
						}
						else {
							if (gc.events == "true") return citel.reply("*Events* are already enabled")
							await sck.updateOne({ id: citel.chat }, { events: "true" })
							return citel.reply("Successfully Enabled *Events*")
						}
					})
			}
			else if (args[0] == "cardgame") {
				sck.findOne({ id: citel.chat })
					.then(async (hh) => {
						if (!hh) {
							await new sck({ id: citel.chat, cardgame: "active" })
								.save()
							return citel.reply("Successfully Enabled *Card Game*")
						}
						else {
							if (hh.cardgame == "active") return citel.reply("*Card Game* are already enabled")
							await sck.updateOne({ id: citel.chat }, { cardgame: "active" })
							return citel.reply("Successfully Enabled *Card Game.*")
						}
					})
			}
			else if (args[0] == "bot") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, botenable: "true" })
								.save()
							return citel.reply(`Successfully Enabled *${tlang().title}*`)
						}
						else {
							if (gc.botenable == "true") return citel.reply("*Bot* was already enabled")
							await sck.updateOne({ id: citel.chat }, { botenable: "true" })
							console.log(gc.botenable)
							return citel.reply(`Successfully Enabled *${tlang().title}*`)
						}
					})
			}
			else if (args[0] == "nsfw") {
				sck.findOne({ id: citel.chat })
					.then(async (gc) => {
						if (!gc) {
							await new sck({ id: citel.chat, nsfw: "true" })
								.save()
							return citel.reply("Successfully Enabled *NSFW*")
						}
						else {
							if (gc.nsfw == "true") return citel.reply("*NSFW* is already enabled")
							await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
							console.log(gc.invite)
							return citel.reply("Successfully Enabled *NSFW*")
						}
					})
			}
			else {
				citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
			}
    }
 }
