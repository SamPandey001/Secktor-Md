const { AutoKick, addAKick, delKick, getKicks } = require(__dirname + '/../lib/database/autokick'); 
const { cmd } = require('../lib');

cmd(
    {
        pattern: 'akick',
        desc: 'Adds a member to the auto-kick list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text, { isAdmin, isBotAdmin }) => {
        if (!isAdmin) return citel.reply('This command can only be used by group admins.');
        if (!isBotAdmin) return citel.reply('I need admin rights to perform this action.');

        const groupId = citel.chat;
        const userJid = text.includes('@s.whatsapp.net') ? text : `${text}@s.whatsapp.net`;

        const added = await addAKick(groupId, userJid);
        Void.sendMessage(
            citel.chat,
            {
                text: added
                    ? "*----Auto-Kick Added----*\nUser: @" +
                      userJid.split('@')[0] +
                      "\nAdded by: " +
                      citel.pushName
                    : "*----Already Exists----*\nUser: @" +
                      userJid.split('@')[0] +
                      "\nAttempted by: " +
                      citel.pushName,
                mentions: [userJid],
            },
            { quoted: citel }
        );
    }
);

cmd(
    {
        pattern: 'akickdel',
        desc: 'Removes a member from the auto-kick list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text, { isAdmin, isBotAdmin }) => {
        if (!isAdmin) return citel.reply('This command can only be used by group admins.');
        if (!isBotAdmin) return citel.reply('I need admin rights to perform this action.');

        const groupId = citel.chat;
        const userJid = text.includes('@s.whatsapp.net') ? text : `${text}@s.whatsapp.net`;

        const deleted = await delKick(groupId, userJid);
        Void.sendMessage(
            citel.chat,
            {
                text: deleted
                    ? "*----Auto-Kick Removed----*\nUser: @" +
                      userJid.split('@')[0] +
                      "\nRemoved by: " +
                      citel.pushName
                    : "*----Not Found----*\nUser: @" +
                      userJid.split('@')[0] +
                      "\nAttempted by: " +
                      citel.pushName,
                mentions: [userJid],
            },
            { quoted: citel }
        );
    }
);

cmd(
    {
        pattern: 'getakick',
        desc: 'Displays all members in the auto-kick list.',
        category: 'group',
        filename: __filename,
    },
    async (Void, citel, text, { isAdmin, isBotAdmin }) => {
        if (!isAdmin) return citel.reply('This command can only be used by group admins.');
        if (!isBotAdmin) return citel.reply('I need admin rights to perform this action.');

        const groupId = citel.chat;
        const kicks = await getKicks(groupId);

        if (kicks.length > 0) {
            const kickList = kicks.map(k => `• @${k.userJid.split('@')[0]}`).join('\n');
            Void.sendMessage(
                citel.chat,
                {
                    text: "*----Auto-Kick List----*\n" + kickList,
                    mentions: kicks.map(k => k.userJid),
                },
                { quoted: citel }
            );
        } else {
            Void.sendMessage(
                citel.chat,
                {
                    text: "_No users are currently on the auto-kick list._",
                },
                { quoted: citel }
            );
        }
    }
);
