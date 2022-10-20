const { tlang,runtime  } = require('../../lib')

module.exports = {
   name: 'uptime',
   category: 'misc',
   desc: 'Tells runtime/uptime of bot.',
   async exec(citel, Void) {
      const upt = runtime(process.uptime())
      citel.reply(`Uptime of ${tlang().title}: ${upt}`)
   }
}
