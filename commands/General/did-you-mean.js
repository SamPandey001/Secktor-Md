const { tlang,botpic } = require('../../lib/scraper')
const { prefix } = require('../../config')

module.exports = {
   name: '',
   category: 'general',
   desc: 'Did you mean??',
   async exec(citel, Void,args,icmd) {
     if (icmd) {
				let buttonMessaged = {
					image: { url: await botpic() },
					caption: `Did you mean ${prefix}help?`,
					footer: ` ` + tlang().footer,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: tlang().dotbody,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					},
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
			}
    
   }
}
