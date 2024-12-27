const config = require("../config");
const commands = [];

function cmd(info, func) {
    const data = {
        ...info,
        function: func,
        dontAddCommandList: info.dontAddCommandList || false,
        desc: info.desc || 'No description provided', // Set a default description if not provided
        fromMe: info.fromMe || false,
        category: info.category || 'misc',
        filename: info.filename || 'Not Provided'
    };
    commands.push(data);
    console.log('Command added:', data); // Log the command to check if it is added correctly
    return data;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands,
};
