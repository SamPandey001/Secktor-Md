const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
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
  botname:   process.env.BOT_NAME === undefined ? '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SamPandey001' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pLL21HZ05aaTFrNVQ0K1RsaUpHb0RaRTRrcHRpU2lnOFBlRkx1VUtVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkthY3hYejRjajlVYU5lMnlJZ0Z3dFBIR0tQWG5hQTFicys4NG5KTy9FVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTVRnNnE2UllLY213V1JWRHBFdEFxK3lnb2FBRHY1VWhHd1VIeUwwT21VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQaFoxUVRKTDRURWhBUHFRNnkxbWdROE0yOThtTUJyYXJZcC92Zm1TOXkwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJeXFFTTE2Wks5VzdxdVdZSUZLVnhobnBFRGRKZ1RFZFNlWFZ1cExpR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFUG4rdjM3L1dOb1BSWE50N2RyVDhyWFJTdXJWUExDNk1TMlg5UHh5U1E9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsL2xVOUFXRmhkVFFXZnd6cDFrYk8zSTkzTE44MHROQXFKYzUxRjdOOC94aWRuSEdxNVB1QzFWaXNqOWwxZ0lxM2tOR04vL1NVWithRjgzWUhaTVNodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1OSwiYWR2U2VjcmV0S2V5IjoiNmxsYUZUYWlFcWp6RnYwVVVMODFTL1YwNmU2VUlGU2g1bzdVMnczNXdOOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMGlLMHRFV0FRQkNCcWVJZkJyS0xyQSIsInBob25lSWQiOiIyMTU3MzQ1NS1kN2RkLTRjNjMtODU0Ni0zZjc0ZjJjN2I5MTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDVNd0t3d3QxRm9KcThYZzlRb0hHL2M0QnljPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxT1JPVGxyOEJobTZaVC9va2NqTnduWEJhdmc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYTRrcUFERU1tYzViY0dHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6WndTemcxZ082UlhYeHFIejFzMVJQRzhoOXJSeDdkVHFNanl0ckIwWDBrPSIsImFjY291bnRTaWduYXR1cmUiOiJ6N2ZsY3ZZcEdURENVQkZzNXlKWWZuWUd4aGtzTEF6UUZ1UHo0ZmdlajVlN0pNMGdlZ3NNNjhtYmVtenNlYmJOQlRicEZQa2drYTNtVW9kR1dmdVlEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWVlaQ1FJQjlPYkxqaE5BMWVhMWlPaWpsQTB0UXAzT3QyTHNHVlpLalZmd1JGeVMxaXBxdE9OUWlHSE16bzlTVG5HQno4eXdUU3lIOEF1NDF3UUpTaWc9PSJ9LCJtZSI6eyJpZCI6IjI0NDk1NjEwMDM0OToxNUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDQ5NTYxMDAzNDk6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzJjRXM0TllEdWtWMThhaDg5Yk5VVHh2SWZhMGNlM1U2akk4cmF3ZEY5SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzYxNDU0MH0=' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'SamPandey001' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Secktor-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
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
