const { tlang,botpic } = require('../../lib')
const { prefix } = require('../../config')

module.exports = {
   name: 'owner',
   category: 'general',
   desc: 'sends owner number.',
   async exec(citel, Void,args) {
	        const Config = require('../../config')
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:' + Config.ownername + '\n'
            + 'ORG:;\n'
            + 'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n'
            + 'END:VCARD'
     let buttonMessaged = {
          contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
					contextInfo: {
						externalAdReply: {
							title: Config.ownername,
							body: '♥️',
							previewType: "PHOTO",
							thumbnailUrl: ``,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: `https://wa.me/+`+owner[0]+'?text=Hii bro,I am '+citel.pushName,
							sourceUrl: `https://wa.me/+`+owner[0]+'?text=Hii bro,I am '+citel.pushName,
						},
					},
				};
                                  await Void.sendMessage(citel.chat, buttonMessaged, {
					                                              quoted: citel,
				                                                                     });
    
   }
}
