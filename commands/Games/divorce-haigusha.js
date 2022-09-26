const { divorce} = require('../../lib/scraper')
const { prefix } = require('../../config') 

module.exports = {
    name: 'divorce',
    category: 'game',
    desc: 'To make divorce with previously married haigusha.',
    async exec(citel, Void,args) {
      
        try{
             await divorce(citel.sender)
            citel.reply(`*You divorced to ${idd.haig}😉*`)
         } catch (e) {
            console.log(e)
     citel.reply(`Hey ${citel.pushName} you are not married to any haigusha`)
     
         }
    }
 }