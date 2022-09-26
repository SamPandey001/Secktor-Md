const axios = require('axios')

module.exports = {
   name: 'loli',
   category: 'weeb',
   desc: 'Sends image of loli in current chat.',
   async exec(citel, Void,args,prefix) {
    waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
    var wbutss = [
        {
            buttonId: `${prefix}loli`,
            buttonText: {
                displayText: `Next Loli✨`,
            },
            type: 1,
  },
];
    let buttonsMessage = {
        image:{ url: waifud.data.url }
    };
    await Void.sendMessage(citel.chat, buttonsMessage, {
            quoted: citel,
        })
   }
}
