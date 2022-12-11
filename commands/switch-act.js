/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { cmd,sck,sck1, getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')
    //---------------------------------------------------------------------------
cmd({
        pattern: "act",
        desc: "Switches for varios works.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply("This command is only for group")
        if (!text) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-cardgame\n5-bot`)
        if (!isAdmins) return citel.reply("❌ This command is only for admin")
        switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "true" })
                            .save()
                        return citel.reply(' Antilink Enabled Successfully')
                    } else {
                        if (checkgroup.antilink == "true") return citel.reply("Antilink was alredy  enabled here.")
                        await sck.updateOne({ id: citel.chat }, { antilink: "true" })
                        citel.reply('Enabled antilink in current chat.')
                        return
                    }
                }
                break
          
                      case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "true" })
                            .save()
                        return citel.reply(' Economy Enabled Successfully')
                    } else {
                        if (checkgroup.economy == "true") return citel.reply("Economy was alredy enabled.")
                        await sck.updateOne({ id: citel.chat }, { economy: "true" })
                        citel.reply('Economy enabled in current chat.')
                        return
                    }
                }
                break
            case 'events':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, events: "true" })
                            .save()
                        return citel.reply("Successfully Enabled *Events*")
                    } else {
                        if (checkgroup.events == "true") return citel.reply("*Events* are already enabled")
                        await sck.updateOne({ id: citel.chat }, { events: "true" })
                        return citel.reply("Successfully Enabled *Events*")
                    }
                }
                break
            case 'cardgame':
                {
                    let checkgroup = sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, cardgame: "active" })
                            .save()
                        return citel.reply("Successfully Enabled *Card Game*")
                    } else {
                        if (checkgroup.cardgame == "active") return citel.reply("*Card Game* was already enabled")
                        await sck.updateOne({ id: citel.chat }, { cardgame: "active" })
                        return citel.reply("Successfully Enabled *Card Game.*")
                    }
                }
                break
            case 'nsfw':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, nsfw: "true" })
                            .save()
                        return citel.reply("Successfully Enabled *NSFW*")
                    } else {
                        if (checkgroup.nsfw == "true") return citel.reply("*NSFW* is already enabled")
                        await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
                        citel.reply("Successfully Enabled *NSFW*")
                        return
                    }
                }
                break
            default:
                {
                    citel.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-economy")
                }
        }
    }
)
