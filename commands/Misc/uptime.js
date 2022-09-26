const { tlang } = require('../../lib/scraper')
let { runtime } = require('../../lib/myfuncn');

module.exports = {
   name: 'uptime',
   category: 'misc',
   desc: 'Tells runtime/uptime of bot.',
   async exec(citel, Void) {
      const upt = runtime(process.uptime())
      citel.reply(`Uptime of ${tlang().title}: ${upt}`)
   }
}
