const axios = require('axios')
const { tlang } = require('../../lib')

module.exports = {
   name: 'iginfo',
   category: 'search',
   desc: 'Sends info of given username.',
   async exec(citel, Void,args) {
    if (!args) return citel.reply(`Give me username ${tlang().greet}.`);
    fids = await axios.get(`https://api.popcat.xyz/instagram?user=${args.join(" ")}`);
    const reply = `
╔════◇
║*🏮Name:* ${fids.data.full_name}
║*🎋Username:* ${fids.data.username}
║*👥Followers:* ${fids.data.followers}
║*✨Type:* ${fids.data.private}
║*✔Verified:* ${fids.data.verified}
║*📲Following:* ${fids.data.following}
║*📪Posts:* ${fids.data.posts}
║*🚀Bio:* ${fids.data.biography}
║   *Powered by ${tlang().title}
╚════════════╝ `;
    Void.sendMessage(citel.chat, {
        image: {
            url: fids.data.profile_pic,
        },
        caption: reply,
    }, {
        quoted: citel,
    });

   }
}
