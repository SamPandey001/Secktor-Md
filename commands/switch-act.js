/**
 * Copyright (C) 2022.
 * Licensed under the GPL-3.0 License;
 * @project_name : Secktor-Md
 * @description : Secktor, A Multi-functional WhatsApp bot.
 **/

const { cmd, sck, getAdmin, tlang } = require('../lib');

cmd({
    pattern: "act",
    desc: "Switches for various group settings.",
    category: "group",
    filename: __filename,
}, async (Void, citel, text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);

    const groupAdmins = await getAdmin(Void, citel);
    if (!groupAdmins.includes(citel.sender)) return citel.reply("❌ This command is only for admins.");

    if (!text) {
        return citel.reply(`❌ Provide a term like:\n1- events\n2- antilink\n3- nsfw\n4- economy\n5- cardgame`);
    }

    const features = {
        antilink: "Antilink",
        economy: "Economy",
        events: "Events",
        cardgame: "Card Game",
        nsfw: "NSFW",
    };

    const feature = features[text.toLowerCase()];
    if (!feature) {
        return citel.reply("❌ Invalid option. Available options:\n1- events\n2- antilink\n3- nsfw\n4- economy\n5- cardgame");
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
