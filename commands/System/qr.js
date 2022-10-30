const { tlang,botpic,getBuffer} = require('../../lib')

module.exports = {
   name: 'qr',
   category: 'system',
   desc: 'Sends CitelsVoid Qr code to scan and get your session id.',
   async exec(citel, Void,args,prefix,icmd) {
	if(args[0]){
	let h =  await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${args.join(" ")}`)
	await Void.sendMessage(citel.chat, { image: h })
			       
			       
	return 
	}
     let generatebutton = [{
					buttonId: `${prefix}qr`,					
					buttonText: {
				    displayText: 'Generate New'},
					type: 1
				}
				]
				let buttonMessaged = {
					image: { url: 'https://secktorbot.herokuapp.com/qr' },
					caption: `*_Scan Qr within 8 seconds_*\nYou'll get session id + json file respectively`,
					footer: ` Session`,
					headerType: 4,
				        buttons: generatebutton,
					contextInfo: {
						externalAdReply: {
							title: 'Secktor Session',
							body: 'Get your Session ID',
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
