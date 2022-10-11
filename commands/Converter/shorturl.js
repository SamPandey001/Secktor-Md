const axios = require('axios')

module.exports = {
    name: 'tiny',
    category: 'converter',
    desc: 'Makes url tiny.',
    use : '<url>',
    async exec(citel, Void,args) {
        if(!args[0]) return citel.reply('Provide me a link')
        try {
          link = args[0];
          anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
          citel.reply(`*🛡️Your Shortened URL*\n\n${anu.data}`);
        }
        catch (e) {
          console.log(e);
        }
			}
    }
