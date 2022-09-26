const axios = require('axios')

module.exports = {
   name: 'foxgirl',
   category: 'weeb',
   desc: 'Sends image of Fox Girl in current chat.',
   async exec(citel, Void,args) {
    waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
    let buttonssMessagesss = {
        image: {
            url: waifuddfg.data.url
        },
    };
    await Void.sendMessage(citel.chat, buttonssMessagesss, {
            quoted: citel,
        })
   }
}
