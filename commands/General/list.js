const discordjs = require("@discordjs/collection")
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../../config')
let { fancy,botpic,tlang } = require("../../lib/scraper");
let { runtime } = require('../../lib/myfuncn');
module.exports = {
    name: "list",
    alias: ["l", "cmdlist", "listmenu"],
    category: "general",
    async exec(citel, Void, args,pushname) {
       
const { prefix, commands } = discordjs;
let todlink = [12,9,8,3,5,2,6];
let j = todlink[Math.floor(Math.random() * todlink.length)];
            const cmds = commands.keys()
            let category = [];
            for (let cmd of cmds) {
                let info = commands.get(cmd);
                if (!cmd) continue;
category.push(info)
                
                
            }
let str = `
╭───〘 ${Config.ownername} Bot 〙────
│ ✵ ╭──────────────      
│ ✵ │ *Hey ${citel.pushName}.*
│ ✵ │ *This is  ${tlang().title}.*
│ ✵ │ *Commands:* _${category.length}_
│ ✵ │ *Uptime:* _${runtime(process.uptime())}_
│ ✵ │ *Owner:-* _${Config.ownername}_
│ ✵ │ _My commands list is given_
│ ✵ │ _down below._
│ ✵ ╰───────────
╰─────────────◆\n`
str += `╭───────────────◆\n`
str += `│ ⿻ ╭─────────────\n`
for (let i = 0; i < category.length; i++ ) {
  str+=`│ ⿻ │ ${i+1}. `+ await fancy(category[i].name,j)+'\n'
}
str += `│ ⿻ ╰─────────────\n`
str += `╰─────────────◆\n`
citel.reply(str)
}
}
