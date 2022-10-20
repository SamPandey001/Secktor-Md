
const axios = require('axios')
const { Anime, Manga } = require("@shineiichijo/marika");
const { tlang,addCommand } = require('../../lib/')

module.exports = {
   name: 'animenews',
   alias: ['anews'],
   category: 'weeb',
   async exec(citel, Void,args) {
         
      let qq = [
        "Anime News Today",
        "New Anime",
        "Uocoming Anime News",
        "New Anime Info",
        "Whats news in Anime",
        "Anime Series",
        "Manga News today",
        "Anime New News",
        "Anime News today",
      ];
      let q1 = qq[Math.floor(Math.random() * qq.length)];
      //&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com
      let URL1 = `https://newsapi.org/v2/everything?q=${q1}&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8`;
      const response = await axios.get(URL1);
      let result = await response;
      result = result.data.articles;
      result.map(async (r, idx) => {
        Void.sendMessage(
          citel.chat,
          {
            image: log0,
            caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${tlang().title}*`,
          },
          {
            quoted: citel,
          }
    
        );
      });

     
   }
}
