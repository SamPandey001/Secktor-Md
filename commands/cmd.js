const { cmd, sck, commands,tlang } = require(__dirname + '/../lib');

cmd({
    pattern: "cmd",
    desc: "Give access of private commands in group.",
    category: "owner",
},
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);
    if (!citel.isGroup) return citel.reply(tlang().group);
      

    const [action, commandName] = text.split(" ");
    let group = await sck.findOne({ id: citel.chat });

    if (!group) {
        group = await new sck({ id: citel.chat }).save();
    }

    if (!action) {
        return citel.reply(
            "Usage: \n" +
            "1. cmd add <commandName> - To add a custom command\n" +
            "2. cmd remove <commandName> - To remove a custom command\n" +
            "3. cmd list - To view all custom commands for this group"
        );
    }

    if (action.toLowerCase() === "add") {
        if (!commandName) return citel.reply("Please provide a command name.");
        
        group.publicCommands = group.publicCommands || new Map();
        group.publicCommands.set(commandName, "This is a custom command.");
        await group.save();
        return citel.reply(`Command '${commandName}' added successfully.`);
    } else if (action.toLowerCase() === "remove") {
        if (!commandName) return citel.reply("Please provide the command name to remove.");

        group.publicCommands = group.publicCommands || new Map();
        group.publicCommands.delete(commandName);
        await group.save();
        return citel.reply(`Command '${commandName}' removed successfully.`);
    } else if (action.toLowerCase() === "list") {
        const commands = group.publicCommands ? Array.from(group.publicCommands.entries()) : [];

        if (commands.length === 0) {
            return citel.reply("No custom commands found for this group.");
        }

        let commandList = "Custom Commands for this group:\n";
        commands.forEach(([cmdName], index) => {
            commandList += `${index + 1}. ${cmdName}\n`;
        });

        return citel.reply(commandList.trim());
    } else {
        return citel.reply("Invalid action. Use 'add', 'remove', or 'list'.");
    }
});
