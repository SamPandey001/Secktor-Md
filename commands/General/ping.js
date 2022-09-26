
const speed = require('performance-now')

module.exports = {
   name: 'ping',
   alias: ['speed'],
   category: 'general',
   async exec(citel, Void) {
     const timestampi = speed();
     const latensyi = speed() - timestampi
     citel.reply(`📍Pong: ${latensyi.toFixed(4)} ms`)
   }
}
