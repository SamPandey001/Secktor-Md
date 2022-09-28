const fs = require('fs')
const chalk = require('chalk');
const { existsSync } = require('fs')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"mongodb+srv://secktor:secktor@secktor.uwrrvuc.mongodb.net/?retrywrites=true&w=majority
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.sudo = process.env.SUDO || '919628516236'
module.exports = {
  botname: process.env.BOT_NAME || '✮⃝🅬_ᷩ_ⷷ₇ⷷ₂ᷩ₄ᷧ⭕Ғ͟ғ͟༏çᥲᥧ✮⃝𓃮',
  ownername:process.env.ownername || '✪፝͜͡✮⃢♥⃝🅬_ᷩ_ⷷ₇ⷷ₂ᷩ₄ᷧ✪፝͜͡👑🔥',
  sessionName: process.env.SESSION_ID || 'CitelVoid_UGNFdUxBM2k=',
  author: process.env.PACK_INFO.split(";")[0], 
  packname: process.env.PACK_INFO.split(";")[1],
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || '92',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  prefix: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'false',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "Enter-Mongo-URI-HERE",mongodb+srv://secktor:secktor@secktor.uwrrvuc.mongodb.net/?retrywrites=true&w=majority
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
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
