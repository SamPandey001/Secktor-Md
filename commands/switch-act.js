/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @SamPandey001
 * @description : Secktor, A Multi-functional WhatsApp bot.
 **/
 const { sck, cmd, getAdmin, tlang } = require('../lib');

 cmd({
     pattern: "act",
     desc: "Enables various group features.",
     category: "group",
     filename: __filename,
 }, async (Void, citel, text) => {
     if (!citel.isGroup) return citel.reply(tlang().group);
 
     const groupAdmins = await getAdmin(Void, citel);
     const botNumber = await Void.decodeJid(Void.user.id);
 
     if (!groupAdmins.includes(citel.sender)) return citel.reply("❌ This command is only for admins.");
     if (!groupAdmins.includes(botNumber)) return citel.reply("❌ I need admin rights to perform this action.");
     if (!text) {
         return citel.reply("❌ Provide a term like:\n1- events\n2- antilink\n3- nsfw\n4- economy\n5- cardgame\n6- antidelete");
     }
 
     const features = {
         antilink: "Antilink",
         economy: "Economy",
         events: "Events",
         cardgame: "Card Game",
         nsfw: "NSFW",
         antidelete: "Anti-Delete",
     };
 
     const feature = features[text.toLowerCase()];
     if (!feature) {
         return citel.reply("❌ Invalid option. Available options:\n1- events\n2- antilink\n3- nsfw\n4- economy\n5- cardgame\n6- antidelete");
     }
 
     const field = text.toLowerCase();
     const checkGroup = await sck.findOne({ id: citel.chat });
 
     if (!checkGroup) {
         await new sck({ id: citel.chat, [field]: "true" }).save();
         return citel.reply(`${feature} enabled successfully.`);
     } else if (checkGroup[field] === "true" || checkGroup[field] === "active") {
         return citel.reply(`${feature} is already enabled.`);
     }
 
     await sck.updateOne({ id: citel.chat }, { [field]: "true" });
     return citel.reply(`${feature} enabled successfully.`);
 });
 