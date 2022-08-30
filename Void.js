  /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
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
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
require("./config");
require("./core");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateMessageID,
  generateWAMessageContent,
  generateWAMessage,
  AnyMessageContent,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  downloadContentFromMessage,
} = require("@adiwajshing/baileys");
const fs = require("fs-extra");
const hx = require("hxz-api")
const util = require("util");
const Config = require("./config");
const ytdl = require('ytdl-core')
const config = require("./config");
const maker = require('mumaker')
const Levels = require("discord-xp");
const chalk = require("chalk");
const fetch = require("node-fetch");
const { writeFile } = require("fs/promises");
const { color, bgcolor } = require("./lib/scraper");
global.thum = fs.readFileSync("./assets/SocialLogo 1.png"); //ur thumb pic
global.log0 = fs.readFileSync("./assets/SocialLogo 1.png"); //ur logo pic
global.err4r = fs.readFileSync("./assets/SocialLogo 1.png"); //ur error pic
global.thumb = fs.readFileSync("./assets/SocialLogo 1.png");
const {
  Sticker,
  createSticker,
  StickerTypes,
} = require("wa-sticker-formatter");
const mathjs = require("mathjs");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const canvacord = require("canvacord");
const path = require("path");
const { Support } = require('./lib/myfunc')
const { Character } = require('mailist')
let alert = console.log
const os = require("os");
const moment = require("moment-timezone");
const { JSDOM } = require("jsdom");
const { mediafire } = require("./lib/mediafire.js");
const { log, pint, bgPint } = require("./lib/scraper");
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const {
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  GIFBufferToVideoBuffer,
  getRandom,
} = require("./lib/myfuncn");
const secktorofftopic = '120363043857093839@g.us'
const { smsg, tanggal } = require("./lib/myfunc");
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync("./lib/database.json"));
let vote = db.others.vote = []
const {
  pinterest,
  wallpaper,
  wikimedia,
  aiovideodl,
  styletext,
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  TelegraPh,
  UploadFileUgu,
  webp2mp4File
} = require('./lib/scraper')
/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
Here we get text avilabe is string fromat in ./Themes
Whicb bot uses for texts and themes.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
let Language = require("./lib/scraper");
let LangU = Language.getString("updater");
let LangG = Language.getString("global");
let LangErr = Language.getString("err");
const greet = LangG.greet;
let todlink = [
    `${LangG.pic1}`,
    `${LangG.pic2}`,
    `${LangG.pic3}`,
    `${LangG.pic4}`,
    `${LangG.pic5}`,
    `${LangG.pic6}`,
  ];
