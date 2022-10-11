const axios = require('axios');
const { tlang } = require('../../lib');
const { prefix } = require('../../config');

module.exports = {
   name: 'imdb',
   category: 'search',
   desc: 'Sends image of asked Movie/Series.',
   async exec(citel, Void,args) {
    if (!args) return citel.reply(`_Name a Series or movie ${tlang().greet}._`);
                            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${args.join(" ")}&plot=full`);
                            let imdbt = "";
                            console.log(fids.data)
                            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
                            imdbt += "🎬Title      : " + fids.data.Title + "\n";
                            imdbt += "📅Year       : " + fids.data.Year + "\n";
                            imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
                            imdbt += "📆Released   : " + fids.data.Released + "\n";
                            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
                            imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
                            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
                            imdbt += "✍Writer     : " + fids.data.Writer + "\n";
                            imdbt += "👨Actors     : " + fids.data.Actors + "\n";
                            imdbt += "📃Plot       : " + fids.data.Plot + "\n";
                            imdbt += "🌐Language   : " + fids.data.Language + "\n";
                            imdbt += "🌍Country    : " + fids.data.Country + "\n";
                            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
                            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
                            imdbt += "🏙️Production : " + fids.data.Production + "\n";
                            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
                            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";
                            Void.sendMessage(citel.chat, {
                                image: {
                                    url: fids.data.Poster,
                                },
                                caption: imdbt,
                            }, {
                                quoted: citel,
                            });

   }
}
