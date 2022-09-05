/*
================================================================================

░██████╗███████╗░█████╗░██╗░░██╗████████╗░█████╗░██████╗░
██╔════╝██╔════╝██╔══██╗██║░██╔╝╚══██╔══╝██╔══██╗██╔══██╗
╚█████╗░█████╗░░██║░░╚═╝█████═╝░░░░██║░░░██║░░██║██████╔╝
░╚═══██╗██╔══╝░░██║░░██╗██╔═██╗░░░░██║░░░██║░░██║██╔══██╗
██████╔╝███████╗╚█████╔╝██║░╚██╗░░░██║░░░╚█████╔╝██║░░██║
╚═════╝░╚══════╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝
      by CitelVoid

     Code is freely accessible to the public under the provisions of the GNU Public License V3 as published by.
     You are free to alter and/or redistribute this programme since it is free software.
     This programme is provided WITHOUT ANY Guarantee,
     not even the implicit warranty of merchantability or fitness for a particular purpose.
     It is supplied in the hope that it may be useful. For further information,
     Refer to the GNU Public Licence V3.
     Copyright (C) 2022 Authors.
================================================================================
*/

require("./config.js")
require('./Void.js')
const { sck1, RandomXP, sck,plugindb} = require("./lib/core");
const { default: VoidConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const Config = require('./config');
const prefix = Config.prefix;
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const express = require("express");
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const path2 = require("path").join;
const {log, pint, bgPint} = require('./lib/scraper')
const axios = require('axios')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp,  formatDate, getTime, isUrl, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention,GIFBufferToVideoBuffer,sleep, getRandom, await,  getSizeMedia, generateMessageTag } = require('./lib/myfuncn')
const clui = require('clui')
const { Spinner } = clui
const prompt = require('prompt-sync')({sigint:true});
const figlet = require('figlet')
const mongoose = require('mongoose');
const PORT = port
var emitter = require('events');
emitter.setMaxListeners()
const app = express();
//This obfuscated part is for making session.sam.json
const _0x51ef99=_0x1b2d;(function(_0x3fd2ee,_0x3b1c61){const _0x196ce2=_0x1b2d,_0x297f93=_0x3fd2ee();while(!![]){try{const _0x50ba53=-parseInt(_0x196ce2(0x140))/0x1+-parseInt(_0x196ce2(0x134))/0x2+parseInt(_0x196ce2(0x135))/0x3*(-parseInt(_0x196ce2(0x13e))/0x4)+-parseInt(_0x196ce2(0x137))/0x5*(-parseInt(_0x196ce2(0x13a))/0x6)+-parseInt(_0x196ce2(0x13d))/0x7*(parseInt(_0x196ce2(0x136))/0x8)+parseInt(_0x196ce2(0x132))/0x9*(-parseInt(_0x196ce2(0x13b))/0xa)+parseInt(_0x196ce2(0x139))/0xb;if(_0x50ba53===_0x3b1c61)break;else _0x297f93['push'](_0x297f93['shift']());}catch(_0x543a80){_0x297f93['push'](_0x297f93['shift']());}}}(_0x24ec,0x57162));const {MakeSession}=require(_0x51ef99(0x133));function _0x1b2d(_0x34c7d5,_0x5d36f6){const _0x24ec0d=_0x24ec();return _0x1b2d=function(_0x1b2dac,_0x44336d){_0x1b2dac=_0x1b2dac-0x130;let _0x48ead9=_0x24ec0d[_0x1b2dac];return _0x48ead9;},_0x1b2d(_0x34c7d5,_0x5d36f6);}let fetchit=Config[_0x51ef99(0x131)],remsession=fetchit[_0x51ef99(0x13c)](0xa);global[_0x51ef99(0x130)]=_0x51ef99(0x138);function _0x24ec(){const _0x54f2c3=['3312PzZMvD','./lib/colab','1231586ZIJecJ','12CHkgSY','14864hyJdYi','5KiBAQq','./session.sam.json','23869637kbsGxB','972702hZhoeZ','19110CEuYQS','slice','539TjYePI','393556qSFRQp','existsSync','119715zgjeiG','authFile','sessionName'];_0x24ec=function(){return _0x54f2c3;};return _0x24ec();}!fs[_0x51ef99(0x13f)](_0x51ef99(0x138))&&MakeSession(''+remsession,authFile);sleep(0xfa0);
setTimeout(() => {
const { color, bgcolor } = require("./lib/scraper")
const moment = require('moment-timezone')
let NODE_TLS_REJECT_UNAUTHORIZED=0
const { state, saveState } = useSingleFileAuthState(`./session.sam.json`)
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongodb);
}
//========================================================================================================================================
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const getVersionWaweb = () => {
    let version
    try {
        let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
        version = [a.currentVersion.replace(/[.]/g, ', ')]
    } catch {
        version = [2, 2204, 13]
    }
    return version
}
 if (!process.env.MONGODB_URI) {
            console.log('No MongoDB URI provided')
        }