let picsecktor = todlink[Math.floor(Math.random() * todlink.length)];
//  console.log(picsecktor)
const mongoose = require("mongoose");
const { sck1, RandomXP, sck, plugindb } = require("./lib/core");
const elong = String.fromCharCode(8206);
const readmore = elong.repeat(4001);
const turbrek = `break`;
Levels.setURL(mongodb);
console.log("Connected to the Database")
//const Header = process.env.HEADER || "*Secktor 𝐵𝑜𝑡*";
//const Footer = process.env.FOOTER || "*𝚂𝚊𝚖𝙿𝚊𝚗𝚍𝚎𝚢𝟶𝟶𝟷*";
hit_today = [];
global.hit = {};
/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
Here we are exporting,Main Function "Void".
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
module.exports = Void = async (Void, citel, chatUpdate, store) => {
  try {
    var body = (citel.mtype === 'conversation') ? citel.message.conversation : (citel.mtype == 'imageMessage') ? citel.message.imageMessage.caption : (citel.mtype == 'videoMessage') ? citel.message.videoMessage.caption : (citel.mtype == 'extendedTextMessage') ? citel.message.extendedTextMessage.text : (citel.mtype == 'buttonsResponseMessage') ? citel.message.buttonsResponseMessage.selectedButtonId : (citel.mtype == 'listResponseMessage') ? citel.message.listResponseMessage.singleSelectReply.selectedRowId : (citel.mtype == 'templateButtonReplyMessage') ? citel.message.templateButtonReplyMessage.selectedId : (citel.mtype === 'messageContextInfo') ? (citel.message.buttonsResponseMessage?.selectedButtonId || citel.message.listResponseMessage?.singleSelectReply.selectedRowId || citel.text) : ''
    var budy = typeof citel.text == "string" ? citel.text : "";
    const prefix = Config.prefix;
    const icmd = body.startsWith(prefix);
    const isCmd = prefix.includes(body != "" && body.slice(0, 1)) && body.slice(1) != "";
    const command = isCmd ? body.slice(1)
      .trim()
      .split(" ")[0].toLowerCase() : "";
    const args = body.trim()
      .split(/ +/)
      .slice(1);
    global.sudo = process.env.SUDO || ' '
    const pushname = citel.pushName || "No Name";
    const botNumber = await Void.decodeJid(Void.user.id);
    const isCreator = [botNumber, ...global.owner, global.sudo].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(citel.sender);
    const itsMe = citel.sender == botNumber ? true : false;
    const botName = LangG.title; // "Secktor"
    const isBaileys = citel.id.startsWith("BAE6") && citel.id.length === 29;
    const text = (q = args.join(" "));
    const querie = text
    const quoted = citel.quoted ? citel.quoted : citel;
    const mime = (quoted.msg || quoted)
      .mimetype || "";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const from = current = citel.chat;
    const content = JSON.stringify(citel.message);
    const isMedias = citel.mtype === "imageMessage" || citel.mtype === "videoMessage";
    const isQuotedImage = citel.mtype === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo = citel.mtype === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio = citel.mtype === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker = citel.mtype === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedLoca = citel.mtype === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedContact = citel.mtype === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocs = citel.mtype === "extendedTextMessage" && content.includes("documentMessage");
    const isQuotedTeks = citel.mtype === "extendedTextMessage" && content.includes("quotedMessage");
    const isQuotedTag = citel.mtype === "extendedTextMessage" && content.includes("mentionedJid");
    const isQuotedProd = citel.mtype === "extendedTextMessage" && content.includes("productMessage");
    const isQuotedReply = citel.mtype === "extendedTextMessage" && content.includes("Message");
    const quotedBot = citel.mtype === "extendedTextMessage" && content.includes("Message") && citel.message.extendedTextMessage.contextInfo !== null ? citel.message.extendedTextMessage.contextInfo.mentionedJid : [Void.user.id];
    // This is for changing texts in mono style in whatsapp
    function monospace(string) {
      return "```" + string + "```";
    }
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    //	if(body && !isCreator && Config.WORKTYPE==='private') return
    //group vars\\
    const isGroup = citel.chat.endsWith("@g.us");
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
      .catch((e) => {}) : "";
    const groupName = citel.isGroup ? groupMetadata.subject : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = citel.isGroup ? await participants.filter((v) => v.admin !== null)
      .map((v) => v.id) : "";
    const groupOwner = citel.isGroup ? groupMetadata.owner : "";
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const mentionByTag = citel.mtype == "extendedTextMessage" && citel.message.extendedTextMessage.contextInfo != null ? citel.message.extendedTextMessage.contextInfo.mentionedJid : [];
    const timesam = moment(moment())
      .format('HH:mm:ss')
    moment.tz.setDefault('Asia/KOLKATA')
      .locale('id')
    
try {
  let GroupS = await sck.findOne({ id: citel.chat})
  if (GroupS) {
    let lautaa = GroupS.botenable || "true"
  if (isGroup && !isCreator && lautaa == 'false') return console.log('Bot in desabled in this chat.')
  }
  } catch (err) {
    console.log(err)
  }
  
    //     ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    //         Blocking commmands in Pm.
    //      ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    if (icmd && !citel.isGroup && !isCreator) return citel.reply(`*_Sorry ${pushname} ${LangG.greet},using commands are not allowed in Dm_*\n\n*_https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC_*`)
    let totalhit = require("util")
      .inspect(hit.all);
    if (icmd) {
      axios.get("https://api.countapi.xyz/hit/sampandey001/visits")
        .then(({ data }) => (hit.all = data.value));
    }
    hit_today.push(command);
    let all = require("util")
      .inspect(hit.all);
    let Menu_Text = process.env.Menu_Text || `I am *${LangG.title}* ♥️.\n My prefix is "${prefix}"\n`;
    //////////Block-in-moderation-Group//////////
    let supportdev = citel.sender === '919628516236@s.whatsapp.net' || citel.sender === '918639650925@s.whatsapp.net'
    if (icmd && !supportdev && citel.chat === "120363025246125888@g.us") return
    try {
      let GroupS = await sck.findOne({ id: citel.chat })
      if (GroupS) {
        let lautaa = GroupS.botenable || "true"
        let jackpot = budy.toLowerCase()
        if (isGroup && !isCreator && q !== 'bot' && lautaa == 'false') return
      }
    }
    catch (err) {
      console.log(err)
    }
    /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
Here we are setting Levelling,With help of Module discord-Xp  https://www.npmjs.com/package/discord-xp
Works with MongoDb so no data loss.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
    if (icmd) {
      const randomXp = 8;
      const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
      if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "GOD";
        if (lvpoints <= 2) {
          var role = "🏳Citizen";
        }
        else if (lvpoints <= 4) {
          var role = "👼Baby Wizard";
        }
        else if (lvpoints <= 6) {
          var role = "🧙‍♀️Wizard";
        }
        else if (lvpoints <= 8) {
          var role = "🧙‍♂️Wizard Lord";
        }
        else if (lvpoints <= 10) {
          var role = "🧚🏻Baby Mage";
        }
        else if (lvpoints <= 12) {
          var role = "🧜Mage";
        }
        else if (lvpoints <= 14) {
          var role = "🧜‍♂️Master of Mage";
        }
        else if (lvpoints <= 16) {
          var role = "🌬Child of Nobel";
        }
        else if (lvpoints <= 18) {
          var role = "❄Nobel";
        }
        else if (lvpoints <= 20) {
          var role = "⚡Speed of Elite";
        }
        else if (lvpoints <= 22) {
          var role = "🎭Elite";
        }
        else if (lvpoints <= 24) {
          var role = "🥇Ace I";
        }
        else if (lvpoints <= 26) {
          var role = "🥈Ace II";
        }
        else if (lvpoints <= 28) {
          var role = "🥉Ace Master";
        }
        else if (lvpoints <= 30) {
          var role = "🎖Ace Dominator";
        }
        else if (lvpoints <= 32) {
          var role = "🏅Ace Elite";
        }
        else if (lvpoints <= 34) {
          var role = "🏆Ace Supreme";
        }
        else if (lvpoints <= 36) {
          var role = "💍Supreme I";
        }
        else if (lvpoints <= 38) {
          var role = "💎Supreme Ii";
        }
        else if (lvpoints <= 40) {
          var role = "🔮Supreme Master";
        }
        else if (lvpoints <= 42) {
          var role = "🛡Legend III";
        }
        else if (lvpoints <= 44) {
          var role = "🏹Legend II";
        }
        else if (lvpoints <= 46) {
          var role = "⚔Legend";
        }
        else if (lvpoints <= 55) {
          var role = "🐉Immortal";
        }
        else {
          var role = "Kiddo";
        }
        await Void.sendMessage(citel.chat, {
          image: {
            url: picsecktor,
          },
          caption: `
     ╔════◇
     ║ *Wow,Someone just*
     ║ *leveled Up huh⭐*
     ║ *👤Name*: ${pushname}
     ║ *🎐Level*: ${sck1.level}🍭
     ║ *🛑Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
     ║ *📍Role*: *${role}*
     ║ *Enjoy🥳*
     ╚════════════╝
      `,
        }, {
          quoted: citel,
        });
      }
    }
 
    if (citel.message) {
      Void.readMessages(citel.chat, citel.sender, [citel.key.id]);
      console.log(chalk.black(chalk.bgWhite('[New Message]')), chalk.black(chalk.bgGreen(timesam)), chalk.black(chalk.bgBlue(budy || citel.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(citel.sender) + "\n" + chalk.blueBright('=> In'), chalk.green(citel.isGroup ? pushname : 'Personal', citel.chat))
    }
    /*
    ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    Just Put this true and Set Role Model. It will change profle pic at every 4th min
    ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    */
    if (process.env.AUTO_PP === "true") {
      console.log("changing Profile Pic is enabled.")
      setInterval(() => {
        console.log("changing Profile Pic")
        let gis = require("g-i-s");
        gis("zero-Two", async (error, result) => {
          n = result;
          imagees = n[Math.floor(Math.random() * n.length)].url;
          var picturek = process.env.ROLE_FOR_PP + "HD 4 *3 pics for Whatsapp dp" || "4 *3 Mark Spector HD pic for whatsapp dp";
          let jack = axios.get(`https://api-toxic-devil.herokuapp.com/api/search/google-image?query=${picturek}`)
          let sampic = jack.data.result
          console.log(sampic)
          let images = sampic[Math.floor(Math.random() * sampic.length)];
          console.log(images)
          let changebuff = await getBuffer(images)
          const ChangePic = "./ProfilePic.jpg"
          await writeFile(ChangePic, changebuff);
          let dd = await fs.readFileSync("./ProfilePic.jpg");
          await Void.updateProfilePicture(botNumber, {
            url: './ProfilePic.jpg'
          })
          console.log("Changed pfp")
          fs.unlinkSync("./ProfilePic.jpg");
        })
      }, 4 * 60 * 1000);
    }
    ///////////////////////////////DICE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let darray = [
    "https://i.ibb.co/MRNM54z/1.webp",
    "https://i.ibb.co/8NrTNXP/2.webp",
    "https://i.ibb.co/ngmCmjN/3.webp",
    "https://i.ibb.co/vcp6NKL/4.webp",
    "https://i.ibb.co/hDj6Sm4/5.webp",
    "https://i.ibb.co/zbS79jQ/6.webp",
  ];
    let dice = darray[Math.floor(Math.random() * darray.length)];
    // ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    /*
    Here we are adding PM-Permit.
    With MongoDb support.
    use pmpermit help for more info
    */
    //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    const simpleGit = require('simple-git');
    const git = simpleGit();
    const pmpermit = require("./lib/functions");
    const MongoClient = require("mongodb");
    fs.writeFileSync(path.join(__dirname, `${botNumber}.json`), JSON.stringify({ "found": true, "number": `${Void.user.id}`, "times": 1, "permit": true }));
    if (budy && budy.includes(`${prefix}jsr`) && !isGroup && Config.pmpermit === "true") {
      let samkk = citel.sender ? citel.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      var check = await pmpermit.wow(samkk); // get status
      console.log('Allowed')
      if (!check.privilege) {
        // if not permitted
        console.log('not allowed');
        if (check.block) {
          let buttonMessaged = {
            image: { url: picsecktor },
            caption: check.msg,
            footer: `Personal Assistant`,
            headerType: 4,
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
          setTimeout(async () => {
            await Void.updateBlockStatus(`${samkk}`, "block");
          }, 3000);
        }
        else if (!check.block) {
          //	citel.reply(check.msg);
          let buttonMessagedy = {
            image: { url: picsecktor },
            caption: check.msg,
            footer: ` Personal Assistant`,
            headerType: 4,
          };
          await Void.sendMessage(citel.chat, buttonMessagedy, {
            quoted: citel,
          });
        }
      }
    }
    if (citel.mtype == "imageMessage" && Config.nsfw_detect_ai === "true") {
      const fileName = "./img-" + citel.key.id;
      let stream = await downloadContentFromMessage(citel.message.imageMessage, "image");
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      await writeFile(fileName, buffer);
      await fs.readFileSync(fileName, buffer);
      if (/image/.test(mime)) {
        let anu = await TelegraPh(fileName);
        var NSFAI = require("nsfai");
        var nsfai = new NSFAI("e68b65ac70d142ee959bba70accd4f36");
        nsfai.predict(anu)
          .then(function(result) {
            if (result.sfw) {
              // If the result is safe for work:
              //      console.log(`This image is safe for work, with a confidence of ${result.confidence}!`);
            }
            else {
              // If the result is not safe for work:
              let confidence = `${result.confidence}` * 100
              citel.reply(`*NSFW detected by ${LangG.title}!,* with a confidence of ${confidence}%`);
            }
          })
          .catch(function(error) {
            console.error(error); // Print the error to the console.
          });
      }
      fs.unlinkSync(fileName);
    }
    //════════[runtime]═════════//
    const runtime = function(seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor((seconds % (3600 * 24)) / 3600);
      var m = Math.floor((seconds % 3600) / 60);
      var s = Math.floor(seconds % 60);
      var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    };
    try {
      let GroupS = await sck.findOne({ id: citel.chat })
      if (GroupS) {
        let mongoschema = GroupS.antilink || "false"
        let jackpot = budy.toLowerCase()
        if (isGroup && !isAdmins && mongoschema == 'true') {
          if (!isBotAdmins) return
          if (jackpot.includes("://chat.whatsapp.com/")) {
            console.log('Whatsapp link')
            //  if (isBotAdmins) return console.log('Sender is bot admin.')
            let response = await Void.groupInviteCode(citel.chat)
            if (jackpot.includes(`//chat.whatsapp.com/${response}`)) return citel.reply(`I won't remove you for sending this group link.`)
            citel.reply("Group Link Detected!!");
            await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')
          }
        }
      }
    }
    catch (err) {
      console.log(err)
    }
    const reply = (textt) => {
      Void.sendMessage(citel.chat, {
        text: textt,
        contextInfo: {
          externalAdReply: {
            title: ` ${LangG.title}`,
            body: `Possibilities are infinite`,
            previewType: "PHOTO",
            thumbnailUrl: ``,
            thumbnail: fs.readFileSync(`./assets/SocialLogo 1.png`),
            sourceUrl: ``,
          },
        },
      }, {
        quoted: citel,
      });
    };
    //----------------------[target]----------------------\\
    
    /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
Here we are setting anti whatsapp Group link if it is enabled It will kick all those
users who sends Whatsapp Group Link
Activate it by ${prefix}act antilink
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let user = global.db.users[citel.sender];
      if (typeof user !== "object") global.db.users[citel.sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
      }
      else global.db.users[citel.sender] = {
        afkTime: -1,
        afkReason: "",
      };
      let chats = global.db.chats[citel.chat];
      if (typeof chats !== "object") global.db.chats[citel.chat] = {};
      if (chats) {
        if (!("mute" in chats)) chats.mute = false;
        if (!("wame" in chats)) chats.wame = false;
      }
      else global.db.chats[citel.chat] = {
        mute: false,
        wame: false,
      };
    }
    catch (err) {
      console.error(err);
    }
    fs.readdirSync('./modules/')
      .forEach((file) => {
        if (path.extname(file)
          .toLowerCase() == '.js') {
          try {
            eval(fs.readFileSync('./modules/' + file, 'utf8'));
          }
          catch (e) {
            var err = e.constructor('Error in Evaled Script: ' + e.message);
            err.lineNumber = e.lineNumber - err.lineNumber + 3;
            throw err;
            // console.log(e+'\n')
            if (e instanceof SyntaxError) {
              //  alert(e.message);
            }
            else {
              /// throw e;
            }
          }
        }
      })
    /*
    ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    Here we are scrapping All stickers for every group avilable
    You can specify it to specifc group too using JID of that Group.
    ask errors in support Group.
    ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    */
    /*
    let stickgroup = "919628516236-1618200620@g.us"
    if ( citel.mtype == "stickerMessage" && current !== stickgroup){
      const fs = require("fs");
    const { Sticker, StickerTypes } = require("wa-sticker-formatter");
    const { writeFile } = require('fs/promises');
    const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` };
    let downloadFilePath = citel.message.stickerMessage;
    const stream = await downloadContentFromMessage(
      downloadFilePath,
      "sticker"
    );
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    const sticker = new Sticker(buffer, {
      pack: "SamPandey001 🔶",
      author: `${pushname}`,
      type: StickerTypes.DEFAULT,
      quality: 80,
    });
    const bufferji = await sticker.toBuffer();
    await Void.sendMessage(
      "919628516236-1618200620@g.us",
      {
        sticker: bufferji,
      }
    );
    //console.log('Sticker Sent')
      }
    */
    /*

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
This is NSFW detection AI.
This is First Whatsapp bot which had NLP-AI
                    +
              NSFW Detection

You can use NSFWJS module too but that require more memory so i switched to this free api
which provides 1000 reqs per months
If it expires just say once in Support Group.
We will add another api key.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
    //----------------------[push msg to console]----------------------\\
    //autotyper all
    if (global.autoTyping === 'true') {
      if (citel.chat) {
        Void.sendPresenceUpdate("composing", citel.chat);
      }
    }
    /*
    I hope you are familiar with RSS
    It parses data from feed and you can do anyting with that data.
    */
    //----------------------[mute chat]----------------------\\
    //   if (db.chats[citel.chat].mute && !isAdmins && !isCreator) {     return;    }
    //-----------------------[RSS]--------------------\\
    /*
  let rsss = require('node-cron')
  rsss.schedule('40 9 * * *', () => {
  let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

let feed = await parser.parseURL('https://www.animenewsnetwork.com/review/rss.xml?ann-edition=in')
let textt = `*Some Anime News*\n\n`
textt += ` *Title* : ${feed.title}\n`
feed.items.forEach(item => {
  //console.log(item.title + ':' + item.link)
  textt += `${`*Published At*`+ ':' + item.pubDate}\n`
  textt += `${item.title + ':' + item.link}\n\n━━━━━━━━━━━━━━━━━━━\n\n`
  });
      Void.sendMessage("919628516236@s.whatsapp.net", {
        text: `*ZERO-TWO NEWS*\n\n` + `${textt}`
      })


})();
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
  })

  */
    //----------------------[write database every 1min]----------------------\\
    setInterval(() => {
      fs.writeFileSync("./lib/database.json", JSON.stringify(global.db, null, 2));
    }, 60 * 1000);
    //----------------------[respond cmd with media]----------------------\\
    if (isMedia && citel.msg.fileSha256 && citel.msg.fileSha256.toString("base64") in global.db.sticker) {
      let hash = global.db.sticker[citel.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(citel.chat, {
        text: text,
        mentions: mentionedJid,
      }, {
        userJid: Void.user.id,
        quoted: citel.quoted && citel.quoted.fakeObj,
      });
      messages.key.fromMe = areJidsSameUser(citel.sender, Void.user.id);
      messages.key.id = citel.key.id;
      messages.pushName = citel.pushName;
      if (citel.isGroup) messages.participant = citel.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      Void.ev.emit("messages.upsert", msg);
    }
    let sender = isGroup ? citel.key.participant : from;
    let ascii = LangG.ascii || ` `
    let checkon = process.env.CHATBOT
    try {
 //   let checkquoted =  !isGroup || citel.quoted.key.fromMe
      if (budy && !icmd && !isGroup && checkon === 'on') {
        let zx = querie.length;
        if (zx < 25 ) {
          var diffuser = citel.sender.split("@")[0];
          let fetchk = require("node-fetch");
          var textuser = budy
          console.log(textuser)
          let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=${diffuser}&msg=${textuser}`);
          let json = await fetchtext.json();
          console.log(json)
          let { cnt } = json;
          citel.reply(cnt);
          return;
        }
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
          apiKey: process.env.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
        const completion = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: textt,
          temperature: 0.5,
          max_tokens: 80,
          top_p: 1.0,
          frequency_penalty: 0.5,
          presence_penalty: 0.0,
          stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
      }
          }
    catch (err) {
      console.log(err)
    }

    if (!icmd) return
    //responce
    if (isMedia && citel.msg.fileSha256 && citel.msg.fileSha256.toString("base64") in global.db.sticker) {
      let hash = global.db.sticker[citel.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(citel.chat, {
        text: text,
        mentions: mentionedJid,
      }, {
        userJid: Void.user.id,
        quoted: citel.quoted && citel.quoted.fakeObj,
      });
      messages.key.fromMe = areJidsSameUser(citel.sender, Void.user.id);
      messages.key.id = citel.key.id;
      messages.pushName = citel.pushName;
      if (citel.isGroup) messages.participant = citel.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      Void.ev.emit("messages.upsert", msg);
    }
    const textImg = (textt) => {
      Void.sendMessage(citel.chat, {
        text: textt,
      }, {
        quoted: citel,
        thumbnail: fs.readFileSync("./assets/SocialLogo 1.png"),
      });
    };
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
Hello ${pushname} \n\n, this is *${LangG.title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
        LangG.title
      }*
`.trim());
    }
    if (db.users[citel.sender].afkTime > -1) {
      let user = global.db.users[citel.sender];
      reply(`
${LangG.greet} came back online from AFK${
        user.afkReason ? " after " + user.afkReason : ""
      }
In ${clockString(new Date() - user.afkTime)}
`.trim());
      user.afkTime = -1;
      user.afkReason = "";
    }
    /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

Here we are starting commands.
Check them and Edit if you want.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

*/
    switch (command) {
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "repo": {
        let buttonMessaged = {
          image: { url: 'https://camo.githubusercontent.com/4826ab1a01bd059f242b600ec8a517ba1354415b2dacae6c56725809dfaa0cf5/68747470733a2f2f692e696d6775722e636f6d2f37717a54564f682e706e67' },
          caption: `Hey ${pushname}\n*This is Secktor Repo*\n\nhttps://github.com/SecktorBot/Secktor-Md `,
          footer: ` ` + LangG.footer,
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: "Secktor-Repo",
              body: "Easy to Use",
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
      break
      case 'clearall': {
        let getGroupys = await Void.groupFetchAllParticipating();
        let groupys = Object.entries(getGroupys)
          .slice(0)
          .map((entry) => entry[1]);
        let anu = groupys.map((v) => v.id);
        for (let i of anu) {
          await sleep(1000);
          await Void.modifyChat(i, 'clear', {
              includeStarred: false
            })
            .catch(console.log)
        }
      }
      break
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'update': {
        if (!isCreator) return citel.reply(LangG.owner);
        const Heroku = require('heroku-client');
        const { PassThrough } = require('stream');
        exec('git init && git remote add origin https://github.com/SecktorBot/Secktor-Md -m --main');
        exec('git fetch --all');
        exec('git branch backup-main');
        exec('git pull origin main');
        exec('git reset --hard origin/main');
        citel.reply('Updated.')
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "jsr": {
        citel.reply(`Okey, ${pushname},\nI'll inform my master.\n\n*Thanks*`);
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tagh":
      case "htag":
      case "hidetag": {
        if (querie === "help") {
          return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${
              prefix + command
            } message \n\n*📚Description:* Tags all users by not mentioning their number`);
        }
        if (!citel.isGroup) citel.reply(LangG.group);
        if (!isBotAdmins) citel.reply(LangG.botAdmin);
        Void.sendMessage(citel.chat, {
          text: querie ? querie : "",
          mentions: participants.map((a) => a.id),
        }, {
          quoted: citel,
        });
      }
      break;
      case 'vote': {
        if (querie === 'help') {
          return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${prefix + command} Voting title \n\n*📚Description:* Starts Voting in Group`)
        }
        if (!citel.isGroup) citel.reply(LangG.group)
        if (citel.chat in vote) throw `_There are still votes in this chat!_\n\n*-deletevote* - to delete votes`
        if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Do Gagana love me`
        reply(`Voting starts!\n\n*-upvote* - for yes\n*-devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
        vote[citel.chat] = [querie, [],
        []
      ]
        await sleep(1000)
        upvote = vote[citel.chat][1]
        devote = vote[citel.chat][2]
        teks_vote = `*「 VOTE 」*

*Reason:* ${vote[citel.chat][0]}

┌〔 UPVOTE 〕

├ Total: ${vote[citel.chat][1].length}


└────

┌〔 DEVOTE 〕

├ Total: ${vote[citel.chat][2].length}


└────

*${prefix}deletevote* - to delete votes`
        let buttonsVote = [{
            buttonId: `${prefix}upvote`,
            buttonText: {
              displayText: 'Yes'
            },
            type: 1
      },
          {
            buttonId: `${prefix}devote`,
            buttonText: {
              displayText: 'No'
            },
            type: 1
      }
      ]
        let buttonMessageVote = {
          text: teks_vote,
          footer: 'Voting',
          buttons: buttonsVote,
          headerType: 1
        }
        Void.sendMessage(citel.chat, buttonMessageVote)
      }
      break
      case 'upvote': {
        if (querie === 'help') {
          return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Upvotes current voting in group`)
        }
        if (!citel.isGroup) citel.reply(LangG.group)
        if (!(citel.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
        isVote = vote[citel.chat][1].concat(vote[citel.chat][2])
        wasVote = isVote.includes(citel.sender)
        if (wasVote) throw 'You have Voted'
        vote[citel.chat][1].push(citel.sender)
        menvote = vote[citel.chat][1].concat(vote[citel.chat][2])
        teks_vote = `*「 VOTE 」*

*Reason:* ${vote[citel.chat][0]}

┌〔 UPVOTE 〕

├ Total: ${vote[citel.chat][1].length}
${vote[citel.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

┌〔 DEVOTE 〕

├ Total: ${vote[citel.chat][2].length}
${vote[citel.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

*${prefix}unvote* - to delete votes`
        let buttonsUpvote = [{
            buttonId: `${prefix}upvote`,
            buttonText: {
              displayText: 'Yes'
            },
            type: 1
      },
          {
            buttonId: `${prefix}devote`,
            buttonText: {
              displayText: 'No'
            },
            type: 1
      }
      ]
        let buttonMessageUpvote = {
          text: teks_vote,
          footer: 'Voting',
          buttons: buttonsUpvote,
          headerType: 1,
          mentions: menvote
        }
        Void.sendMessage(citel.chat, buttonMessageUpvote)
      }
      break
      case 'devote': {
        if (querie === 'help') {
          return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Devotes current voting in group`)
        }
        if (!citel.isGroup) citel.reply(LangG.group)
        if (!(citel.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
        isVote = vote[citel.chat][1].concat(vote[citel.chat][2])
        wasVote = isVote.includes(citel.sender)
        if (wasVote) throw 'You Have Already Voted Thiricano :)'
        vote[citel.chat][2].push(citel.sender)
        menvote = vote[citel.chat][1].concat(vote[citel.chat][2])
        teks_vote = `*「 VOTE 」*

*Reason:* ${vote[citel.chat][0]}

┌〔 YES ✅〕

├ Total: ${vote[citel.chat][1].length}
${vote[citel.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

┌〔 NO ❎ 〕

├ Total: ${vote[citel.chat][2].length}
${vote[citel.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

*${prefix}unvote* - to delete votes`
        let buttonsDevote = [{
            buttonId: `${prefix}upvote`,
            buttonText: {
              displayText: 'Up-Vote'
            },
            type: 1
      },
          {
            buttonId: `${prefix}devote`,
            buttonText: {
              displayText: 'De-Vote'
            },
            type: 1
      }
      ]
        let buttonMessageDevote = {
          text: teks_vote,
          footer: 'Voting',
          buttons: buttonsDevote,
          headerType: 1,
          mentions: menvote
        }
        Void.sendMessage(citel.chat, buttonMessageDevote)
      }
      break
      case 'checkvote':
        if (querie === 'help') {
          await citel.reply(`*❗Command:* ${command}\n*🧩Category:* General\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Sends info about running Vote in Group`)
          return
        };
        if (!citel.isGroup) citel.reply(LangG.group)
        if (!(citel.chat in vote)) return citel.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
        teks_vote = `*「 VOTE 」*

*Reason:* ${vote[citel.chat][0]}

┌〔 YES 〕

├ Total: ${upvote.length}
${vote[citel.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

┌〔 NO 〕

├ Total: ${devote.length}
${vote[citel.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

*${prefix}unvote* - to delete votes


©${LangG.title}
`
        Void.sendTextWithMentions(citel.chat, teks_vote, citel)
        break
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "hi":
        if (querie === "help") {
          await citel.reply(`*❗Command:*   Hi\n*🍀Aliases* ${command}\n*🧩Category:* General \n*🛠️Usage:* ${
            prefix + command
          }\n\n*📚Description:* Replies Hello.`);
          return;
        }
        const { msgFilter } = require('./lib/antispam')
        msgFilter.addFilter(citel.chat)
        citel.reply(`Hello ${pushname}`);
        break;
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "gramify":
        if (querie === "help") {
          await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -gramify\n*🧩Category:* Utils\n*🛠️Usage:* ${
            prefix + command
          } text/reply text\n\n*📚Description:* Fixes common grammar and punctuation errors.`);
          return;
        } {
          const { Configuration, OpenAIApi } = require("openai");
          const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY || "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",
          });
          const openai = new OpenAIApi(configuration);
          let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
          const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: textt,
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          citel.reply(response.data.choices[0].text);
        }
        break;
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tinyurl":
        if (querie === "help") {
          await citel.reply(`*❗Command:*  TinyUrl \n*🍀Aliases* -tinyurl\n*🧩Category:* Utils\n*🛠️Usage:* ${
            prefix + command
          } link\n\n*📚Description:* Make a long url tiny.`);
          return;
        }
        try {
          link = args[0];
          anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
          reply(`*🛡️Your Shortened URL*\n\n${anu.data}`);
        }
        catch (e) {
          emror = String(e);
          reply(`${e}`);
        }
        break;
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'deletevote':
      case 'delvote':
      case 'unvote': {
        if (querie === 'help') {
          await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -delvote,-deletevote,-unvote\n*🧩Category:* Moderation\n*🛠️Usage:* ${prefix + command} SamPandey001\n\n*📚Description:* Undos Previous Vote`)
          return
        };
        if (!citel.isGroup) citel.reply(LangG.group)
        if (!(citel.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
        delete vote[citel.chat]
        reply('Successfully Deleted Vote Session In This Group')
      }
      break
      case "quotes":
        if (querie === "help") {
          await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -quote\n*🧩Category:* Random\n*🛠️Usage:* ${
            prefix + command
          }\n\n*📚Description:* Provieds Random quote with Author.`);
          return;
        }
        try {
          quoo = await axios.get(`https://favqs.com/api/qotd`);
          const replyf = `
╔════◇
║ *🎗️Content:* ${quoo.data.quote.body}
║ *👤Author:* ${quoo.data.quote.author}
║
║ *Powered by ${LangG.title}*
╚════════════╝ `;
          await Void.sendMessage(from, {
            image: {
              url: picsecktor,
            },
            caption: replyf,
            footer: LangG.footer,
            templateButtons: [
              {
                urlButton: {
                  displayText: "⭐Web",
                  url: "https://github.com/SecktorBot/Secktor-Md",
                },
              },
            ],
          }, {
            quoted: citel,
          });
        }
        catch (err) {
          console.log(err)
          return citel.reply(`*❌ I couldn't find any quote.*`);
        }
        break;
      case 'mapp': {
        let jacku = Void.map.command
        m.reply(jacku)
      }
      break


      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'song': {
        if (!querie) return citel.reply(`Use ${prefix + command} Back in Black`);
        let ytj = require("yt-search")
        const getRandom = (ext) => {
          return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
          citel.reply(`❌ Please  tell me a song name.`);
          return;
        }
        let searchj = await ytj(text)
        let anuu = searchj.videos[0]
        let urlYt = anuu.url
        let infoYt = await ytdl.getInfo(urlYt);
        //30 MIN
        if (infoYt.videoDetails.lengthSeconds >= 3000) {
          citel.reply(`❌ Uhh ${LangG.greet}! I can't rander that long video.!`);
          return;
        }
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp4");
        const stream = ytdl(urlYt, {
            filter: (info) => info.itag == 22 || info.itag == 18,
          })
          .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= 100) {
          citel.reply(`Sending ${anuu.title} song`)
          let buttonMessage = {
            audio: fs.readFileSync(`./${randomName}`),
            fileName: titleYt + ".mp3",
            mimetype: "audio/mpeg",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: anuu.title,
                body: `${Config.botname}`,
                thumbnail: { url: searchj.videos[0].thumbnail },
                mediaType: 2,
                mediaUrl: anuu.url,
                sourceUrl: anuu.url
              }
            }
          }
          await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
        }
        else {
          citel.reply(`❌ File size bigger than 100mb.`);
        }
        fs.unlinkSync(`./${randomName}`);
      }
      break
      case 'ytmp4':
      case 'ytvideo':
      case 'ytv':
        let yts = require("yt-search")
        const getRandom = (ext) => {
          return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
          citel.reply(`❌ Please Provide Youtube url ${LangG.greet} \nSend ${prefix}ytv url`);
          return;
        }
        let urlYt = args[0];
        if (!urlYt.startsWith("http")) {
          citel.reply(`❌ Please Provide Youtube url ${LangG.greet}!`);
          return;
        }
        let infoYt = await ytdl.getInfo(urlYt);
        //30 MIN
        if (infoYt.videoDetails.lengthSeconds >= 3000) {
          citel.reply(`❌ Uhh ${LangG.greet}! I can't rander that long video.!`);
          return;
        }
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp4");
        const stream = ytdl(urlYt, {
            filter: (info) => info.itag == 22 || info.itag == 18,
          })
          .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= 100) {
          let search = await yts(text)
          let anu = search.videos[0]
          let buttonMessage = {
            video: fs.readFileSync(`./${randomName}`),
            caption: `Title-${titleYt}\n\n*_Powered by ${LangG.title}_*`,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: anu.title,
                body: `${Config.botname}`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: anu.url,
                sourceUrl: anu.url
              }
            }
          }
          Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
        }
        else {
          citel.reply(`❌ File size bigger than 100mb.`);
        }
        fs.unlinkSync(`./${randomName}`);
        break
      case 'ytmp3': {
        let yts = require("yt-search")
        const getRandom = (ext) => {
          return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
          reply(`❌ Please Provide url ${LangG.greet} \nSend ${prefix}yta url`);
          return;
        }
        let urlYt = args[0];
        if (!urlYt.startsWith("http")) {
          reply(`❌ Please Provide Youtube url ${LangG.greet}`);
          return;
        }
        let infoYt = await ytdl.getInfo(urlYt);
        //30 MIN
        if (infoYt.videoDetails.lengthSeconds >= 3000) {
          reply(`❌ Uhh ${LangG.greet}! I can't rander that long audio.`);
          return;
        }
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        const stream = ytdl(urlYt, {
            filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
          })
          .pipe(fs.createWriteStream(`./${randomName}`));
        //  console.log("Audio downloading ->", urlYt);
        // reply("Downloading.. This may take upto 5 min!");
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let search = await yts(text)
        let anu = search.videos[0]
        // Convert the file size to megabytes (optional)
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        //  console.log("Audio downloaded ! Size: " + fileSizeInMegabytes);
        if (fileSizeInMegabytes <= 60) {
          let buttonMessage = {
            audio: fs.readFileSync(`./${randomName}`),
            fileName: titleYt + ".mp3",
            mimetype: "audio/mpeg",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: anu.title,
                body: `${Config.botname}`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: anu.url,
                sourceUrl: anu.url
              }
            }
          }
          Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
        }
        else {
          reply(`❌ That's larger than 60mb ${LangG.greet}.`);
        }
        fs.unlinkSync(`./${randomName}`);
      }
      break
      case "fact": {
        await axios.get(`https://nekos.life/api/v2/fact`)
          .then((response) => {
            const tet = `*Fact:* ${response.data.fact}\n\n*Powered by ${LangG.title} 𝐌𝐝*`;
            Void.sendMessage(from, {
              image: {
                url: picsecktor,
              },
              caption: tet,
              footer: LangG.footer,
              templateButtons: [
                {
                  urlButton: {
                    displayText: "⭐Web",
                    url: "https://github.com/SecktorBot/Secktor-Md",
                  },
                  },
                ],
            }, {
              quoted: citel,
            });
          })
          .catch((err) => {
            citel.reply(`✖  An error occurred.`);
          })
          .catch((err) => {
            citel.reply(`Uhh,Got an Error ✖.`);
          });
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "shell":
        if (querie === "help") {
          await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -shell\n*🧩Category:* Utils\n*🛠️Usage:* ${
            prefix + command
          } command\n\n*📚Description:* Runs command in heroku shell`);
          return;
        }
        if (!isCreator) return citel.reply("*This command is only for my Owner*");
        if (!querie) return;
        exec(querie, (err, stdout) => {
          if (err) return reply(`${err}`);
          if (stdout) {
            reply(`•-----${LangG.title}-Terminal-----•\n\n${stdout}`);
          }
        });
        break;
      case 'logs': {
        exec(`heroku logs -a ${Config.HEROKU.APP_NAME}`, (err, stdout) => {
          if (err) return reply(`${err}`);
          if (stdout) {
            reply(`•-----${LangG.title}-Logs-----•\n\n${stdout}`);
          }
        });
      }
      break
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'igdl':
      case 'instagram': {
        if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
        try {
          hx.igdl(args[0])
            .then(async (resed) => {
              ini_anu = []
              anu_list = []
              textbv = `*| INSTAGRAM DOWNLOADER |*\n\n✨ Username : ${resed.user.username ? resed.user.name : "ZERO-TWO BOTTO"}\n✨ Followers : ${resed.user.followers}`
              urut = 1
              for (let i = 0; i < resed.medias.length; i++) {
                ini_anu.push({
                  "type": resed.medias[i].fileType,
                  "url": resed.medias[i].url
                })
              }
              ilod = 1
              for (let i of ini_anu) {
                anu_list.push({ buttonId: `-ig ${i.type} ${i.url}`, buttonText: { displayText: `Media ${ilod++}` }, type: 1 })
              }
              textbv += `\n\n_Select the media below to download_`
              let buttons = anu_list
              let buttonMessage = {
                image: log0,
                jpegThumbnail: thum,
                caption: textbv,
                footer: `${LangG.title}`,
                buttons: buttons,
                headerType: 4
              }
              Void.sendMessage(from, buttonMessage, { quoted: citel })
            })
        }
        catch (err) {
          reply(String(err))
        }
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'ig': {
        if (args[0] === "mp4") {
          Void.sendMessage(from, { video: { url: args[1] }, caption: 'Done!', mimetype: 'video/mp4' }, { quoted: citel })
        }
        else if (args[0] === "jpg") {
          Void.sendMessage(from, { image: { url: args[1] }, caption: 'Done!' }, { quoted: citel })
        }
        else {
          reply(" Error! ")
        }
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'mp4': {
        if (!args[0]) return reply(`Where's the link ?`)
        try {
          Void.sendMessage(from, {
            video: { url: args[0] },
            caption: "Succes",
            contextInfo: {
              externalAdReply: {
                title: `${LangG.title}`,
                body: `${Config.ownername}`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://ZeroTwoMd.tech`,
                sourceUrl: `https://ZeroTwoMd.tech`
              }
            }
          }, { quoted: citel })
        }
        catch {
          reply("Link error!")
        }
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'jpeg': {
        if (!args[0]) return reply(`Where's the link?`)
        try {
          Void.sendMessage(from, {
            image: { url: args[0] },
            caption: "Succes",
            contextInfo: {
              externalAdReply: {
                title: `${LangG.title}`,
                body: `${LangG.title}`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://ZeroTwoMd.tech`,
                sourceUrl: `https://ZeroTwoMd.tech`
              }
            }
          }, { quoted: citel })
        }
        catch {
          reply("Link error")
        }
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'twitter':
      case 'twdl':
      case 'twmp4': {
        if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/lol/status/15177`)
        try {
          let lotwit = await aiovideodl(args[0])
          textt = `*TWITTER DOWNLOADER*
        Caption : ${lotwit.title ? lotwit.title : "undefined"}
        Type : ${lotwit.medias[1].extension}
        Size : ${lotwit.medias[1].formattedSize}
        Link : ${lotwit.medias[1].url}
        _Choose the video quality below by clicking the button_`
          let buttons = [
            { buttonId: `${prefix}twddl ${lotwit.medias[0].url}`, buttonText: { displayText: `Quality ${lotwit.medias[0].quality}` }, type: 1 },
            { buttonId: `${prefix}twddl ${lotwit.medias[2].url}`, buttonText: { displayText: `Quality ${lotwit.medias[2].quality}` }, type: 1 }
        ]
          let buttonMessage = {
            video: { url: lotwit.medias[1].url },
            caption: textt,
            footer: `${pushname}`,
            buttons: buttons,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: `${LangG.title}`,
                body: lotwit.title ? lotwit.title : "Twitter Downloader",
                thumbnail: log0,
                mediaType: 1,
                mediaUrl: args[0],
                sourceUrl: args[0]
              }
            }
          }
          Void.sendMessage(from, buttonMessage, { quoted: citel })
        }
        catch {
          reply("Secktor could not find that!")
        }
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'twddl': {
        let buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'Menu🪄' }, type: 1 }
        ]
        let buttonMessage = {
          video: { url: args[0] },
          caption: "Done!",
          footer: `${pushname}`,
          buttons: buttons,
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: `${LangG.title}`,
              body: "Twitter Downloader",
              thumbnail: log0,
              mediaType: 1,
              mediaUrl: args[0],
              sourceUrl: args[0]
            }
          }
        }
        Void.sendMessage(from, buttonMessage, { quoted: citel })
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'facebook':
      case 'fbdl':
      case 'fbmp4':
      case 'fb': {
        if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
        try {
          let resd = await aiovideodl(args[0])
          textt = `*| FACEBOOK DOWNLOADER |*
        Type : video/${resd.medias[0].extension}
        Quality : ${resd.medias[0].quality}
        Size : ${resd.medias[0].formattedSize}
        _For HD quality you can click the button below_`
          let buttons = [
            { buttonId: `${prefix}fbddl ${resd.medias[1].url}`, buttonText: { displayText: 'QualityHD' }, type: 1 }
        ]
          let buttonMessage = {
            video: { url: resd.medias[0].url },
            caption: textt,
            footer: `${pushname}`,
            buttons: buttons,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: `${LangG.title}`,
                body: "facebook downloader",
                thumbnail: log0,
                mediaType: 1,
                mediaUrl: args[0],
                sourceUrl: args[0]
              }
            }
          }
          Void.sendMessage(from, buttonMessage, { quoted: citel })
        }
        catch {
          reply("Secktor could not find that!")
        }
      }
      break
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "grouplink":
      case "glink": {
        if (querie === "help") {
          await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -gclink,-grouplink\n*🧩Category:* Moderation\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends Group current group link if bot is admin`);
          return;
        }
        if (!isBotAdmins) return citel.reply(LangG.botAdmin);
        if (!citel.isGroup) return citel.reply(LangG.group);
        let response = await Void.groupInviteCode(citel.chat);
        Void.sendMessage(citel.chat, {
          text: `🎀Group Link ${groupMetadata.subject} : \n✨https://chat.whatsapp.com/${response}       *Powered by ${LangG.title}*`,
          contextInfo: {
            mimetype: "image/jpeg",
            text: `${Config.ownername}`,
            forwardingScore: 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            externalAdReply: {
              title: LangG.BotName,
              body: `Spread this group link ${LangG.greet}`,
              previewType: "PHOTO",
              thumbnailUrl: thum,
              thumbnail: log0,
              sourceUrl: ``,
            },
          },
        }, {
          quoted: citel,
          detectLink: true,
        });
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'ins': {
        const getRandom = (ext) => {
          return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        await new sck({ id: getRandom, url: q })
          .save()
        citel.reply('added plugin in mongodb\nRestart bot to take effect.')
      }
      break
      case "listadmin":
      case "admin":
        if (querie === "help") {
          await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -admin,-listadmin\n*🧩Category:* Utils\n*🛠️Usage:* ${
            prefix + command
          }\n\n*📚Description: Sends Current list of Admins`);
          return;
        }
        if (!citel.isGroup) return citel.citel.reply(LangG.group);
        teks2 = `List Of Admins *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`;
        no = 0;
        for (let admon of groupAdmins) {
          no += 1;
          teks2 += `[${no.toString()}] @${admon.split("@")[0]}\n`;
        }
        Void.sendTextWithMentions(citel.chat, teks2, citel);
        break;
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ssweb":
        if (querie === "help") {
          await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -ssweb\n*🧩Category:* Utils\n*🛠️Usage:* ${
            prefix + command
          } Website URL\n\n*📚Description:* Send SS of web in Mobile Format.`);
          return;
        }
        try {
          if (!querie) return citel.reply(`Example : ${prefix + command} https://google.com`);
          citel.citel.reply(LangG.wait);
          Void.sendMessage(citel.chat, {
            image: {
              url: `http://hadi-api.herokuapp.com/api/ssweb?url=${querie}&device=desktop&full=on`,
            },
            caption: `Here we go`,
          }, { quoted: citel });
        }
        catch (e) {
          citel.reply(`*Url invalid ${LangG.greet}*`);
        }
        break;
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "listpc": {
        if (querie === "help") {
          await citel.reply(`*❗Command:*  Personal Chats\n*🍀Aliases* -listpc\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends information of all your personal chats.`);
          return;
        }
        if (!isBotAdmins) citel.reply(LangG.botAdmin);
        let anu = await store.chats.all()
          .filter((v) => v.id.endsWith(".net"))
          .map((v) => v.id);
        let textt = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`;
        for (let i of anu) {
          let nama = store.messages[i].array[0].pushName;
          textt += `⬡ *Name :* ${nama}\n⬡ *User :* @${
            i.split("@")[0]
          }\n⬡ *Chat :* https://wa.me/${
            i.split("@")[0]
          }\n\n────────────────────────\n\n`;
        }
        Void.sendTextWithMentions(citel.chat, textt, citel);
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "listgc": {
        if (querie === "help") {
          await citel.reply(`*❗Command:*  Group Chats\n*🍀Aliases* -listgc\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends information of all your group chats.`);
          return;
        }
        if (!isBotAdmins) citel.reply(LangG.botAdmin);
        let anu = await store.chats.all()
          .filter((v) => v.id.endsWith("@g.us"))
          .map((v) => v.id);
        let textt = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`;
        for (let i of anu) {
          let metadata = await Void.groupMetadata(i);
          textt += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${
            metadata.owner.split("@")[0]
          }\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(
            metadata.creation * 1000
          )
            .tz("Asia/Kolkata")
            .format("DD/MM/YYYY HH:mm:ss")}\n⬡ *Member :* ${
            metadata.participants.length
          }\n\n────────────────────────\n\n`;
        }
        Void.sendTextWithMentions(citel.chat, textt, citel);
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "listonline":
      case "onlinelist":
      case "here": {
        if (querie === "help") {
          await citel.reply(`*❗Command:*  List Online\n*🍀Aliases* -listgc\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends information of all your group chats.`);
          return;
        }
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : citel.chat;
        let online = [...Object.keys(store.presences[id]), botNumber];
        Void.sendText(citel.chat, `My Sweet Online ${LangG.greet}s are :\n\n` + online.map((v) => "✧ @" + v.replace(/@.+/, ""))
          .join`\n`, citel, {
            mentions: online,
          });
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      /*
  case 'toimg': {
  if(citel.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                    if (!quoted) return citel.reply(`Uhh,Please reply to any image or videot`)
              if (!/webp/.test(mime)) return citel.reply(`Uhh,Please reply to any image or video`)
              citel.reply("wait your request is under process")
              let media = await Void.downloadAndSaveMediaMessage(quoted)
              let ran = await getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media)
                  if (err) citel.reply(err)
                  let buffer = fs.readFileSync(ran)
                  Void.sendMessage(citel.chat, { image: buffer,caption:'*Powered by Genos-Md*' }, { quoted: citel })
                  fs.unlinkSync(ran)
              })
  } else if (citel.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true){
              if (!quoted) return citel.reply(`Uhh,Please reply to any image or video`)
              if (!/webp/.test(mime)) return citel.reply(`Uhh,Please reply to any image or video`)
              citel.reply("wait your request is under process")
      let { webp2mp4File } = require('./lib/uploader')
              let media = await Void.downloadAndSaveMediaMessage(quoted)
              let webpToMp4 = await webp2mp4File(media)
              await Void.sendMessage(citel.chat, { video: { url: webpToMp4.result, caption: '*Powered by Genos-Md*' }, gifPlayback: true }, { quoted: citel })
              await fs.unlinkSync(media)
  }

          }
break
*/
      case "support":
        if (querie === "help") {
          await citel.reply(`*❗Command:*  Support\n*🍀Aliases* -support\n*🧩Category:* Moderation\n*🛠️Usage:* ${
            prefix + command
          }\n\n*📚Description:*Sends main Secktor Group link into pm`);
          return;
        }
        citel.reply(`*Check your Pm ${LangG.greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
          image: fs.readFileSync("./assets/SocialLogo 1.png"),
          caption: `*Group Name: Secktor-Support*\n*Group Link:* https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC`,
        });
        break;
        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'pinterest':
      case 'pint': {
        if (querie === 'help') {
          await citel.reply(`*❗Command:*   Pinterest\n*🍀Aliases* pinterest,pint\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} query\n\n*📚Description:* Searches given query onto Pinterest and Gives image result.`)
          return
        };
        if (!args.join(" ")) return reply("What picture are you looking for?")
        try {
          hx.pinterest(args.join(" "))
            .then(async (res) => {
              imgnyee = res[Math.floor(Math.random() * res.length)]
              let buttons = [

                {
                  buttonId: `${prefix}pint ${args.join(" ")}`,
                  buttonText: {
                    displayText: 'Next Image🎀'
                  },
                  type: 1
            }

          ]
              let buttonMessage = {
                image: {
                  url: imgnyee
                },
                caption: ` `,
                footer: LangG.footer,
                buttons: buttons,
                headerType: 4,
                contextInfo: {
                  externalAdReply: {
                    title: `Here it is✨`,
                    body: `${Config.ownername}`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``
                  }
                }
              }
              Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel
              })
            })
            .catch(_ => _)
        }
        catch {
          reply("Error")
        }
      }
      break
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "jid":
        if (querie === "help") {
          await citel.reply(`*❗Command:* Jid \n*🍀Aliases* -jid\n*🧩Category:* Utils🛠️Usage:* ${
            prefix + command
          }\n\n*📚Description:* Provides chat id of current chat.`);
          return;
        }
        citel.reply(`Jid of current Group is \n\n${citel.chat}`);
        break;
      case "google": {
        if (querie === "help") {
          await citel.reply(`*❗Command:* Google \n*🍀Aliases* -google\n*🧩Category:* Search\n*🛠️Usage:* ${
              prefix + command
            } query\n\n*📚Description:* Searches gives query on Google and provides text result.`);
          return;
        }
        if (!text) return citel.reply(`Example : ${prefix + command} ${LangG.title} Bot`);
        let google = require("google-it");
        google({ query: text })
          .then((res) => {
            let textt = `*Google Search From* : ${text}\n\n`;
            for (let g of res) {
              textt += ` *Title* : ${g.title}\n`;
              textt += ` *Description* : ${g.snippet}\n`;
              textt += ` *Link* : ${g.link}\n\n━━━━━━━━━━━━━━━━━━━\n\n`;
            }
            citel.reply(textt);
          });
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'reply': {
        let nnnnn = args[0]
        Void.sendMessage(nnnnn + '@s.whatsapp.net', {
          text: querie.slice(1, 8),
        });
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "mp4dl": {
        if (!args[0]) return reply(`Where is the link ${LangG.greet}?`);
        try {
          Void.sendMessage(from, {
            video: {
              url: args[0],
            },
            caption: "With love from Secktor✨",
            contextInfo: {
              externalAdReply: {
                title: LangG.BotName,
                body: `${Config.ownername}`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          }, {
            quoted: citel,
          });
        }
        catch {
          reply("Link error!");
        }
      }
      break;
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      /*
    case 'igstory':
    case 'instagramstory': {
      if (!args[0]) return reply(`Example :\n${prefix + command} deff.xyz`)
      try {
        hx.igstory(args[0]).then(async (resed) => {
          ini_anu = []
          anu_list = []
          textbv = `*| INSTAGRAM STORY |*\n\n✨ Username : ${resed.user.username ? resed.user.name : "${LangG.title}"}\n✨ Followers : ${resed.user.followers}`
          urut = 1
          for (let i = 0; i < resed.medias.length; i++) {
            ini_anu.push({
              "type": resed.medias[i].fileType,
              "url": resed.medias[i].url
            })
          }
          ilod = 1
          for (let i of ini_anu) {
            anu_list.push({
              buttonId: `-ig ${i.type} ${i.url}`,
              buttonText: {
                displayText: `Download ${ilod++}`
              },
              type: 1
            })
          }
          textbv += `\n\n_Select the media below to download_`
          let buttons = anu_list
          let buttonMessage = {
            image: log0,
            jpegThumbnail: thum,
            caption: textbv,
            footer: LangG.footer,
            buttons: buttons,
            headerType: 4
          }
          Void.sendMessage(from, buttonMessage, {
            quoted: citel
          })
        })
      } catch (err) {
        reply(String(err))
      }
    }
      break
    case 'igdl':
    case 'instagram': {
      if (querie === 'help') {
        await citel.reply(`*❗Command:*   Instagram\n*🍀Aliases* ${prefix + command} -instagram\n*🧩Category:* Downloader\n*🛠️Usage:* ${prefix + command} instagram link\n\n*📚Description:* Downloads post from Instagram and Sends that in chat.`)
        return
      };
      if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
      try {
        hx.igdl(args[0]).then(async (resed) => {
          ini_anu = []
          anu_list = []
          textbv = `*| INSTAGRAM DOWNLOADER |*\n\n✨ Username : ${resed.user.username ? resed.user.name : "Secktor BOTTO"}\n✨ Followers : ${resed.user.followers}`
          urut = 1
          for (let i = 0; i < resed.medias.length; i++) {
            ini_anu.push({
              "type": resed.medias[i].fileType,
              "url": resed.medias[i].url
            })
          }
          ilod = 1
          for (let i of ini_anu) {
            anu_list.push({
              buttonId: `-ig ${i.type} ${i.url}`,
              buttonText: {
                displayText: `Media ${ilod++}`
              },
              type: 1
            })
          }
          textbv += `\n\n_Select the media below to download_`
          let buttons = anu_list
          let buttonMessage = {
            image: log0,
            jpegThumbnail: thum,
            caption: textbv,
            footer: LangG.footer,
            buttons: buttons,
            headerType: 4
          }
          Void.sendMessage(from, buttonMessage, {
            quoted: citel
          })
        })
      } catch (err) {
        reply(String(err))
      }
    }
      break
    case 'ig': {
      if (querie === 'help') {
        await citel.reply(`*❗Command:*   Instagram\n*🍀Aliases* ${prefix + command} -instagram\n*🧩Category:* Downloader\n*🛠️Usage:* ${prefix + command} instagram link\n\n*📚Description:* Downloads post from Instagram and Sends that in chat.`)
        return
      };
      if (args[0] === "mp4") {
        Void.sendMessage(from, {
          video: {
            url: args[1]
          },
          caption: 'Done!',
          mimetype: 'video/mp4'
        }, {
          quoted: citel
        })
      } else if (args[0] === "jpg") {
        Void.sendMessage(from, {
          image: {
            url: args[1]
          },
          caption: 'Done!'
        }, {
          quoted: citel
        })
      } else {
        reply(" Error! ")
      }
    }
      break
      */
      //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      /*
    case 'lyrics':
      if (querie === 'help') {
        await citel.reply(`*❗Command:*  Lyrics\n*🍀Aliases* -lyrics\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} Song Name\n\n*📚Description:* Searches given song and sends lyrics in chat.`)
        return
      };
      if (!querie) return reply(`Use ${prefix + command} Song Name ${LangG.greet}`)
      const Genius = require("genius-lyrics")
      const Client = new Genius.Client();
      const searches = await Client.songs.search(querie);

      // Pick first one
      const firstSong = searches[0];
      //console.log("Song Info:\n", firstSong, "\n");

      // Ok lets get the lyrics
      const lyrics = await firstSong.lyrics();
      //console.log("Lyrics:\n", lyrics, "\n");



      Void.sendMessage(citel.chat, {
        text: lyrics,
        contextInfo: {
          externalAdReply: {
            title: '${LangG.title}',
            body: firstSong.title,
            thumbnail: await getBuffer(firstSong.thumbnail),

          }
        }
      }, {
        quoted: citel
      })

      break
      */
      case "igstory":
        if (querie === "help") {
          await citel.reply(`*❗Command:*  Insta Story\n*🍀Aliases* -igstory\n*🧩Category:* Downloader\n*🛠️Usage:* ${
            prefix + command
          } story link\n\n*📚Description:* Downloads story from Instagram.`);
          return;
        }
        if (!querie) return reply("Username?");
        hx.igstory(querie)
          .then(async (result) => {
            for (let i of result.medias) {
              if (i.url.includes("mp4")) {
                let link = await getBuffer(i.url);
                Void.sendMessage(from, link, video, {
                  quoted: mek,
                  caption: `Type : ${i.type}`,
                });
              }
              else {
                let link = await getBuffer(i.url);
                Void.sendMessage(from, link, image, {
                  quoted: mek,
                  caption: `Type : ${i.type}`,
                });
              }
            }
          });
        break;
      default:
        /*
      Void.sendMessage(citel.chat, {
        text: `*𝑵𝒐 𝑺𝒖𝒄𝒉 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒔*.\n𝑼𝒔𝒆 *𝒉𝒆𝒍𝒑* 𝒕𝒐 𝒔𝒆𝒆 𝑯𝒆𝒍𝒑 𝑳𝒊𝒔𝒕.`
      }, {
        quoted: citel
      })
      */
        if (icmd && budy.toLowerCase() != undefined) {
          if (citel.chat.endsWith("broadcast")) return;
          if (citel.isBaileys);
          let msgs = global.db.database;
          if (!(budy.toLowerCase() in msgs)) return;
          Void.copyNForward(citel.chat, msgs[budy.toLowerCase()], true);
        }
    }
  }
  catch (err) {
    console.log(util.format(err));
  }
  let file = require.resolve(__filename);
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Secktor is Updating ${__filename}`));
    delete require.cache[file];
    require(file);
  });
}
