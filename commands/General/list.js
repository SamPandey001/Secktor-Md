const discordjs = require("@discordjs/collection")
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../../config')
let { fancy,botpic,tlang } = require("../../lib/scraper");
module.exports = {
    name: "list",
    alias: ["l", "cmdlist", "listmenu"],
    category: "general",
    async exec(citel, Void, args,pushname) {
       
const { prefix, commands } = discordjs;
let todlink = [12,9,8,3,5,2,6
  ];
let j = todlink[Math.floor(Math.random() * todlink.length)];
            const cmds = commands.keys()
            let category = [];
let str = `╭───────────────◆\n`
            for (let cmd of cmds) {
                let info = commands.get(cmd);
                if (!cmd) continue;
category.push(info)
                
                
            }
str += `│ *Hey ${citel.pushName}.*\n│ *This is  ${tlang().title}.*\n│ *My commands list is given*\n│ *below.*\n│ *Total Commands* ${category.length}\n╰─────────────◆\n`
str += `╭───────────────◆\n`
str += `│ ⿻ ╭───────────────◆\n`
for (let i = 0; i < category.length; i++ ) {
  str+=`│ ⿻ │ ${i+1}. `+ await fancy(category[i].name,j)+'\n'
}
str += `│ ⿻ ╰─────────────◆\n`
str += `╰─────────────◆\n`
citel.reply(str)
}
}