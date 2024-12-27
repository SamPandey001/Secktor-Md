/**
 * Copyright (C) 2022.
 * Licensed under the GPL-3.0 License;
 * You may not use this file except in compliance with the License.
 * It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor, A Multi-functional WhatsApp bot.
 * @version 0.0.8
 **/

const { cmd, sck, getAdmin, tlang } = require('../lib');

cmd({
    pattern: "act",
    desc: "Switches for various works.",
    category: "group",
    filename: __filename,
}, async (Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);

    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

    if (!isAdmins) return citel.reply("❌ This command is only for admins.");
    if (!text) {
        return citel.reply(`❌ Please provide me with a term like:\n1- events\n2- antilink\n3- nsfw\n4- economy\n5- cardgame\n6- bot`);
    }

    switch (text.split(" ")[0]) {
        case 'antilink':
            {
                let checkgroup = await sck.findOne({ id: citel.chat });
                if (!checkgroup) {
                    await new sck({ id: citel.chat, antilink: "true" }).save();
                    return citel.reply('Antilink enabled successfully.');
                } else if (checkgroup.antilink === "true") {
                    return citel.reply("Antilink is already enabled here.");
                }
                await sck.updateOne({ id: citel.chat }, { antilink: "true" });
                return citel.reply('Antilink enabled in the current chat.');
            }
        case 'economy':
            {
                let checkgroup = await sck.findOne({ id: citel.chat });
                if (!checkgroup) {
                    await new sck({ id: citel.chat, economy: "true" }).save();
                    return citel.reply('Economy enabled successfully.');
                } else if (checkgroup.economy === "true") {
                    return citel.reply("Economy is already enabled.");
                }
                await sck.updateOne({ id: citel.chat }, { economy: "true" });
                return citel.reply('Economy enabled in the current chat.');
            }
        case 'events':
            {
                let checkgroup = await sck.findOne({ id: citel.chat });
                if (!checkgroup) {
                    await new sck({ id: citel.chat, events: "true" }).save();
                    return citel.reply('Successfully enabled *Events*.');
                } else if (checkgroup.events === "true") {
                    return citel.reply('*Events* are already enabled.');
                }
                await sck.updateOne({ id: citel.chat }, { events: "true" });
                return citel.reply('Successfully enabled *Events*.');
            }
        case 'cardgame':
            {
                let checkgroup = await sck.findOne({ id: citel.chat });
                if (!checkgroup) {
                    await new sck({ id: citel.chat, cardgame: "active" }).save();
                    return citel.reply('Successfully enabled *Card Game*.');
                } else if (checkgroup.cardgame === "active") {
                    return citel.reply('*Card Game* is already enabled.');
                }
                await sck.updateOne({ id: citel.chat }, { cardgame: "active" });
                return citel.reply('Successfully enabled *Card Game*.');
            }
        case 'nsfw':
            {
                let checkgroup = await sck.findOne({ id: citel.chat });
                if (!checkgroup) {
                    await new sck({ id: citel.chat, nsfw: "true" }).save();
                    return citel.reply('Successfully enabled *NSFW*.');
                } else if (checkgroup.nsfw === "true") {
                    return citel.reply('*NSFW* is already enabled.');
                }
                await sck.updateOne({ id: citel.chat }, { nsfw: "true" });
                return citel.reply('Successfully enabled *NSFW*.');
            }
        default:
            return citel.reply("❌ Please provide a valid option:\n1- events\n2- antilink\n3- nsfw\n4- economy\n5- cardgame");
    }
});
