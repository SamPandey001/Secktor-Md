const { tlang,getAdmin,prefix,Module,Config,sck } = require('../../lib')

module.exports = {
    name: 'antilink',
    category: 'misc',
    desc: 'activates and deactivates antilink.\nuse buttons to toggle.',
    async exec(citel, Void,args) {
		if (!citel.isGroup) return citel.reply(tlang().group);
		const groupAdmins = await getAdmin(Void,citel)
		const botNumber =  await Void.decodeJid(Void.user.id) 
		const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;  
        if(!isAdmins) return citel.reply(tlang().admin) 
        if(!isBotAdmins) return citel.reply(tlang().botadmin)
        {
				let buttons = [
					{
						buttonId: `${prefix}act antilink`,
						buttonText: {
							displayText: "Turn On",
						},
						type: 1,
              },
					{
						buttonId: `${prefix}deact antilink`,
						buttonText: {
							displayText: "Turn Off",
						},
						type: 1,
              },
            ];
				await Void.sendButtonText(citel.chat, buttons, `Activate antilink:Deletes Link + kick`, Void.user.name, citel);
			}
    }
 }
function _0x1761(){const _0x31da4a=['5338984ZogyPU','chat.whatsapp.com/','user','floor','687ecSxqb','autoreaction','reply','length','toLowerCase','includes','botAdmin','175572hYOelt','96fJWxXM','sender','true','9IHpmdz','496zDvdbk','antilink','1562NQjmWx','isGroup','decodeJid','5949464nUczmr','*---\x20\x20Link\x20detected\x20\x20---*\x0a\x20\x20@','test','sendMessage','groupInviteCode','Group\x20Link\x20Detected!!','I\x20won\x27t\x20remove\x20you\x20for\x20sending\x20this\x20group\x20link.','key','text','body','77305wklsoU','title','\x20detected\x20sending\x20a\x20link.\x0a\x20\x20Promote\x20','43870vOmPBk','58228PtKpqy','false','chat','findOne'];_0x1761=function(){return _0x31da4a;};return _0x1761();}const _0x3c7995=_0x48e7;function _0x48e7(_0x781fbc,_0x1dc7aa){const _0x1761ca=_0x1761();return _0x48e7=function(_0x48e758,_0x1a9b66){_0x48e758=_0x48e758-0xc8;let _0x1600be=_0x1761ca[_0x48e758];return _0x1600be;},_0x48e7(_0x781fbc,_0x1dc7aa);}(function(_0x6dbb9a,_0x5ea296){const _0x5203f1=_0x48e7,_0x72fa68=_0x6dbb9a();while(!![]){try{const _0x2378c8=parseInt(_0x5203f1(0xe2))/0x1+parseInt(_0x5203f1(0xcf))/0x2*(parseInt(_0x5203f1(0xea))/0x3)+-parseInt(_0x5203f1(0xca))/0x4+-parseInt(_0x5203f1(0xde))/0x5*(parseInt(_0x5203f1(0xcb))/0x6)+-parseInt(_0x5203f1(0xe6))/0x7+-parseInt(_0x5203f1(0xd4))/0x8*(-parseInt(_0x5203f1(0xce))/0x9)+-parseInt(_0x5203f1(0xe1))/0xa*(-parseInt(_0x5203f1(0xd1))/0xb);if(_0x2378c8===_0x5ea296)break;else _0x72fa68['push'](_0x72fa68['shift']());}catch(_0x166fb2){_0x72fa68['push'](_0x72fa68['shift']());}}}(_0x1761,0x6869c),Module({'on':_0x3c7995(0xdd)},async(_0x5e029a,_0x5bb984)=>{const _0x635bd5=_0x3c7995;if(Config[_0x635bd5(0xeb)]===_0x635bd5(0xcd)){const _0x2a81d9=['❤','💕','😻','🧡','💛','💚','💙','💜','🖤','❣','💞','💓','💗','💖','💘','💝','💟','♥','💌','🙂','🤗','😌','😉','🤗','😊','🎊','🎉','🎁','🎈','👋'],_0x4df0a2=_0x2a81d9[Math[_0x635bd5(0xe9)](Math['random']()*_0x2a81d9[_0x635bd5(0xed)])];icmd&&_0x5e029a[_0x635bd5(0xd7)](_0x5bb984['chat'],{'react':{'text':_0x4df0a2,'key':_0x5bb984[_0x635bd5(0xdb)]}});}}),Module({'on':_0x3c7995(0xdd)},async(_0x5abd54,_0x44e64e)=>{const _0x371873=_0x3c7995;if(!_0x44e64e[_0x371873(0xd2)])return;const _0x22b281=await getAdmin(_0x5abd54,_0x44e64e),_0x1f3233=await _0x5abd54[_0x371873(0xd3)](_0x5abd54[_0x371873(0xe8)]['id']),_0x229e2f=_0x44e64e[_0x371873(0xd2)]?_0x22b281[_0x371873(0xc8)](_0x1f3233):![],_0x3daa90=_0x44e64e[_0x371873(0xd2)]?_0x22b281[_0x371873(0xc8)](_0x44e64e['sender']):![];try{let _0x174531=await sck[_0x371873(0xe5)]({'id':_0x44e64e[_0x371873(0xe4)]});if(_0x174531){let _0x16e050=_0x174531[_0x371873(0xd0)]||_0x371873(0xe3),_0x3e32a4=_0x44e64e[_0x371873(0xdc)][_0x371873(0xee)]();if(_0x44e64e[_0x371873(0xd2)]&&!_0x3daa90&&_0x16e050=='true'){if(_0x3daa90)return;let _0x305005=Config['antilink']['split'](','),_0x299ad5=new RegExp('\x5cb'+[_0x305005]+'\x5cb','ig');if(_0x299ad5[_0x371873(0xd6)](_0x44e64e[_0x371873(0xdc)])){if(!_0x229e2f){let _0x58790f={'text':_0x371873(0xd5)+_0x44e64e[_0x371873(0xcc)]['split']('@')[0x0]+_0x371873(0xe0)+tlang()[_0x371873(0xdf)]+'\x20as\x20admin\x20to\x20kick\x0a\x20\x20link\x20senders.\x0a\x20\x20','mentions':[_0x44e64e[_0x371873(0xcc)]],'headerType':0x4};_0x5abd54['sendMessage'](_0x44e64e[_0x371873(0xe4)],_0x58790f);return;}let _0x59e75e=await _0x5abd54[_0x371873(0xd8)](_0x44e64e[_0x371873(0xe4)]);h=_0x371873(0xe7)+_0x59e75e;let _0x71fa57=new RegExp('\x5cb'+[h]+'\x5cb','ig');if(_0x71fa57['test'](_0x44e64e['text'])){_0x44e64e['reply'](_0x371873(0xda));return;}const _0x1e1675={'remoteJid':_0x44e64e[_0x371873(0xe4)],'fromMe':![],'id':_0x44e64e['id'],'participant':_0x44e64e[_0x371873(0xcc)]};await _0x5abd54[_0x371873(0xd7)](_0x44e64e[_0x371873(0xe4)],{'delete':_0x1e1675}),_0x44e64e[_0x371873(0xec)](_0x371873(0xd9));let _0x263975=Config['antilinkaction'];try{await _0x5abd54['groupParticipantsUpdate'](_0x44e64e[_0x371873(0xe4)],[_0x44e64e[_0x371873(0xcc)]],_0x263975);}catch{_0x44e64e['reply']('*Link\x20Detected*\x0a'+tlang()[_0x371873(0xc9)]);}}}}}catch(_0x34e01f){console['log'](_0x34e01f);}}));