 const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    pattern: "apk",
    alias: ["app","findapk","downapk","ps"],
    desc: "download playstore app",
    react: "🗃️",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
   
    const size = result.size
    let desc = `

*Name:* ${result.name}

*Updated on:* ${result.lastup}

*Package:* ${result.package}

*Size:* ${result.size}

`

const getreact = await Void.sendMessage(citel.chat, { image: { url: icon }, caption: desc }, { quoted: citel });

await Void.sendMessage(citel.chat, { react: { text: '🔄', key: getreact.key } });

const getreacta = await Void.sendMessage(citel.chat, {

                document: {

                    url: applink ,

                },

                mimetype: "application/vnd.android.package-archive",

                caption: `                 
`,

                fileName: getname ,

            }, {

                quoted: citel,

            });                     

await Void.sendMessage(citel.chat, { react: { text: '🗃️', key: getreacta.key } });

return await Void.sendMessage(citel.chat, { react: { text: '✅', key: getreact.key } });
 
 
} catch (err) {          

        console.log(err);

        citel.reply (`❌ *${err}*`);

 }

        

    })

     