let QR_GENERATE = "invalid"; //If there is no Qr
async function __START() {
    const Void = VoidConnect({
        logger: pino({ level: 'fatal' }),
        printQRInTerminal: true,
        browser: ['Secktor','fatal','1.0.0'],
        auth: state,
          version: getVersionWaweb() || [2, 2204, 13]
    })
store.bind(Void.ev)
Void.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Void.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
citel = smsg(Void, mek, store)
require("./Void")(Void, citel, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
//=============================[Removing Some Useless Texts from Console.]===================================================
const ohmymy_info = console.info
console.info = function() {
    if(!require("util").format(...arguments).includes("Prekey" || "npm WARN" || "connection: " || "Closing" || "Closing session: SessionEntry" || "Prekey" || "stale")){
        return ohmymy_info(...arguments)
    }
}
const ohmymy_infof = console.info
console.info = function() {
    if(!require("util").format(...arguments).includes("Closing session: SessionEntry")){
        return ohmymy_infof(...arguments)
    }
}
const ohmymy_infotf = console.info
console.info = function() {
    if(!require("util").format(...arguments).includes("Closing stale open")){
        return ohmymy_infotf(...arguments)
    }
}
//=============================[Implementing Self Ping Feature.]===================================================
setInterval(() => {
		let appname = process.env.HEROKU_APP_NAME
		let baset = `https://${appname}.herokuapp.com/`
		let jack =  axios.get(baset);
	//console.log(jack);
		}, 60 * 15 *1000)

//=============================[For Announcement from Team CitelVoid.]===================================================
// Dont Edit gist url if you want to be updated with Secktor and All upcoming Projects
// You'll get announcement every Sunday.

	/*
        let cron = require('node-cron')
    //  cron.schedule(' () => {
  //sync () => {
///onst axios = require('axios')
//et updateku = await axios.get('https://gist.githubusercontent.com/SamPandey001/d7b8ae1a250544646832905dfc2f3816/raw/secktor.json');
//	console.log(updateku)
		let banned = updateku.data.announcement
        let announced = (await sck1.findOne({
            id: global.owner,
            announcement:banned.ann_number,
        })) || (await new sck1({
                id: global.owner,
                announcement:banned.ann_number,
            })
            .save());
if(announced.announcement == banned.ann_number) return

	//	await Void.sendMessage(Void.user.id, {text: `•---New Announcement---•\n\n${banned}`
        //  })
          Void.sendMessage(
              Void.user.id,
              {
                image: {
                  url: banned.img,
                },
                caption: `•---New Announcement---•\n\n${banned.sub}`,
                footer: "Announcement",
                templateButtons: [
                  {
                    urlButton: {
                      displayText: "⭐Repo",
                      url: "https://github.com/CitelVoid/Secktor-Md",
                    },
                  },
                ],
              }
            )

  })();
  }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	*/
    // Group Update
    Void.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await Void.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.XeonBotncarridho.my.id/rg1oT'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `${Config.botname}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, `${Config.botname}`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, `${Config.botname}`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, `${Config.botname}`, wm_fatih, [])
       } else {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, `${Config.botname}`, wm_fatih, [])
     }
    })

//=============================[Seprating Action Messages for Both Group.]===================================================
    let secsupport = "120363025246125888@g.us";
    let offtopic = "120363043857093839@g.us";
