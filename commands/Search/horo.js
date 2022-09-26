const fetch = require('node-fetch')

module.exports = {
   name: 'horo',
   alias: ['horoscope'],
   category: 'search',
   desc: 'Gives horoscope info of user.',
   use: '<sign>',
   async exec(citel, Void, args) {
    if (!args.join(" ")) return citel.reply("Provide me a sign!")
      try {
        const URL = `https://aztro.sameerkumar.website/?sign=${args.join(" ")}&day=today`;
			fetch(URL, {
					method: 'POST'
				})
				.then(response => response.json())
				.then(json => {
					const date = json.current_date;
					console.log(date);
					let textw = "";
					textw += `*🌟 Horoscope of  ${args.join(" ")}*\n\n`;
					textw += `*Current Date:* ${json.current_date}.\n`;
					textw += `*Sign:* ${args.join(" ")}.\n`;
					textw += `*Lucky Time:* ${json.lucky_time}.\n`;
					textw += `*Compatibility:* ${json.compatibility}.\n`;
					textw += `*Lucky Number:* ${json.lucky_number}.\n`;
					textw += `*Lucky Color:* ${json.color}.\n`;
					textw += `*Today Mood:* ${json.mood}.\n`;
					textw += `*Overall:* ${json.description}.\n`;
					citel.reply(textw)
				});

         } catch (e) {
           console.log(e)
      }
   }
}
