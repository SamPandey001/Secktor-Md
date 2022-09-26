const { tlang } = require('../../lib/scraper')

module.exports = {
    name: 'support',
    category: 'weeb',
    desc: 'Sends SECKTOR userbot group link.',
    async exec(citel, Void,args) {
        citel.reply(`*Check your Pm ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
          image: fs.readFileSync("../../lib/assets/SocialLogo 1.png"),
          caption: `*Group Name: Secktor-Support*\n*Group Link:* https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC`,
        });
 
    }
 }