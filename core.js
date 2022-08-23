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
require('./lib/sql')
const { default: VoidConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const prefix = global.prefa;
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const qrcode = require("qrcode");
const express = require("express");
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const path2 = require("path").join;
const {log, pint, bgPint} = require('./lib/langcolor')
const axios = require('axios')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const Config = require('./config');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp,  formatDate, getTime, isUrl, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention,GIFBufferToVideoBuffer, getRandom, await, sleep, getSizeMedia, generateMessageTag } = require('./lib/myfuncn')
const clui = require('clui')
const { Spinner } = clui
const prompt = require('prompt-sync')({sigint:true});
const figlet = require('figlet')
const mongoose = require('mongoose');
const PORT = port
var emitter = require('events'); 
emitter.setMaxListeners()
const app = express();
let pgdb = process.env.DATABASE_URL || "none";
 //For Storing Session data in pg if you want to delete you data,reset/destroy pg db from heroku
const { Pool } = require("pg");
exec('heroku config:set PGSSLMODE=no-verify')
 const proConfig = {
    connectionString: pgdb,
    ssl: {
        rejectUnauthorized: false,
    },
}; //Connection with PG
const pool = new Pool(proConfig)
const { color, bgcolor } = require("./lib/color")
const moment = require('moment-timezone')
let NODE_TLS_REJECT_UNAUTHORIZED=0
try {
    fs.unlinkSync(`./${sessionName}.json`);
} catch (err) {
console.log("No Older Session File found,fetcing New from pg");
}
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const got = require('got');
//=========[Commiting session data on pg]===================================================================