Void.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await Void.groupMetadata(anu.id)
            let participants = anu.participants
            let behys = anu.participants.length
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await Void.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                // Get Profile Picture Group
                try {
                    ppgroup = await Void.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                let GroupS = await sck.findOne({ id: anu.id })
                if (GroupS) {
                    let events = GroupS.events || "false"
if (anu.action == 'add' && events == "true" ) {

	 if (anu.id === secsupport) {

                hesa = `${participants}`
		  mestes = (teks) => {
					return teks.replace(/['@s whatsapp.net']/g, " ");
					}
			resa = `${mestes(hesa)}`
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	      const timenow = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	const xmembers = metadata.participants.length
                usersam = num
                mbc = `
*Hi,* @${usersam.split("@")[0]}
*Welcome in*  ${metadata.subject}
*Member count* : ${xmembers}th
*Please don't use bots here.*
*_Sector Bot will not work here by default._*
*Feel Free to ask Queries at anytime.*
*Don't spam in Support Group*\n\n
*⭐Repo:* gg.gg/Secktor-repo
*⭐Docs:* gg.gg/Secktor-Docs
*⭐Tutorial* gg.gg/Secktor-Tutorial
*⭐Off-Topic(Use Bots):* gg.gg/Secktor-Offtopic
   `
let buttonMessage = {
image: await getBuffer(ppuser),
caption: mbc,
footer: `${Config.botname}`,
mentions:[usersam],
headerType: 4,
}
Void.sendMessage(anu.id, buttonMessage)
	 }
	/*
  //=============================[Adding Buttons.]===================================================
	 await Void.sendMessage(anu.id, {
               text: ` `,
                footer: `${Config.botname}`,
                templateButtons: [
                    { urlButton: { displayText: "⭐Repo", url: "https://github.com/CitelVoid/Secktor-Md" } },
		{ urlButton: { displayText: "⭐Docs", url: "https://docs.secktor.live" } },
		{ urlButton: { displayText: "Off-Topic", url: "https://chat.whatsapp.com/KWWFhiP1yNn2Sc9TDZpHXJ" } }

                ]
            })
	    */

    else if (anu.id === offtopic && events == "true" ) {
        hesa = `${participants}`
  mestes = (teks) => {
            return teks.replace(/['@s whatsapp.net']/g, " ");
            }
        //	if(!num.split('@')[0].startsWith(22)) {
        /*	Void.sendMessage(anu.id, {
            text: `Only +91 Numbers are allowed in Moderation Group`
        })
                setTimeout(async function () {
                    await Void.groupParticipantsUpdate(anu.id, num, 'remove')
                    return
                }, 1000)
            }
            */
    resa = `${mestes(hesa)}`
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
  const timenow = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
        usersam = num
        mbc = `
*Hi,* @${usersam.split("@")[0]}
*Welcome in*  ${metadata.subject}
*Member count* : ${xmembers}th
*Welcome in Secktor Offtopic.*
*Feel Free to ask Queries at anytime.*
*Secktor bot will be working here.*

*_Prefix_* = " ${prefix} "
*_Read Description for more info._*
`
let buttonMessage = {
image: await getBuffer(ppuser),
caption: mbc,
footer: `${Config.botname}`,
mentions:[usersam],
headerType: 4,
}
await Void.sendMessage(anu.id, buttonMessage)
} else if (events == "true") {
    hesa = `${participants}`
    mestes = (teks) => {
              return teks.replace(/['@s whatsapp.net']/g, " ");
              }
          //	if(!num.split('@')[0].startsWith(22)) {
          /*	Void.sendMessage(anu.id, {
              text: `Only +91 Numbers are allowed in Moderation Group`
          })
                  setTimeout(async function () {
                      await Void.groupParticipantsUpdate(anu.id, num, 'remove')
                      return
                  }, 1000)
              }
              */
      resa = `${mestes(hesa)}`
          const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
    const timenow = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
  const xmembers = metadata.participants.length
  let welcome_message = process.env.WELCOME_MESSAGE || `  *⭐Tutorial* gg.gg/Secktor-Tutorial\n*⭐Bot Group:* gg.gg/Secktor-Offtopic`
          usersam = num
          mbc = `
  *Hi,* @${usersam.split("@")[0]}
  *Welcome in*  ${metadata.subject}
  *Member count* : ${xmembers}th\n
  ${welcome_message}

  *Powered by Secktor-Bot*

  `
  let buttonMessage = {
  image: await getBuffer(ppuser),
  caption: mbc,
  footer: `${Config.botname}`,
  mentions:[usersam],
  headerType: 4,
  }
  await Void.sendMessage(anu.id, buttonMessage)
}
//=============================[change action to "remove" if you want to set it.]===================================================
  } else if (anu.action == 'remove') {

      hesa = `${participants}`
		  mestes = (teks) => {
					return teks.replace(/['@s whatsapp.net']/g, " ");
					}
			resa = `${mestes(hesa)}`
			                const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	      const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	const xeonmembers = metadata.participants.length
                    usersam = num
                mbc = `
   @${usersam.split("@")[0]} left
   ${metadata.subject}
   *Member Count:* : ${xeonmembers}th
   `
let buttonMessage = {
image: await getBuffer(ppuser),
caption: mbc,
footer: `${Config.botname}`,
mentions:[usersam],
headerType: 4,
}
Void.sendMessage(anu.id, buttonMessage)
               Void.ev.on('message-delete', async (m) => {
        require('./lib/antidelete')(Void, m)
    })
//=============================[Implementing Promote and Demote Messages.]===================================================
}else if (anu.action == 'promote') {
			usersam = num
			try {
				ppUrl = await Void.profilePictureUrl(citel.sender, 'image')
				} catch {
					ppurl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
				teks = `[ PROMOTE - DETECTED ]\n\nName : @${usersam.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${metadata.subject}`
				let buttons = [
{buttonId: `okedoh`, buttonText: {displayText: 'Enjoy💙'}, type: 1}
]
let buttonMessage = {
text: teks,
footer: `Secktor`,
mentions:[usersam],
buttons: buttons,
headerType: 4,
}
Void.sendMessage(anu.id, buttonMessage)

			} else if (anu.action == 'demote') {
			usersam = num
			try {
				ppUrl = await Void.profilePictureUrl(citel.sender, 'image')
				} catch {
					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
				teks = `[ DEMOTE - DETECTED ]\n\nName : @${usersam.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`
				let buttons = [
{buttonId: `okedoh`, buttonText: {displayText: '🎀'}, type: 1}
]
let buttonMessage = {
image: img,
caption: teks,
footer: `Secktor`,
mentions:[usersam],
buttons: buttons,
headerType: 4,
}
Void.sendMessage(anu.id, buttonMessage)
}

			}
        }} catch (err) {
            console.log(err)
        }
})

