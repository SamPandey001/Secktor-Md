const axios = require('axios')
const { tlang,fetchJson } = require('../../lib/scraper')

module.exports = {
   name: 'iplookup',
   category: 'search',
   desc: 'Sends info of given IP.',
   async exec(citel, Void,args) {
    if (!args) return citel.reply(`_Give me an IP ${tlang().greet}._`);
                            fids = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/ip-lookup?ip=${args.join(" ")}`);
                            const reply = `
            ╔════◇
            ║ *🏮IP:* ${fids.result.ip}
            ║ *🎋Continent:* ${fids.result.continent}
            ║ *👥ORG:* ${fids.result.org}
            ║ *👥Mobile:* ${fids.result.mobile}
            ║ *✨CountryCode:* ${fids.result.countryCode}
            ║ *✔City:* ${fids.result.city}
            ║ *📲Timezone:* ${fids.result.timezone}
            ║ *📪Latitude:* ${fids.result.latitude}
            ║ *📪Latitude:* ${fids.result.longitude}
            ║ *🚀ISP:* ${fids.result.isp}
            ║   *Powered by ${tlang().title}*
            ╚════════════╝`;
                            Void.sendMessage(citel.chat, {
                                image: {
                                    url: 'https://i.pcmag.com/imagery/articles/05NOZNN6wQ8gKX5w1oXMKE1-19.fit_lim.v1614967445.jpg',
                                },
                                caption: reply,
                            }, {
                                quoted: citel,
                            });

   }
}
