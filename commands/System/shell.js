const { addnote } = require('../../lib/scraper')
const { tlang } = require('../../lib/scraper')

module.exports = {
   name: 'shell',
   category: 'owner',
   desc: 'Runs command in Heroku(server) shell.',
   async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
       const { exec } = require("child_process")
  exec(args.join(" "), (err, stdout) => {
					if (err) return citel.reply(`----${tlang().title}----\n\n`+err)
					if (stdout) {
						citel.reply(`----${tlang().title}----\n\n`+stdout)
					}
				})
   }
}
