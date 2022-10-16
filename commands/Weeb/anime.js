const axios = require('axios')
const { Anime, Manga } = require("@shineiichijo/marika");
const { tlang } = require('../../lib')

module.exports = {
   name: 'anime',
   alias: ['anime-s'],
   category: 'weeb',
   desc: 'Searches Info about Anime and Provides result.',
   async exec(citel, Void,args) {
      const client = new Anime();
      if (!args[0]) return citel.reply("Which Anime do you want to search? Please give me a name.");
      let anime = await client.searchAnime(args.join(" "));
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
      details += `*❄Description:* ${result.synopsis}`;
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
