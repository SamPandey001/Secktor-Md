const fs = require('fs')
const chalk = require('chalk');
const { existsSync } = require('fs')
//═══════[modification]════════\\
let number = process.env.OWNER_NUMBER;
if (!number) { number = "919628516236"; }
global.owner = number.split(",");
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨',
  ownername:process.env.ownername || 'Citels',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: 'SamPandey001',
  packname: 'Secktor',
  prefix: process.env.PREFIX || ['-'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'true',
  pmpermit: process.env.PMPERMIT || "true",
  pmpermit_mutetime: process.env.PMPERMIT_MUTETIME || "1800",
  mongodb_url: process.env.MONGODB_URI || "Enter-MongoURI-HERE",
  HEROKU: {
        HEROKU: process.env.HEROKU || `true`,
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
    },
  BRANCH: 'main',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
 LANG: process.env.THEME|| 'SECKTOR',
 SUPPORT: "120363040838753957@g.us",
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
	require(file)
})