let cred, auth_row_count;
module.exports = fetchauth = async function fetchauth() 
{
    try {
        auth_result = await pool.query("select * from auth;"); //checking auth table
      //  console.log("Fetching login data...");
        auth_row_count = await auth_result.rowCount;
        let data = auth_result.rows[0];
        // console.log("data ",data);
        if (auth_row_count == 0) {
       //     console.log("No login data found!");
        } else {
         //   console.log("Login data found!");
            cred = {
                creds: {
                    noiseKey: JSON.parse(data.noisekey),
                    signedIdentityKey: JSON.parse(data.signedidentitykey),
                    signedPreKey: JSON.parse(data.signedprekey),
                    registrationId: Number(data.registrationid),
                    advSecretKey: data.advsecretkey,
                    nextPreKeyId: Number(data.nextprekeyid),
                    firstUnuploadedPreKeyId: Number(data.firstunuploadedprekeyid),
                    serverHasPreKeys: Boolean(data.serverhasprekeys),
                    account: JSON.parse(data.account),
                    me: JSON.parse(data.me),
                    signalIdentities: JSON.parse(data.signalidentities),
                    lastAccountSyncTimestamp: 0, // To allow bot to read the messages
                    // lastAccountSyncTimestamp: Number(data.lastaccountsynctimestampb),
                    myAppStateKeyId: data.myappstatekeyid,
                },
                keys: state.keys,
            };
            cred.creds.noiseKey.private = Buffer.from(cred.creds.noiseKey.private);
            cred.creds.noiseKey.public = Buffer.from(cred.creds.noiseKey.public);
            cred.creds.signedIdentityKey.private = Buffer.from(
                cred.creds.signedIdentityKey.private
            );
            cred.creds.signedIdentityKey.public = Buffer.from(
                cred.creds.signedIdentityKey.public
            );
            cred.creds.signedPreKey.keyPair.private = Buffer.from(
                cred.creds.signedPreKey.keyPair.private
            );
            cred.creds.signedPreKey.keyPair.public = Buffer.from(
                cred.creds.signedPreKey.keyPair.public
            );
            cred.creds.signedPreKey.signature = Buffer.from(
                cred.creds.signedPreKey.signature
            );
            cred.creds.signalIdentities[0].identifierKey = Buffer.from(
                cred.creds.signalIdentities[0].identifierKey
            );
        }
    } catch (err) {
      //  console.log(err);
        console.log("Creating database on PG to store your Session for future logins..."); //if login fail create a db
        await pool.query(
            "CREATE TABLE auth(noiseKey text, signedIdentityKey text, signedPreKey text, registrationId text, advSecretKey text, nextPreKeyId text, firstUnuploadedPreKeyId text, serverHasPreKeys text, account text, me text, signalIdentities text, lastAccountSyncTimestamp text, myAppStateKeyId text);"
        );
        

        await fetchauth();
    }
}
///It will automaticly be deleted on Heroku at every restart,But this part is for Local Hosting.

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongodb);
}
const {sck1,RandomXP,sck} = require("./lib/core")
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
  await fetchauth();
  await pool.query(
      "CREATE TABLE IF NOT EXISTS Module (name BOOL, url BOOL);"
    );
    if (auth_row_count != 0) {
        state.creds = cred.creds;
    }
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
        let cron = require('node-cron')
        cron.schedule('7 00 * * 7', () => {
  (async () => {
  const axios = require('axios')
	let updateku = await axios.get('https://gist.githubusercontent.com/SamPandey001/d7b8ae1a250544646832905dfc2f3816/raw/secktor.json');
//	console.log(updateku)
		let banned = updateku.data.announcement
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
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `${global.botname}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, `${global.botname}`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, `${global.botname}`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, `${global.botname}`, wm_fatih, [])
       } else {
       Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, `${global.botname}`, wm_fatih, [])
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
				//	if(!num.split('@')[0].startsWith(91)) {
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
*Please don't use bots here.* Sector Bot will not work here by default.
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
footer: `${global.botname}`,
mentions:[usersam],
headerType: 4,
}
Void.sendMessage(anu.id, buttonMessage)
	 }
	/*
  //=============================[Adding Buttons.]===================================================
	 await Void.sendMessage(anu.id, {
               text: ` `,
                footer: `${global.botname}`,
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
*Welcome in Offtopic.*
*Feel Free to ask Queries at anytime.*
*Secktor bot will be working here.*
*You are free as a bird to be on anytopic.*
*_Prefix_* = "${prefix}"\n\n
*⭐Repo:* gg.gg/Secktor-repo
*⭐Docs:* gg.gg/Secktor-Docs
*⭐Tutorial* gg.gg/Secktor-Tutorial
*⭐Support:* gg.gg/Secktor
`
let buttonMessage = {
image: await getBuffer(ppuser),
caption: mbc,
footer: `${global.botname}`,
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
  let welcome_message = process.env.WELCOME_MESSAGE || ``
          usersam = num
          mbc = `
  *Hi,* @${usersam.split("@")[0]}
  *Welcome in*  ${metadata.subject}
  *Member count* : ${xmembers}th
  ${welcome_message}\n
  *⭐Tutorial* gg.gg/Secktor-Tutorial
  *⭐Bot Group:* gg.gg/Secktor-Offtopic
  *Powered by Secktor-Bot*

  `
  let buttonMessage = {
  image: await getBuffer(ppuser),
  caption: mbc,
  footer: `${global.botname}`,
  mentions:[usersam],
  headerType: 4,
  }
  await Void.sendMessage(anu.id, buttonMessage)
}
//=============================[change action to "remove" if you want to set it.]===================================================
  } else if (anu.action == 'removffe') {
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
   *ANOTHER ONE BITES DUST* 👋
   @${usersam.split("@")[0]} left
   ${metadata.subject}
   𝗠𝗲𝗺𝗯𝗲𝗿 : ${xeonmembers}th
   `
let buttonMessage = {
image: await getBuffer(ppuser),
caption: mbc,
footer: `${global.botname}`,
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
				teks = `*_[ PROMOTE - DETECTED ]_*\n\nName : @${usersam.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${metadata.subject}`
				let buttons = [
{buttonId: `okedoh`, buttonText: {displayText: 'Enjoy'}, type: 1}
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
{buttonId: `okedoh`, buttonText: {displayText: 'ANOTHER ONE BITES DUST!'}, type: 1}
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
//
	    /*
	     let botNumberJid = Void.user.id;
        botNumberJid =
          botNumberJid.slice(0, botNumberJid.search(":")) +
          botNumberJid.slice(botNumberJid.search("@"));
        if (num === botNumberJid) {
          console.log("Bot is added to new group!");
          await Void.sendMessage("919628516236@s.whatsapp.net", {
            text: `*---SeckTor---* \n    *Added To New Group*\n\nSEND ${prefix}help to Explore SeckTor`,
          });
        }
      //  console.log(`[GROUP] ${groupSubject} [JOINED] ${numJid}`);
*/
//========================================================================================================================================
    Void.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    /*\

   Void.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Void.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })
	*/
    
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
        Void.ev.on('contacts.update', async update => {
        for (let contact of update) {
		 let id = Void.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
           // let id = Void.decodeJid(contact.id)

                }
            })
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
	    	displayName: await Void.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${global.socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
//========================================================================================================================================
	Void.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
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
	console.log(`Welcome in Secktorians.`);
	console.log(`Ask errors in gg.gg/Secktor`);
     Void.serializeM = (m) => smsg(Void, citel, store)
//========================================================================================================================================
    Void.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr} = update
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { /*console.log("Connection closed, reconnecting...."); */__START(); }
            else if (reason === DisconnectReason.connectionLost) { /*console.log("Connection Lost from Server, reconnecting...");*/ __START(); }
            else if (reason === DisconnectReason.connectionReplaced) { /*console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit();*/ }
            else if (reason === DisconnectReason.loggedOut) { /*console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit();*/ }
            else if (reason === DisconnectReason.restartRequired) { /*console.log("Restart Required, Restarting..."); */__START(); }
            else if (reason === DisconnectReason.timedOut) { /*console.log("Connection TimedOut, Reconnecting...");*/ __START(); }
            else { /*console.log(`Unknown DisconnectReason: ${reason}|${connection}`)*/ }
        }
     //   console.log('Connection...', update)
     if (qr) {
        QR_GENERATE = qr;
    }
})
	//=============================[Implementing pg to update to Session file by the time.]===================================================
     Void.ev.on('creds.update', () => {
        saveState();
        try {
            let noiseKey = JSON.stringify(state.creds.noiseKey);
            let signedIdentityKey = JSON.stringify(state.creds.signedIdentityKey);
            let signedPreKey = JSON.stringify(state.creds.signedPreKey);
            let registrationId = state.creds.registrationId;
            let advSecretKey = state.creds.advSecretKey;
            let nextPreKeyId = state.creds.nextPreKeyId;
            let firstUnuploadedPreKeyId = state.creds.firstUnuploadedPreKeyId;
            let serverHasPreKeys = state.creds.serverHasPreKeys;
            let account = JSON.stringify(state.creds.account);
            let me = JSON.stringify(state.creds.me);
            let signalIdentities = JSON.stringify(state.creds.signalIdentities);
            let lastAccountSyncTimestamp = state.creds.lastAccountSyncTimestamp;
            // let lastAccountSyncTimestamp = 0;
            let myAppStateKeyId = state.creds.myAppStateKeyId; //?
//========================================================================================================================================
            // INSERT / UPDATE LOGIN DATA
            if (auth_row_count == 0) {
                console.log("Commiting Session data on PG...");
                pool.query(
                    "INSERT INTO auth VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13);",
                    [
                        noiseKey,
                        signedIdentityKey,
                        signedPreKey,
                        registrationId,
                        advSecretKey,
                        nextPreKeyId,
                        firstUnuploadedPreKeyId,
                        serverHasPreKeys,
                        account,
                        me,
                        signalIdentities,
                        lastAccountSyncTimestamp,
                        myAppStateKeyId,
                    ]
                );
                pool.query("commit;");
           //     console.log("New login data inserted!");
            } else {
                // console.log("Updating login data....");
                pool.query(
                    "UPDATE auth SET noiseKey = $1, signedIdentityKey = $2, signedPreKey = $3, registrationId = $4, advSecretKey = $5, nextPreKeyId = $6, firstUnuploadedPreKeyId = $7, serverHasPreKeys = $8, account = $9, me = $10, signalIdentities = $11, lastAccountSyncTimestamp = $12, myAppStateKeyId = $13;",
                    [
                        noiseKey,
                        signedIdentityKey,
                        signedPreKey,
                        registrationId,
                        advSecretKey,
                        nextPreKeyId,
                        firstUnuploadedPreKeyId,
                        serverHasPreKeys,
                        account,
                        me,
                        signalIdentities,
                        lastAccountSyncTimestamp,
                        myAppStateKeyId,
                    ]
                );
                pool.query("commit;");
            }
        } catch (err) {
            console.log(err);
        }
    })
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
    Void.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Void.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     *
     * @param {*} jid
     * @param {*} path
     * @param {*} quoted
     * @param {*} mime
     * @param {*} options
     * @returns
     */
//========================================================================================================================================
    Void.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Void.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
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
//========================================================================================================================================
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
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
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
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
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
app.use(async (req, res) => {
    let picqr = await qrcode.toBuffer(QR_GENERATE)
	res.setHeader("content-type", "image/png");
	res.end(picqr);
});
app.listen(PORT, () => {
	console.log(`Qr Code Server running on PORT ${PORT} Tap on Open app and Scan Qr code. If you have already scanned,Ignore this message.`);
});
//=============================[to get message of New Update of this file.]===================================================
//========================================================================================================================================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
