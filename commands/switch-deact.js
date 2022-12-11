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

 const { sck,sck1,cmd, getAdmin, tlang, prefix } = require('../lib')
 const Config = require('../config')
 
     //---------------------------------------------------------------------------
 cmd({
         pattern: "deact",
         desc: "Switches for varios works.",
         category: "group",
         filename: __filename
     },
     async(Void, citel, text,{ isCreator }) => {
         //-----------------------------------------	
         if (!citel.isGroup) return citel.reply(tlang().group);
         const groupAdmins = await getAdmin(Void, citel)
         const botNumber = await Void.decodeJid(Void.user.id)
         const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
         const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
         //-----------------------------------------  
         if (!citel.isGroup) return citel.reply("This feature in only for Group.")
         if (!text) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-cardgame\n5-bot`)
         if (!isAdmins) return citel.reply("❌ This Command is only for Admin")
         switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "false" })
                            .save()
                        return citel.reply(' Antilink disabled Successfully')
                    } else {
                        if (checkgroup.antilink == "false") return citel.reply("Antilink was alredy disabled.")
                        await sck.updateOne({ id: citel.chat }, { antilink: "false" })
                        citel.reply('disabled antilink in current chat.')
                        return
                    }
                }
                break
                       case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "false" })
                            .save()
                        return citel.reply(' Economy disabled Successfully')
                    } else {
                        if (checkgroup.economy == "false") return citel.reply("Economy was alredy disabled.")
                        await sck.updateOne({ id: citel.chat }, { economy: "false" })
                        citel.reply('disabled Economy in current chat.')
                        return
                    }
                }
                break
                case 'events':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, events: "false" })
                                .save()
                            return citel.reply("Successfully disabled *Events*")
                        } else {
                            if (checkgroup.events == "false") return citel.reply("*Events* are already disabled")
                            await sck.updateOne({ id: citel.chat }, { events: "false" })
                            return citel.reply("Successfully disabled *Events*")
                        }
                    }
                    break
                case 'cardgame':
                    {
                        let checkgroup = sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, cardgame: "deactive" })
                                .save()
                            return citel.reply("Successfully disabled *Card Game*")
                        } else {
                            if (checkgroup.cardgame == "deactive") return citel.reply("*Card Game* was already disabled")
                            await sck.updateOne({ id: citel.chat }, { cardgame: "deactive" })
                            return citel.reply("Successfully disabled *Card Game.*")
                        }
                    }
                    break
                case 'nsfw':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, nsfw: "false" })
                                .save()
                            return citel.reply("Successfully disabled *NSFW*")
                        } else {
                            if (checkgroup.nsfw == "false") return citel.reply("*NSFW* is already disabled")
                            await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
                            citel.reply("Successfully disabled *NSFW*")
                            return
                        }
                    }
                    break
                default:
                    {
                        citel.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-cardgame")
                    }
         }
     }
 )
