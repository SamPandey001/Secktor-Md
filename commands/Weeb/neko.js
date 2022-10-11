const axios = require('axios')

module.exports = {
   name: 'neko',
   category: 'weeb',
   desc: 'Sends a Neko Image in chat',
   async exec(citel, Void,args) {
    nekodds = await axios.get("https://waifu.pics/api/sfw/neko");
    var wbuttsssrd = [
        {
            buttonId: `${prefix}neko`,
            buttonText: {
                displayText: `Neko`,
            },
            type: 1,
  },

        {
            buttonId: `${prefix}waifu`,
            buttonText: {
                displayText: `Waifu`,
            },
            type: 1,
  },
];
    let button4Messagesp = {
        image: {
            url: nekodds.data.url,
        },
        caption: "*Here we go😊!!!!*",
        buttons: wbuttsssrd,
        headerType: 1,
    };
    await Void.sendMessage(citel.chat, button4Messagesp, {
            quoted: citel,
        })
   }
}
