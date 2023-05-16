const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("37122252051")
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:4LS6vpT29ZPyJrNhZEOe@containers-us-west-68.railway.app:6600"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨',
  ownername:process.env.OWNER_NAME || '𝕺𝖃✯𝕸𝖃',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlNbHhPc3BLQWhWaGN1WVA3azd3SThsb1ZuUFlrZDRaSFlZV0xSY1MwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjNtSHhqc0pqNmVuZmhSd2lENWxFV1lzaWkxS3hvaWkyVmxlaWpqUVJ4UT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT0dJY1VFSVVyeWhnR3FBaklCZU1mcFVyS0syS2h0OCtOaG42dWpzNEhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtWVdTSWlaNkQydC9VQkRtYis5eEhJaDZpTlVwVXpPbzRqVE5qM1hweTJFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFVkt4ZitZbTU1V1E4RktRbHFnMjhTVWNGeHNHbHZBTDdvdmtONmpMRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMR1hsOWxxZVMzZjdHS1pNZ1gvVVo0U0xJc2s3aG1VdjA1ZjNQUGVCekE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRkI5Ty9QdEtXTmp6U1RJMDEyZ0xpQTIwc0ZCazFuQjluSFU5b2Nva1hVZ2ZRUUU0R0NaQmozdXNiTWQ1dlBxTHl1NHUxM1BneFhvZExPdFZJMklCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzMywiYWR2U2VjcmV0S2V5IjoiWHRKQ2l2S0FadUcwK0taRjVZcEg1UHdVeElwZkxMSTB5T0U4cDFTRktCaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFAwc1BJRUVQYnppNk1HR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzRmZ0THVhV2ZhK2h4bzlacC9PMlFwcllpSGtWWWxDT1pxbTViVHVaczF3PSIsImFjY291bnRTaWduYXR1cmUiOiJFYlVYYVZSSHczK3JMb2pQNUJzKzgxNGFlZ3kwZ2ZwVUNDcWZmZVJHZ1ZZR25HeVM2WCtpS3lmNXNKTFJNQTA4eGlHcGE2WDFIemVaL0FBWFM5UmNBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaEZ1VkpLYTduZ3pYWkpkb0YxazJjdWRNa3FmUC9rNlBhT0FXejNoM01jK1F0enI1OGZUY3JHems5WlNYa25jY0krYXJkekIwSml4UjFaUjg5eXh2Q1E9PSJ9LCJtZSI6eyJpZCI6IjM3MTIyMjUyMDUxOjFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzcxMjIyNTIwNTE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiQlg3UzdtbG4ydm9jYVBXYWZ6dGtLYTJJaDVGV0pRam1hcHVXMDdtYk5jIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjg0MjA4MTIxfQ==',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || '𝕺𝖃✯𝕸𝖃',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
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
