const speed = require('performance-now')

module.exports = {
    name: 'ping',
    category: 'general',
    desc: 'Tells ping speed of bot.',
    async exec(citel, Void) {
  var inital = new Date().getTime();
 await citel.reply('```Ping!!!```');
  var final = new Date().getTime();
     await citel.reply('*Pong*\n *' + (final - inital) + ' ms* ');
   }
}
