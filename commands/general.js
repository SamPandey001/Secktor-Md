/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
(function(_0x5d5d26,_0x176928){const _0x3a2f6a=_0x2311,_0x3f51fa=_0x5d5d26();while(!![]){try{const _0xbf89c7=parseInt(_0x3a2f6a(0x16c))/0x1+-parseInt(_0x3a2f6a(0x15f))/0x2+parseInt(_0x3a2f6a(0x178))/0x3+-parseInt(_0x3a2f6a(0x15c))/0x4*(-parseInt(_0x3a2f6a(0x15b))/0x5)+-parseInt(_0x3a2f6a(0x175))/0x6+parseInt(_0x3a2f6a(0x159))/0x7+parseInt(_0x3a2f6a(0x153))/0x8*(-parseInt(_0x3a2f6a(0x166))/0x9);if(_0xbf89c7===_0x176928)break;else _0x3f51fa['push'](_0x3f51fa['shift']());}catch(_0xdb2afe){_0x3f51fa['push'](_0x3f51fa['shift']());}}}(_0x1c5a,0x69df9));const _0x29261f=(function(){let _0xb4d295=!![];return function(_0x297c79,_0x2a2e36){const _0x2a5497=_0xb4d295?function(){const _0x246e61=_0x2311;if(_0x2a2e36){const _0xff3331=_0x2a2e36[_0x246e61(0x168)](_0x297c79,arguments);return _0x2a2e36=null,_0xff3331;}}:function(){};return _0xb4d295=![],_0x2a5497;};}());(function(){_0x29261f(this,function(){const _0x4289a6=_0x2311,_0x5278da=new RegExp(_0x4289a6(0x15a)),_0x166c42=new RegExp(_0x4289a6(0x16d),'i'),_0x5f1aa5=_0x33457(_0x4289a6(0x160));!_0x5278da[_0x4289a6(0x176)](_0x5f1aa5+'chain')||!_0x166c42[_0x4289a6(0x176)](_0x5f1aa5+'input')?_0x5f1aa5('0'):_0x33457();})();}()),cmd({'pattern':'chat','desc':'chat\x20with\x20an\x20AI','category':'general','use':'<Hii,Secktor>','filename':__filename},async(_0x3ada46,_0x144344,_0x1a397a)=>{const _0x18dc7e=_0x2311;let _0x151237=_0x1a397a[_0x18dc7e(0x174)];if(_0x151237<0x8){let {data:_0x10f764}=await axios[_0x18dc7e(0x16a)]('http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=['+_0x144344[_0x18dc7e(0x15e)][_0x18dc7e(0x171)]('@')[0x0]+_0x18dc7e(0x15d)+_0x1a397a+']'),_0x370c97=_0x10f764[_0x18dc7e(0x163)],_0x3a4e08=_0x370c97[_0x18dc7e(0x171)]('\x20');var _0x2a561b='';const {key:_0x1a64b2}=await _0x3ada46[_0x18dc7e(0x16b)](_0x144344[_0x18dc7e(0x164)],{'text':_0x3a4e08[0x0]});for(let _0x2b6712=0x0;_0x2b6712<_0x3a4e08[_0x18dc7e(0x174)];_0x2b6712++){await sleep(0x64),_0x2a561b+=_0x3a4e08[_0x2b6712],console[_0x18dc7e(0x165)](_0x2a561b),await _0x3ada46['sendMessage'](_0x144344[_0x18dc7e(0x164)],{'text':_0x2a561b,'edit':_0x1a64b2});}}if(!_0x1a397a)return _0x144344[_0x18dc7e(0x155)]('Hey\x20there!\x20'+_0x144344[_0x18dc7e(0x17a)]+_0x18dc7e(0x156));const {Configuration:_0x259ff3,OpenAIApi:_0x23442e}=require(_0x18dc7e(0x17b)),_0x4632ae=new _0x259ff3({'apiKey':Config[_0x18dc7e(0x157)]||_0x18dc7e(0x167)}),_0x6cafec=new _0x23442e(_0x4632ae),_0x806607=await _0x6cafec[_0x18dc7e(0x16e)]({'model':_0x18dc7e(0x16f),'prompt':_0x1a397a,'temperature':0.5,'max_tokens':0x50,'top_p':0x1,'frequency_penalty':0.5,'presence_penalty':0x0,'stop':['\x22\x22\x22']});let _0x38b934=_0x806607[_0x18dc7e(0x177)][_0x18dc7e(0x158)][0x0][_0x18dc7e(0x162)],_0x2bcf20=_0x38b934['split']('\x20');var _0x2a561b='';const {key:_0x41de02}=await _0x3ada46['sendMessage'](_0x144344[_0x18dc7e(0x164)],{'text':_0x2bcf20[0x0]});for(let _0x3bd49d=0x0;_0x3bd49d<_0x2bcf20[_0x18dc7e(0x174)];_0x3bd49d++){await sleep(0x64),_0x2a561b+=_0x2bcf20[_0x3bd49d],console['log'](_0x2a561b),await _0x3ada46[_0x18dc7e(0x16b)](_0x144344[_0x18dc7e(0x164)],{'text':_0x2a561b,'edit':_0x41de02});}});function _0x1c5a(){const _0x193ff6=['apply','gger','get','sendMessage','382138UyTHFS','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','createCompletion','text-davinci-002','constructor','split','stateObject','while\x20(true)\x20{}','length','1330926BJiwYx','test','data','458619FEkxBr','debu','pushName','openai','424cwzVmQ','string','reply','.\x20How\x20are\x20you\x20doing\x20these\x20days?','OPENAI_API_KEY','choices','1733606SQgKEE','function\x20*\x5c(\x20*\x5c)','169310vkSZOw','76yuhqYD',']&msg=[','sender','1225470OftxhP','init','call','text','cnt','chat','log','26802ZhmXCa','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'];_0x1c5a=function(){return _0x193ff6;};return _0x1c5a();}function _0x2311(_0x2c59f3,_0x5b5027){const _0x196b73=_0x1c5a();return _0x2311=function(_0x33457,_0x29261f){_0x33457=_0x33457-0x153;let _0x1c5a64=_0x196b73[_0x33457];return _0x1c5a64;},_0x2311(_0x2c59f3,_0x5b5027);}function _0x33457(_0x124135){function _0x5bfd13(_0x334615){const _0x5da1fe=_0x2311;if(typeof _0x334615===_0x5da1fe(0x154))return function(_0x2219f4){}[_0x5da1fe(0x170)](_0x5da1fe(0x173))['apply']('counter');else(''+_0x334615/_0x334615)[_0x5da1fe(0x174)]!==0x1||_0x334615%0x14===0x0?function(){return!![];}[_0x5da1fe(0x170)](_0x5da1fe(0x179)+'gger')[_0x5da1fe(0x161)]('action'):function(){return![];}[_0x5da1fe(0x170)](_0x5da1fe(0x179)+_0x5da1fe(0x169))[_0x5da1fe(0x168)](_0x5da1fe(0x172));_0x5bfd13(++_0x334615);}try{if(_0x124135)return _0x5bfd13;else _0x5bfd13(0x0);}catch(_0x12a31b){}}
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `Hey ${citel.pushName}\n
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Repo:* citel-x.herokuapp.com/repo
*Group:* citel-x.herokuapp.com/support
*Deploy Your Own:*-
citel-x.herokuapp.com`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Secktor-Repo",
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
*🌟Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 0.0.7
*👤Owner:*  ${Config.ownername}
*Powered by ${tlang().title}*
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
