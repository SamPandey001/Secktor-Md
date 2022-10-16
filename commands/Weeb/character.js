
const axios = require('axios')
const { Anime, Manga } = require("@shineiichijo/marika");
const { tlang } = require('../../lib/')

module.exports = {
   name: 'character',
   alias: ['char'],
   category: 'weeb',
   async exec(citel, Void,args) {
     if (!args[1]) return citel.reply(`Please give a Name ${tlang().greet}!`)
                      const client = new Character();
                    const chara = await client.character(args.join(" ")).catch((err) => {
                      return citel.reply(`${tlang().greet} Couldn't find any result related to *${querie}*`)
                    });
                    let texty = "";
                    texty += `*🏮Name:* ${chara.data.characters.results[0].name.full}*\n`;
                    texty += `*🌐Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
                    texty += `*📶URL:* ${chara.data.characters.results[0].siteUrl}*\n\n`;
                    texty += `*📑Description:* ${chara.data.characters.results[0].description}\n`;
                      const { data: char } = (
                        await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
                      ).data;
                      const { data: anime } = (
                        await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/anime`)
                      ).data;
                      const { data: voice } = (
                        await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/voices`)
                      ).data;
                      let data2 =
                        `*🏮Name:* ${char[0].name}\n*🎗About:* ${
                          char[0].about
                        }\n*🔍MAL_ID:* ${char[0].mal_id}\n🔗 *URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
                        `\n❤ *Description:* ${chara.data.characters.results[0].description}\n` +
                        `\n**🔖Appears:* ${anime
                          .map((val) => `\n*🔮Role:* ${val.role}\n*🎬Title:* ${val.anime.title}`)
                          .join("\n")}`;
                Void.sendMessage(citel.chat,{image:{url:char[0].images.jpg.image_url},caption:data2},{quoted:citel})
     
   }
}
