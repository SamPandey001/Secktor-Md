/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 **/

const { cmd, getAdmin, parsedJidd } = require(__dirname + '/../lib/');
const { AutoKick, addAKick, delKick, getKicks } = require(__dirname + '/../lib/database/autokick');

cmd(
    {
        pattern: 'akick',
        desc: 'Adds a member to the auto-kick list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text) => {
        if (!citel.isGroup) {
            return citel.reply("❌ This command only works in group chats.");
        }

        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = groupAdmins.includes(citel.sender);
        const botNumber = await Void.decodeJid(Void.user.id);
        const isBotAdmin = groupAdmins.includes(botNumber);

        if (!isAdmins) return citel.reply("❌ This command is only for admins.");
        if (!isBotAdmin) return citel.reply('I need admin rights to perform this action.');

        const groupId = citel.chat;
        const userJid = citel.mentionedJid
        ? citel.mentionedJid[0]
        : citel.quoted
        ? citel.quoted.sender
        : citel.text
        ? parsedJidd(citel.text)[0]
        : null;

        if (!userJid) return citel.reply("Please mention or reply to a user to add them to the auto-kick list.");

        const added = await addAKick(groupId, userJid);

        const responseText = added
            ? `*----Auto-Kick Added----*\nUser: +${userJid.split('@')[0]}\nAdded by: ${citel.pushName}`
            : `*----Already Exists----*\nUser: +${userJid.split('@')[0]}\nAttempted by: ${citel.pushName}`;
        citel.reply(responseText);
    }
);

cmd(
    {
        pattern: 'delakick',
        desc: 'Removes a member from the auto-kick list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text) => {
        if (!citel.isGroup) {
            return citel.reply("❌ This command only works in group chats.");
        }

        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = groupAdmins.includes(citel.sender);
        const botNumber = await Void.decodeJid(Void.user.id);
        const isBotAdmin = groupAdmins.includes(botNumber);

        if (!isAdmins) return citel.reply("❌ This command is only for admins.");
        if (!isBotAdmin) return citel.reply('I need admin rights to perform this action.');

        const groupId = citel.chat;

        const userJid = citel.mentionedJid
            ? citel.mentionedJid[0]
            : citel.quoted
            ? citel.quoted.sender
            : citel.text
            ? parsedJidd(citel.text)[0]
            : null;

        if (!userJid) {
            return citel.reply("Please mention, reply to a user, or provide a valid number to remove from the auto-kick list.");
        }
        const normalizedUserJid = userJid.includes('@s.whatsapp.net') ? userJid : `${userJid}@s.whatsapp.net`;
        const deleted = await delKick(groupId, normalizedUserJid);

        const responseText = deleted
            ? `*----Auto-Kick Removed----*\nUser: +${normalizedUserJid.split('@')[0]}\nRemoved by: ${citel.pushName}`
            : `*----Not Found----*\nUser: +${normalizedUserJid.split('@')[0]}\nAttempted by: ${citel.pushName}`;
        citel.reply(responseText);
    }
);

cmd(
    {
        pattern: 'akicklist',
        desc: 'Displays all members in the auto-kick list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text) => {
        if (!citel.isGroup) {
            return citel.reply("❌ This command only works in group chats.");
        }

        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = groupAdmins.includes(citel.sender);
        const botNumber = await Void.decodeJid(Void.user.id);
        const isBotAdmin = groupAdmins.includes(botNumber);

        if (!isAdmins) return citel.reply("❌ This command is only for admins.");
        if (!isBotAdmin) return citel.reply('I need admin rights to perform this action.');

        const groupId = citel.chat;
        const kicks = await getKicks(groupId);

        if (kicks.length > 0) {
            const kickList = kicks.map(k => `• +${k.userJid.split('@')[0]}`).join('\n');
            const responseText = `*----Auto-Kick List----*\n${kickList}`;
            citel.reply(responseText);
        } else {
            citel.reply("_No users are currently on the auto-kick list._");
        }
    }
);