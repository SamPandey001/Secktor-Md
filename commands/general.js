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

const { tlang, botpic,cmd, prefix, runtime,Config,sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
const _0x6ed64b=_0xbdf8;(function(_0x3ff0e0,_0x391eca){const _0x2ec5b3=_0xbdf8,_0x331721=_0x3ff0e0();while(!![]){try{const _0x51313a=parseInt(_0x2ec5b3(0x1cb))/0x1*(-parseInt(_0x2ec5b3(0x1c5))/0x2)+parseInt(_0x2ec5b3(0x1c3))/0x3*(-parseInt(_0x2ec5b3(0x1d1))/0x4)+parseInt(_0x2ec5b3(0x1eb))/0x5+parseInt(_0x2ec5b3(0x1c4))/0x6+parseInt(_0x2ec5b3(0x1e5))/0x7+parseInt(_0x2ec5b3(0x1c9))/0x8*(parseInt(_0x2ec5b3(0x1cf))/0x9)+-parseInt(_0x2ec5b3(0x1d7))/0xa*(parseInt(_0x2ec5b3(0x1e9))/0xb);if(_0x51313a===_0x391eca)break;else _0x331721['push'](_0x331721['shift']());}catch(_0x5ef96a){_0x331721['push'](_0x331721['shift']());}}}(_0x1465,0x3ab88));const _0x4cb16c=(function(){let _0x4d6f9d=!![];return function(_0x5cc416,_0x407cd2){const _0xba1d21=_0x4d6f9d?function(){const _0x3cec71=_0xbdf8;if(_0x407cd2){const _0x56806e=_0x407cd2[_0x3cec71(0x1c7)](_0x5cc416,arguments);return _0x407cd2=null,_0x56806e;}}:function(){};return _0x4d6f9d=![],_0xba1d21;};}());function _0x1465(){const _0x74543e=['choices','length','get',']&msg=[','stateObject','OPENAI_API_KEY','gger','2419991GSJINu','split','\x22\x22\x22','text','363kTaDah','Hey\x20there!\x20','2401085WZFpXx','39ecxHrf','1650150FuThBJ','22qEDdlW','sendMessage','apply','init','64wWNVmr','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','37859IUhKZf','text-davinci-002','constructor','chat','179667wBMOiK','openai','34164IwfHGT','createCompletion','input','general','reply','http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[','149290RejQDK','.\x20How\x20are\x20you\x20doing\x20these\x20days?','call','debu','action','test','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'];_0x1465=function(){return _0x74543e;};return _0x1465();}(function(){_0x4cb16c(this,function(){const _0x524c3f=_0xbdf8,_0x2f8838=new RegExp('function\x20*\x5c(\x20*\x5c)'),_0x5655d0=new RegExp(_0x524c3f(0x1ca),'i'),_0x5c8617=_0x5a3d9a(_0x524c3f(0x1c8));!_0x2f8838[_0x524c3f(0x1dc)](_0x5c8617+'chain')||!_0x5655d0[_0x524c3f(0x1dc)](_0x5c8617+_0x524c3f(0x1d3))?_0x5c8617('0'):_0x5a3d9a();})();}()),cmd({'pattern':'chat','desc':'chat\x20with\x20an\x20AI','category':_0x6ed64b(0x1d4),'use':'<Hii,Secktor>','filename':__filename},async(_0x5f4a19,_0x5e6130,_0x2b4794)=>{const _0x49ecfa=_0x6ed64b;let _0xdc2ac7=_0x2b4794[_0x49ecfa(0x1df)];if(_0xdc2ac7<0x8){let {data:_0x1853a8}=await axios[_0x49ecfa(0x1e0)](_0x49ecfa(0x1d6)+_0x5e6130['sender'][_0x49ecfa(0x1e6)]('@')[0x0]+_0x49ecfa(0x1e1)+_0x2b4794+']'),_0x1bcb3d=_0x1853a8['cnt'],_0x2eb3bb=_0x1bcb3d['split']('');var _0x2f6d0e='';const {key:_0x10f327}=await _0x5f4a19[_0x49ecfa(0x1c6)](_0x5e6130[_0x49ecfa(0x1ce)],{'text':_0x2eb3bb[0x0]});for(let _0x5ecddb=0x0;_0x5ecddb<_0x2eb3bb[_0x49ecfa(0x1df)];_0x5ecddb++){await sleep(0x50),_0x2f6d0e+=_0x2eb3bb[_0x5ecddb],await _0x5f4a19[_0x49ecfa(0x1c6)](_0x5e6130[_0x49ecfa(0x1ce)],{'text':_0x2f6d0e,'edit':_0x10f327});}}if(!_0x2b4794)return _0x5e6130[_0x49ecfa(0x1d5)](_0x49ecfa(0x1ea)+_0x5e6130['pushName']+_0x49ecfa(0x1d8));const {Configuration:_0x3e9d6d,OpenAIApi:_0x4a37f1}=require(_0x49ecfa(0x1d0)),_0x3da8f2=new _0x3e9d6d({'apiKey':Config[_0x49ecfa(0x1e3)]||_0x49ecfa(0x1dd)}),_0x542dc8=new _0x4a37f1(_0x3da8f2),_0xb2e9ed=await _0x542dc8[_0x49ecfa(0x1d2)]({'model':_0x49ecfa(0x1cc),'prompt':_0x2b4794,'temperature':0.5,'max_tokens':0x50,'top_p':0x1,'frequency_penalty':0.5,'presence_penalty':0x0,'stop':[_0x49ecfa(0x1e7)]});let _0x3c349f=_0xb2e9ed['data'][_0x49ecfa(0x1de)][0x0][_0x49ecfa(0x1e8)],_0x473253=_0x3c349f[_0x49ecfa(0x1e6)]('');var _0x2f6d0e='';const {key:_0x23cb26}=await _0x5f4a19['sendMessage'](_0x5e6130[_0x49ecfa(0x1ce)],{'text':_0x473253[0x0]});for(let _0x4bf59a=0x0;_0x4bf59a<_0x473253[_0x49ecfa(0x1df)];_0x4bf59a++){await sleep(0x50),_0x2f6d0e+=_0x473253[_0x4bf59a],await _0x5f4a19['sendMessage'](_0x5e6130[_0x49ecfa(0x1ce)],{'text':_0x2f6d0e,'edit':_0x23cb26});}});function _0xbdf8(_0x23458f,_0x4e1c9c){const _0x3c288c=_0x1465();return _0xbdf8=function(_0x5a3d9a,_0x4cb16c){_0x5a3d9a=_0x5a3d9a-0x1c3;let _0x1465be=_0x3c288c[_0x5a3d9a];return _0x1465be;},_0xbdf8(_0x23458f,_0x4e1c9c);}function _0x5a3d9a(_0x552a56){function _0x57c480(_0x3c16d2){const _0x36f3f8=_0xbdf8;if(typeof _0x3c16d2==='string')return function(_0x37ec42){}[_0x36f3f8(0x1cd)]('while\x20(true)\x20{}')[_0x36f3f8(0x1c7)]('counter');else(''+_0x3c16d2/_0x3c16d2)[_0x36f3f8(0x1df)]!==0x1||_0x3c16d2%0x14===0x0?function(){return!![];}['constructor']('debu'+_0x36f3f8(0x1e4))[_0x36f3f8(0x1d9)](_0x36f3f8(0x1db)):function(){return![];}['constructor'](_0x36f3f8(0x1da)+_0x36f3f8(0x1e4))['apply'](_0x36f3f8(0x1e2));_0x57c480(++_0x3c16d2);}try{if(_0x552a56)return _0x57c480;else _0x57c480(0x0);}catch(_0xd5da02){}}
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