//========================================================================================================================================
    Void.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

//========================================================================================================================================
	 Void.ev.on('contacts.upsert', (contacts) => {
            const contactsUpsert = (newContacts) => {
                for (const contact of newContacts) {
                    if(store.contacts[contact.id]){
                        Object.assign(store.contacts[contact.id], contact);
                    }else{
                        store.contacts[contact.id] = contact;
                    }
                }
                return;
            };
            contactsUpsert(contacts);
        })
//========================================================================================================================================
const _0x159c0a=_0x4a92;function _0x4a92(_0xad845d,_0x4c1c98){const _0x3983da=_0x3983();return _0x4a92=function(_0x4a926c,_0x3fc8d3){_0x4a926c=_0x4a926c-0x104;let _0x8e30fe=_0x3983da[_0x4a926c];return _0x8e30fe;},_0x4a92(_0xad845d,_0x4c1c98);}(function(_0x57b4fe,_0x2de263){const _0x5e83b4=_0x4a92,_0x5431f1=_0x57b4fe();while(!![]){try{const _0x5f5ad9=parseInt(_0x5e83b4(0x113))/0x1*(-parseInt(_0x5e83b4(0x110))/0x2)+-parseInt(_0x5e83b4(0x114))/0x3+-parseInt(_0x5e83b4(0x112))/0x4*(-parseInt(_0x5e83b4(0x109))/0x5)+parseInt(_0x5e83b4(0x10c))/0x6+-parseInt(_0x5e83b4(0x10a))/0x7*(-parseInt(_0x5e83b4(0x10e))/0x8)+-parseInt(_0x5e83b4(0x111))/0x9+parseInt(_0x5e83b4(0x10d))/0xa*(parseInt(_0x5e83b4(0x108))/0xb);if(_0x5f5ad9===_0x2de263)break;else _0x5431f1['push'](_0x5431f1['shift']());}catch(_0x1bafcb){_0x5431f1['push'](_0x5431f1['shift']());}}}(_0x3983,0xafffc),Void['ev']['on'](_0x159c0a(0x106),async _0x3b0b61=>{const _0x329e24=_0x159c0a;for(let _0x1deb6f of _0x3b0b61){let _0x5062c8=Void[_0x329e24(0x115)](_0x1deb6f['id']);sck1['findOne']({'id':_0x5062c8})[_0x329e24(0x10b)](_0x47b219=>{const _0x493e90=_0x329e24;!sck1?new sck1({'id':_0x5062c8,'name':_0x1deb6f[_0x493e90(0x107)]})[_0x493e90(0x10f)]():sck1[_0x493e90(0x104)]({'id':_0x5062c8},{'name':_0x1deb6f['notify']});});if(store&&store[_0x329e24(0x105)])store[_0x329e24(0x105)][_0x5062c8]={'id':_0x5062c8,'name':_0x1deb6f[_0x329e24(0x107)]};}}));function _0x3983(){const _0x2fa9aa=['contacts.update','notify','561XOifhY','85jKOeVs','7WvqmLE','then','3597984SNbQnS','229970ffAMSS','6084736qXsACj','save','8bBwtXa','9352701uqGutL','25356NQfKgm','112688Frxykl','1290099ZCyTlK','decodeJid','updateOne','contacts'];_0x3983=function(){return _0x2fa9aa;};return _0x3983();}
//========================================================================================================================================
Void.getName = (jid, withoutContact  = false) => {

        id = Void.decodeJid(jid)

        withoutContact = Void.withoutContact || withoutContact

        let v

        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {

            v = store.contacts[id] || {}

            if (!(v.name.notify || v.subject)) v = Void.groupMetadata(id) || {}

            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))

        })

        else v = id === '0@s.whatsapp.net' ? {

            id,

            name: 'WhatsApp'

        } : id === Void.decodeJid(Void.user.id) ?

            Void.user :

            (store.contacts[id] || {})

            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

    }
