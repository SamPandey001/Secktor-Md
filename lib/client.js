const pino = require('pino')
const Config = require('../config');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path')
const prefix = Config.HANDLERS[0]
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./commands')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@adiwajshing/baileys")
const util = require("util");
const Levels = require("discord-xp");
try {
    Levels.setURL(mongodb);
    console.log("🌍 Connected to the Secktor DB")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri check video for more inofo❗\nhttps://youtu.be/7YWI50BDO5op")
    process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention, getRandom, fancy, randomfancy, botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
code = Config.sessionName.replace(/_S-E-C-K-T-O-R_/g, "");
var CryptoJS = require("crypto-js");
var bytes = CryptoJS.AES.decrypt(code, "[__lobn(0x14d)](0x24)");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');
var c = bytes.toString(CryptoJS.enc.Utf8);
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    const PastebinAPI = require('pastebin-js')
    const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
    pastebin
        .getPaste(c)
        .then(async function(data) {
            await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', data, "utf8")
            console.log('🚀Generating session from SESSION_ID\n⌛️Please wait 3 Seconds.')
                //console.log(data);
        })
        .fail(function(err) {
            console.log('Secktor couldn\'t find session with given SESSION_ID')
                //  console.log(err);
            process.exit(0)
        })
}
//  sleep(3000)
setTimeout(() => {
    const moment = require('moment-timezone')
    main().catch(err => console.log(err));
    async function main() {
        await mongoose.connect(mongodb);
    }
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
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
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/SocialLogo.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['Secktor', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                }
            }
        })
        store.bind(Void.ev)
        Void.ev.on('messages.upsert', async chatUpdate => {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.readmessage==="true") {
                    await Void.readMessages([mek.key])
                }
                if (Config.alwaysonline) {
                    Void.sendPresenceUpdate('available', citel.chat)
                }
                var { body } = citel
                var budy = typeof citel.text == "string" ? citel.text : false;
                if (body[1] && body[1] == " ") body = body[0] + body.slice(2);
                let icmd = body ? prefixRegex.test(body[0]) : false;
                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;
                const botNumber = await Void.decodeJid(Void.user.id)
                const hgg = botNumber.split('@')[0]
                const quoted = citel.quoted ? citel.quoted : citel;
                const mime = (quoted.msg || quoted).mimetype || "";
                citel.client = Void
    citel.stickerimage = async(buffer,options = {}) => {
	let packnamee = options.packname || 'Secktor'
	let authore = options.author || 'SamPandey001'
	let data = await writeExifImg(buffer, {packname:packnamee,autor:authore})
	return await Void.sendMessage(citel.chat,{sticker:{url:data}},{quoted:citel})
	} 
      citel.stickervideo = async(buffer,options = {}) => {
	let packnamee = options.packname || 'Secktor'
	let authore = options.author || 'SamPandey001'
	let data = await writeExifVid(buffer, {packname:packnamee,autor:authore})
	return await Void.sendMessage(citel.chat,{sticker:{url:data}},{quoted:citel})
	}
                
                //--------Checking banned Users-----------// 
                let supportdev = (citel.sender === '919628516236@s.whatsapp.net') || (citel.sender === '918639650925@s.whatsapp.net')
                if (icmd && !supportdev && citel.chat === "120363025246125888@g.us") return
                let isCreator = [ hgg, ...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                if (Config.disablepm === 'true' && icmd && !citel.isGroup && !isCreator) return
                if (Config.WORKTYPE === 'private' && !isCreator) return
                let checkban = await sck1.findOne({ id: citel.sender }) || await new sck1({ id: citel.sender, name: citel.pushName }).save();
                if (icmd && checkban.ban !== 'false') return citel.reply(`*Hii ${citel.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`)
                const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : "";
                if (icmd) {
                    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (cmd) {
                        isCreator = [hgg, ...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        try {
                            text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : null;
                        } catch {
                            text = false;
                        }
                        try {
                            cmd.function(Void, citel, text,{ args, isCreator, body, budy});
                        } catch (e) {
                            console.error("[ERROR] ", e);

                        }

                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") {
                        command.function(Void, citel,{args, isCreator, icmd, body, budy});
                    } else if (citel.text && command.on === "text") {
                        command.function(Void, citel, args,{isCreator, icmd, body, budy});
                    } else if (
                        (command.on === "image" || command.on === "photo") &&
                        citel.mtype === "imageMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    } else if (
                        command.on === "sticker" &&
                        citel.mtype === "stickerMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                    .catch((e) => {}) : "";
                const participants = citel.isGroup ? await groupMetadata.participants : "";
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup) {
                    console.log('[New Message in Group] ', body + '\n' + chalk.magenta('=> From'), citel.pushName, chalk.yellow(citel.sender) + "\n" + chalk.blueBright('=> In'), chalk.green(groupMetadata.subject))
                }
                if (!citel.isGroup) {
                    console.log(chalk.black(chalk.bgWhite('[New Message in Personal]')), chalk.black(chalk.bgBlue(body)) + '\n' + chalk.magenta('=> From'), chalk.green(citel.pushname), chalk.yellow(citel.sender) + "\n" + chalk.blueBright('=> In'), chalk.green(citel.chat))
                }
                setInterval(() => {

                    fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2));

                }, 10000);
                try {
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if (GroupS) {
                        let mongoschema = GroupS.antilink || "false"
                        let jackpot = budy.toLowerCase()
                        if (citel.isGroup && !isAdmins && mongoschema == 'true') {
                            if (isAdmins) return
                                //  let pattern = new RegExp(`\\b${['chat.whatsapp.com']}\\b`, 'ig');
                            var array = Config.antilink.split(",")
                            array.map(async(bg) => {
                                let pattern = new RegExp(`\\b${bg}\\b`, 'ig');
                                let chab = budy.toLowerCase()
                                if (pattern.test(chab)) {
                                    if (!isBotAdmins) {
                                        let buttonMessage = {
                                            text: `*---  Link detected  ---*
@${citel.sender.split('@')[0]} detected sending a link.
Promote ${tlang().title} as admin to kick
link senders.
`,
                                            mentions: [citel.sender],
                                            headerType: 4,
                                        }
                                        Void.sendMessage(citel.chat, buttonMessage)
                                        return
                                    }

                                    //  console.log('Whatsapp link')
                                    let response = await Void.groupInviteCode(citel.chat)
                                    h = 'chat.whatsapp.com/' + response
                                    let patternn = new RegExp(`\\b${[h]}\\b`, 'ig');
                                    if (patternn.test(body)) {
                                        citel.reply(`I won't remove you for sending this group link.`)
                                        return
                                    }
                                    const key = {
                                        remoteJid: citel.chat,
                                        fromMe: false,
                                        id: citel.id,
                                        participant: citel.sender
                                    }
                                    await Void.sendMessage(citel.chat, { delete: key })
                                    citel.reply("Group Link Detected!!");

                                    try {
                                        await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')
                                    } catch {
                                        citel.reply('*Link Detected*\n' + tlang().botAdmin)

                                    }
                                }
                            })
                        }
                    }
                } catch (err) {
                    console.log(err)
                }

                let checkon = Config.CHATBOT
                if (checkon === 'true' && !icmd) {
                    if (citel.key.fromMe) return
                    let zx = budy.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && citel.sender.split("@")[0] !== hgg && !icmd && !citel.isGroup) {
                            if (zx < 25) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            //		if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //		let textt = 
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (budy && !icmd && citel.isGroup) {
                            if (!citel.quoted && !icmd) return
                            if (!citel.quoted) return
                            let mentiontag = citel.mtype == "extendedTextMessage" && citel.message.extendedTextMessage.contextInfo != null ? citel.message.extendedTextMessage.contextInfo.mentionedJid : [];
                            let mention = mentiontag || citel.msg.contextInfo.participant
                            if (!mention.includes(botNumber)) return
                            if (zx < 20) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${citel.text}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                return;
                            }
                            //	if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //	let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        }
                        return
                    } catch (err) {
                        console.log(err)
                    }
                }
                var array = Config.antibadword.split(",")
                array.map(async(reg) => {
                        let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
                        let chab = budy.toLowerCase()
                        if (pattern.test(chab)) {
                            await new Promise(r => setTimeout(r, 1000));
                            try {
                                const { warndb } = require('.');
                                const timesam = moment(moment())
                                    .format('HH:mm:ss')
                                moment.tz.setDefault('Asia/KOLKATA')
                                    .locale('id')
                                await new warndb({
                                    id: citel.sender.split("@")[0] + 'warn',
                                    reason: 'For using Bad Word',
                                    group: groupMetadata.subject,
                                    warnedby: tlang().title,
                                    date: timesam
                                }).save()
                                citel.reply(`
*_hey ${citel.pushName}_*\n
Warning!! Bad word detected.
delete your message.
`)
                                sleep(3000)
                                const key = {
                                    remoteJid: citel.chat,
                                    fromMe: false,
                                    id: citel.id,
                                    participant: citel.sender
                                }
                                await Void.sendMessage(citel.chat, { delete: key })
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        return
                    })
                try {
                    let isNumber = (x) => typeof x === "number" && !isNaN(x);
                    let user = global.db.users[citel.sender];
                    if (typeof user !== "object") global.db.users[citel.sender] = {};
                    if (user) {
                        if (!isNumber(user.afkTime)) user.afkTime = -1;
                        if (!("afkReason" in user)) user.afkReason = "";
                    } else global.db.users[citel.sender] = {
                        afkTime: -1,
                        afkReason: "",
                    };
                    let chats = global.db.chats[citel.chat];
                    if (typeof chats !== "object") global.db.chats[citel.chat] = {};
                    if (chats) {
                        if (!("mute" in chats)) chats.mute = false;
                        if (!("wame" in chats)) chats.wame = false;
                    } else global.db.chats[citel.chat] = {
                        mute: false,
                        wame: false,
                    };
                } catch (err) {
                    console.error(err);
                }
                //responce
                let mentionUser = [
                    ...new Set([
                        ...(citel.mentionedJid || []),
                        ...(citel.quoted ? [citel.quoted.sender] : []),
                    ]),
                ];
                for (let jid of mentionUser) {
                    let user = global.db.users[jid];
                    if (!user) continue;
                    let afkTime = user.afkTime;
                    if (!afkTime || afkTime < 0) continue;
                    let reason = user.afkReason || "";
                    reply(`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
        tlang().title
      }*
`.trim());
                }
                if (db.users[citel.sender].afkTime > -1) {
                    let user = global.db.users[citel.sender];
                    reply(`
${tlang().greet} came back online from AFK${
        user.afkReason ? " after " + user.afkReason : ""
      }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                    user.afkTime = -1;
                    user.afkReason = "";
                }
                if (isCreator && citel.text.startsWith('>')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = eval(code);
                        if (typeof resultTest === "object")
                            citel.reply(util.format(resultTest));
                        else citel.reply(util.format(resultTest));
                    } catch (err) {
                        citel.reply(util.format(err));
                    }
                    return
                }
                if (isCreator && citel.text.startsWith('$')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                        let h = util.format(resultTest);
                      if(h===undefined) return console.log(h)
                      else
                        citel.reply(h)

                    } catch (err) {
                      if(err===undefined) return console.log('error')
                     else 
                    citel.reply(util.format(err));
                    }
                    return
                }
            } catch (e) {
                console.log(e)
            }
        })

        Void.ev.on('groups.update', async pea => {
            //console.log(pea)
            // Get Profile Picture Group
            try {
                ppgc = await Void.profilePictureUrl(pea[0].id, 'image')
            } catch {
                ppgc = 'https://telegra.ph/file/ce06205670d939a275217.jpg'
            }
            let wm_fatih = { url: ppgc }
            if (pea[0].announce == true) {
                Void.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `${Config.botname}`, wm_fatih, [])
            } else if (pea[0].announce == false) {
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
        Void.ev.on('group-participants.update', async(anu) => {
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
                        if (anu.action == 'add') {
                            if (Config.antifake != '') {
                                var array = Config.antifake.split(",") || '92'
                                for (let i = 0; i < array.length; i++) {
                                    let chab = require('awesome-phonenumber')('+' + num.split('@')[0]).getCountryCode()
                                    if (chab === array[i]) {
                                        console.log(array[i])
                                        try {
                                            Void.sendMessage(anu.id, { text: `${chab} is not allowed` })
                                            await Void.groupParticipantsUpdate(anu.id, [num], 'remove')
                                        } catch {
                                            console.log("error")
                                        }
                                    }
                                }
                                return
                            }
                            if (events == "true") {
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
*⭐Repo:* https://github.com/SecktorBot/Secktor-Md
*⭐Docs:* gg.gg/Secktor-Docs
*⭐Tutorial* gg.gg/Secktor-Tutorial
*⭐Public Bot:* gg.gg/Secktor-Offtopic
   `
                                    let buttonMessage = {
                                        image: await getBuffer(ppuser),
                                        caption: mbc,
                                        footer: `${Config.botname}`,
                                        mentions: [usersam],
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
                                else if (anu.id === offtopic && events == "true") {
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
                                    const buttonsd = [{
                                        buttonId: `${prefix}menu`,
                                        buttonText: {
                                            displayText: "Enjoy🔰",
                                        },
                                        type: 1,
                                    }];
                                    let buttonMessage = {
                                        image: await getBuffer(ppuser),
                                        caption: mbc,
                                        footer: `${Config.botname}`,
                                        buttons: buttonsd,
                                        mentions: [usersam],
                                        headerType: 4,
                                    }
                                    await Void.sendMessage(anu.id, buttonMessage)
                                } else if (events == "true") {
                                    hesa = `${participants}`
                                    mestes = (teks) => {
                                        return teks.replace(/['@s whatsapp.net']/g, " ");
                                    }
                                    resa = `${mestes(hesa)}`
                                    const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                                    const timenow = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                                    const xmembers = metadata.participants.length
                                    let welcome_message = Config.WELCOME_MESSAGE || `
  *Hi,* @user
  *Welcome in*  @gname
  *Member count* : @count th\n
 `
                                    usersam = num
                                    let welcome_messages = welcome_message.replace(/@user/gi, `@${num.split("@")[0]}`)
                                        .replace(/@gname/gi, metadata.subject)
                                        .replace(/@desc/gi, metadata.desc)
                                        .replace(/@count/gi, xmembers);

                                    mbc = `
${welcome_messages}
*Powered by Secktor-Bot*
  `
                                    let buttonMessage = {
                                        image: { url: ppuser },
                                        caption: mbc,
                                        footer: `${Config.botname}`,
                                        mentions: [usersam],
                                        headerType: 4,
                                    }
                                    await Void.sendMessage(anu.id, buttonMessage)
                                }
                                //=============================[change action to "remove" if you want to set it.]===================================================
                            }
                        } else if (events === 'true' && anu.action == 'remove') {

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
                                mentions: [usersam],
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)
                                //=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {
                            usersam = num
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppurl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            img = await getBuffer(ppUrl)
                            teks = `[ PROMOTE - DETECTED ]\n\nName : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${metadata.subject}`
                            let buttons = [
                                { buttonId: `okedoh`, buttonText: { displayText: 'Enjoy💙' }, type: 1 }
                            ]
                            let buttonMessage = {
                                image: img,
                                caption: teks,
                                footer: `Secktor`,
                                mentions: [usersam],
                                buttons: buttons,
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)

                        } else if (anu.action == 'demote') {
                            usersam = num
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            img = await getBuffer(ppUrl)
                            teks = `[ DEMOTE - DETECTED ]\n\nName : @${num.split("@")[0]}\nStatus : Admin -> Member`
                            let buttons = [
                                { buttonId: `okedoh`, buttonText: { displayText: '🎀' }, type: 1 }
                            ]
                            let buttonMessage = {
                                image: img,
                                caption: teks,
                                footer: `Secktor`,
                                mentions: [usersam],
                                buttons: buttons,
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)
                        }

                    }
                }
            } catch (err) {
                console.log(err)
            }
        })
        /*
        let cron = require('node-cron')
        cron.schedule('1 * * * *', () => {
            (async() => {
                let h = await card.findOne({ id: 'secfork' })
                let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
                let fork = data.forks_count
                const timesam = moment(moment()).format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                if (fork === h.count) {
                    return console.log('same fork.')
                } else {
                    let saam = fork - h.count
                    let yh = await card.updateOne({ id: 'secfork' }, { count: fork })
                    if (saam !== 0) {
                        let str = `╭━━〘 Fork 〙━━──⊷
┃ ${saam} new fork Created.      
┃ Time: ${timesam}
┃ Total Fork: ${fork}
╰━━━━━━━━━━━──⊷
`
                        return await Void.sendMessage("120363025246125888@g.us", { text: str })
                    }
                }
            })()
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
*/
        //========================================================================================================================================
        Void.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        Void.ev.on('groups.upsert', (huh) => {
            console.log(huh);
        });
        //========================================================================================================================================
        Void.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) {
                            Object.assign(store.contacts[contact.id], contact);
                        } else {
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
                    sck1.findOne({ id: id }).then((usr) => {
                        if (!usr) {
                            new sck1({ id: id, name: contact.notify }).save()
                        } else {
                            sck1.updateOne({ id: id }, { name: contact.notify })
                        }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
        Void.getName = (jid, withoutContact = false) => {

                id = Void.decodeJid(jid)

                withoutContact = Void.withoutContact || withoutContact

                let v

                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {

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
            /*
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
                    */
        Void.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Void.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/Secktor-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
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
        Void.serializeM = (citel) => smsg(Void, citel, store)
            //========================================================================================================================================
        Void.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                    console.log("ℹ️ Connecting to WhatsApp... Please Wait.");
                }
                if (connection === 'open') {
                    console.log("✅ Login Successful!");
                    console.log("⬇️  Installing External Plugins...");
                    let axios = require('axios')
                    let check = await plugindb.find({})
                    for (let i = 0; i < check.length; i++) {
                        let AxiosData = await axios.get(check[i].url)
                        let data = AxiosData.data
                        await fs.writeFileSync(__dirname + '/../commands/z_' + check[i].id + '.js', data, "utf8")
                    }
                    console.log("✅  External Plugins Installed!");
                    fs.readdirSync(__dirname + "/../commands").forEach((plugin) => {
                        if (path.extname(plugin).toLowerCase() == ".js") {
                            require(__dirname + "/../commands/" + plugin);
                        }
                    });
                    for (let i of owner) {
                        Void.sendMessage(i + "@s.whatsapp.net", { text: `_Secktor has been integrated._\n_Total Plugins : ${events.commands.length}_\n_Mode: ${Config.WORKTYPE}_\n_Version:- 0.0.5_\n_Branch:- ${Config.BRANCH}_\n_Theme: ${Config.LANG}_\n_Owner:- ${process.env.OWNER_NAME}_\n` })
                    }
                }
                if (connection === 'close') {
                    console.log('Connection closed with bot. Please put New Session ID again.')


                    syncdb().catch(err => console.log(err));
                } else {
                    /*
                     */
                }
            })
            //=============================[Implementing pg to update to Session file by the time.]===================================================
        Void.ev.on('creds.update', saveCreds)
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
        Void.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Void.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
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
        Void.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
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
        Void.sendTextWithMentions = async(jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
    Void.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options);
      } else {
        buffer = await imageToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
Void.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
       
            //========================================================================================================================================
        Void.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Void.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
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
        Void.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
            //========================================================================================================================================
        Void.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
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
        Void.copyNForward = async(jid, message, forceForward = false, options = {}) => {
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
            await Void.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }
        Void.sendFileUrl = async(jid, url, caption, quoted, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime === "application/pdf") {
                return Void.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "image") {
                return Void.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "video") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "audio") {
                return Void.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
            }
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
        Void.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
        Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Void.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
        Void.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Void
    }

    syncdb().catch(err => console.log(err))

    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)