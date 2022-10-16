
const axios = require('axios')
const { Anime, Manga } = require("@shineiichijo/marika");
const { tlang } = require('../../lib')

module.exports = {
   name: 'ranime',
   alias: ['anime-r'],
   category: 'weeb',
   async exec(citel, Void,args) {
 const animeCharacter = require('anime-character-random')
          let a = await animeCharacter.getRandomChar(async (anime) => {
            const client = new Character();
            const chara = await client.character(anime.tags[0]).catch((err) => {
              return
            });
            let texty = "";
            texty += `*🏮Name:* ${chara.data.characters.results[0].name.full}*\n`;
            texty += `*🌐Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
            texty += `*📶URL:* ${chara.data.characters.results[0].siteUrl}*\n\n`;
            texty += `*📑Description:* ${chara.data.characters.results[0].description}\n`;
              const { data: cha } = (
                await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
              ).data;
              const { data: anim } = (
                await axios.get(`https://api.jikan.moe/v4/characters/${cha[0].mal_id}/anime`)
              ).data;
              let data2 =
                `*Name:* ${cha[0].name}\n*👤About:* ${
                  cha[0].about
                }\n*🔗MAL_ID:* ${cha[0].mal_id}\n🔗 *📶URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
                `\n`;
        await Void.sendMessage(citel.chat,{image:{url:cha[0].images.jpg.image_url},caption:data2},{quoted:citel})
        })
     
   }
}
