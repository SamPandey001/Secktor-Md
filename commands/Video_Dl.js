const { fetchJson, cmd, citel, Config, tlang } = require('../lib')



cmd({

            pattern: "video",

            desc: "video dl",

            react: "📽️",

            category: "downloader"

        },

        async(Void, citel, text) => {

            

        if (!text) return citel.reply(`*Please Give Me A Topic* ❗`);   

       

            

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];  

          

const ytvideo = await fetchJson(`https://api.alyachan.my.id/api/ytv?url=${anu.url}`)

        

const videolink = ytvideo.url

const name = ytvideo.title

let descget = `

☍ ⦁ *Title:* ${anu.title}
☍ ⦁ *Duration:* ${anu.timestamp}
☍ ⦁ *Viewers:* ${anu.views}
☍ ⦁ *Uploaded:* ${anu.ago}
☍ ⦁ *Author:* ${anu.author.name}
☍ ⦁ *Url:* ${anu.url}

ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ 
ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ •
`;    

            const sdlr = await Void.sendMessage(citel.chat, { image: { url: anu.thumbnail }, caption: descget }, { quoted: citel });

            await Void.sendMessage(citel.chat, { react: { text: '🔄', key: sdlr.key } });

           

               

        

         const hehe = await Void.sendMessage(citel.chat, {

                document: {

                    url: videolink ,

                },

                mimetype: "video/mp4",

                caption: `ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ 
ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ •`,

                fileName: name ,

            }, {

                quoted: citel,

            });

     

                await Void.sendMessage(citel.chat, { react: { text: '🎥', key: hehe.key } });

               return await Void.sendMessage(citel.chat, { react: { text: '✅', key: sdlr.key } });

        }

    )
