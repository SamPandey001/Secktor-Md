const djs = require("@discordjs/collection")
const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../../config')
let { fancytext,tlang,tiny,runtime,formatp,botpic} = require("../../lib");

module.exports = {
    name: "help",
    alias: ["h", "cmd", "menu"],
    category: "general",
    async exec(citel, Void, args) {
        if (args.join(' ')) {
            const data = [];
            const name = args[0].toLowerCase();
            const { commands, prefix } = djs;
            console.log(name)
            const cmd = commands.get(name) || commands.find((cmd) => cmd.alias && cmd.alias.includes(name));
            if (!cmd || cmd.category === "private") return await citel.reply("*❌No Such commands.*");
            else data.push(`*🍁Command:* ${cmd.name}`);
            if (cmd.alias) data.push(`*🔰Alias:* ${cmd.alias.join(', ')}`);
            if (cmd.desc) data.push(`*🧩Description:* ${cmd.desc}`);
            if (cmd.use) data.push(`*〽️Usage:* \`\`\`${prefix}${cmd.name} ${cmd.use}\`\`\`\n\nNote: [] = optional, | = or, <> = must filled`);

            return await citel.reply(data.join('\n'));
        } else {
            const { prefix, commands } = djs;
            const cmds = commands.keys()
            let category = [];

            for (let cmd of cmds) {
                let info = commands.get(cmd);
                if (!cmd) continue;
                if (!info.category || info.category === 'private') continue;
                if (Object.keys(category).includes(info.category)) category[info.category].push(info);
                else {
                    category[info.category] = [];
                    category[info.category].push(info);
                }
            }
const time = moment(moment())
      .format('HH:mm:ss')
    moment.tz.setDefault('Asia/KOLKATA')
      .locale('id')
const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let str = `╭────〔 `+ fancytext(Config.ownername.split(' ')[0],58) +` 〕─────⊷\n` 
str+=
'```'+`│ ╭──────────────
│ │ User:- ${citel.pushName}
│ │ Theme:- ${tlang().title}
│ │ Prefix:- [ ${Config.prefix[0]} ]
│ │ Plugins:- ${djs.commands.size}
│ │ Owner:- ${Config.ownername}
│ │ Uptime:- ${runtime(process.uptime())}
│ │ Mem:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
│ │ Time:- ${time}
│ │ Date:- ${date}
│ ╰────────────
╰───────────────⊷\n`+'```'
       const keys = Object.keys(category);
 str += `╭───『 `+ fancytext('Commands',57)+`』──◆`
for (const key of keys) {       
str += `
┃  ╭─────────────◆
┃  │ ✯---- ${tiny(key)} ----⦿
┃  ╰┬────────────◆
┃  ┌┤ ${category[key].map((cmd, idx) =>`
┃  │ ❒ ${idx + 1}. `+`${cmd.name}`)}
┃  ╰─────────────◆`
            }
str += `\n╰━━━━━━━━━━━──⊷\n`
str += `_🔖Send ${prefix}help <command name> to get detailed information of specific command._\n*📍Eg:* _${prefix}help anime_`;
            let generatebutton = [{
					buttonId: `${prefix}owner`,
					buttonText: {
						displayText: 'Owner'
					},
					type: 1
				},{
					buttonId: `${prefix}list`,
					buttonText: {
						displayText: 'List Menu'
					},
					type: 1
				}
				]
				let buttonMessaged = {
					image: { url: await botpic() },
					caption: str,
					footer: tlang().title,
					headerType: 4,
				 buttons: generatebutton
				};
				await Void.sendMessage(citel.chat, buttonMessaged);
        }
    }
}
