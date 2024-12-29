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
const { addAutoDelete, delAutoDelete, getAutoDeletes, isAutoDelete } = require(__dirname + '/../lib/database/autodelete');


cmd(
    {
        pattern: 'adelete',
        desc: 'Adds a member to the auto-delete list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text) => {
        if (!citel.isGroup) return citel.reply("_❌ This command only works in group chats._");

        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = groupAdmins.includes(citel.sender);
        const botNumber = await Void.decodeJid(Void.user.id);
        const isBotAdmin = groupAdmins.includes(botNumber);

        if (!isAdmins) return citel.reply("_❌ This command is only for admins._");
        if (!isBotAdmin) return citel.reply('_I need admin rights to perform this action._');

        const groupId = citel.chat;
        const userJid = citel.mentionedJid
            ? citel.mentionedJid[0]
            : citel.quoted
            ? citel.quoted.sender
            : citel.text
            ? parsedJidd(citel.text)[0]
            : null;

        if (!userJid) return citel.reply("_Please mention or reply to a user to add them to the auto-delete list._");

        const added = await addAutoDelete(groupId, userJid);

        const responseText = added
            ? `*----Auto-Delete Added----*\nUser: +${userJid.split('@')[0]}\nAdded by: ${citel.pushName}`
            : `*----Already Exists----*\nUser: +${userJid.split('@')[0]}\nAttempted by: ${citel.pushName}`;
        citel.reply(responseText);
    }
);


cmd(
    {
        pattern: 'deladelete',
        desc: 'Removes a member from the auto-delete list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text) => {
        if (!citel.isGroup) return citel.reply("_❌ This command only works in group chats._");

        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = groupAdmins.includes(citel.sender);
        const botNumber = await Void.decodeJid(Void.user.id);
        const isBotAdmin = groupAdmins.includes(botNumber);

        if (!isAdmins) return citel.reply("_❌ This command is only for admins._");
        if (!isBotAdmin) return citel.reply('_I need admin rights to perform this action._');

        const groupId = citel.chat;
        const userJid = citel.mentionedJid
            ? citel.mentionedJid[0]
            : citel.quoted
            ? citel.quoted.sender
            : citel.text
            ? parsedJidd(citel.text)[0]
            : null;

        if (!userJid) {
            return citel.reply("_Please mention, reply to a user, or provide a valid number to remove from the auto-delete list._");
        }

        const normalizedUserJid = userJid.includes('@s.whatsapp.net') ? userJid : `${userJid}@s.whatsapp.net`;
        const deleted = await delAutoDelete(groupId, normalizedUserJid);

        const responseText = deleted
            ? `*----Auto-Delete Removed----*\nUser: +${normalizedUserJid.split('@')[0]}\nRemoved by: ${citel.pushName}`
            : `*----Not Found----*\nUser: +${normalizedUserJid.split('@')[0]}\nAttempted by: ${citel.pushName}`;
        citel.reply(responseText);
    }
);


cmd(
    {
        pattern: 'adelist',
        desc: 'Displays all members in the auto-delete list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel) => {
        if (!citel.isGroup) return citel.reply("_❌ This command only works in group chats._");

        const groupAdmins = await getAdmin(Void, citel);
        const isAdmins = groupAdmins.includes(citel.sender);

        if (!isAdmins) return citel.reply("_❌ This command is only for admins._");

        const groupId = citel.chat;
        const deletes = await getAutoDeletes(groupId);

        if (deletes.length > 0) {
            const deleteList = deletes.map(k => `• +${k.userJid.split('@')[0]}`).join('\n');
            const responseText = `*----Auto-Delete List----*\n${deleteList}`;
            citel.reply(responseText);
        } else {
            citel.reply("_No users are currently on the auto-delete list._");
        }
    }
);

cmd(
    {
        on: "body",
    },
    async (Void, citel) => {
        const groupId = citel.chat;
        const sender = citel.sender;
        const shouldDelete = await isAutoDelete(groupId, sender);

        if (shouldDelete) {
            console.log(`Auto-deleting message from ${sender}`);
            const key = {
                remoteJid: groupId,
                id: citel.id,
                participant: sender,
            };

            try {
                await Void.sendMessage(groupId, { delete: key }); 
                console.log(`Message from ${sender} deleted successfully!`);
            } catch (error) {
                console.error('Failed to delete message:', error);
            }
        }
    }
);
