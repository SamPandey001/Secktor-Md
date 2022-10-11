const { tlang,botpic,runtime } = require('../../lib')
const Config = require('../../config')
const prefix = Config.prefix
module.exports = {
    name: 'alive',
    category: 'general',
    desc: 'Tells, is bot alive??.',
    async exec(citel, Void,args,isAdmins) {
        const aliveadm = isAdmins ? "True" : "False";
			let alivemessage = process.env.ALIVE_MESSAGE || `*A bot developed by SamPandey001.*`
			const alivtxt = `
*Hello, my ${citel.pushName},*
*This is  ${tlang().title}.*
${alivemessage}
*❖Version:-* 0.0.3
*❖Uptime:-* ${runtime(process.uptime())}
*❖Owner:-* ${Config.ownername}
*❖Branch:-* ${Config.BRANCH}
*❖Edition:-* PUBLIC
*Type ${prefix}menu for my command list.*
    
*Powered by ${Config.ownername}*
    `;
			let aliveMessage = {
				image: {
					url: await botpic(),
				},
				caption: alivtxt,
				footer: tlang().footer,
				headerType: 4,
			};
			Void.sendMessage(citel.chat, aliveMessage, {
				quoted: citel,
			});
 
    }
 }
