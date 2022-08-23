(async () => {
	switch (command) {
	 case 'anime': {
  if (args[0] === "help") {
    await citel.reply(
      `*❗Command:*   Anime Pic Search\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
        prefix + command
      }\n\n*📚Description:* Send Image of Anime in Chat.`
    );
    return;
  }
if (args[0]==='pic')
{
var pictured = "Anime Pics HD ";
let gg = body.slice(9)
let gis = require("g-i-s");
gis(gg + pictured, async (error, result) => {
  n = result;
  images = n[Math.floor(Math.random() * n.length)].url;
  let buttonMessage = {
    image: {
      url: images,
    },
    caption: `*-----「 Anime Image 」-----*`,
    footer: Void.user.name,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: LangG.title,
        body: `Anime Pics`,
        thumbnail: log0,
        mediaType: 2,
        mediaUrl: ``,
        sourceUrl: ``,
      },
    },
  };
  Void.sendMessage(citel.chat, buttonMessage, {
    quoted: citel,
  });
});
}
if (args[0]==='char')
{
  if (!arg[1]) return citel.reply(`Please give a Name ${LangG.greet}!`)
  let gg = body.slice(11)
                  const client = new Character();
                const chara = await client.character(gg).catch((err) => {
                  return citel.reply(`${LangG.greet} Couldn't find any result related to *${querie}*`)
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
  if (args[0]==='r')
{
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

if(args[0==='news']) {

  let qq = [
    "Anime News",
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
  let fatihganst = fs.readFileSync(`./assets/images (1).jpeg`);
    Void.sendMessage(
      citel.chat,
      {
        image: fatihganst,
        caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${LangG.title}*`,
      },
      {
        quoted: citel,
      }

    );
  });
  await sleep(3000);
}
if (args[0]==='search') {

  const { Anime } = require("@shineiichijo/marika");
  const client = new Anime();
  if (!querie) return reply("Which Anime do you want to search sweetheart");
  let gg = body.slice(12)
  let anime = await client.searchAnime(gg);
  let result = anime.data[0];
  //console.log(result);
  let details = `*🎀Title: ${result.title}*\n`;
  details += `*🎋Format: ${result.type}*\n`;
  details += `*📈Status: ${result.status
    .toUpperCase()
    .replace(/\_/g, " ")}*\n`;
  details += `*🍥Total episodes: ${result.episodes}*\n`;
  details += `*🎈Duration: ${result.duration}*\n`;
  details += `*🧧Genres:*\n`;
  for (let i = 0; i < result.genres.length; i++) {
    details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
  }
  details += `*✨Based on: ${result.source.toUpperCase()}*\n`;
  details += `*📍Studio:*\n`;
  for (let i = 0; i < result.studios.length; i++) {
    details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
  }
  details += `*🎴Producers:*\n`;
  for (let i = 0; i < result.producers.length; i++) {
    details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
  }
  details += `*💫Premiered on: ${result.aired.from}*\n`;
  details += `*🎗Ended on: ${result.aired.to}*\n`;
  details += `*🎐Popularity: ${result.popularity}*\n`;
  details += `*🎏Favorites: ${result.favorites}*\n`;
  details += `*🎇Rating: ${result.rating}*\n`;
  details += `*🏅Rank: ${result.rank}*\n\n`;
  if (result.trailer.url !== null)
    details += `*♦Trailer: ${result.trailer.url}*\n\n`;
  details += `*🌐URL: ${result.url}*\n\n`;
  if (result.background !== null)
    details += `*🎆Background:* ${result.background}*\n\n`;
  details += `*❄Description:* ${result.synopsis.replace(
    /\[Written by Sam]/g,
    ""
  )}`;
  Void.sendMessage(
    citel.chat,
    {
      image: {
        url: result.images.jpg.large_image_url,
      },
      caption: details,
    },
    {
      quoted: citel,
    }
  );

}

}

break
	
	}
})()
