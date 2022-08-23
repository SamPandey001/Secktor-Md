(async () => {
	switch (command) {



        case "imdb":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -imdb\n*🧩Category:* Search\n*🛠️Usage:* ${
              prefix + command
            } movie/searies name \n\n*📚Description:* Gives Info about asked Movie/Series.`
          );
          return;
        }
        try {
          if (!querie) return citel.reply(`_Name a Series or movie ${LangG.greet}._`);
          let fids = await axios.get(
            `http://www.omdbapi.com/?apikey=742b2d09&t=${querie}&plot=full`
          );
          //		let yts = require("yt-search")
          //		let search = await yts(querie)
          //		let anu = search.videos[0]
          let imdbt = "";
          imdbt += "⚍⚍\n" + " ``` *𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ*```\n" + "⚎⚎\n";
          imdbt += "🎬Title      : " + fids.data.Title + "\n\n";
          imdbt += "📅Year       : " + fids.data.Year + "\n\n";
          imdbt += "⭐Rated      : " + fids.data.Rated + "\n\n";
          imdbt += "📆Released   : " + fids.data.Released + "\n\n";
          imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n\n";
          imdbt += "🌀Genre      : " + fids.data.Genre + "\n\n";
          imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n\n";
          imdbt += "✍Writer     : " + fids.data.Writer + "\n\n";
          imdbt += "👨Actors     : " + fids.data.Actors + "\n\n";
          imdbt += "📃Plot       : " + fids.data.Plot + "\n\n";
          imdbt += "🌐Language   : " + fids.data.Language + "\n\n";
          imdbt += "🌍Country    : " + fids.data.Country + "\n\n";
          imdbt += "🎖️Awards     : " + fids.data.Awards + "\n\n";
          imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n\n";
          imdbt += "🏙️Production : " + fids.data.Production + "\n\n";
          imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n\n";
          imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";
          /*
║    *Powered by ${LangG.title}*
╚════════════╝`
*/
          Void.sendMessage(
            citel.chat,
            {
              image: {
                url: fids.Poster,
              },
              caption: imdbt,
              templateButtons: [
                { urlButton: { displayText: "Trailer", url: `test` } },
                {
                  quickReplyButton: {
                    displayText: "Get Magnet",
                    id: `${prefix}magnet ${querie}`,
                  },
                },
              ],
            },
            {
              quoted: citel,
            }
          );
        } catch (err) {
          console.log(err)
          return citel.reply(`Could not find any matching.`);
        }
        break;
        		}
})()
	
