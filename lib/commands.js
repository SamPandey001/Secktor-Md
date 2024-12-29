const config = require("../config");
const commands = [];

function cmd(info, func) {
    const data = {
        ...info,
        function: func,
        dontAddCommandList: info.dontAddCommandList || false,
        desc: info.desc || 'No description provided', 
        fromMe: info.fromMe || false,
        category: info.category || 'misc',
        filename: info.filename || 'Not Provided'
    };
    commands.push(data);

    return data;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands,
};