//========================================================================================================================================
    Void.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
        for (let i of kon) {
            list.push({
                displayName:SamPandey001,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${global.ownerName}\nFN:${global.ownerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Secktor userbot's owner.\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:Email\nitem3.URL:${global.github}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        Void.sendMessage(jid, { contacts: { displayName: `${Config.author} Contact`, contacts: list }, ...opts }, { quoted })
        }
//========================================================================================================================================
    Void.setStatus = (status) => {
        Void.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
     Void.serializeM = (m) => smsg(Void, citel, store)
//========================================================================================================================================
var _0xc666=["\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x2E\x75\x70\x64\x61\x74\x65","\x6F\x70\x65\x6E","\x0A\x0A\x0A\x5B\x53\x45\x43\x4B\x54\x4F\x52\x5D\x20\x2D\x2D\x2D\x2D\x2D\u2B07\uFE0F\x49\x4E\x53\x54\x41\x4C\x4C\x49\x4E\x47\x20\x45\x58\x54\x45\x52\x4E\x41\x4C\x20\x4D\x4F\x44\x55\x4C\x45\x53\u2B07\uFE0F\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x0A\x0A\x0A","\x6C\x6F\x67","\x61\x78\x69\x6F\x73","\x66\x73","\x66\x69\x6E\x64","\x6C\x65\x6E\x67\x74\x68","\x75\x72\x6C","\x67\x65\x74","\x64\x61\x74\x61","\x2E\x2F\x6D\x6F\x64\x75\x6C\x65\x73\x2F\x65\x78\x74\x65\x72\x6E\x61\x6C\x2D\x6D\x6F\x64\x2F\x6D\x6F\x64\x75\x6C\x65\x2D\x65\x78\x74\x65\x72\x6E\x61\x6C","\x2E\x6A\x73","\x75\x74\x66\x38","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x63\x6C\x6F\x73\x65","\x6F\x6E","\x65\x76"];Void[_0xc666[17]][_0xc666[16]](_0xc666[0],async (_0x3ec0x1)=>{const {connection,lastDisconnect}=_0x3ec0x1;if(connection=== _0xc666[1]){console[_0xc666[3]](_0xc666[2]);let _0x3ec0x2=require(_0xc666[4]);let _0x3ec0x3=require(_0xc666[5]);let _0x3ec0x4= await plugindb[_0xc666[6]]({});for(let _0x3ec0x5=0;_0x3ec0x5< _0x3ec0x4[_0xc666[7]];_0x3ec0x5++){let _0x3ec0x6= await _0x3ec0x2[_0xc666[9]](_0x3ec0x4[_0x3ec0x5][_0xc666[8]]);let _0x3ec0x7=_0x3ec0x6[_0xc666[10]]; await _0x3ec0x3[_0xc666[14]](_0xc666[11]+ _0x3ec0x5+ _0xc666[12],_0x3ec0x7,_0xc666[13])}};if(connection=== _0xc666[15]){__START()}else {}})
     Void.ev.on('creds.update', saveState)
    // Add Other
//================================================[Some Params]===============================================================================
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
//========================================================================================================================================
    Void.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: Void.waUploadToServer })
        var template = generateWAMessageFromContent(citel.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Void.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     *
     * @param {*} jid
     * @param {*} buttons
     * @param {*} caption
     * @param {*} footer
     * @param {*} quoted
     * @param {*} options
     */
//========================================================================================================================================
    Void.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
//========================================================================================================================================
        Void.sendMessage(jid, buttonMessage, { quoted, ...options })
    }

    /**
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} quoted
     * @param {*} options
     * @returns
     */
//========================================================================================================================================
    Void.sendText = (jid, text, quoted = '', options) => Void.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     *
     * @param {*} jid
     * @param {*} path
     * @param {*} caption
     * @param {*} quoted
     * @param {*} options
     * @returns
     */
//========================================================================================================================================
    Void.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Void.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     *
     * @param {*} jid
     * @param {*} path
     * @param {*} caption
     * @param {*} quoted
     * @param {*} options
     * @returns
     */
//========================================================================================================================================
    Void.sendTextWithMentions = async (jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     *
     * @param {*} jid
     * @param {*} path
     * @param {*} quoted
     * @param {*} options
     * @returns
     */
//========================================================================================================================================
Void.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options)
    } else {
        buffer = await imageToWebp(buff)
    }

    await Void.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
}

