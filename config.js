const fs = require('fs-extra')

if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\

global.owner = process.env.OWNER_NUMBER.split(",")

global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"

global.port= process.env.PORT || 5000

global.email = 'bokep@xnxx.com'

global.github = 'https://github.com/'

global.location = 'Anjas IN'

global.gurl = 'https://instagram.com/' // add your username

global.sudo = process.env.SUDO || '6287711337556'

global.website = 'https://github.com/' //wa.me/+6287711337556

global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://ibb.co/dtkDRJB'

module.exports = {

  botname: process.env.BOT_NAME || 'AnjasKelass',

  ownername:process.env.OWNER_NAME || 'MasAnjas ID',

  sessionName: process.env.SESSION_ID || 'WFZOTWdoeHU=',

  author: process.env.PACK_INFO.split(";")[0] || 'author', 

  packname: process.env.PACK_INFO.split(";")[1] || 'AnjasKelas',

  autoreaction: process.env.AUTO_REACTION || 'off',

  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',

  alwaysonline: process.env.ALWAYS_ONLINE || 'false',

  antifake : process.env.FAKE_COUNTRY_CODE || '',

  readmessage: process.env.READ_MESSAGE || false,

  HANDLERS: process.env.PREFIX || ['.'],

  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'false',

  pmpermit: process.env.PMPERMIT || "false",

  mongodb_url: process.env.MONGODB_URI || "Enter-Mongo-URI-HERE",

  warncount : process.env.WARN_COUNT || 3,

  disablepm: process.env.DISABLE_PM || "flase",

  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',

  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',

  antilinkaction: process.env.ANTILINK_ACTION || 'remove',

  BRANCH: 'main',

  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,

  LANG: process.env.THEME|| 'SECKTOR',

  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE

};

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(`Update'${__filename}'`)

    delete require.cache[file]

	require(file)

})
