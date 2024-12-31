const { cmd,sck,commands } = require(__dirname+'/../lib')

cmd({
    pattern: "cmd",
    desc: "Manage custom commands for specific group.",
    category: "admin",
},
async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply("Only the owner can manage commands.");

    const [action, commandName, ...responseParts] = text.split(" ");
    let group = await sck.findOne({ id: citel.chat });

    if (!group) {
        group = await new sck({ id: citel.chat }).save();
    }

    if (!action) {
        return citel.reply(
            "Usage: \n" +
            "1. cmd add <commandName> <response> - To add a custom command\n" +
            "2. cmd remove <commandName> - To remove a custom command\n" +
            "3. cmd list - To view all custom commands for this group"
        );
    }

    if (action.toLowerCase() === "add") {
        const response = responseParts.join(" ");
        if (!commandName || !response) return citel.reply("Please provide both a command name and response.");
        
        group.publicCommands = group.publicCommands || new Map();
        group.publicCommands.set(commandName, response);
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
        commands.forEach(([cmdName, response], index) => {
            commandList += `${index + 1}. ${cmdName} - ${response}\n`;
        });

        return citel.reply(commandList.trim());
    } else {
        return citel.reply("Invalid action. Use 'add', 'remove', or 'list'.");
    }
});