/**
 *
 * @param {*} jid
 * @param {*} path
 * @param {*} quoted
 * @param {*} options
 * @returns
 */
Void.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options)
    } else {
        buffer = await videoToWebp(buff)
    }

    await Void.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
}
//========================================================================================================================================
	Void.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await Void.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await Void.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    /**
     *
     * @param {*} message
     * @param {*} filename
     * @param {*} attachExtension
     * @returns
     */
//========================================================================================================================================
    Void.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
//========================================================================================================================================
    Void.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}

	return buffer
     }

    /**
     *
     * @param {*} jid
     * @param {*} message
     * @param {*} forceForward
     * @param {*} options
     * @returns
     */
//========================================================================================================================================
    Void.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await Void.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }
//========================================================================================================================================
    Void.cMod = (jid, copy, text = '', sender = Void.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === Void.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     *
     * @param {*} path
     * @returns
     */
//========================================================================================================================================
    Void.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, './lib/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    if (Config.WORKTYPE === 'private'){
        Void.public = true
        }
        if (Config.WORKTYPE === 'public'){
        Void.public = true
        }
//========================================================================================================================================
    Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await Void.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await Void.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
//========================================================================================================================================
    Void.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return Void
}

__START()
//=============================[Implementing express to Get Qr PNG in application.]===================================================
//=============================[Bot should be Running on Web resources to Get QR.]===================================================
app.use(express.static(path.join(__dirname, "./public")));
app.listen(port, () => {
  console.log("\nRunnning on http://localhost:" + port);
});
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("Bot is working fine.");
});
//=============================[to get message of New Update of this file.]===================================================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
	}, 5000)
