
class CommandHandler {
  constructor() {
    this.commands = [];
  }
    
  register(info, func) {
    const data = {
      ...info,
      function: func,
      dontAddCommandList: info.dontAddCommandList || false,
      desc: info.desc || '',
      fromMe: info.fromMe || false,
      category: info.category || 'misc',
      filename: info.filename || 'Not Provided',
    };

    this.commands.push(data);
    return data;
  }
}

const commandHandler = new CommandHandler();

module.exports = {
  cmd: commandHandler.register,
  AddCommand: commandHandler.register,
  Function: commandHandler.register,
  Module: commandHandler.register,
  commands: commandHandler.commands,
};
