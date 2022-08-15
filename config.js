const fs = require('fs')
const chalk = require('chalk')
//git test by Sam    huh
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)
//═══════[modification]════════\\
let number = process.env.OWNER_NUMBER;
if (!number) { number = "919628516236"; }
global.owner = number.split(",");
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port = process.env.PORT || 5000
global.botname = process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨'
global.ownername = process.env.ownername || 'Citels' //owner name
global.packname = 'Secktor' //sticker package name
global.author = 'SamPandey001' //sticker author name
global.sessionNamew = 'session.sam'
global.sessionName = process.env.SESSION_ID || 'PUT-HERE'
global.zerotwo = "https://github.com/SecktorBot/Secktor-MD" //ur gc link
global.zerotwo2 = "https://github.com/SecktorBot/Secktor-MD" //ur gc link2
global.websitex = "https://ZeroTwoMd.tech" //ur website
global.prefa = process.env.PREFIX || ['-'] //prefix
module.exports = {
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'true',
  pmpermit: process.env.PMPERMIT || "true",
  pmpermit_mutetime: process.env.PMPERMIT_MUTETIME || "1800",
  mongodb_url: process.env.MONGODB_URI || "Enter-MongoURI-HERE",
  HEROKU: {
        HEROKU: process.env.HEROKU || `true`,
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
    },
  BRANCH: 'franxx',
  SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
  VERSION: process.env.VERSION === undefined ? 'v.2.0' : process.env.VERSION,
 LANG: process.env.THEME|| 'SECTOR',
 SUPPORT: "120363040838753957@g.us",
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
	require(file)
})