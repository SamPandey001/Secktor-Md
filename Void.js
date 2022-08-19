  /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

░██████╗███████╗░█████╗░██╗░░██╗████████╗░█████╗░██████╗░
██╔════╝██╔════╝██╔══██╗██║░██╔╝╚══██╔══╝██╔══██╗██╔══██╗
╚█████╗░█████╗░░██║░░╚═╝█████═╝░░░░██║░░░██║░░██║██████╔╝
░╚═══██╗██╔══╝░░██║░░██╗██╔═██╗░░░░██║░░░██║░░██║██╔══██╗
██████╔╝███████╗╚█████╔╝██║░╚██╗░░░██║░░░╚█████╔╝██║░░██║
╚═════╝░╚══════╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝
      𝗯𝘆 𝗦𝗮𝗺𝗣𝗮𝗻𝗱𝗲𝘆𝟬𝟬𝟭
      Made with ❤️ and JavaScript.

      ✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕
      This is our Support Group- https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC or gg.gg/Secktor
      Feel free to ask any problem,error or anything
      in our SUPPORT GROUP.
      Our Moderators and Devs will respond you as quick as they can.

      Bot will not be working in our Support Group if you enable it you'll be kicked.
      Join Offtopoic to use bots and ask anything not related to Secktor.
      ✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕✕
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
const { color, bgcolor } = require("./lib/color");
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
const {Support} = require('./lib/myfunc')
const { Character } = require('mailist')
const { Anime, Manga } = require("@shineiichijo/marika");
const os = require("os");
const { aiovideodl } = require("./lib/sscraper.js");
const moment = require("moment-timezone");
const { JSDOM } = require("jsdom");
const { mediafire } = require("./lib/mediafire.js");
const { log, pint, bgPint } = require("./lib/langcolor");
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
let { msgFilter } = require("./lib/antispam");
global.db = JSON.parse(fs.readFileSync("./lib/database.json"));
let vote = db.others.vote = []
/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
██╗░░░░░░█████╗░███╗░░██╗░██████╗░██╗░░░██╗░█████╗░░██████╗░███████╗
██║░░░░░██╔══██╗████╗░██║██╔════╝░██║░░░██║██╔══██╗██╔════╝░██╔════╝
██║░░░░░███████║██╔██╗██║██║░░██╗░██║░░░██║███████║██║░░██╗░█████╗░░
██║░░░░░██╔══██║██║╚████║██║░░╚██╗██║░░░██║██╔══██║██║░░╚██╗██╔══╝░░
███████╗██║░░██║██║░╚███║╚██████╔╝╚██████╔╝██║░░██║╚██████╔╝███████╗
╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚══════╝
Here we get text avilabe is string fromat in ./Themes
Whicb bot uses for texts and themes.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
let Language = require("./lib/string");
let LangU = Language.getString("updater");
let LangG = Language.getString("global");
let LangErr = Language.getString("err");
const greet = LangG.greet;
const mongoose = require("mongoose");
const { sck1, RandomXP, sck } = require("./lib/core");
const elong = String.fromCharCode(8206);
const readmore = elong.repeat(4001);
const turbrek = `break`;
global.wlcm = [];
Levels.setURL(mongodb);
console.log("Connected to the Database")
//const Header = process.env.HEADER || "*𝑍𝑒𝑟𝑜 𝑇𝑤𝑜 𝐵𝑜𝑡*";
//const Footer = process.env.FOOTER || "*𝚂𝚊𝚖𝙿𝚊𝚗𝚍𝚎𝚢𝟶𝟶𝟷*";
hit_today = [];
global.hit = {};
/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
███████╗██╗░░██╗██████╗░░█████╗░██████╗░████████╗██╗███╗░░██╗░██████╗░
██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║████╗░██║██╔════╝░
█████╗░░░╚███╔╝░██████╔╝██║░░██║██████╔╝░░░██║░░░██║██╔██╗██║██║░░██╗░
██╔══╝░░░██╔██╗░██╔═══╝░██║░░██║██╔══██╗░░░██║░░░██║██║╚████║██║░░╚██╗
███████╗██╔╝╚██╗██║░░░░░╚█████╔╝██║░░██║░░░██║░░░██║██║░╚███║╚██████╔╝
╚══════╝╚═╝░░╚═╝╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░
Here we are exporting,Main Function "Void".
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
module.exports = Void = async (Void, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
   var budy = typeof m.text == "string" ? m.text : "";
   const prefix = global.prefa;
    const icmd = body.startsWith(prefix);
    const isCmd =
      prefix.includes(body != "" && body.slice(0, 1)) && body.slice(1) != "";
    const command = isCmd
      ? body.slice(1).trim().split(" ")[0].toLowerCase()
      : "";
    const args = body.trim().split(/ +/).slice(1);
    //const pushname = m.pushName || "No Name";
    const botNumber = await Void.decodeJid(Void.user.id);
    const isCreator = [botNumber, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const itsMe = m.sender == botNumber ? true : false;
    const botName = LangG.title; // "𝐙𝐞𝐫𝐨 𝐓𝐰𝐨 𝐌𝐝"
    const ter = args.join(" ");
    const isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const from = current = m.chat;
    const content = JSON.stringify(m.message);
    const isMedias = m.mtype === "imageMessage" || m.mtype === "videoMessage";
    const isQuotedImage =
      m.mtype === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      m.mtype === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      m.mtype === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      m.mtype === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedLoca =
      m.mtype === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedContact =
      m.mtype === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocs =
      m.mtype === "extendedTextMessage" && content.includes("documentMessage");
    const isQuotedTeks =
      m.mtype === "extendedTextMessage" && content.includes("quotedMessage");
    const isQuotedTag =
      m.mtype === "extendedTextMessage" && content.includes("mentionedJid");
    const isQuotedProd =
      m.mtype === "extendedTextMessage" && content.includes("productMessage");
    const isQuotedReply =
      m.mtype === "extendedTextMessage" && content.includes("Message");
   // This is for changing texts in mono style in whatsapp
      function monospace(string) {
      return "```" + string + "```";
    }
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    //group vars\\
    const isGroup = m.chat.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await Void.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const mentionByTag =
      m.mtype == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];

 //     ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
 //         Blocking commmands in Pm.
//      ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    //if(icmd&&!m.isGroup) return m.reply("_Sorry ${LangG.greet},using commands are not allowed in Dm_\n\n*https://chat.whatsapp.com/JcBzjRIxM5UHfuJbt0KrWt*")
    const pushname = m.pushName || "No Name";
    let totalhit = require("util").inspect(hit.all);
    if (icmd) {
      axios
        .get("https://api.countapi.xyz/hit/sampandey001/visits")
        .then(({ data }) => (hit.all = data.value));
    }
    hit_today.push(command);
    let all = require("util").inspect(hit.all);
    let Menu_Text =
      process.env.Menu_Text || `I am *${LangG.title}* ♥️.\n My prefix is "${prefix}"\n`;
        //////////Block-in-moderation-Group//////////
 if(m.sender!=="919628516236@s.whatsapp.net" && m.chat ==="120363025246125888@g.us") return
/*

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░█▀▀█ ▀█▀ ░█▀▀█ 　 ▀█▀ ░█▄─░█ 　 ─█▀▀█ ░█▀▀█ ░█▀▀█ ─█▀▀█ ░█──░█
░█▄▄█ ░█─ ░█─── 　 ░█─ ░█░█░█ 　 ░█▄▄█ ░█▄▄▀ ░█▄▄▀ ░█▄▄█ ░█▄▄▄█
░█─── ▄█▄ ░█▄▄█ 　 ▄█▄ ░█──▀█ 　 ░█─░█ ░█─░█ ░█─░█ ░█─░█ ──░█──
At this part we are storing our urls, fetched from ./Themes/FileName
to use as image,you can increase this limit to infinity just be careful to put urls in every theme avilable.............
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/

    let todlink = [
      `${LangG.pic1}`,
      `${LangG.pic2}`,
      `${LangG.pic3}`,
      `${LangG.pic4}`,
      `${LangG.pic5}`,
      `${LangG.pic6}`,
    ];

    let picsecktor = todlink[Math.floor(Math.random() * todlink.length)];
  /*  let giflink = [
      `${LangG.pic1}`,
      `${LangG.pic2}`,
      `${LangG.pic3}`,
      `${LangG.pic4}`,
      `${LangG.pic5}`,
      `${LangG.pic6}`,
    ];

    let giffy = giflink[Math.floor(Math.random() * giflink.length)];
    */
    let numJid = m.sender
    let num_split = `${numJid.split("@s.whatsapp.net")[0]}`;
    /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
██╗░░░░░███████╗██╗░░░██╗███████╗██╗░░░░░██╗░░░░░██╗███╗░░██╗░██████╗░
██║░░░░░██╔════╝██║░░░██║██╔════╝██║░░░░░██║░░░░░██║████╗░██║██╔════╝░
██║░░░░░█████╗░░╚██╗░██╔╝█████╗░░██║░░░░░██║░░░░░██║██╔██╗██║██║░░██╗░
██║░░░░░██╔══╝░░░╚████╔╝░██╔══╝░░██║░░░░░██║░░░░░██║██║╚████║██║░░╚██╗
███████╗███████╗░░╚██╔╝░░███████╗███████╗███████╗██║██║░╚███║╚██████╔╝
╚══════╝╚══════╝░░░╚═╝░░░╚══════╝╚══════╝╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░
Here we are setting Levelling,With help of Module discord-Xp  https://www.npmjs.com/package/discord-xp
Works with MongoDb so no data loss.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/

    if (icmd) {
      const randomXp = 8;
      const hasLeveledUp = await Levels.appendXp(m.sender, "RandomXP", randomXp);
      if (hasLeveledUp) {
        const sck1 = await Levels.fetch(m.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "GOD";
        if (lvpoints <= 2) {
          var role = "🏳Citizen";
        } else if (lvpoints <= 4) {
          var role = "👼Baby Wizard";
        } else if (lvpoints <= 6) {
          var role = "🧙‍♀️Wizard";
        } else if (lvpoints <= 8) {
          var role = "🧙‍♂️Wizard Lord";
        } else if (lvpoints <= 10) {
          var role = "🧚🏻Baby Mage";
        } else if (lvpoints <= 12) {
          var role = "🧜Mage";
        } else if (lvpoints <= 14) {
          var role = "🧜‍♂️Master of Mage";
        } else if (lvpoints <= 16) {
          var role = "🌬Child of Nobel";
        } else if (lvpoints <= 18) {
          var role = "❄Nobel";
        } else if (lvpoints <= 20) {
          var role = "⚡Speed of Elite";
        } else if (lvpoints <= 22) {
          var role = "🎭Elite";
        } else if (lvpoints <= 24) {
          var role = "🥇Ace I";
        } else if (lvpoints <= 26) {
          var role = "🥈Ace II";
        } else if (lvpoints <= 28) {
          var role = "🥉Ace Master";
        } else if (lvpoints <= 30) {
          var role = "🎖Ace Dominator";
        } else if (lvpoints <= 32) {
          var role = "🏅Ace Elite";
        } else if (lvpoints <= 34) {
          var role = "🏆Ace Supreme";
        } else if (lvpoints <= 36) {
          var role = "💍Supreme I";
        } else if (lvpoints <= 38) {
          var role = "💎Supreme Ii";
        } else if (lvpoints <= 40) {
          var role = "🔮Supreme Master";
        } else if (lvpoints <= 42) {
          var role = "🛡Legend III";
        } else if (lvpoints <= 44) {
          var role = "🏹Legend II";
        } else if (lvpoints <= 46) {
          var role = "⚔Legend";
        } else if (lvpoints <= 55) {
          var role = "🐉Immortal";
        }  else {
          var role = "Kiddo";
        }
        await Void.sendMessage(
          m.chat,
          {
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
          },
          {
            quoted: m,
          }
        );
      }
    }
/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░█████╗░██╗░░░██╗████████╗░█████╗░  ██████╗░██████╗░
██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗  ██╔══██╗██╔══██╗
███████║██║░░░██║░░░██║░░░██║░░██║  ██████╔╝██████╔╝
██╔══██║██║░░░██║░░░██║░░░██║░░██║  ██╔═══╝░██╔═══╝░
██║░░██║╚██████╔╝░░░██║░░░╚█████╔╝  ██║░░░░░██║░░░░░
╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░░╚════╝░  ╚═╝░░░░░╚═╝░░░░░
Just Put this true and Set Role Model. It will change profle pic at every 4th min
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/

    if (process.env.AUTO_PP === "true")
    {
console.log("changing Profile Pic is enabled.")
        setInterval(() => {
          console.log("changing Profile Pic")
            let gis = require("g-i-s");
		 gis("zero-Two", async (error, result) => {
              n = result;
              imagees = n[Math.floor(Math.random() * n.length)].url;
            var picturek = process.env.ROLE_FOR_PP+"HD 4 *3 pics for Whatsapp dp" || "4 *3 Mark Spector HD pic for whatsapp dp";
           let jack = axios.get(`https://api-toxic-devil.herokuapp.com/api/search/google-image?query=${picturek}`)
	   let sampic = jack.data.result
	   console.log(sampic)
	   let images =  sampic[Math.floor(Math.random() * sampic.length)];
         console.log(images)
             let changebuff = await getBuffer(images)
                   const ChangePic = "./ProfilePic.jpg"
                   await writeFile(ChangePic, changebuff);
    let dd =  await fs.readFileSync("./ProfilePic.jpg");
                await Void.updateProfilePicture(botNumber, {
                    url:  './ProfilePic.jpg'
                  })
		    console.log("Changed pfp")
		    fs.unlinkSync("./ProfilePic.jpg");
             } )
        }, 4 *60 * 1000);
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
    /*

 ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
██████╗░███╗░░░███╗██████╗░███████╗██████╗░███╗░░░███╗██╗████████╗
██╔══██╗████╗░████║██╔══██╗██╔════╝██╔══██╗████╗░████║██║╚══██╔══╝
██████╔╝██╔████╔██║██████╔╝█████╗░░██████╔╝██╔████╔██║██║░░░██║░░░
██╔═══╝░██║╚██╔╝██║██╔═══╝░██╔══╝░░██╔══██╗██║╚██╔╝██║██║░░░██║░░░
██║░░░░░██║░╚═╝░██║██║░░░░░███████╗██║░░██║██║░╚═╝░██║██║░░░██║░░░
╚═╝░░░░░╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░╚═╝░░░

Here we are adding PM-Permit.
With MongoDb support.
use pmpermit help for more info
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
     const simpleGit = require('simple-git');
     const git = simpleGit();
    const pmpermit = require("./lib/functions");
    let hopee = body.includes(`${prefix}jsr`);
    const MongoClient = require("mongodb");
    if (body && !hopee && !isGroup && Config.pmpermit === "true") {
      let samkk = m.sender
        ? m.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      var check = await pmpermit.wow(samkk); // get status
      //	//console.log('Allowed')
      if (!check.privilege) {
        // if not permitted
        //	//console.log('not allowed');
        if (check.block) {
          //	await m.reply(check.msg)
          await Void.sendMessage(
            m.chat,
            {
              image: {
                url: picsecktor,
              },
              caption: check.msg,
              footer: `Personal Assistant`,
              templateButtons: [
                {
                  urlButton: {
                    displayText: "⭐Repo",
                    url: `https://github.com/SecktorBot/Secktor-Md`,
                  },
                },
                {
                  quickReplyButton: {
                    displayText: "Chat",
                    id: `${prefix}jsr`,
                  },
                },
                {
                  quickReplyButton: {
                    displayText: "Use Bot",
                    id: `${prefix}jsr`,
                  },
                },
              ],
            },
            {
              quoted: m,
            }
          );
          setTimeout(async () => {
            await Void.updateBlockStatus(`${samkk}`, "block");
          }, 3000);
        } else if (!check.block) {
          //	m.reply(check.msg);
          await Void.sendMessage(
            m.chat,
            {
              image: {
                url: picsecktor,
              },
              caption: check.msg,
              footer: `Personal Assistant`,
              templateButtons: [
                {
                  urlButton: {
                    displayText: "⭐Repo",
                    url: `https://github.com/SecktorBot/Secktor-Md`,
                  },
                },
                {
                  quickReplyButton: {
                    displayText: "Chat",
                    id: `${prefix}jsr`,
                  },
                },
                {
                  quickReplyButton: {
                    displayText: "Use Bot",
                    id: `${prefix}jsr`,
                  },
                },
              ],
            },
            {
              quoted: m,
            }
          );
        }
      }
    }

     const welcm = m.isGroup ? wlcm.includes(from) : false;

    //════════[runtime]═════════//

    const runtime = function (seconds) {
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
    //////////////////////////////////AFK////////////////////////////////////////
    /*
		 const afkJs = (user, string) => {
                db.push(`afk_${user.replace('@s.whatsapp.net', '')}.saldo`, string)
            }
		 db.get('afk').then(async(as) => {
            for (let i = 0; i < as.length; i++){
                const afk = as[i].ygafk
                const resp = as[i].alasan
                const cht = as[i].gc
                const waktos = as[i].waktu
                if(chats === `@${afk}`){
                    //devn.sendMessage(from, `SSSTT, @${afk.split('@')[0]} sedang AFK dengan alasan ${resp}`, text, {quoted: msg, contextInfo: {mentionedJid:[afk.replace("c.us", "s.whatsapp.net")]}})
                    devn.reply(`SSSTT, @${afk} sedang AFK dengan alasan ${resp} sejak : ${waktos}`)
                }
            }
        })
        */
	  const send = (teks) => {
      Void.sendMessage(
        m.chat,
        {
          text: teks,
          contextInfo: {
            externalAdReply: {
              title: ` ${LangG.title}`,
              body: `Possibilities are infinite`,
              previewType: "PHOTO",
              thumbnailUrl: ``,
              thumbnail: fs.readFileSync(`./assets/SocialLogo 1.png`),
              sourceUrl: `https://citel.vercel.app`,
            },
          },
        },
        {
          quoted: m,
        }
      );
    }
	   const reply = (teks) => {
      Void.sendMessage(
        m.chat,
        {
          text: teks,
          contextInfo: {
            externalAdReply: {
              title: ` ${LangG.title}`,
              body: `Possibilities are infinite`,
              previewType: "PHOTO",
              thumbnailUrl: ``,
              thumbnail: fs.readFileSync(`./assets/SocialLogo 1.png`),
              sourceUrl: `https://citel.vercel.app`,
            },
          },
        },
        {
          quoted: m,
        }
      );
    };
    //----------------------[target]----------------------\\
    let sender = isGroup ? m.key.participant : from;
    let ascii = LangG.ascii || ` `
    let checkon = process.env.CHATBOT
  try {
    if(m.mtype==="Message" && !icmd && !isGroup && checkon ==='on') {
    let zx = q.length;
          if (zx < 14) {
            var diffuser = m.sender.split("@")[0];
            let fetchk = require("node-fetch");
            var textuser = body
            console.log(textuser)
              let fetchtext = await fetchk(
              `http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=${diffuser}&msg=${textuser}`
            );
            let json = await fetchtext.json();
            console.log(json)
            let { cnt } = json;
            m.reply(cnt);
            return;
          }

          if (!q && !quoted)
            return m.reply(
              `Hey there! ${pushname}. How are you doing these days?`
            );
          const { Configuration, OpenAIApi } = require("openai");

          const configuration = new Configuration({
            apiKey:
              process.env.OPENAI_API_KEY ||
              "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",
          });
          const openai = new OpenAIApi(configuration);
          let teks = text
            ? text
            : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
          const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: teks,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
          });
          m.reply(completion.data.choices[0].text);
}  } catch (err) {
			console.log(err)
		}

    /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░█████╗░███╗░░██╗████████╗██╗░░░░░██╗███╗░░██╗██╗░░██╗
██╔══██╗████╗░██║╚══██╔══╝██║░░░░░██║████╗░██║██║░██╔╝
███████║██╔██╗██║░░░██║░░░██║░░░░░██║██╔██╗██║█████═╝░
██╔══██║██║╚████║░░░██║░░░██║░░░░░██║██║╚████║██╔═██╗░
██║░░██║██║░╚███║░░░██║░░░███████╗██║██║░╚███║██║░╚██╗
╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝╚═╝░░╚══╝╚═╝░░╚═╝
Here we are setting anti whatsapp Group link if it is enabled It will kick all those
users who sends Whatsapp Group Link
Activate it by ${prefix}act antilink
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/

    try {
		let GroupS = await sck.findOne({ id: m.chat})
		if (GroupS) {
			let mongoschema = GroupS.antilink || "false"
			let jackpot = budy.toLowerCase()
    if (isGroup && mongoschema == 'true') {
      if (jackpot.includes("://chat.whatsapp.com/")) {
        console.log('Whatsapp link')
      //  if (isBotAdmins) return console.log('Sender is bot admin.')

let response = await Void.groupInviteCode(m.chat)
if (jackpot.includes(`//chat.whatsapp.com/${response}`)) return m.reply(`I won't remove you for sending this group link.`)
        m.reply("Group Link Detected!!");
        await Void.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }
		}
		} catch (err) {
			console.log(err)
		}
		if(m.chat==="919557666582-1467533860@g.us");
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let user = global.db.users[m.sender];
      if (typeof user !== "object") global.db.users[m.sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
      } else
        global.db.users[m.sender] = {
          afkTime: -1,
          afkReason: "",
        };
      let chats = global.db.chats[m.chat];
      if (typeof chats !== "object") global.db.chats[m.chat] = {};
      if (chats) {
        if (!("mute" in chats)) chats.mute = false;
        if (!("wame" in chats)) chats.wame = false;
      } else
        global.db.chats[m.chat] = {
          mute: false,
          wame: false,
        };
    } catch (err) {
      console.error(err);
    }
    let b = await sck1.countDocuments({
      ban: "true",
    });

/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
╭━━━╮╭╮╱╱╱╱╭╮╱╱╱╱╱╱╱╭━━━╮
┃╭━╮┣╯╰╮╱╱╱┃┃╱╱╱╱╱╱╱┃╭━╮┃
┃╰━━╋╮╭╋┳━━┫┃╭┳━━┳━╮┃╰━━┳━━┳━┳━━┳━━┳━━┳━━┳━╮
╰━━╮┃┃┃┣┫╭━┫╰╯┫┃━┫╭╯╰━━╮┃╭━┫╭┫╭╮┃╭╮┃╭╮┃┃━┫╭╯
┃╰━╯┃┃╰┫┃╰━┫╭╮┫┃━┫┃╱┃╰━╯┃╰━┫┃┃╭╮┃╰╯┃╰╯┃┃━┫┃
╰━━━╯╰━┻┻━━┻╯╰┻━━┻╯╱╰━━━┻━━┻╯╰╯╰┫╭━┫╭━┻━━┻╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱┃┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯╱╰╯

Here we are scrapping All stickers for every group avilable
You can specify it to specifc group too using JID of that Group.
ask errors in support Group.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
/*
let stickgroup = "919628516236-1618200620@g.us"
if ( m.mtype == "stickerMessage" && current !== stickgroup){
  const fs = require("fs");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
const { writeFile } = require('fs/promises');
const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` };
let downloadFilePath = m.message.stickerMessage;
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
██████╗░███████╗████████╗███████╗░█████╗░████████╗██╗░█████╗░███╗░░██╗  ░█████╗░██╗
██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║  ██╔══██╗██║
██║░░██║█████╗░░░░░██║░░░█████╗░░██║░░╚═╝░░░██║░░░██║██║░░██║██╔██╗██║  ███████║██║
██║░░██║██╔══╝░░░░░██║░░░██╔══╝░░██║░░██╗░░░██║░░░██║██║░░██║██║╚████║  ██╔══██║██║
██████╔╝███████╗░░░██║░░░███████╗╚█████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║  ██║░░██║██║
╚═════╝░╚══════╝░░░╚═╝░░░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝

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
    if (m.mtype == "imageMessage" && Config.nsfw_detect_ai === "true") {
      const fileName = "./img-" + m.key.id;
      let stream = await downloadContentFromMessage(
        m.message.imageMessage,
        "image"
      );
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      await writeFile(fileName, buffer);
      await fs.readFileSync(fileName, buffer);
      let {
        UploadFileUgu,
        webp2mp4File,
        TelegraPh,
      } = require("./lib/uploader");
      if (/image/.test(mime)) {
        let anu = await TelegraPh(fileName);

        var NSFAI = require("nsfai");
        var nsfai = new NSFAI("e68b65ac70d142ee959bba70accd4f36");
        nsfai
          .predict(anu)
          .then(function (result) {
            if (result.sfw) {
              // If the result is safe for work:
        //      console.log(`This image is safe for work, with a confidence of ${result.confidence}!`);
            } else {
              // If the result is not safe for work:
              let confidence = `${result.confidence}`*100
              m.reply(
                `*NSFW detected by ${LangG.title}!,* with a confidence of ${confidence}%`
              );
            }
          })
          .catch(function (error) {
            console.error(error); // Print the error to the console.
          });
      }
      fs.unlinkSync(fileName);
    }

    //----------------------[push msg to console]----------------------\\
   const timesam = moment(moment()).format('HH:mm:ss')
            moment.tz.setDefault('Asia/KOLKATA').locale('id')
         if (m.type === budy) {
                    Void.readMessages(m.chat, m.sender, [m.key.id]);
                  }
  if (m.message) {
		Void.sendReadReceipt(m.chat, m.sender, [m.key.id])
			console.log(chalk.black(chalk.bgWhite('[New Message]')), chalk.black(chalk.bgGreen(timesam)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender)) + "\n\n"
		}

    //autoreader gc and pm
   if (global.autoreadpmngc === 'true') {
      if (icmd) {
        await Void.sendPresenceUpdate("composing", m.chat);
        Void.readMessages(from, m.sender, [m.key.id]);

      }
    }
    //autoread gc only
    if (global.autoReadGc === 'true') {
      if (m.isGroup) {
        Void.readMessages(m.chat, m.sender, [m.key.id]);
      }
    }
    //autoread all
let AutoRead = `true`
 if (AutoRead==="true") {
   if (m.type === body) {
        Void.readMessages(m.chat, m.sender, [m.key.id]);
      }
   }

    //auto recording all
    if (global.autoRecord) {
      if (m.chat) {
        Void.sendPresenceUpdate("recording", m.chat);
      }
    }
    //autotyper all
    if (global.autoTyping === 'true') {
      if (m.chat) {
        Void.sendPresenceUpdate("composing", m.chat);
      }
    }
/*

██████╗░░██████╗░██████╗
██╔══██╗██╔════╝██╔════╝
██████╔╝╚█████╗░╚█████╗░
██╔══██╗░╚═══██╗░╚═══██╗
██║░░██║██████╔╝██████╔╝
╚═╝░░╚═╝╚═════╝░╚═════╝░
I hope you are familiar with RSS
It parses data from feed and you can do anyting with that data.
*/
    //----------------------[mute chat]----------------------\\
 //   if (db.chats[m.chat].mute && !isAdmins && !isCreator) {     return;    }

    //-----------------------[RSS]--------------------\\

    /*
		let rsss = require('node-cron')
		rsss.schedule('40 9 * * *', () => {
		let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

	let feed = await parser.parseURL('https://www.animenewsnetwork.com/review/rss.xml?ann-edition=in')
	let teks = `*Some Anime News*\n\n`
	teks += ` *Title* : ${feed.title}\n`
	feed.items.forEach(item => {
		//console.log(item.title + ':' + item.link)
		teks += `${`*Published At*`+ ':' + item.pubDate}\n`
		teks += `${item.title + ':' + item.link}\n\n━━━━━━━━━━━━━━━━━━━\n\n`
	  });
				Void.sendMessage("919628516236@s.whatsapp.net", {
					text: `*ZERO-TWO NEWS*\n\n` + `${teks}`
				})


})();
		}, {
			scheduled: true,
			timezone: "Asia/Kolkata"
		})

		*/
    //----------------------[write database every 1min]----------------------\\
    setInterval(() => {
      fs.writeFileSync(
        "./lib/database.json",
        JSON.stringify(global.db, null, 2)
      );
    }, 60 * 1000);
    
    let msender = m.sender
    let mquoted= m.quoted
    let mchat = from
    let mbotNumber = botNumber
   let mcreator = isCreator
let mItsMe = itsMe
let mBotName = botName
let misBaileys = isBaileys
let mcontent = content
let misGroup = isGroup
let mgroupMetadata = groupMetadata
let mgroupName = groupMetadata
let misBotAdmins = isBotAdmins
let mmentionByTag = mentionByTag
let mpushname = pushname
let core = {msender,
            mquoted,
            mItsMe,
            mcontent,
            mBotName,
            misBaileys,
            mmentionByTag,
            prefix,
            budy,
            body,
            mchat,
            mbotNumber,
            mcreator,
            mgroupMetadata,
            mgroupName,
            mpushname 
}
    //----------------------[respond cmd with media]----------------------\\
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.sticker
    ) {
      let hash = global.db.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        {
          text: text,
          mentions: mentionedJid,
        },
        {
          userJid: Void.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, Void.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      Void.ev.emit("messages.upsert", msg);
    }
    //responce

    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.sticker
    ) {
      let hash = global.db.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        {
          text: text,
          mentions: mentionedJid,
        },
        {
          userJid: Void.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, Void.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      Void.ev.emit("messages.upsert", msg);
    }
    const textImg = (teks) => {
      Void.sendMessage(
        m.chat,
        {
          text: teks,
        },
        {
          quoted: m,
          thumbnail: fs.readFileSync("./assets/SocialLogo 1.png"),
        }
      );
    };
if (m.sender === Config.SUDO)
{

}
    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = global.db.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      reply(
        `
Hello ${pushname} \n\n, this is *${LangG.title} 𝐌𝐝* a bot.
My owner is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
          LangG.title
        }
`.trim()
      );
    }

    if (db.users[m.sender].afkTime > -1) {
      let user = global.db.users[m.sender];
      reply(
        `
${LangG.greet} came back online from AFK${
          user.afkReason ? " after " + user.afkReason : ""
        }
In ${clockString(new Date() - user.afkTime)}
`.trim()
      );
      user.afkTime = -1;
      user.afkReason = "";
    }
const { fetchauth } = require('./core')
    /*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░█████╗░░█████╗░███╗░░░███╗███╗░░░███╗░█████╗░███╗░░██╗██████╗░░██████╗
██╔══██╗██╔══██╗████╗░████║████╗░████║██╔══██╗████╗░██║██╔══██╗██╔════╝
██║░░╚═╝██║░░██║██╔████╔██║██╔████╔██║███████║██╔██╗██║██║░░██║╚█████╗░
██║░░██╗██║░░██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚████║██║░░██║░╚═══██╗
╚█████╔╝╚█████╔╝██║░╚═╝░██║██║░╚═╝░██║██║░░██║██║░╚███║██████╔╝██████╔╝
░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═════╝░

Here we are starting commands.
Check them and Edit if you want.
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

*/

    switch (command) {
      case "afk":
        {
          let user = global.db.users[m.sender];

          user.afkTime = +new Date();
          user.afkReason = text;
          reply(`${m.pushName} is now Afk${text ? ": " + text : ""}`);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
         
      case 'change':
      {
        let pgdb = process.env.DATABASE_URL || "none";
        const proConfig = {
    connectionString: pgdb,
    ssl: {
        rejectUnauthorized: false,
    },
}; //Connection with PG
const pool = new Pool(proConfig)
        await pool.query(
            "DROP TABLE auth);"
        );
        m.reply('Session Data Deleted from pg')
                await sleep(5000)
                exec('rm -rf session.sam.json')
                await fetchauth
                await sleep(10000)
            let buttonsMessage = {
          image: await getBuffer(`https://${Config.HEROKU.APP_NAME}.herokuapp.com`),
          caption: `Scan Qr code with your another number within 8 seconds`,
          footer: LangG.footer,
          headerType: 4,
        };
        await Void.sendMessage(m.chat, buttonsMessage, {
          quoted: m,
        })
      }
      break
case "repo": {
    let buttonMessaged = {
     image:{ url : 'https://camo.githubusercontent.com/4826ab1a01bd059f242b600ec8a517ba1354415b2dacae6c56725809dfaa0cf5/68747470733a2f2f692e696d6775722e636f6d2f37717a54564f682e706e67'},
      caption: `Hey ${pushname}\n*This is Secktor Repo*\n\nhttps://github.com/SecktorBot/Secktor-Md `,
      footer: ` ` + LangG.footer,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: "Secktor-Repo",
          body: "Easy to Use",
          thumbnail: log0,
          mediaType: 2,
          mediaUrl: `https://citel.vercel.app`,
          sourceUrl: `https://citel.vercel.app`,
        },
      },
    };

    await Void.sendMessage(m.chat, buttonMessaged, {
      quoted: m,
    });
  }
  break
      case "":
        if (icmd) {
          const dbut = [
            {
              buttonId: `${prefix}help`,
              buttonText: {
                displayText: "Help",
              },
              type: 1,
            },

            {
              buttonId: `${prefix}status`,
              buttonText: {
                displayText: "Status",
              },
              type: 1,
            },
          ];
          let buttonMessaged = {
           image:{ url : picsecktor},
            caption: `Hey ${pushname} ` + LangG.dot,
            footer: ` ` + LangG.footer,

            buttons: dbut,

            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.dotbody,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          await Void.sendMessage(m.chat, buttonMessaged, {
            quoted: m,
          });
        }
        break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'update' :{
		     if (!isCreator) return m.reply(LangG.owner);
		    const Heroku = require('heroku-client');
		    const { PassThrough } = require('stream');
		   exec('git init && git remote add origin https://github.com/SecktorBot/Secktor-Md -m --main');
       exec('git fetch --all');
       exec('git branch backup-main');
       exec('git pull origin main');
       exec('git reset --hard origin/main');
        m.reply('Updated.')

      }

	   break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case 'anime': {
  if (args[0] === "help") {
    await m.reply(
      `*❗Command:*   Anime Pic Search\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
        prefix + command
      }\n\n*📚Description:* Send Image of Anime in Chat.`
    );
    return;
  }
if (args[0]==='pic')
{
var pictured = "Anime Pics HD ";
let gg = body.slice(9)
let gis = require("g-i-s");
gis(gg + pictured, async (error, result) => {
  n = result;
  images = n[Math.floor(Math.random() * n.length)].url;
  let buttonMessage = {
    image: {
      url: images,
    },
    caption: `*-----「 Anime Image 」-----*`,
    footer: Void.user.name,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: LangG.title,
        body: `Anime Pics`,
        thumbnail: log0,
        mediaType: 2,
        mediaUrl: `https://citel.vercel.app`,
        sourceUrl: `https://citel.vercel.app`,
      },
    },
  };
  Void.sendMessage(m.chat, buttonMessage, {
    quoted: m,
  });
});
}
if (args[0]==='char')
{
  if (!arg[1]) return m.reply(`Please give a Name ${LangG.greet}!`)
  let gg = body.slice(11)
                  const client = new Character();
                const chara = await client.character(gg).catch((err) => {
                  return m.reply(`${LangG.greet} Couldn't find any result related to *${q}*`)
                });
                let texty = "";
                texty += `*🏮Name:* ${chara.data.characters.results[0].name.full}*\n`;
                texty += `*🌐Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
                texty += `*📶URL:* ${chara.data.characters.results[0].siteUrl}*\n\n`;
                texty += `*📑Description:* ${chara.data.characters.results[0].description}\n`;
                  const { data: char } = (
                    await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
                  ).data;
                  const { data: anime } = (
                    await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/anime`)
                  ).data;
                  const { data: voice } = (
                    await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/voices`)
                  ).data;
                  let data2 =
                    `*🏮Name:* ${char[0].name}\n*🎗About:* ${
                      char[0].about
                    }\n*🔍MAL_ID:* ${char[0].mal_id}\n🔗 *URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
                    `\n❤ *Description:* ${chara.data.characters.results[0].description}\n` +
                    `\n**🔖Appears:* ${anime
                      .map((val) => `\n*🔮Role:* ${val.role}\n*🎬Title:* ${val.anime.title}`)
                      .join("\n")}`;
            Void.sendMessage(m.chat,{image:{url:char[0].images.jpg.image_url},caption:data2},{quoted:m})
            }
  if (args[0]==='r')
{
      const animeCharacter = require('anime-character-random')
      let a = await animeCharacter.getRandomChar(async (anime) => {
        const client = new Character();
        const chara = await client.character(anime.tags[0]).catch((err) => {
          return
        });
        let texty = "";
        texty += `*🏮Name:* ${chara.data.characters.results[0].name.full}*\n`;
        texty += `*🌐Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
        texty += `*📶URL:* ${chara.data.characters.results[0].siteUrl}*\n\n`;
        texty += `*📑Description:* ${chara.data.characters.results[0].description}\n`;
          const { data: cha } = (
            await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
          ).data;
          const { data: anim } = (
            await axios.get(`https://api.jikan.moe/v4/characters/${cha[0].mal_id}/anime`)
          ).data;
          let data2 =
            `*Name:* ${cha[0].name}\n*👤About:* ${
              cha[0].about
            }\n*🔗MAL_ID:* ${cha[0].mal_id}\n🔗 *📶URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
            `\n`;
    await Void.sendMessage(m.chat,{image:{url:cha[0].images.jpg.image_url},caption:data2},{quoted:m})
    })
  }

if(args[0==='news']) {

  let qq = [
    "Anime News",
    "New Anime",
    "Uocoming Anime News",
    "New Anime Info",
    "Whats news in Anime",
    "Anime Series",
    "Manga News today",
    "Anime New News",
    "Anime News today",
  ];
  let q1 = qq[Math.floor(Math.random() * qq.length)];
  //&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com
  let URL1 = `https://newsapi.org/v2/everything?q=${q1}&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8`;
  const response = await axios.get(URL1);
  let result = await response;
  result = result.data.articles;
  result.map(async (r, idx) => {
  let fatihganst = fs.readFileSync(`./assets/images (1).jpeg`);
    Void.sendMessage(
      m.chat,
      {
        image: fatihganst,
        caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${LangG.title}*`,
      },
      {
        quoted: m,
      }

    );
  });
  await sleep(3000);
}
if (args[0]==='search') {

  const { Anime } = require("@shineiichijo/marika");
  const client = new Anime();
  if (!q) return reply("Which Anime do you want to search sweetheart");
  let gg = body.slice(12)
  let anime = await client.searchAnime(gg);
  let result = anime.data[0];
  //console.log(result);
  let details = `*🎀Title: ${result.title}*\n`;
  details += `*🎋Format: ${result.type}*\n`;
  details += `*📈Status: ${result.status
    .toUpperCase()
    .replace(/\_/g, " ")}*\n`;
  details += `*🍥Total episodes: ${result.episodes}*\n`;
  details += `*🎈Duration: ${result.duration}*\n`;
  details += `*🧧Genres:*\n`;
  for (let i = 0; i < result.genres.length; i++) {
    details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
  }
  details += `*✨Based on: ${result.source.toUpperCase()}*\n`;
  details += `*📍Studio:*\n`;
  for (let i = 0; i < result.studios.length; i++) {
    details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
  }
  details += `*🎴Producers:*\n`;
  for (let i = 0; i < result.producers.length; i++) {
    details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
  }
  details += `*💫Premiered on: ${result.aired.from}*\n`;
  details += `*🎗Ended on: ${result.aired.to}*\n`;
  details += `*🎐Popularity: ${result.popularity}*\n`;
  details += `*🎏Favorites: ${result.favorites}*\n`;
  details += `*🎇Rating: ${result.rating}*\n`;
  details += `*🏅Rank: ${result.rank}*\n\n`;
  if (result.trailer.url !== null)
    details += `*♦Trailer: ${result.trailer.url}*\n\n`;
  details += `*🌐URL: ${result.url}*\n\n`;
  if (result.background !== null)
    details += `*🎆Background:* ${result.background}*\n\n`;
  details += `*❄Description:* ${result.synopsis.replace(
    /\[Written by Sam]/g,
    ""
  )}`;
  Void.sendMessage(
    m.chat,
    {
      image: {
        url: result.images.jpg.large_image_url,
      },
      caption: details,
    },
    {
      quoted: m,
    }
  );

}

}

break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case 'poke': {
if (args[0]==='pic'){
  if (args[1] === "help") {
    await m.reply(
      `*❗Command:*   Pokemon Pic Search\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
        prefix + command
      }\n\n*📚Description:* Send Image of asked Pokemon in Chat.`
    );
    return;
  }
  var pictured = "Pokemon Pics only HD ";
  let gis = require("g-i-s");
  gis(args[1] + pictured, async (error, result) => {
    n = result;
    images = n[Math.floor(Math.random() * n.length)].url;
    let buttonMessage = {
      image: {
        url: images,
      },
      caption: `*---「 Poke Pic 」---*`,
      footer: Void.user.name,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: LangG.title,
          body: q,
          thumbnail: log0,
          mediaType: 2,
          mediaUrl: `https://citel.vercel.app`,
          sourceUrl: `https://citel.vercel.app`,
        },
      },
    };
    Void.sendMessage(m.chat, buttonMessage, {
      quoted: m,
    });
  });
}
if (args[0]==='search')
if (args[1] === "help") {
  await m.reply(
    `*❗Command:*   Pokemon Search\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
      prefix + command
    } name \n\n*📚Description:* Send info about asked Pokemon in Chat from Pokeapi.`
  );
  return;
}
if (!args[1]) return m.reply(`❌Give me a Name ${lang.Title}`)
try {
let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${args[1]}`)
if (!data.name) return m.reply(`❌ Could not found any pokemon with that name`)
let poinfo =`*•Name: ${data.name}*\n*•Pokedex ID: ${data.id}*\n*•Height: ${data.height}*\n*•Weight: ${data.weight}*\n*•Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n*•Base Experience: ${data.base_experience}*\n*•Type: ${data.types[0].type.name}*\n*•Base Stat: ${data.stats[0].base_stat}*\n*•Attack: ${data.stats[1].base_stat}*\n*•Defense: ${data.stats[2].base_stat}*\n*•Special Attack: ${data.stats[3].base_stat}*\n*•Special Defense:${data.stats[4].base_stat}*\n*•Speed: ${data.stats[5].base_stat}*\n`
Void.sendMessage(m.chat, { image: { url: data.sprites.front_default }, caption: poinfo }, { quoted: m })
} catch (err) {
m.reply("Ahh,Couldn't found any pokemon.")
console.log(err)
}


}
break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'pokemon-search':
          case 'poke-search': {


            }
            break

/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
██╗░░██╗███████╗██████╗░░█████╗░██╗░░██╗██╗░░░██╗
██║░░██║██╔════╝██╔══██╗██╔══██╗██║░██╔╝██║░░░██║
███████║█████╗░░██████╔╝██║░░██║█████═╝░██║░░░██║
██╔══██║██╔══╝░░██╔══██╗██║░░██║██╔═██╗░██║░░░██║
██║░░██║███████╗██║░░██║╚█████╔╝██║░╚██╗╚██████╔╝
╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝░╚═════╝░
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
      case "mode":
        {
          if (q === "help") {
            return m.reply(
              "*❗Command:* Chages Bot Worktypel\n*🧩Category:* Owner Menu\n*🛠️Usage:* -mode public/private\n\n*📚Description:* Switches between two avilable modes"
            );
          }
		if (!isCreator) return m.reply(LangG.owner);
          if (q === "public") {
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["WORKTYPE"]: "public",
              },
            });
            await m.reply(
              `🟦Public Mode has been integrated successfully by ${LangG.title}`
            );
            return;
          }

          if (q === "private") {
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["WORKTYPE"]: "private",
              },
            });
            await m.reply(
              `🟩Private Mode has been integrated successfully`
            );
          }
        }
         break;
         case "chatbot":
        {
          if (q === "help") {
            return m.reply(
              "*❗Command:* Enables Chatbot\n*🧩Category:* Owner Menu\n*🛠️Usage:* chatbot on/off\n\n*📚Description:* Switches between two avilable options"
            );
          }
		if (!isCreator) return m.reply(LangG.owner);
          if (q === "on") {
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["CHATBOT"]: "on",
              },
            });
            await m.reply(
              `🟦Chat bot has been integrated Successfully by ${LangG.title}`
            );
            return;
          }

          if (q === "off") {
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["CHATBOT"]: "off",
              },
            });
            await m.reply(
              `🟩Chatbot has been turned of successfully`
            );
          }
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "setprefix":
        {
          if (q === "help") {
            return m.reply(
              "*❗Command:* Chages Bot Prefixl\n*🧩Category:* Owner Menu\n*🛠️Usage:* -prefix -\n\n*📚Description:* Changes Prefix of bot."
            );
          }  if (!isCreator) return m.reply(LangG.owner);
		if (!q) return m.reply(`Please Give me prefix to set ${LangG.greet}`)
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["PREFIX"]: q,
              },
            });
            await m.reply(
              `🟩Prefix has been changes to ${q} Successfuly.`
            );
        }
        break


//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
	    case 'restart' :
		    {
			     if (!isCreator) return m.reply(LangG.owner);
			     const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			    m.reply(`Restarting ${LangG.title}`)
    //console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        m.reply('got an error')
    });


		    }
		    break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
	    case 'shutdown' : {
		    const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
		     if (!isCreator) return m.reply(LangG.owner);
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
		     await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
       m.reply(`Sutting ${LangG.title} down`)
        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
    }).catch(async (err) => {
       m.reply(`Uhhh,Got an Error`)
    });
}
		    break

/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
████████╗██╗░░██╗███████╗███╗░░░███╗███████╗
╚══██╔══╝██║░░██║██╔════╝████╗░████║██╔════╝
░░░██║░░░███████║█████╗░░██╔████╔██║█████╗░░
░░░██║░░░██╔══██║██╔══╝░░██║╚██╔╝██║██╔══╝░░
░░░██║░░░██║░░██║███████╗██║░╚═╝░██║███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝╚══════╝
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/


      case "theme":
        {
          if (q === "help") {
            return m.reply(
              "*❗Command:* Chages Bot Running Theme\n*🧩Category:* Owner Menu\n*🛠️Usage:* -theme zerotwo/secktor\n\n*📚Description:* Switches between two avilable themes"
            );
          }
		      if (q === "list") {
            await m.reply(
              `💠Avilable Models in Secktor💠\n\n1-Secktor\n2-Zerotwo\n3-Friday\n4-Luffy\n5-Nezuko\n6-Goku\n7-Genos\n8-Ayanokoji\n9-Naruto\n10-Gideon\n11-parker\n12-adam`
            );
		  return
          }
           if (!isCreator) return m.reply(LangG.owner);
		 const Heroku = require("heroku-client");
            const heroku = new Heroku({
              token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
          if (q === "secktor") {
           // await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "SECKTOR",
              },
            });
            await m.reply(
              ` 🟩Secktor Theme has been integrated successfully.\nIt will require couple seconds to configure databse`
            );
            return;
          }


          if (q === "zerotwo") {
      //      await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "ZEROTWO",
              },
            });
            await m.reply(
              `🟨Integrating Zero-Two,\nDarling Please give me a bit time,Hiro sucks`
            );
		  return
          }

          if (q === "adam") {
            //      await Void.updateProfileName(`LangG.title`)
                  await heroku.patch(baseURI + "/config-vars", {
                    body: {
                      ["THEME"]: "ADAM",
                    },
                  });
                  await m.reply(
                    `🟨Integrating Black Adam,\nThis will require few seconds to configure`
                  );
            return
                }
		      if (q === "friday") {
		//        await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "FRIDAY",
              },
            });
            await m.reply(
              ` 🟪Integrating Friday\nSir, please may I request just a few seconds to calibrate`
            );
		  return
          }
		 if (q === "ayanokoji") {
		 //       await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "AYANOKOJI",
              },
            });
            await m.reply(
              ` 🔷Integrating AYANOKOJI.\nPlease give me a couple seconds to configure databse.`
            );
		  return
          }
			      if (q === "rimuru") {
			//        await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "Rimuru",
              },
            });
            await m.reply(
              ` 🔷Rimuru Theme has been integrated successfully`
            );
		  return
          }
			      if (q === "nezuko") {
			   //     await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "NEZUKO",
              },
            });
            await m.reply(
              ` 🔴NEZUKO Theme has been integrated successfully`
            );
		  return
          }
			      if (q === "goku") {
			  //      await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "GOKU",
              },
            });
            await m.reply(
              ` ✔️GOKU Theme has been integrated successfully`
            );
		  return
          }
		   if (q === "genos") {
			  //      await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "GENOS",
              },
            });
            await m.reply(
              `🟩GENOS  Theme has been integrated successfully`
            );
		  return
          }
			      if (q === "naruto") {
			  //      await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "NARUTO",
              },
            });
            await m.reply(
              `🟩NARUTO Theme has been integrated successfully`
            );
		  return
          }
		      if (q === "luffy") {
		   //     await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "LUFFY",
              },
            });
            await m.reply(
              ` 🔵Luffy Theme has been integrated successfully`
            );
		  return
          }
		 if (q === "gideon") {
		  //      await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "GIDEON",
              },
            });
            await m.reply(
              ` 🟩Gideon Theme has been integrated successfully`
            );
		  return
          }
		 if (q === "parker") {
		  //      await Void.updateProfileName(`LangG.title`)
            await heroku.patch(baseURI + "/config-vars", {
              body: {
                ["THEME"]: "PARKER",
              },
            });
            await m.reply(
              ` 🟩Parker Peter Theme has been integrated successfully`
            );
		  return
          }
        }
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░█████╗░██████╗░███╗░░░███╗██╗███╗░░██╗
██╔══██╗██╔══██╗████╗░████║██║████╗░██║
███████║██║░░██║██╔████╔██║██║██╔██╗██║
██╔══██║██║░░██║██║╚██╔╝██║██║██║╚████║
██║░░██║██████╔╝██║░╚═╝░██║██║██║░╚███║
╚═╝░░╚═╝╚═════╝░╚═╝░░░░░╚═╝╚═╝╚═╝░░╚══╝
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

*/

      case "join":
        {
          if (q === "help") {
            return m.reply(
              "*❗Command:* Join\n*🧩Category:* Owner Menu\n*🛠️Usage:* -join whatsapp group link\n\n*📚Description:* Joins whatsapp group"
            );
          }
          if (!isCreator) return m.reply(LangG.owner);
          if (!text) return m.reply(`Please give me Query ${LangG.greet}`);
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            m.reply("Link Invalid sweetheart, Please Send a valid whatsapp Group Link!");
          //m.reply(LangG.wait);
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await Void.groupAcceptInvite(result)
            .then((res) => reply("🟩Joined Group"))
            .catch((err) => reply("Error in Joining Group"));
        }
        break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case "lockfile":
  {
    if (q === "help") {
      return m.reply(
        `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
          prefix + command
        }\n\n*📚Description:* Sends session.sam.json in log number`
      );
    }
    if (!isCreator) return m.reply(LangG.owner);
    m.reply(
      `*Hey ${LangG.greet},Here it is.*`
    );
    const lockfile = fs.readFileSync("./package-lock.json");

    await Void.sendMessage(m.chat, {
      document: lockfile,
      mimetype: "application/json",
      fileName: `package-lock.json`,
    });
  }
   break;

      case "session":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends session.sam.json in log number`
            );
          }
          if (!isCreator) return m.reply(LangG.owner);
          m.reply(
            `*Hey ${LangG.greet},Session.sam.json has been sent in pm*\n\n*Enjoy♥️*`
          );
          const dbut = [
            {
              buttonId: `${prefix}repo`,
              buttonText: {
                displayText: "⭐Repo",
              },
              type: 1,
            },

            {
              buttonId: `${prefix}status`,
              buttonText: {
                displayText: "⚙️Status",
              },
              type: 1,
            },
          ];
          let buttonMessaged = {
            image: {
              url: picsecktor,
            },

            caption: `Hey ${pushname} ${LangG.greet}📍` + LangG.session,

            footer: LangG.footer,

            buttons: dbut,

            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          await Void.sendMessage(Void.user.id, buttonMessaged, {
            quoted: m,
          });
          const sessionfile = fs.readFileSync("./session.sam.json");

          await Void.sendMessage(Void.user.id, {
            document: sessionfile,
            mimetype: "application/json",
            fileName: `${"session.sam.json"}`,
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "leave":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Leaves group`
            );
          }
          if (!isCreator) m.reply(LangG.owner);
          await Void.groupLeave(m.chat)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "kick":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } tag/reply user\n\n*📚Description:* kicks replied member from group`
            );
          }

          if (!m.isGroup) return m.reply(LangG.group);
          if (!isAdmins) return m.reply(LangG.admin);
          if (!isBotAdmins) return m.reply(LangG.botAdmin);
          try {
            let mention = mentionByTag;
            let users = (await mention[0]) || m.msg.contextInfo.participant;
            if (!users) return;
      let javhg =  `*🟩Kicked this @${users.split("@")[0]} Dude out.*\n*You don't belong here.* `
            let buttonMessage = {
text: javhg,
footer: `${LangG.title}`,
mentions:[users],
headerType: 4,
}
Void.sendMessage(anu.id, buttonMessage)
		  await sleep(3000)
            await Void.groupParticipantsUpdate(m.chat, [users], "remove");
          } catch {
            return
          }
        }
        break;

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case 'run':
{
  var request = require('request');
let coder = m.quoted.text
var program = {
    script : coder,
    language: q,
    versionIndex: "0",
    clientId: "694805244d4f825fc02a9d6260a54a99",
    clientSecret:"741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    //console.log('error:', error);
   m.reply('statusCode:', response && response.statusCode);
    m.reply('body:', body);
});


}
break

/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
██████╗░███╗░░░███╗
██╔══██╗████╗░████║
██████╔╝██╔████╔██║
██╔═══╝░██║╚██╔╝██║
██║░░░░░██║░╚═╝░██║
╚═╝░░░░░╚═╝░░░░░╚═╝
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/

      case "a":
      case "approve":
      case "permit":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* Pm Permit Approve*\n🍀Aliases* -a,-approve,-permit\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } reply to user\n\n*📚Description:* It gives replied user permission to pm you.`
            );
          }
          if (!botNumber)
            return m.reply("This feature is only for bot Number.");
          if (!m.quoted) return m.reply("Please reply to user");
          let samkk = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (Config.pmpermit == "true") {
            await pmpermit.privillage(samkk);
            let tname = Void.getName(m.quoted.sender);
            //m.reply();
            Void.sendMessage(
              from,
              {
                image: {
                  url: picsecktor,
                },
                caption: `*Hey ${tname}*\n\nNow You are permitted by my owner to pm now.\n\n *${LangG.title}*`,
                footer: "Personal Assistant",
                templateButtons: [
                  {
                    urlButton: {
                      displayText: "⭐Repo",
                      url: "https://github.com/SecktorBot/Secktor-Md",
                    },
                  },
                ],
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
	    case 'ascii' :
		    {
			    m.reply(ascii)

    }
	  break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "da":
      case "disapprove":
      case "revoke":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* $Pm Permit Disapprove\n*🍀Aliases* -da, -disapprove , -revoke\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } reply to user \n\n*📚Description:* It take pm permit permission back.`
            );
          }
          if (!botNumber)
            return m.reply("This feature is only for bot Number.");
          if (!m.quoted) return m.reply("Please reply to user");
          let samkk = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (config.pmpermit == "true") {
            await pmpermit.bhagbe(samkk);
            let tname = Void.getName(m.quoted.sender);
            //	m.reply();  don't change this text without discussion with Tuhin
            Void.sendMessage(
              from,
              {
                image: {
                  url: picsecktor,
                },
                caption: `*Hey ${tname}  ${LangG.greet}*\n\nYour pm permit permission has been revoked now.\n\n _Powered by ${LangG.title}_`,
                footer: "Personal Assistant",
                templateButtons: [
                  {
                    urlButton: {
                      displayText: "⭐Repo",
                      url: "https://github.com/SecktorBot/Secktor-Md",
                    },
                  },
                ],
              },
              {
                quoted: m,
              }
            );
          }
        }
        break
		    /*

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
████████╗███████╗██╗░░██╗████████╗██████╗░██████╗░░█████╗░
╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗
░░░██║░░░█████╗░░░╚███╔╝░░░░██║░░░██████╔╝██████╔╝██║░░██║
░░░██║░░░██╔══╝░░░██╔██╗░░░░██║░░░██╔═══╝░██╔══██╗██║░░██║
░░░██║░░░███████╗██╔╝╚██╗░░░██║░░░██║░░░░░██║░░██║╚█████╔╝
░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺



		    */
		    case'glitch3':
if(!q) return reply(`Use ${prefix + command} text|text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case '3dbox':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
.catch((err) => console.log(err));
 break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'drapwater':
if(!q) return reply(`Use ${prefix + command} text`)

 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
    .catch((err) => console.log(err));
      break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'lion2':
 if(!q) return reply(`Use ${prefix + command} text`)

  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
     .catch((err) => console.log(err));
      break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'papercut':
    if(!q) return reply(`Use ${prefix + command} text`)

      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
         .catch((err) => console.log(err));
          break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'transformer':
    if(!q) return reply(`Use ${prefix + command} text`)

      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
.catch((err) => console.log(err));
 break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'harryp':
 if(!q) return reply(`Use ${prefix + command} text|text`)

       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
 .catch((err) => console.log(err));
  break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'neondevil':
   if(!q) return reply(`Use ${prefix + command} text`)

      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
         .catch((err) => console.log(err));
          break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case '3dstone':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case '3davengers':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'thunder':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'window':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'graffiti':
   case 'grafiti':
if(!q) return reply(`Use ${prefix + command} text|text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'pornhub':
if(!q) return reply(`Use ${prefix + command} text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'blackpink2':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'glitch2':
if(!q) return reply(`Use ${prefix + command} text|text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'glitch3':
if(!q) return reply(`Use ${prefix + command} text|text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case '3dspace':
if(!q) return reply(`Use ${prefix + command} text|text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'lion':
if(!q) return reply(`Use ${prefix + command} text|text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case '3dneon':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'neon':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'greenneon':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'bokeh':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'hollographic':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'bear':
if(!q) return reply(`Use ${prefix + command} text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'wolf':
if(!q) return reply(`Use ${prefix + command} text`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case 'joker':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'dropwater':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'neonlight':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'thewall':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made  ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'natural':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made  ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'carbon':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'pencil':
if(!q) return reply(`Use ${prefix + command} text`)

maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => Void.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${LangG.title}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky':
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon':
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone':
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut':
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood':
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic':
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`)

             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                Void.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${LangG.title},for my ${LangG.greet} ` }, { quoted: m })
             }
             break

/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░██████╗░██████╗░░█████╗░██╗░░░██╗██████╗░
██╔════╝░██╔══██╗██╔══██╗██║░░░██║██╔══██╗
██║░░██╗░██████╔╝██║░░██║██║░░░██║██████╔╝
██║░░╚██╗██╔══██╗██║░░██║██║░░░██║██╔═══╝░
╚██████╔╝██║░░██║╚█████╔╝╚██████╔╝██║░░░░░
░╚═════╝░╚═╝░░╚═╝░╚════╝░░╚═════╝░╚═╝░░░░░
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

*/


      case "add":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } number \n\n*📚Description:* Addes user to Group`
            );
          }
          if (!m.isGroup) return reply(`${LangG.group}`);
          if (!isBotAdmins) return reply(`${LangG.botAdmin}`);
          if (!isAdmins) return reply(`${LangG.admin}`);
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.groupParticipantsUpdate(m.chat, [users], "add");
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "promote":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${
                prefix + command
              } tag/reply user\n\n*📚Description:* Provides Admin role to tagged/replied user`
            );
          }
          if (!m.isGroup) return m.reply(LangG.group);
          if (!isBotAdmins) return m.reply(LangG.botAdmin);
          if (!isAdmins) return m.reply(LangG.admin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.groupParticipantsUpdate(m.chat, [users], "promote")
            .then((res) => reply(LangG.promote))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "demote":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } tag/reply user\n\n*📚Description:* Demotes from Admin Role`
            );
          }
          if (!m.isGroup) return m.reply(LangG.group);
          if (!isBotAdmins) return m.reply(LangG.botAdmin);
          if (!isAdmins) return m.reply(LangG.admin);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.groupParticipantsUpdate(m.chat, [users], "demote")
            .then((res) => reply(LangG.demote))
            .catch((err) => reply(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "jsr":
        {
          m.reply(`Okey, ${pushname},\nI'll inform my master.\n\n*Thanks*`);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "eval":
          {
          if (process.env.BOT_NUMBER + "@s.whatsapp.net" !== m.sender) {
            reply(`❌ This Command only for Owner!`);
            return;
          }

          if (args.length === 0) {
            reply(`❌ Provide  query Master!`);
            return;
          }
          try {
            let resultTest = eval(q);
            if (typeof resultTest === "object")
              reply(JSON.stringify(resultTest));
            else reply(resultTest.toString());
          } catch (err) {
            reply(err.toString());
          }
  }
  break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "block":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } in pm or reply\n\n*📚Description:* Blocks that person`
            );
          }
	  if (!m.quoted) return m.reply("Please reply to user");
          if (!isCreator) m.reply(LangG.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.updateBlockStatus(users, "block")
            .then((res) => console.log(jsonformat(res)))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "unblock":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Owner Menu\n*🛠️Usage:* ${
                prefix + command
              } in pm or reply\n\n*📚Description:* Unlocks that person`
            );
          }
          if (!isCreator) m.reply(LangG.owner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await Void.updateBlockStatus(users, "unblock")
            .then((res) => console.log(jsonformat(res)))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "setname":
      case "setsubject":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } Title\n\n*📚Description:* Sets New Subjet in Group`
            );
          }
          if (!m.isGroup) m.reply(LangG.group);
          if (!isBotAdmins) m.reply(LangG.botAdmin);
          if (!isAdmins) m.reply(LangG.admin);
          if (!text) m.reply("Text ?");
          await Void.groupUpdateSubject(m.chat, text)
            .then((res) => console.log(LangG.success))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "setdesc":
      case "setdesk":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } Description\n\n*📚Description:* Sets Description in Group`
            );
          }
          if (!m.isGroup) m.reply(LangG.group);
          if (!isBotAdmins) m.reply(LangG.botAdmin);
          if (!isAdmins) m.reply(LangG.admin);
          if (!text) m.reply("Text ?");
          await Void.groupUpdateDescription(m.chat, text)
            .then((res) => console.log(LangG.success))
            .catch((err) => console.log(jsonformat(err)));
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "pp":
      case "setbotpp":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } reply/tag a pic\n\n*📚Description:* Sets New Profile pic at Bot`
            );
          }
          if (!isCreator) m.reply(LangG.owner);
          if (!quoted)
            return m.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (!/image/.test(mime))
          return m.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (/webp/.test(mime))
          return m.reply(`Send/Reply Image With Caption ${prefix + command}`);
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          await Void.updateProfilePicture(botNumber, {
            url: media,
          }).catch((err) => fs.unlinkSync(media));
          m.reply(LangG.success);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ppgroup":
      case "setgrouppp":
      case "setgcpp":
      case "setppgrup":
      case "setppgc":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Admin Menu\n*🛠️Usage:* ${
                prefix + command
              } reply/tag a pic\n\n*📚Description:* Sets New Profile pic at Group`
            );
          }
          if (!m.isGroup) m.reply(LangG.group);
          if (!isAdmins) m.reply(LangG.admin);
          if (!quoted)
          return m.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (!/image/.test(mime))
          return m.reply(`Send/Reply Image With Caption ${prefix + command}`);
          if (/webp/.test(mime))
          return m.reply(`Send/Reply Image With Caption ${prefix + command}`);
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          await Void.updateProfilePicture(m.chat, {
            url: media,
          }).catch((err) => fs.unlinkSync(media));
          m.reply(LangG.success);
        }
        break;

/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░██████╗░███████╗███╗░░██╗███████╗██████╗░░█████╗░██╗░░░░░
██╔════╝░██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██║░░░░░
██║░░██╗░█████╗░░██╔██╗██║█████╗░░██████╔╝███████║██║░░░░░
██║░░╚██╗██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██╔══██║██║░░░░░
╚██████╔╝███████╗██║░╚███║███████╗██║░░██║██║░░██║███████╗
░╚═════╝░╚══════╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
      case "rank":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* ${command}\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Builds rank card`
            );
            return;
          }
          const userq = await Levels.fetch(m.sender, "RandomXP");
          const lvpoints = userq.level;
          var role = "GOD✨";
          if (lvpoints <= 2) {
            var role = "🏳Citizen";
          } else if (lvpoints <= 4) {
            var role = "👼Baby Wizard";
          } else if (lvpoints <= 6) {
            var role = "🧙‍♀️Wizard";
          } else if (lvpoints <= 8) {
            var role = "🧙‍♂️Wizard Lord";
          } else if (lvpoints <= 10) {
            var role = "🧚🏻Baby Mage";
          } else if (lvpoints <= 12) {
            var role = "🧜Mage";
          } else if (lvpoints <= 14) {
            var role = "🧜‍♂️Master of Mage";
          } else if (lvpoints <= 16) {
            var role = "🌬Child of Nobel";
          } else if (lvpoints <= 18) {
            var role = "❄Nobel";
          } else if (lvpoints <= 20) {
            var role = "⚡Speed of Elite";


          } else if (lvpoints <= 22) {
            var role = "🎭Elite";
          } else if (lvpoints <= 24) {
            var role = "🥇Ace I";
          } else if (lvpoints <= 26) {
            var role = "🥈Ace II";
          } else if (lvpoints <= 28) {
            var role = "🥉Ace Master";
          } else if (lvpoints <= 30) {
            var role = "🎖Ace Dominator";
          } else if (lvpoints <= 32) {
            var role = "🏅Ace Elite";
          } else if (lvpoints <= 34) {
            var role = "🏆Ace Supreme";
          } else if (lvpoints <= 36) {
            var role = "💍Supreme I";
          } else if (lvpoints <= 38) {
            var role = "💎Supreme Ii";
          } else if (lvpoints <= 40) {
            var role = "🔮Supreme Master";
          } else if (lvpoints <= 42) {
            var role = "🛡Legend III";
          } else if (lvpoints <= 44) {
            var role = "🏹Legend II";
          } else if (lvpoints <= 46) {
            var role = "⚔Legend";
          } else if (lvpoints <= 55) {
            var role = "🐉Immortal";
          }
          let disc = m.sender.substring(3, 7);
          let textr = "";
          if (pushname) {
            textr += `*Hii ${LangG.greet} ,🌟 ${pushname}∆${disc}'s* Exp\n\n`;
          } else {
            textr += `*${m.sender}∆${disc}'s* Exp\n\n`;
          }
          let ttms = `${userq.xp}` / 8;
          textr += `*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor(
            userq.level + 1
          )}\n*🏡Level*: ${userq.level}\n*Total Messages:*- ${ttms}`;

          try {
            ppuser = await Void.profilePictureUrl(m.sender, "image");
          } catch {
            ppuser = picsecktor;
          }

          const rank = new canvacord.Rank()
            .setAvatar(ppuser)
            .setLevel(userq.level)
            .setLevelColor("#ffa200", "#ffa200")
            .setCurrentXP(userq.xp)
            .setStatus("online")
            .setBackground(
              "IMAGE",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU"
            )
            .setOverlay("#ffffff", 100, false)
            .setRequiredXP(Levels.xpFor(userq.level + 1))
            .setProgressBar("#ffa200", "COLOR")
            .setRank(0, role, false)
            .setBackground("COLOR", "#000000")
            .setUsername("Rank Check!")
            .setDiscriminator(disc);
          rank.build().then(async (data) => {
            Void.sendMessage(
              m.chat,
              {
                image: data,
                caption: textr,
              },
              {
                quoted: m,
              }
            );
          });
        }
        break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ginfo":
      case "groupinfo":
        if (q === "help") {
          return m.reply(
            `*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Shows complete Group Info`
          );
        }
        try {
          var pic = await Void.getProfilePicture(anu.id);
        } catch {
          var pic = "https://wallpapercave.com/wp/wp7741503.jpg";
        }
        let ingfo = `
╔════◇
║ *- G R O U P  I N F O -*
║ *📮Name:* ${groupName}
║ *🔖Group ID:* ${m.chat}
║ *👑Creator:* @${groupMetadata.owner.split("@")[0]} on ${moment(
          `${groupMetadata.creation}` * 1000
        )
          .tz("Asia/Kolkata")
          .format("DD/MM/YYYY HH:mm:ss")}
║ *🏅Admins:* ${groupAdmins.length}
║ *👥Group Members:* ${participants.length}
║ *💠Description:*\n ${groupMetadata.desc}
║
║*Powered by ${LangG.title}* 🍭
╚════════════╝ `;
        ds = await getBuffer(pic);
        Void.sendMessage(
          m.chat,
          {
            image: ds,
            caption: ingfo,
            mentions: [groupMetadata.owner],
          },
          {
            quoted: m,
          }
        );
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "t-all":
      case "all":
      case "tagall":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* TagAll\n*🍀Aliases* -t-all,-all,-tagall\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } Message\n\n*📚Description:* Tags every user of Group with a message `
            );
            return;
          }

          if (!m.isGroup) return m.reply(LangG.group);
          if (!isAdmins) return m.reply(LangG.admin);

          let teks = `══✪〘 🛡️ *Tag All* 🛡️ 〙✪══
➲ *Message :* ${q ? q : "blank"}\n\n`;
          for (let mem of participants) {
            teks += `📍 @${mem.id.split("@")[0]}\n`;
          }
          Void.sendMessage(
            m.chat,
            {
              text: teks,
              mentions: participants.map((a) => a.id),
            },
            {
              quoted: m,
            }
          );
        }
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "weather":
        {
          if (!q) return m.reply("Give me location.Baka!!");
          let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
          );
          let textw = "";
          textw += `*🌟Weather of  ${q}*\n\n`;
          textw += `*Location:-* ${q}\n`;
          textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
          textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
          textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
          textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
          textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
          textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
          textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
          textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
          textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
          textw += `*Country:-* ${wdata.data.sys.country}\n`;

          Void.sendMessage(
            m.chat,
            {
              text: textw,
            },
            {
              quoted: m,
            }
          );
        }
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tagh":
      case "htag":
      case "hidetag":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${
                prefix + command
              } message \n\n*📚Description:* Tags all users by not mentioning their number`
            );
          }
          if (!m.isGroup) m.reply(LangG.group);
          if (!isBotAdmins) m.reply(LangG.botAdmin);
          Void.sendMessage(
            m.chat,
            {
              text: q ? q : "",
              mentions: participants.map((a) => a.id),
            },
            {
              quoted: m,
            }
          );
        }
        break;
		    	case 'vote': {
				if (q === 'help') {
					return m.reply(`*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${prefix + command} Voting title \n\n*📚Description:* Starts Voting in Group`)
				}
				if (!m.isGroup) m.reply(LangG.group)
				if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*-deletevote* - to delete votes`
				if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Do Gagana love me`
				reply(`Voting starts!\n\n*-upvote* - for yes\n*-devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
				vote[m.chat] = [q, [],
					[]
				]
				await sleep(1000)
				upvote = vote[m.chat][1]
				devote = vote[m.chat][2]
				teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕

├ Total: ${vote[m.chat][1].length}


└────

┌〔 DEVOTE 〕

├ Total: ${vote[m.chat][2].length}


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
					footer: Void.user.name,
					buttons: buttonsVote,
					headerType: 1
				}
				Void.sendMessage(m.chat, buttonMessageVote)
			}
				break
			case 'upvote': {
				if (q === 'help') {
					return m.reply(`*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Upvotes current voting in group`)
				}
				if (!m.isGroup) m.reply(LangG.group)
				if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
				isVote = vote[m.chat][1].concat(vote[m.chat][2])
				wasVote = isVote.includes(m.sender)
				if (wasVote) throw 'You have Voted'
				vote[m.chat][1].push(m.sender)
				menvote = vote[m.chat][1].concat(vote[m.chat][2])
				teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕

├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

┌〔 DEVOTE 〕

├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

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
					footer: Void.user.name,
					buttons: buttonsUpvote,
					headerType: 1,
					mentions: menvote
				}
				Void.sendMessage(m.chat, buttonMessageUpvote)
			}
				break
			case 'devote': {
				if (q === 'help') {
					return m.reply(`*❗Command:* ${command}\n*🧩Category:* Group Menu\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Devotes current voting in group`)
				}
				if (!m.isGroup) m.reply(LangG.group)
				if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
				isVote = vote[m.chat][1].concat(vote[m.chat][2])
				wasVote = isVote.includes(m.sender)
				if (wasVote) throw 'You Have Already Voted Thiricano :)'
				vote[m.chat][2].push(m.sender)
				menvote = vote[m.chat][1].concat(vote[m.chat][2])
				teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 YES ✅〕

├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

┌〔 NO ❎ 〕

├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

*${prefix}unvote* - to delete votes`
				let buttonsDevote = [{
					buttonId: `${prefix}upvote`,
					buttonText: {
						displayText: '👍🏻Up-Vote👍🏻'
					},
					type: 1
				},
				{
					buttonId: `${prefix}devote`,
					buttonText: {
						displayText: '👎🏻De-Vote👎🏻'
					},
					type: 1
				}
				]

				let buttonMessageDevote = {
					text: teks_vote,
					footer: Void.user.name,
					buttons: buttonsDevote,
					headerType: 1,
					mentions: menvote
				}
				Void.sendMessage(m.chat, buttonMessageDevote)
			}
				break
				/*
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
░██████╗░██╗░░░░░░░██╗██╗████████╗░█████╗░██╗░░██╗███████╗░██████╗
██╔════╝░██║░░██╗░░██║██║╚══██╔══╝██╔══██╗██║░░██║██╔════╝██╔════╝
╚█████╗░░╚██╗████╗██╔╝██║░░░██║░░░██║░░╚═╝███████║█████╗░░╚█████╗░
░╚═══██╗░░████╔═████║░██║░░░██║░░░██║░░██╗██╔══██║██╔══╝░░░╚═══██╗
██████╔╝░░╚██╔╝░╚██╔╝░██║░░░██║░░░╚█████╔╝██║░░██║███████╗██████╔╝
╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/
      case 'enable':
   case 'act':
   if (!q) return m.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)

                                        if (!isGroup) return m.reply("This command is only for group")
  if (!isAdmins) return m.reply("❌ This command is only for admmin")
  if (!isBotAdmins) return m.reply("❌ Provide Admin Role");
                                        if (args[0] == "antilink") {
                                        sck.findOne({ id : m.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: m.chat, antilink: "true" }).save()
  return m.reply(' Antilink Enabled Successfully')
           } else {
           if(gc.antilink == "true") return m.reply("Antilink was alredy enabled is already enabled")
                                      await sck.updateOne({ id: m.chat }, {antilink: "true"})
                              return m.reply('Enabled antilink in current chat.')
                          }
                  })
                                        } else if(args[0] == "events"){
                                          sck.findOne({ id : m.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: m.chat, events: "true" }).save()
  return m.reply("Successfully Enabled *Events*")
           } else {
           if(gc.events == "true") return m.reply("*Events* is already enabled")
                                      await sck.updateOne({ id: m.chat }, {events: "true"})
                              return m.reply("Successfully Enabled *Events*")
                          }
                  })
                                    } else if(args[0] == "invitdgdfgfdgdfgdfgdfg"){
                                          sck.findOne({ id : m.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: m.chat, invite: "true" }).save()
  return m.reply(" Successfully Enabled *Indfsfdvite*")
           } else {
           if(gc.invite == "true") return m.reply("*Idsgdgnvite* is already enabled")
                                      await sck.updateOne({ id: m.chat }, {invite: "true"})
                                  console.log(gc.invite)
                              return m.reply("Successfully Enabled *Invite*")

                          }
                  })
                                     } else if(args[0] == "nsfw"){
                                          sck.findOne({ id : m.chat }).then(async(gc) => {
           if (!gc) {
               await new sck({ id: m.chat, nsfw: "true" }).save()
  return m.reply("Successfully Enabled *NSFW*")
           } else {
           if(gc.nsfw == "true") return m.reply("*NSFW* is already enabled")
                                      await sck.updateOne({ id: m.chat }, {nsfw: "true"})
                                  console.log(gc.invite)
                              return m.reply("Successfully Enabled *NSFW*")

                          }
                  })
                                    }
                                    else {
                                          m.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
                                        }


    break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'disable':
     case 'deact':
      if (!q) return m.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)
                                        if (!isGroup) return m.reply("This feature in only for Group.")
  if (!isAdmins) return m.reply("❌ This Command is only for Admin")
  if (!isBotAdmins) return m.reply("❌ Give me Admin Role");
    if (args[0] == "antilink") {
  sck.findOne({ id : m.chat }).then(async(usr) => {
           if (!usr) {
  return m.reply("Antilink disabled")
           } else {
           if(usr.antilink !== "true") return m.reply(" Antlinki was already disabled")
                                      await sck.updateOne({ id: m.chat }, {antilink: "false"})
  return m.reply("Disabled antilink Successfully.");
                          }
                  })
   }else if (args[0] == "events") {
  sck.findOne({ id : m.chat }).then(async(usr) => {
           if (!usr) {
   return m.reply("Events was already disabled")
           } else {
           if(usr.events !== "true") return m.reply("Events was already disabled")
                                      await sck.updateOne({ id: m.chat }, {events: "false"})
  return m.reply("Successfully Disabled *Events*");
                          }
                  })
   } else if (args[0] == "invitefgjdngjdfjsgdj") {
  sck.findOne({ id : m.chat }).then(async(usr) => {
           if (!usr) {
   return m.reply("*Invite* is already disabled")
           } else {
           if(usr.invite !== "true") return m.reply("🎏 *Invite* is already disabled")
                                      await sck.updateOne({ id: m.chat }, {invite: "false"})
  return m.reply("🧩 Successfully Disabled *Invite*");
                          }
                  })
   } else if (args[0] == "nsfw") {

  sck.findOne({ id : m.chat }).then(async(usr) => {
           if (!usr) {
   return m.reply("*NSFW* is already disabled")
           } else {
           if(usr.nsfw !== "true") return m.reply("*NSFW* is already disabled")
                                      await sck.updateOne({ id: m.chat }, {nsfw: "false"})
  return m.reply("Successfully Disabled *NSFW*");
                          }
                  })
   }
   else {
      m.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw")
   }
  break
  //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

      case "iginfo":
        if (q === "help") {
          return m.reply(
            `*❗Command:* ${command}\n*🧩Category:* Search Menu\n*🛠️Usage:* ${
              prefix + command
            } username of instagram\n\n*📚Description:* Shows complete instagram information `
          );
        }
        try {
          if (!q) return m.reply(`Give me username ${LangG.greet}.`);
          fids = await axios.get(`https://api.popcat.xyz/instagram?user=${q}`);
          const reply = `
╔════◇
║*🏮Name:* ${fids.data.full_name}
║*🎋Username:* ${fids.data.username}
║*👥Followers:* ${fids.data.followers}
║*✨Type:* ${fids.data.private}
║*✔Verified:* ${fids.data.verified}
║*📲Following:* ${fids.data.following}
║*📪Posts:* ${fids.data.posts}
║*🚀Bio:* ${fids.data.biography}
║   *Powered by ${LangG.title}
╚════════════╝ `;
          Void.sendMessage(
            m.chat,
            {
              image: {
                url: fids.data.profile_pic,
              },
              caption: reply,
            },
            {
              quoted: m,
            }
          );
        } catch (err) {
          console.log(err);
          return m.reply(`${LangG.greet} That is a wrong username.`);
        }
        break;

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "mediafire":
        {
          if (q === "help") {
            return m.reply(
              `*❗Command:* ${command}\n*🧩Category:* Search Menu\n*🛠️Usage:* ${
                prefix + command
              } mediafire download url\n\n*📚Description:* Downloads zip from Mediafire `
            );
          }
          if (!text) return m.reply(`Give link ${LangG.greet}`);

          if (!isUrl(args[0]) && !args[0].includes("mediafire.com"))
            return reply(`The link you provided is invalid`);

          const baby1 = await mediafire(text);

          if (baby1[0].size.split("MB")[0] >= 999)
            return reply("*File Over Limit* " + util.format(baby1));

          const result4 = `*Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*



*Nᴀᴍᴇ* : ${baby1[0].nama}

*Sɪᴢᴇ* : ${baby1[0].size}

*Mɪᴍᴇ* : ${baby1[0].mime}

*Lɪɴᴋ* : ${baby1[0].link}`;

          reply(`${result4}`);

          Void.sendMessage(
            m.chat,
            {
              document: {
                url: baby1[0].link,
              },
              fileName: baby1[0].nama,
              mimetype: baby1[0].mime,
            },
            {
              quoted: m,
            }
          ).catch((err) => reply("could not found anything"));
        }

        break;

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'checkvote':
				if (q === 'help') {
					await m.reply(`*❗Command:* ${command}\n*🧩Category:* General\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Sends info about running Vote in Group`)
					return
				};

				if (!m.isGroup) m.reply(LangG.group)
				if (!(m.chat in vote)) return m.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
				teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 YES 〕

├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

┌〔 NO 〕

├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────

*${prefix}unvote* - to delete votes


©${Void.user.id}
`
				Void.sendTextWithMentions(m.chat, teks_vote, m)
				break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "p":
      case "profile":
        if (q === "help") {
          return m.reply(
            `*❗Command:* ${command}\n*🧩Category:* General\n*🛠️Usage:* ${
              prefix + command
            } reply/taq user\n\n*📚Description:* Shows profile of tagged/replied user `
          );
        }
        var bio = await Void.fetchStatus(m.sender);
        var bioo = bio.status;
        ////console.log(bio)
        const adn = isAdmins ? "True" : "False";
        try {
          pfp = await Void.profilePictureUrl(m.sender, "image");
        } catch (e) {
          pfp = picsecktor;
        }
        const profile = `
 𝐻𝑖𝑖 ${pushname} 𝐷𝑎𝑟𝑙𝑖𝑛𝑔,𝐻𝑒𝑟𝑒 𝑖𝑠 𝑦𝑜𝑢𝑟 𝐶𝑢𝑡𝑒 𝑃𝑟𝑜𝑓𝑖𝑙𝑒.
👤 𝑼𝑺𝑬𝑹𝑵𝑨𝑴𝑬  : ${pushname}
⚡ 𝑩𝑰𝑶  :  ${bioo}
👪 𝑮𝑹𝑶𝑼𝑷 :  ${groupName}
🎊 𝑨𝑫𝑴𝑰𝑵: ${adn}

*Powered by ${LangG.title}*
`;
        const buttonsd = [
          {
            buttonId: `${prefix}alive`,
            buttonText: {
              displayText: "Alive",
            },
            type: 1,
          },
          {
            buttonId: `${prefix}help`,
            buttonText: {
              displayText: " Help",
            },
            type: 1,
          },
        ];
        let buttonMessage = {
          image: {
            url: pfp,
          },
          caption: profile,
          footer: LangG.footer,
          buttons: buttonsd,
          headerType: 4,
        };
        Void.sendMessage(m.chat, buttonMessage, {
          quoted: m,
        });
        break;


//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "hi":
        if (q === "help") {
          await m.reply(
            `*❗Command:*   Hi\n*🍀Aliases* ${command}\n*🧩Category:* General \n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Replies Hello.`
          );
          return;
        }

        m.reply(`Hello ${pushname}`);
        break;
/*

███╗░░██╗██╗░░░░░██████╗░  ░█████╗░██╗
████╗░██║██║░░░░░██╔══██╗  ██╔══██╗██║
██╔██╗██║██║░░░░░██████╔╝  ███████║██║
██║╚████║██║░░░░░██╔═══╝░  ██╔══██║██║
██║░╚███║███████╗██║░░░░░  ██║░░██║██║
╚═╝░░╚══╝╚══════╝╚═╝░░░░░  ╚═╝░░╚═╝╚═╝

*/


//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "chat":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Chat with Ai\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General \n*🛠️Usage:* ${
                prefix + command
              }  your text\n\n*📚Description:* Chat with the Most Powerfull + Highly Skilled AI..`
            );
            return;
          }

          let zx = q.length;
          if (zx < 14) {
            var diffuser = m.sender.split("@")[0];
            let fetchk = require("node-fetch");
            var textuser = args.join(" ");
            let fetchtext = await fetchk(
              `http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${ttextuser}]`

            );
            let json = await fetchtext.json();
            let { cnt } = json;
            m.reply(cnt);
            return;
          }

          if (!q && !quoted)
            return m.reply(
              `Hey there! ${pushname}. How are you doing these days?`
            );
          const { Configuration, OpenAIApi } = require("openai");

          const configuration = new Configuration({
            apiKey:
              process.env.OPENAI_API_KEY ||
              "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",
          });
          const openai = new OpenAIApi(configuration);
          let teks = text
            ? text
            : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
          const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: teks,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
          });
          m.reply(completion.data.choices[0].text);
        }
        break;


/*

██╗░░░██╗████████╗██████╗░██╗░░░░░
╚██╗░██╔╝╚══██╔══╝██╔══██╗██║░░░░░
░╚████╔╝░░░░██║░░░██║░░██║██║░░░░░
░░╚██╔╝░░░░░██║░░░██║░░██║██║░░░░░
░░░██║░░░░░░██║░░░██████╔╝███████╗
░░░╚═╝░░░░░░╚═╝░░░╚═════╝░╚══════╝

*/

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'video':
			case 'ytv': {
				if (q === 'help') {
					return m.reply(`*❗Command:* ${command}\n*🧩Category:* Downloder\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends youtube video in Whatsapp `)
				}
				if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)
				let yts = require("yt-search")
				let search = await yts(args.join(" "))
				listSerch = []

				teskd = `\n📁Result From ${args.join(" ")}.\n`

				for (let i of search.all) {

					listSerch.push({

						title: i.title,
						rowId: `${prefix}ytmp4 ${i.url}`,
						description: `Secktor / ${i.timestamp}`
					})

				}

				const sections = [

					{

						title: "Total Search🔍" + search.all.length,

						rows: listSerch

					}

				]

				const listMessage = {

					text: teskd,

					footer: LangG.footer,

					title: ` *🎥Youtube Search results by  ${LangG.title}📽️*`,

					buttonText: "FOUND",

					mentions: await Void.parseMention(teskd),

					sections

				}

				Void.sendMessage(from, listMessage, {
					quoted: m
				})

			}

				break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'yta':
			case 'song': {
				if (q === 'help') {
					return m.reply(`*❗Command:* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends song in Whatsapp `)
				}

				if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)

				let yts = require("yt-search")

				let search = await yts(args.join(" "))

				listSerch = []

				teskd = `\n📂Result From *${args.join(" ")}*.\n\n*Select any Song🎵*`

				for (let i of search.all) {

					listSerch.push({

						title: i.title,
						rowId: `${prefix}ytmp3 ${i.url}`,
						description: `Author : ${i.author.name} / ${i.timestamp}`
					})

				}

				const sections = [

					{

						title: "Total Search🔍" + search.all.length,

						rows: listSerch

					}

				]

				const listMessage = {

					text: teskd,

					footer: LangG.title,

					title: `*📂Youtube Search by ${LangG.title} 𝐌𝐝*`,

					buttonText: "FOUND",

					mentions: await Void.parseMention(teskd),

					sections

				}

				Void.sendMessage(from, listMessage, {
					quoted: m
				})

			}

				break


//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'ytmp3': {
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
              }).pipe(fs.createWriteStream(`./${randomName}`));
            //  console.log("Audio downloading ->", urlYt);
              // reply("Downloading.. This may take upto 5 min!");
              await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
              });

              let stats = fs.statSync(`./${randomName}`);
              let fileSizeInBytes = stats.size;
              // Convert the file size to megabytes (optional)
              let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            //  console.log("Audio downloaded ! Size: " + fileSizeInMegabytes);
              if (fileSizeInMegabytes <= 60) {
                Void.sendMessage(
                   m.chat,
                  {
                    audio: fs.readFileSync(`./${randomName}`),
                    fileName: titleYt + ".mp3",
                    mimetype: "audio/mpeg",
                  },
                  { quoted:m }
                );
              } else {
                reply(`❌ That's larger than 60mb ${LangG.greet}.`);
              }
             fs.unlinkSync(`./${randomName}`);
          }
      break


//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'ytmp4': case 'ytvideo': case 'ytv' :
          const getRandom = (ext) => {
              return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
              if (args.length === 0) {
                m.reply(`❌ Please Provide Youtube url ${LangG.greet} \nSend ${prefix}ytv url`);
                return;
              }
              let urlYt = args[0];
              if (!urlYt.startsWith("http")) {
                m.reply(`❌ Please Provide Youtube url ${LangG.greet}!`);
                return;
              }
              let infoYt = await ytdl.getInfo(urlYt);
              //30 MIN
              if (infoYt.videoDetails.lengthSeconds >= 3000) {
                m.reply(`❌ Uhh ${LangG.greet}! I can't rander that long video.!`);
                return;
              }
              let titleYt = infoYt.videoDetails.title;
              let randomName = getRandom(".mp4");

              const stream = ytdl(urlYt, {
                filter: (info) => info.itag == 22 || info.itag == 18,
              }).pipe(fs.createWriteStream(`./${randomName}`));
              //22 - 1080p/720p and 18 - 360p
         //     console.log("Video downloading ->", urlYt);
              // reply("Downloading.. This may take upto 5 min!");
              await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
              });

              let stats = fs.statSync(`./${randomName}`);
              let fileSizeInBytes = stats.size;
              // Convert the file size to megabytes (optional)
             let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
           //   console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
              if (fileSizeInMegabytes <= 100) {
                Void.sendMessage(
                  m.chat,
                  {
                    video: fs.readFileSync(`./${randomName}`),
                    caption: `${titleYt}`,
                  },
                  { quoted: m }
                );
              } else {
                m.reply(`❌ File size bigger than 100mb.`);
              }

              fs.unlinkSync(`./${randomName}`);
      break

     // ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tts":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* Text-To-Speech\n*🍀Aliases* -tts\n*🧩Category:* Downloader/Utils\n*🛠️Usage:* ${
                prefix + command
              } Text\n\n*📚Description:* Changes your text into Voice`
            );
            return;
          }
          let texttts = text
            ? text
            : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
          const googleTTS = require("google-tts-api"); // CommonJS
          const ttsurl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          Void.sendMessage(
            m.chat,
            {
              audio: {
                url: ttsurl,
              },
              mimetype: "audio/mpeg",
              fileName: `ttsCitelVoid.m4a`,
            },

            {
              quoted: m,
            }
          );
        }
        break;

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "iplookup":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -iplookuo\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } ip-address\n\n*📚Description:* Runs Whois on Given IP-Address`
          );
          return;
        }
        try {
          if (!q) return m.reply(`_Give me an IP ${LangG.greet}._`);
          fids = await fetchJson(
            `https://api-toxic-devil.herokuapp.com/api/ip-lookup?ip=${q}`
          );
          const reply = `
╔════◇
║ *🏮IP:* ${fids.result.ip}
║ *🎋Continent:* ${fids.result.continent}
║ *👥ORG:* ${fids.result.org}
║ *👥Mobile:* ${fids.result.mobile}
║ *✨CountryCode:* ${fids.result.countryCode}
║ *✔City:* ${fids.result.city}
║ *📲Timezone:* ${fids.result.timezone}
║ *📪Latitude:* ${fids.result.latitude}
║ *📪Latitude:* ${fids.result.longitude}
║ *🚀ISP:* ${fids.result.isp}
║   *Powered by ${LangG.title}*
╚════════════╝`;
          Void.sendMessage(
            m.chat,
            {
              image: {
                url: picsecktor,
              },
              caption: reply,
            },
            {
              quoted: m,
            }
          );
        } catch (err) {
          console.log(err)
          return m.reply(`${LangG.greet} That is a wrong IP.`);
        }
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "gramify":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -gramify\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } text/reply text\n\n*📚Description:* Fixes common grammar and punctuation errors.`
          );
          return;
        }
        {
          const { Configuration, OpenAIApi } = require("openai");

          const configuration = new Configuration({
            apiKey:
              process.env.OPENAI_API_KEY ||
              "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",
          });
          const openai = new OpenAIApi(configuration);
          let teks = text
            ? text
            : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
          const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: teks,
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          m.reply(response.data.choices[0].text);
        }

         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "imdb":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -imdb\n*🧩Category:* Search\n*🛠️Usage:* ${
              prefix + command
            } movie/searies name \n\n*📚Description:* Gives Info about asked Movie/Series.`
          );
          return;
        }
        try {
          if (!q) return m.reply(`_Name a Series or movie ${LangG.greet}._`);
          let fids = await axios.get(
            `http://www.omdbapi.com/?apikey=742b2d09&t=${q}&plot=full`
          );
          //		let yts = require("yt-search")
          //		let search = await yts(q)
          //		let anu = search.videos[0]
          let imdbt = "";
          imdbt += "⚍⚍\n" + " ``` *𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ*```\n" + "⚎⚎\n";
          imdbt += "🎬Title      : " + fids.data.Title + "\n\n";
          imdbt += "📅Year       : " + fids.data.Year + "\n\n";
          imdbt += "⭐Rated      : " + fids.data.Rated + "\n\n";
          imdbt += "📆Released   : " + fids.data.Released + "\n\n";
          imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n\n";
          imdbt += "🌀Genre      : " + fids.data.Genre + "\n\n";
          imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n\n";
          imdbt += "✍Writer     : " + fids.data.Writer + "\n\n";
          imdbt += "👨Actors     : " + fids.data.Actors + "\n\n";
          imdbt += "📃Plot       : " + fids.data.Plot + "\n\n";
          imdbt += "🌐Language   : " + fids.data.Language + "\n\n";
          imdbt += "🌍Country    : " + fids.data.Country + "\n\n";
          imdbt += "🎖️Awards     : " + fids.data.Awards + "\n\n";
          imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n\n";
          imdbt += "🏙️Production : " + fids.data.Production + "\n\n";
          imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n\n";
          imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";
          /*
║    *Powered by ${LangG.title}*
╚════════════╝`
*/
          Void.sendMessage(
            m.chat,
            {
              image: {
                url: fids.Poster,
              },
              caption: imdbt,
              templateButtons: [
                { urlButton: { displayText: "Trailer", url: `test` } },
                {
                  quickReplyButton: {
                    displayText: "Get Magnet",
                    id: `${prefix}magnet ${q}`,
                  },
                },
              ],
            },
            {
              quoted: m,
            }
          );
        } catch (err) {
          console.log(err)
          return m.reply(`Could not find any matching.`);
        }
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tinyurl":
        if (q === "help") {
          await m.reply(
            `*❗Command:*  TinyUrl \n*🍀Aliases* -tinyurl\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } link\n\n*📚Description:* Make a long url tiny.`
          );
          return;
        }
        try {
          link = args[0];
          anu = await axios.get(
            `https://tinyurl.com/api-create.php?url=${link}`
          );
          reply(`*🛡️Your Shortened URL*\n\n${anu.data}`);
        } catch (e) {
          emror = String(e);
          reply(`${e}`);
        }
        break;


//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'deletevote':
			case 'delvote':
			case 'unvote': {
				if (q === 'help') {
					await m.reply(`*❗Command:* ${command}\n*🍀Aliases* -delvote,-deletevote,-unvote\n*🧩Category:* TextPro\n*🛠️Usage:* ${prefix + command} SamPandey001\n\n*📚Description:* Undos Previous Vote`)
					return
				};
				if (!m.isGroup) m.reply(LangG.group)
				if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
				delete vote[m.chat]
				reply('Successfully Deleted Vote Session In This Group')
			}
				break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "group":
      case "activate":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -group,-activate\n*🧩Category:* TextPro\n*🛠️Usage:* ${
                prefix + command
              } SamPandey001\n\n*📚Description:* Changes Privacy Settings of Group`
            );
            return;
          }
          if (!m.isGroup) m.reply(LangG.group);
          if (!isBotAdmins) m.reply(LangG.botAdmin);
          if (!isAdmins) m.reply(LangG.admin);
          if (args[0] === "close") {
            await Void.groupSettingUpdate(m.chat, "announcement")
              .then((res) => reply(`Group Chat Muted :)`))
              .catch((err) => reply(jsonformat(err)));
          } else if (args[0] === "open") {
            await Void.groupSettingUpdate(m.chat, "not_announcement")
              .then((res) => reply(`Group Chat Unmuted :)`))
              .catch((err) => reply(jsonformat(err)));
          } else {
            let buttons = [
              {
                buttonId: `${prefix}group oope`,
                buttonText: {
                  displayText: "📍Open",
                },
                type: 1,
              },
              {
                buttonId: `${prefix}group close`,
                buttonText: {
                  displayText: "📍Close",
                },
                type: 1,
              },
            ];
            await Void.sendButtonText(
              m.chat,
              buttons,
              `Group Mode`,
              Void.user.name,
              m
            );
          }
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "privacy":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -privacy\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Changes Privacy Settings of Group`
            );
            return;
          }
          if (!m.isGroup) m.reply(LangG.group);
          if (!isBotAdmins) m.reply(LangG.botAdmin);
          if (!isAdmins) m.reply(LangG.admin);
          if (args[0] === "open") {
            await Void.groupSettingUpdate(m.chat, "unlocked")
              .then((res) => reply(`Successfully Opened Edit Group Info`))
              .catch((err) => reply(jsonformat(err)));
          } else if (args[0] === "close") {
            await Void.groupSettingUpdate(m.chat, "locked")
              .then((res) => reply(`Successfully Close Edit Group Info`))
              .catch((err) => reply(jsonformat(err)));
          } else {
            let buttons = [
              {
                buttonId:`${prefix}editinfo open`,
                buttonText: {
                  displayText: "Open",
                },
                type: 1,
              },
              {
                buttonId: `${prefix}editinfo close`,
                buttonText: {
                  displayText: "Close",
                },
                type: 1,
              },
            ];
            await Void.sendButtonText(
              m.chat,
              buttons,
              `Mode Edit Info`,
              Void.user.name,
              m
            );
          }
        }
        break;

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
        case 'tele' : {
          if (!q) m.reply('Please provide me url')
          let packName = args[0].replace("https://t.me/addstickers/", "")

          let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })


          let json = await gas.json()
          m.reply(`*Total stiker:* ${json.result.stickers.length}
      *Estimated:* ${json.result.stickers.length * 1.5} detik`.trim())

          for (let i = 0; i < json.result.stickers.length; i++) {
              let fileId = json.result.stickers[i].thumb.file_id

              let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

              let jisin = await gasIn.json()


              // conn.sendMessage(m.chat, { url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path }, MessageType.sticker)
              let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)
              await Void.sendMessage(m.chat, {sticker: stiker })
              await delay(1500)
          }
          m.reply('_*Task Completed.*_')
      }
        break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

/*

██████╗░███████╗░█████╗░░█████╗░████████╗██╗░█████╗░███╗░░██╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██████╔╝█████╗░░███████║██║░░╚═╝░░░██║░░░██║██║░░██║██╔██╗██║
██╔══██╗██╔══╝░░██╔══██║██║░░██╗░░░██║░░░██║██║░░██║██║╚████║
██║░░██║███████╗██║░░██║╚█████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║
╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝
Some Reaction Commands.
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/


case 'bully': case 'bonk': case 'poke':
case 'pat': case 'lick':  case 'bite':
case 'happy': case 'kill': case 'kiss':
case 'slap': case 'cuddle':
{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let reactionuser = m.sender
let taggeduser=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[reactionuser,users]
} catch {
	users == "none"
	 ment=[reactionuser,m.sender]
}
if(users == "none"){
     taggeduser =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
   //  console.log(taggeduser)

} else {
const rcpp =`@${users.split("@"[0])}`
 taggeduser= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(taggeduser)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Void.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:taggeduser},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case 'wink': case 'glomp':case 'highfive':
case 'wave': case 'smug': case 'yeet':
case 'cringe': case 'smile': case 'blush':
{

	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let reactionuser = m.sender
let taggeduser=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[reactionuser,users]
} catch {
	users == "none"
	 ment=[reactionuser,m.sender]
}
if(users == "none"){
     taggeduser =`@${m.sender.split("@")[0]} ${command}ed at themself!`
    // console.log(taggeduser)

} else {
const rcpp =`@${users.split("@"[0])}`
 taggeduser= `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

//console.log(taggeduser)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
	await	Void.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:taggeduser},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case "punch":
  {
    var pat = await fetchJson(`https://api.waifu.pics/sfw/kick`);
    try {
      let usep = m.sender;
      let recp = ``;
      try {
        users = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

        ment = [usep, users];
      } catch {
        users = "none";
        ment = [usep, m.sender];
      }
      if (users == "none") {
        recp = `@${m.sender.split("@")[0]} punched themselves`;
        ////console.log(recp)
      } else {
        const rcpp = `@${users.split("@"[0])}`;
        recp = `@${m.sender.split("@")[0]} punched @${
          users.split("@")[0]
        } `;

        ////console.log(recp)
      }
      const response = await axios.get(pat.url, {
        responseType: "arraybuffer",
      });
      const buffer = Buffer.from(response.data, "utf-8");
      var sgif = await GIFBufferToVideoBuffer(buffer);
      Void.sendMessage(
        m.chat,
        { video: sgif, gifPlayback: true, mentions: ment, caption: recp },
        { quoted: m }
      );
    } catch (error) {
      //console.log(error);
    }
  }
   break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "pick":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -pick\n*🧩Category:* FUN\n*🛠️Usage:* ${
              prefix + command
            } chutiya\n\n*📚Description:* Use it for fun,huh`
          );
          return;
        }
        if (!q) return m.reply("*Which type of User you want?*");
        let member = participants.map((u) => u.id);
        let me = m.sender;
        let pick = member[Math.floor(Math.random() * member.length)];
        Void.sendMessage(
          m.chat,
          {
            text: `The most ${q} around us is *@${pick.split("@")[0]}*`,
            mentions: [pick],
          },
          {
            quoted: m,
          }
        );
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺

      case "quotes":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -quote\n*🧩Category:* Random\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Provieds Random quote with Author.`
          );
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
          await Void.sendMessage(
            from,
            {
              image: {
                url: picsecktor,
              },
              caption: replyf,
              footer: LangG.footer,
              templateButtons: [
                {
                  urlButton: {
                    displayText: "⭐Web",
                    url: "https://citel.vercel.app",
                  },
                },
              ],
            },
            {
              quoted: m,
            }
          );
        } catch (err) {
          console.log(err)
          return m.reply(`*❌ I couldn't find any quote.*`);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "menu":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -menu\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends Complete Menu list of Bot`
            );
            return;
          }
          		let meh = m.sender;
const userq = await Levels.fetch(m.sender, "RandomXP");
          const lvpoints = userq.level;
          var role = "GOD✨";
          if (lvpoints <= 2) {
            var role = "🏳Citizen";
          } else if (lvpoints <= 4) {
            var role = "👼Baby Wizard";
          } else if (lvpoints <= 6) {
            var role = "🧙‍♀️Wizard";
          } else if (lvpoints <= 8) {
            var role = "🧙‍♂️Wizard Lord";
          } else if (lvpoints <= 10) {
            var role = "🧚🏻Baby Mage";
          } else if (lvpoints <= 12) {
            var role = "🧜Mage";
          } else if (lvpoints <= 14) {
            var role = "🧜‍♂️Master of Mage";
          } else if (lvpoints <= 16) {
            var role = "🌬Child of Nobel";
          } else if (lvpoints <= 18) {
            var role = "❄Nobel";
          } else if (lvpoints <= 20) {
            var role = "⚡Speed of Elite";


          } else if (lvpoints <= 22) {
            var role = "🎭Elite";
          } else if (lvpoints <= 24) {
            var role = "🥇Ace I";
          } else if (lvpoints <= 26) {
            var role = "🥈Ace II";
          } else if (lvpoints <= 28) {
            var role = "🥉Ace Master";
          } else if (lvpoints <= 30) {
            var role = "🎖Ace Dominator";
          } else if (lvpoints <= 32) {
            var role = "🏅Ace Elite";
          } else if (lvpoints <= 34) {
            var role = "🏆Ace Supreme";
          } else if (lvpoints <= 36) {
            var role = "💍Supreme I";
          } else if (lvpoints <= 38) {
            var role = "💎Supreme Ii";
          } else if (lvpoints <= 40) {
            var role = "🔮Supreme Master";
          } else if (lvpoints <= 42) {
            var role = "🛡Legend III";
          } else if (lvpoints <= 44) {
            var role = "🏹Legend II";
          } else if (lvpoints <= 46) {
            var role = "⚔Legend";
          } else if (lvpoints <= 55) {
            var role = "🐉Immortal";
          }
          let ttms = `${userq.xp}` / 8;
          const timenow = moment(moment()).format('HH:mm:ss')
            moment.tz.setDefault('Asia/Jakarta').locale('id')
          let hlps = `
╔════⧫ 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶
║ *⦿Name* ${LangG.title}
║ *⦿User:* @${meh.split("@")[0]}
║ *⦿Prefix:* "${prefix}"
║ *⦿Role*: ${role}
║ *⦿Level*: ${userq.level}
║ *⦿Time:* ${timenow}
║ *⦿Total Messages:*- ${ttms}
╚═══════════════╝
𝐌𝐲 𝐮𝐬𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐚𝐫𝐞 𝐥𝐢𝐬𝐭𝐞𝐝 𝐛𝐞𝐥𝐨𝐰

╔════⧫𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏
║ 𝚐𝚌𝚕𝚒𝚗𝚔
║ 𝚜𝚎𝚝𝚐𝚛𝚘𝚞𝚙𝚙
║ 𝚐𝚛𝚘𝚞𝚙
║ 𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘
║ 𝚐𝚒𝚗𝚏𝚘
║ 𝚊𝚍𝚍
║ 𝚔𝚒𝚌𝚔
║ 𝚒𝚗𝚏𝚘
║ 𝚙𝚛𝚘𝚖𝚘𝚝𝚎
║ 𝚍𝚎𝚖𝚘𝚝𝚎
║ 𝚅𝚘𝚝𝚎
║ 𝙿𝚛𝚘𝚏𝚒𝚕𝚎
║ 𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
║ 𝚊𝚌𝚝 𝚗𝚜𝚏𝚠
║ 𝚍𝚎𝚊𝚌𝚝 𝚗𝚜𝚏𝚠
╚══════════════╝
╔════⧫𝑼𝒕𝒊𝒍𝒔
║ 𝚙𝚕𝚊𝚢
║ 𝚚𝚞𝚘𝚝𝚎𝚕𝚢
║ 𝚟𝚘𝚝𝚎 [𝚘𝚙𝚝𝚒𝚘𝚗𝚜]
║ 𝚝𝚒𝚗𝚢𝚞𝚛𝚕
║ 𝚒𝚙𝚕𝚘𝚘𝚔𝚞𝚙
║ 𝚒𝚖𝚍𝚋
║ 𝚝𝚛𝚝 [𝚕𝚊𝚗𝚐𝚞𝚊𝚐𝚎]
╚═══════════════╝

╔════⧫𝑪𝒐𝒏𝒗𝒆𝒓𝒕
║ 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
║ 𝚜𝚝𝚎𝚊𝚕
║ 𝚖𝚙𝟹
║ 𝚖𝚙𝟺𝚊𝚞𝚍𝚒𝚘
║ 𝚞𝚛𝚕
║ 𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡
║ 𝚝𝚘𝚟𝚒𝚍𝚎𝚘
║ 𝚝𝚘𝚐𝚒𝚏
║ 𝚎𝚋𝚒𝚗𝚊𝚛𝚢
║ 𝚍𝚋𝚒𝚗𝚊𝚛𝚢
╚══════════════╝

╔════⧫𝑾𝒆𝒆𝒃
║ 𝚊𝚗𝚒𝚖𝚎 𝚜𝚎𝚊𝚛𝚌𝚑 [𝚝𝚎𝚡𝚝]
║ 𝚖𝚊𝚗𝚐𝚊 𝚜𝚎𝚊𝚛𝚌𝚑 [𝚝𝚎𝚡𝚝]
║ 𝚊𝚗𝚒𝚖𝚎-𝚗𝚎𝚠𝚜
║ 𝚊𝚗𝚒𝚖𝚎 𝚛
║ 𝚊𝚗𝚒𝚖𝚎 𝚙𝚒𝚌 [𝚝𝚎𝚡𝚝]
║ 𝚙𝚘𝚔𝚎-𝚙𝚒𝚌 [𝚝𝚎𝚡𝚝]
║ 𝚙𝚘𝚔𝚎-𝚒𝚗𝚏𝚘 [𝚝𝚎𝚡𝚝]
║ 𝚊𝚗𝚒𝚖𝚎 𝚌𝚑𝚊𝚛 [𝚝𝚎𝚡𝚝]
║ 𝚠𝚊𝚒𝚏𝚞
║ 𝚕𝚘𝚕𝚒
║ 𝚗𝚎𝚔𝚘
╚═══════════════╝

╔════⧫𝑹𝒂𝒏𝒅𝒐𝒎
║ 𝚌𝚘𝚞𝚙𝚕𝚎𝚙𝚙
║ 𝚠𝚊𝚒𝚏𝚞
║ 𝚗𝚎𝚔𝚘
║ 𝚚𝚞𝚘𝚝𝚎𝚜
║ 𝚏𝚊𝚌𝚝
╚════════════╝
╔════⧫ 𝙾𝚆𝙽𝙴𝚁
║ 𝚜𝚑𝚞𝚝𝚍𝚘𝚠𝚗
║ 𝚝𝚑𝚎𝚖𝚎 [𝚝𝚎𝚡𝚝]
║ 𝚌𝚑𝚊𝚝𝚋𝚘𝚝 𝚘𝚗
║ 𝚌𝚑𝚊𝚝𝚋𝚘𝚝 𝚘𝚏𝚏
║ 𝚖𝚘𝚍𝚎 [𝚝𝚎𝚡𝚝]
║ 𝚛𝚎𝚜𝚝𝚊𝚛𝚝
║ 𝚋𝚌𝚐𝚛𝚘𝚞𝚘𝚙 [𝚝𝚎𝚡𝚝]
║ 𝚊𝚙𝚙𝚛𝚘𝚟𝚎 𝚘𝚛 𝚊 [𝚛𝚎𝚙𝚕𝚢]
║ 𝚍𝚒𝚜𝚜𝚊𝚙𝚙𝚛𝚘𝚟𝚎 𝚘𝚛 𝚍𝚊
╚══════════════════╝
╔════⧫ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁
║ 𝚜-𝚌𝚛𝚢
║ 𝚜-𝚕𝚒𝚌𝚔
║ 𝚜-𝚑𝚞𝚐
║ 𝚜-𝚙𝚊𝚝
║ 𝚜-𝚋𝚒𝚝𝚎
║ 𝚜-𝚢𝚎𝚎𝚝
║ 𝚜-𝚋𝚞𝚕𝚕𝚢
║ 𝚜-𝚋𝚘𝚗𝚔
║ 𝚜-𝚠𝚒𝚗𝚔
║ 𝚜-𝚙𝚘𝚔𝚎
║ 𝚜-𝚜𝚕𝚊𝚙
║ 𝚜-𝚜𝚖𝚒𝚕𝚕𝚎
║ 𝚜-𝚑𝚊𝚙𝚙𝚢
║ 𝚜-𝚌𝚛𝚒𝚗𝚐𝚎
║ 𝚜-𝚌𝚞𝚍𝚍𝚕𝚎
║ 𝚜-𝚑𝚒𝚐𝚑𝚏𝚒𝚟𝚎
║ 𝚜-𝚜𝚑𝚒𝚗𝚘𝚋𝚞
║ 𝚜-𝚖𝚎𝚐𝚞𝚖𝚒𝚗
║ 𝚜-𝚑𝚊𝚗𝚍𝚑𝚘𝚕𝚍
╚══════════════════╝

 ╔════⧫𝑵𝑺𝑭𝑾
 ║ 𝚏𝚒𝚜𝚝𝚒𝚗𝚐
 ║ 𝚏𝚒𝚗𝚐𝚎𝚛𝚒𝚗𝚐
 ║ 𝚙𝚞𝚜𝚜𝚢
 ║ 𝚙𝚊𝚗𝚝𝚒𝚎𝚜
 ║ 𝚊𝚗𝚊𝚕
 ║ 𝚑𝚎𝚗𝚝𝚊𝚒
 ║ 𝚖𝚒𝚕𝚏
 ║ 𝚝𝚒𝚝𝚜
 ║ 𝚜𝚌𝚑𝚘𝚘𝚕
 ║ 𝚖𝚊𝚒𝚍
 ║ 𝚗𝚞𝚛𝚜𝚎
 ║ 𝚝𝚞𝚜𝚑𝚢
 ║ 𝚜𝚒𝚜
 ║ 𝚏𝚘𝚘𝚝
 ║ 𝚋𝚘𝚘𝚋𝚜
 ║ *𝚁𝚎𝚊𝚕 𝙽𝚜𝚏𝚠*
 ║ 𝚛𝚙𝚞𝚜𝚜𝚢
 ║ 𝚛𝚊𝚗𝚊𝚕
 ║ 𝚅𝚒𝚡𝚎𝚗𝚗
 ║ 𝚂𝙾𝙻𝙾
 ║ 𝚎𝚌𝚌𝚑𝚒
 ║ 𝚛𝚋𝚘𝚘𝚋𝚜
 ║ 𝚌𝚘𝚜𝚙𝚕𝚊𝚢
 ╚════════════════╝
*📌𝙽𝚘𝚝𝚎* You can use
<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
_🌟Eg: -anime help_`;
          /*
			await Void.sendMessage(from, {
					image:{url:picsecktor}, caption: hlp,
					footer: LangG.footer,
					templateButtons: [
						{ urlButton: { displayText: "⭐Web", url: "https://citel.vercel.app" } }

					]
				}, { quoted: m }) */

          await Void.sendMessage(
            m.chat,
            {
              video: fs.readFileSync("./assets/help.mp4"),
              gifPlayback: true,
              caption: hlps,
              footer: LangG.footer,
              mentions: [meh],
            },
            {
              quoted: m,
            }
          );
        }

        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "fact":
        {
          await axios
            .get(`https://nekos.life/api/v2/fact`)
            .then((response) => {
              const tet = `*Fact:* ${response.data.fact}\n\n*Powered by ${LangG.title} 𝐌𝐝*`;
              Void.sendMessage(
                from,
                {
                  image: {
                    url: picsecktor,
                  },
                  caption: tet,
                  footer: LangG.footer,
                  templateButtons: [
                    {
                      urlButton: {
                        displayText: "⭐Web",
                        url: "https://citel.vercel.app",
                      },
                    },
                  ],
                },
                {
                  quoted: m,
                }
              );
            })
            .catch((err) => {
              m.reply(`✖  An error occurred.`);
            })

            .catch((err) => {
              m.reply(`Uhh,Got an Error ✖.`);
            });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "shell":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -shell\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } command\n\n*📚Description:* Runs command in heroku shell`
          );
          return;
        }
        if (!isCreator) return m.reply("*This command is only for my Owner*");
        if (!q) return;
        exec(q, (err, stdout) => {
          if (err) return reply(`${err}`);
          if (stdout) {
            reply(`•-----${LangG.title}-Terminal-----•\n\n${stdout}`);
          }
        });
         break;
         case 'logs':
           {
          exec(`heroku logs -a ${Config.HEROKU.APP_NAME}`, (err, stdout) => {
          if (err) return reply(`${err}`);
          if (stdout) {
            reply(`•-----${LangG.title}-Logs-----•\n\n${stdout}`);
          }
        });
           }
           break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'igdl': case 'instagram': {
          if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
          try {
          hx.igdl(args[0]).then(async(resed) => {
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
          anu_list.push({buttonId: `-ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
          }
          textbv += `\n\n_Select the media below to download_`
          let buttons = anu_list
          let buttonMessage = {
          image:log0,
          jpegThumbnail:thum,
          caption: textbv,
          footer: `${LangG.title}`,
          buttons: buttons,
          headerType: 4
          }
          Void.sendMessage(from, buttonMessage, {quoted:m})
          })
          } catch (err) {
          reply(String(err))
          }
          }
           break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'ig': {
          if (args[0] === "mp4") {
          Void.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
          } else if (args[0] === "jpg") {
          Void.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
          } else {
          reply(" Error! ")
          }
          }
           break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'mp4' : {
          if (!args[0]) return reply(`Where's the link ?`)
          try {
          Void.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
          title:`${LangG.title}`,
          body:`${global.ownername}`,
          thumbnail: log0,
          mediaType:2,
          mediaUrl: `https://ZeroTwoMd.tech`,
          sourceUrl: `https://ZeroTwoMd.tech`
          }}}, {quoted:m})
          } catch {
          reply("Link error!")
          }
          }
           break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'jpeg': {
          if (!args[0]) return reply(`Where's the link?`)
          try {
          Void.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
          title:`${LangG.title}`,
          body:`${global.ownername}`,
          thumbnail: log0,
          mediaType:2,
          mediaUrl: `https://ZeroTwoMd.tech`,
          sourceUrl: `https://ZeroTwoMd.tech`
          }}}, {quoted:m})
          } catch {
          reply("Link error")
          }
          }
           break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'twitter': case 'twdl': case 'twmp4': {
          if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/lol/status/15177`)
          try {
          let lotwit = await aiovideodl(args[0])
          teks = `*TWITTER DOWNLOADER*
          Caption : ${lotwit.title ? lotwit.title : "undefined"}
          Type : ${lotwit.medias[1].extension}
          Size : ${lotwit.medias[1].formattedSize}
          Link : ${lotwit.medias[1].url}
          _Choose the video quality below by clicking the button_`
          let buttons = [
          {buttonId: `${prefix}twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
          {buttonId: `${prefix}twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
          ]
          let buttonMessage = {
          video: {url:lotwit.medias[1].url},
          caption: teks,
          footer: `${pushname}`,
          buttons: buttons,
          headerType: 4,
          contextInfo:{externalAdReply:{
          title:`${LangG.title}`,
          body:lotwit.title ? lotwit.title : "Twitter Downloader",
          thumbnail: log0,
          mediaType:1,
          mediaUrl: args[0],
          sourceUrl: args[0]
          }}
          }
          Void.sendMessage(from, buttonMessage, {quoted:m})
          } catch {
          reply("Secktor could not find that!")
          }
          }
           break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'twddl': {
          let buttons = [
          {buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu🪄'}, type: 1}
          ]
          let buttonMessage = {
          video: {url:args[0]},
          caption: "Done!",
          footer: `${pushname}`,
          buttons: buttons,
          headerType: 4,
          contextInfo:{externalAdReply:{
          title:`${LangG.title}`,
          body: "Twitter Downloader",
          thumbnail: log0,
          mediaType:1,
          mediaUrl: args[0],
          sourceUrl: args[0]
          }}
          }
          Void.sendMessage(from, buttonMessage, {quoted:m})
          }
           break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
          if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
          try {
          let resd = await aiovideodl(args[0])
          teks = `*| FACEBOOK DOWNLOADER |*
          Type : video/${resd.medias[0].extension}
          Quality : ${resd.medias[0].quality}
          Size : ${resd.medias[0].formattedSize}
          _For HD quality you can click the button below_`
          let buttons = [
          {buttonId: `${prefix}fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
          ]
          let buttonMessage = {
          video: {url:resd.medias[0].url},
          caption: teks,
          footer: `${pushname}`,
          buttons: buttons,
          headerType: 4,
          contextInfo:{externalAdReply:{
          title:`${LangG.title}`,
          body:"facebook downloader",
          thumbnail: log0,
          mediaType:1,
          mediaUrl: args[0],
          sourceUrl: args[0]
          }}
          }
          Void.sendMessage(from, buttonMessage, {quoted:m})
          } catch {
          reply("Secktor could not find that!")
          }
          }
          break

/*

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
█░█ █▀▀ █░░ █▀█   █▀▄▀█ █▀▀ █▄░█ █░█
█▀█ ██▄ █▄▄ █▀▀   █░▀░█ ██▄ █░▀█ █▄█

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
*/        case 'help':
          case "helpt":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -help\n*🧩Category:* General\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends Complete Menu list of Bot`
          );
          return;
        }
        		let mhe = m.sender;
        const userq = await Levels.fetch(m.sender, "RandomXP");
          const lvpoints = userq.level;
          var role = "GOD✨";
          if (lvpoints <= 2) {
            var role = "🏳Citizen";
          } else if (lvpoints <= 4) {
            var role = "👼Baby Wizard";
          } else if (lvpoints <= 6) {
            var role = "🧙‍♀️Wizard";
          } else if (lvpoints <= 8) {
            var role = "🧙‍♂️Wizard Lord";
          } else if (lvpoints <= 10) {
            var role = "🧚🏻Baby Mage";
          } else if (lvpoints <= 12) {
            var role = "🧜Mage";
          } else if (lvpoints <= 14) {
            var role = "🧜‍♂️Master of Mage";
          } else if (lvpoints <= 16) {
            var role = "🌬Child of Nobel";
          } else if (lvpoints <= 18) {
            var role = "❄Nobel";
          } else if (lvpoints <= 20) {
            var role = "⚡Speed of Elite";


          } else if (lvpoints <= 22) {
            var role = "🎭Elite";
          } else if (lvpoints <= 24) {
            var role = "🥇Ace I";
          } else if (lvpoints <= 26) {
            var role = "🥈Ace II";
          } else if (lvpoints <= 28) {
            var role = "🥉Ace Master";
          } else if (lvpoints <= 30) {
            var role = "🎖Ace Dominator";
          } else if (lvpoints <= 32) {
            var role = "🏅Ace Elite";
          } else if (lvpoints <= 34) {
            var role = "🏆Ace Supreme";
          } else if (lvpoints <= 36) {
            var role = "💍Supreme I";
          } else if (lvpoints <= 38) {
            var role = "💎Supreme Ii";
          } else if (lvpoints <= 40) {
            var role = "🔮Supreme Master";
          } else if (lvpoints <= 42) {
            var role = "🛡Legend III";
          } else if (lvpoints <= 44) {
            var role = "🏹Legend II";
          } else if (lvpoints <= 46) {
            var role = "⚔Legend";
          } else if (lvpoints <= 55) {
            var role = "🐉Immortal";
          }
          let ttms = `${userq.xp}` / 8;
          const timenow = moment(moment()).format('HH:mm:ss')
            moment.tz.setDefault('Asia/Jakarta').locale('id')
        if (!args.length > 0) {
      //    quoto = await axios.get(`https://favqs.com/api/qotd`);
          const hlp = `

╔════⧫
║ *⦿Name* ${LangG.title}
║ *⦿User:* ${pushname}
║ *⦿Prefix:* "${prefix}"
║ *⦿Role*: ${role}
║ *⦿Level*: ${userq.level}
║ *⦿Time:* ${timenow}
║ *⦿Total Messages:*- ${ttms}
╚════════════╝
𝐌𝐲 𝐮𝐬𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐚𝐫𝐞 𝐥𝐢𝐬𝐭𝐞𝐝 𝐛𝐞𝐥𝐨𝐰

${readmore}
*━━━『𝑮𝒆𝒏𝒆𝒓𝒂𝒍 』━━━*
\`\`\`𝚙𝚕𝚊𝚢, 𝚊𝚕𝚒𝚟𝚎, 𝚑𝚎𝚕𝚙,𝚋𝚌𝚐𝚛𝚘𝚞𝚙, 𝚙𝚛𝚘𝚏𝚒𝚕𝚎, 𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔, 𝚊𝚗𝚒𝚖𝚎 𝚙𝚒𝚌 [𝚝𝚎𝚡𝚝], 𝚊𝚗𝚒𝚖𝚎 𝚌𝚑𝚊𝚛 [𝚝𝚎𝚡𝚝], 𝚠𝚊𝚒𝚏𝚞, 𝚕𝚘𝚕𝚒, 𝚜𝚝𝚒𝚌𝚔𝚎𝚛, 𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛, 𝚌𝚘𝚞𝚙𝚕𝚎𝚙𝚙\`\`\`

*━━━『𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━*
\`\`\`𝚐𝚌𝚕𝚒𝚗𝚔, 𝚙𝚙𝚐𝚛𝚘𝚞𝚙, 𝚝𝚊𝚐𝚊𝚕𝚕, 𝚑𝚝𝚊𝚐, 𝚐𝚛𝚘𝚞𝚙, 𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘, 𝚐𝚒𝚗𝚏𝚘, 𝚊𝚍𝚍, 𝚔𝚒𝚌𝚔, 𝚒𝚗𝚏𝚘, 𝚙𝚛𝚘𝚖𝚘𝚝𝚎, 𝚍𝚎𝚖𝚘𝚝𝚎, 𝙿𝚛𝚘𝚏𝚒𝚕𝚎, 𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎\`\`\`

*━━━『𝑼𝒕𝒊𝒍𝒔 』━━━*
\`\`\`𝚙𝚕𝚊𝚢, 𝚢𝚝𝚟𝚍, 𝚢𝚝𝚊𝚍, 𝚏𝚋(𝚋𝚎𝚝𝚊), 𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖, 𝚝𝚠𝚒𝚝𝚝𝚎𝚛, 𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝, 𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛\`\`\`

*━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━*
\`\`\`𝚜𝚝𝚒𝚌𝚔𝚎𝚛, 𝚖𝚙𝟹, 𝚖𝚙𝟺𝚊𝚞𝚍𝚒𝚘, 𝚕𝚒𝚗𝚔, 𝚝𝚘𝚟𝚒𝚍𝚎𝚘, 𝚝𝚘𝚐𝚒𝚏, 𝚝𝚘𝚟𝚗, 𝚎𝚋𝚒𝚗𝚊𝚛𝚢, 𝚍𝚋𝚒𝚗𝚊𝚛𝚢\`\`\`

*━━━『𝑾𝒆𝒆𝒃 』━━━*
\`\`\`𝚊𝚗𝚒𝚖𝚎-𝚙𝚒𝚌, 𝚊𝚗𝚒𝚖𝚎 𝚜𝚎𝚊𝚛𝚌𝚑 𝚝𝚎𝚡𝚝, 𝚊𝚗𝚒𝚖𝚎 𝚗𝚎𝚠𝚜, 𝚊𝚗𝚒𝚖𝚎 𝚛, 𝚙𝚘𝚔𝚎-𝚙𝚒𝚌, 𝚙𝚘𝚔𝚎-𝚜𝚎𝚊𝚛𝚌𝚑, 𝚖𝚊𝚗𝚐𝚊-𝚜𝚎𝚊𝚛𝚌𝚑, 𝚠𝚊𝚒𝚏𝚞, 𝚕𝚘𝚕𝚒, 𝚗𝚎𝚔𝚘\`\`\`

*━━━『𝑹𝒂𝒏𝒅𝒐𝒎 』━━━*
\`\`\`𝚌𝚘𝚞𝚙𝚕𝚎𝚙𝚙, 𝚠𝚊𝚒𝚏𝚞, 𝚗𝚎𝚔𝚘, 𝚚𝚞𝚘𝚝𝚎𝚜, 𝚏𝚊𝚌𝚝\`\`\`

*━━━『𝑶𝒘𝒏𝒆𝒓』━━━*
\`\`\`𝚜𝚑𝚞𝚝𝚍𝚘𝚠𝚗, 𝚝𝚑𝚎𝚖𝚎-𝚕𝚒𝚜𝚝,𝚖𝚘𝚍𝚎-𝚙𝚛𝚒𝚟𝚊𝚝𝚎, 𝚖𝚘𝚍𝚎-𝚙𝚞𝚋𝚕𝚒𝚌, 𝚛𝚎𝚜𝚝𝚊𝚛𝚝, 𝚎𝚟𝚊𝚕, -𝚊𝚙𝚙𝚛𝚘𝚟𝚎, -𝚍𝚒𝚜𝚊𝚙𝚙𝚛𝚘𝚟𝚎, 𝚓𝚘𝚒𝚗, 𝚞𝚙𝚍𝚊𝚝𝚎,𝚌𝚑𝚊𝚝𝚋𝚘𝚝 𝚘𝚗,𝚌𝚑𝚊𝚝𝚋𝚘𝚝 𝚘𝚏𝚏\`\`\`

*━━━『𝑺𝒕𝒊𝒄𝒌𝒆𝒓』━━━*
\`\`\`\𝚜-𝚜𝚕𝚊𝚙, 𝚜-𝚍𝚊𝚗𝚌𝚎, 𝚜-𝚍𝚊𝚗𝚌𝚎, 𝚜-𝚋𝚘𝚗𝚔, 𝚜-𝚕𝚒𝚌𝚔 𝚜-𝚙𝚊𝚝, 𝚜-𝚌𝚞𝚍𝚍𝚕𝚎, 𝚜-𝚋𝚘𝚗𝚔, 𝚜-𝚑𝚒𝚐𝚑𝚏𝚒𝚟𝚎, \`\`\`

*━━━『𝑹𝒆𝒂𝒄𝒕 』━━━*
\`\`\`𝚙𝚊𝚝, 𝚑𝚞𝚐, 𝚔𝚒𝚜𝚜, 𝚜𝚕𝚊𝚙, 𝚌𝚞𝚍𝚍𝚕𝚎, 𝚙𝚘𝚔𝚎, 𝚍𝚊𝚗𝚌𝚎, 𝚋𝚒𝚝𝚎, 𝚢𝚎𝚎𝚝, 𝚕𝚒𝚌𝚔, 𝚑𝚒𝚐𝚑𝚏𝚒𝚟𝚎, 𝚜𝚖𝚒𝚕𝚎, 𝚙𝚞𝚗𝚌𝚑\`\`\`

*━━━『 𝑵𝑺𝑭𝑾 』━━━*
\`\`\`𝙽𝚘𝚝 𝚟𝚒𝚜𝚒𝚋𝚕𝚎 𝚙𝚞𝚋𝚕𝚒𝚌𝚕𝚢 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚑𝚎𝚌𝚔 -𝚖𝚎𝚗𝚞 \`\`\`

*📌𝙽𝚘𝚝𝚎*
 <<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
_🌟Eg: -anime help_`;

          await Void.sendMessage(
            from,
            {
              image: {
                url: picsecktor,
              },
              caption: hlp,
              footer: LangG.footer,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
              templateButtons: [
                {
                  urlButton: {
                    displayText: "⭐Web",
                    url: "https://citel.vercel.app",
                  },
                },
                {
                  quickReplyButton: {
                    displayText: "⚡List Menu",
                    id: `${prefix}list`,
                  },
                },
                {
                  quickReplyButton: {
                    displayText: "Menu",
                    id: `${prefix}menu`,
                  },
                },
              ],
            },
            {
              quoted: m,
            }
          );
        }

        //Void.sendMessage(m.chat,{video:fs.readFileSync('./src/help.mp4'),gifPlayback:true,caption:hlp},{quoted:m})
        if (args[0] == "1") {
          let hlp2 = `
╔════⧫ *💠Group Menu💠*
║ ${prefix}gclink
║ ${prefix}setgroupp
║ ${prefix}setname [text]
║ ${prefix}group [option]
║ ${prefix}editinfo [option]
║ ${prefix}ginfo
║ ${prefix}add @user
║ ${prefix}kick @user
║ ${prefix}promote @user
║ ${prefix}demote @user
║ ${prefix}act nsfw
║ ${prefix}deact nsfw
║ ${prefix}act events
║ ${prefix}deact events
║ ${prefix}act antilink
║ ${prefix}deact antilink
╚════════════╝
      _Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 2`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            caption: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "2") {
          let hlp2 = `
╔═══⧫ *💠Downloader 💠*
║${prefix}play [name]
║${prefix}song [url/name]
║${prefix}video [url/name]
║${prefix}play [url/name]
║${prefix}ytmp3 url
║${prefix}ytmp4 url
║${prefix}ytad [url]
║${prefix}ytvd [url]
║${prefix}fb [url] (beta
║${prefix}instagram [url]
║${prefix}twitter [url]
║${prefix}twittermp3 [url]
║${prefix}pinterest query
╚════════════╝
_Press the button blew for detailed menu_
`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 3`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            caption: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };
          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "3") {
          let hlp2 = `
╔════⧫ *💠 Search💠*
║${prefix}play [query]
║${prefix}yts [query]
║${prefix}google [query]
║${prefix}gimage [query]
║${prefix}pint [query]
║${prefix}wallpaper [query]
║${prefix}ytsearch [query]
║${prefix}imdb name
║${prefix}movie name
╚════════════╝
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 2`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 4`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            caption: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "4") {
          let hlp2 = `
*💠 Text Pro Menu 💠(Beta Stage)*
Wait for it.
_Press the button blew for detailed menu_
`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 3`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 5`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            caption: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "5") {
          let hlp2 = `
╔════⧫ *💠Reaction💠*
║${prefix}cry
║${prefix}hug
║${prefix}pat
║${prefix}yeet
║${prefix}bullly
║${prefix}bonk
║${prefix}wink
║${prefix}poke
║${prefix}slap
║${prefix}smile
║${prefix}happy
║${prefix}cringe
║${prefix}cuddle
╚════════════╝
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 4`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 6`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            caption: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "6") {
          let hlp2 = `
╔════⧫ *💠 Convert 💠*
║${prefix}photo
║${prefix}imagesticker
║${prefix}toimg
║${prefix}removebg
║${prefix}sticker
║${prefix}mp3
║${prefix}mp4audio
║${prefix}emoji (Beta)
║${prefix}emojimix (Beta)
║${prefix}tovideo
║${prefix}togif
║${prefix}tovn
║${prefix}ebinary
║${prefix}dbinary
║${prefix}styletext
╚════════════╝
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 6`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 1`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            text: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "7") {
          let hlp2 = `
  ╔════⧫ *💠 Random 💠*
  ║${prefix}couplepp
  ║${prefix}waifu
  ║${prefix}haighusha/ haig
  ║${prefix}quotes
  ║${prefix}fact
  ║${prefix}Neko
  ║${prefix}HNeko (NSFW)
  ║${prefix}loli
  ║${prefix}Nwaifu (NSFW)
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 6`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 8`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            text: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };
          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "8") {
          let hlp2 = `
╔════⧫ *💠 Voice Changer💠*
║${prefix}bass
║${prefix}blown
║${prefix}deep
║${prefix}earrape
║${prefix}fast
║${prefix}fat
║${prefix}nightcore
║${prefix}reverse
║${prefix}robot
║${prefix}slow
║${prefix}squirrel
╚═════════════════╝
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 7`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 9`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
             text: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };
          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "9") {
          let hlp2 = `
 ╔════⧫ *💠 Misc Menu 💠*
 ║${prefix}ping
 ║${prefix}owner
 ║${prefix}donate
 ║${prefix}menu /
 ║${prefix}helpt
 ║${prefix}?
 ║${prefix}delete
 ║${prefix}chatinfo
 ║${prefix}quoted
 ║${prefix}listpc
 ║${prefix}listgc
 ║${prefix}listonline
 ║${prefix}report (report bug to owner)
 ║${prefix}repuest (request anything)
 ╚════════════╝
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 8`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}helpt 1`,
              buttonText: {
                displayText: "⚡helpt",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            text: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "10") {
          let hlp2 = `
 ╔════⧫ *💠 Anime 💠*
 ║${prefix}Naruto
 ║${prefix}Boruto
 ║${prefix}Minato
 ║${prefix}hinta
 ║${prefix}Sasuke
 ║${prefix}Sakura
 ║${prefix}Kaneki
 ║${prefix}Rize
 ║${prefix}Itori
 ║${prefix}Kurumi
 ║${prefix}Toukachan
 ║${prefix}Miku
 ╚════════════╝
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
              buttonId: `${prefix}helpt 9`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
           buttonId: `${prefix}helpt 11`,
              buttonText: {
                displayText: "⇒",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            text: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }
        if (args[0] == "11") {
          let hlp2 = `
 ╔════⧫ *💠 NSFW 💠*
 ║${prefix}fisting
 ║${prefix}fingering
 ║${prefix}pussy
 ║${prefix}panties
 ║${prefix}anal
 ║${prefix}hentai
 ║${prefix}milf
 ║${prefix}tits
 ║${prefix}school
 ║${prefix}maid
 ║${prefix}nurse
 ║${prefix}tushy
 ║${prefix}sis
 ║${prefix}foot
 ║${prefix}boobs
 ║ecchi
 ╚════════════╝
 ╔════⧫ *Real NSFW*
 ║rpussy
 ║rboobs
 ║ranal
 ║rboobs
 ╚════════════╝
_Press the button blew for detailed menu_`;
          const hhbut = [
            {
           buttonId: `${prefix}helpt 10`,
              buttonText: {
                displayText: "⇐",
              },
              type: 1,
            },
            {
          buttonId: `${prefix}helpt 1`,
              buttonText: {
                displayText: "⚡Help",
              },
              type: 1,
            },
          ];
          let hbutto = {
            image: {
              url: picsecktor,
            },
            text: hlp2,
            footer: LangG.footer,
            buttons: hhbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: LangG.body,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };

          Void.sendMessage(m.chat, hbutto, {
            quoted: m,
          });
        }

        break;
        /*


░██████╗███████╗██████╗░░█████╗░██████╗░░█████╗░████████╗███████╗
██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
╚█████╗░█████╗░░██████╔╝███████║██████╔╝███████║░░░██║░░░█████╗░░
░╚═══██╗██╔══╝░░██╔═══╝░██╔══██║██╔══██╗██╔══██║░░░██║░░░██╔══╝░░
██████╔╝███████╗██║░░░░░██║░░██║██║░░██║██║░░██║░░░██║░░░███████╗
╚═════╝░╚══════╝╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝




		     case 'help' :
		    {
			     if (Config.LANG === "SECKTOR") {
				     let todlinkh = [
      `Great responsibility comes with Greath Powers. `,
      `Fear is not that evil....\n\nI can stand right beside you till end of World.`,
      `To know sorrow is not terrifying. ...`,
      `People become stronger because they have memories they can’t forget.`,
      `“Hard work is worthless for those that don’t believe in themselves.”`,
      `“It is at the moment of death that humanity has value.”`
    ];

    let todg = todlinkh[Math.floor(Math.random() * todlinkh.length)];
            const hlp = `*Hii ${pushname} Master.*\n\n*This is Secktor\n${todg}\n\n
            ${readmore}
			\n*━━━━━ 𝓒𝓸𝓻𝓮 ━━━━━*\n\`\`\`alive, help, menu, status, bc, bcgroup, profile\`\`\`
			\n*━━━━━ 𝓜𝓸𝓭𝓮𝓻𝓪𝓽𝓲𝓸𝓷 ━━━━━*\n\`\`\`gclink, setgroupp, group, editinfo, ginfo, add, kick, info, promote, demote, Vote, Profile, listonline\`\`\`
			\n*━━━━━ 𝓤𝓽𝓲𝓵𝓼 ━━━━━*\n\`\`\`play, ytvd, ytad, fb(beta), instagram, twitter, pint, wallpaper\`\`\`
			\n*━━━ 𝓜𝓮𝓭𝓲𝓪-𝓒𝓸𝓷𝓿𝓮𝓻𝓽 ━━━*\n\`\`\`sticker, mp3, mp4audio, link, emojimix, tovideo, togif, tovn, ebinary, dbinary\`\`\`
			\n*━━━━━ 𝓐𝓷𝓲𝓶𝓮 ━━━━━*\n\`\`\`anime, manga, anime news,character, waifu, loli, neko\`\`\`
			\n*━━━━━ 𝓕𝓾𝓷 ━━━━━*\n\`\`\`coffee, couplepp, quotes, fact\`\`\`
			\n*━━━━━ 𝓡𝓮𝓪𝓬𝓽 ━━━━━*\n\`\`\`cry, lick, hug, pat, bite, yeet, bully, bonk, wink, poke, slap, smile, glomp, happy, cringe, cuddle, highfive, shinobu, megumin, handhold\`\`\`
			\n*━━━━━ 𝓝𝓼𝓯𝔀 ━━━━━*\n\`\`\`Not visible publicly Please check -menu \`\`\`
      \n*━━━━━ 𝓔𝔁𝓽𝓻𝓪𝓼 ━━━━━*\n\`\`\`naruto, minao, boruto, hinata, kaneki, toukachan, rize, itori, kurumi, miku, sasuke, akira, sakura\`\`\`
			\n*📌𝙽𝚘𝚝𝚎* 𝚞𝚜𝚎
			\n<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
			\n_🌟Eg: ${prefix}anime help_`;

							 await Void.sendMessage(
							   from,
							   {
								 image: {
								   url: picsecktor,
								 },
								 caption: hlp,
								 footer: LangG.footer,
								 contextInfo: {
								   externalAdReply: {
									 title: LangG.title,
									 body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
									 thumbnail: log0,
									 mediaType: 2,
									 mediaUrl: `https://citel.vercel.app`,
									 sourceUrl: `https://citel.vercel.app`,
								   },
								 },
								 templateButtons: [
								   {
									 urlButton: {
									   displayText: "⭐Web",
									   url: "https://citel.vercel.app",
									 },
								   },
								 ],
							   },
							   {
								 quoted: m,
							   }
							 );

							  }
			    if (Config.LANG === "NARUTO") {
				      let todlinyk = [
      `“HARD WORK IS WORTHLESS FOR THOSE THAT DON’T BELIEVE IN THEMSELVES.”`,
      `“THE MOMENT PEOPLE COME TO KNOW LOVE, THEY RUN THE RISK OF CARRYING HATE.”`,
      `“SOMEBODY TOLD ME I’M A FAILURE, I’LL PROVE THEM WRONG.” `,
      `“PEOPLE WHO CONTINUE TO PUT THEIR LIVES ON THE LINE TO DEFEND THEIR FAITH BECOME HEROES AND CONTINUE TO EXIST ON IN LEGEND.”`,
      `“A SMILE IS THE EASIEST WAY OUT OF A DIFFICULT SITUATION.”`,
      `“FAILING DOESN’T GIVE YOU A REASON TO GIVE UP, AS LONG AS YOU BELIEVE.”`
    ];

    let toyd = todlinyk[Math.floor(Math.random() * todlinyk.length)];   const hlp = `*Konnichiwa!(💚ω💚) my ${pushname} Darling.*\n\n${toyd}\n\n
            ${readmore}
			\n*━━━『𝑮𝒆𝒏𝒆𝒓𝒂𝒍 』━━━*\n\`\`\`play, alive, help, bc, bcgroup, profile, blackpink, anime, chara, waifu, loli, sticker, wallpaper, Couplepp\`\`\`
			\n*━━━『𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━*\n\`\`\`gclink, setgroupp, group, editinfo, ginfo, add, kick, info, promote, demote, Vote, Profile, listonline\`\`\`
			\n*━━━『𝑼𝒕𝒊𝒍𝒔 』━━━*\n\`\`\`play, ytvd, ytad, fb(beta), instagram, twitter, pint, wallpaper\`\`\`
			\n*━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━*\n\`\`\`sticker, mp3, mp4audio, link, emojimix, tovideo, togif, tovn, ebinary, dbinary\`\`\`
			\n*━━━『𝑾𝒆𝒆𝒃 』━━━*\n\`\`\`anime, manga, character, waifu, loli, neko\`\`\`
			\n*━━━『𝑹𝒂𝒏𝒅𝒐𝒎 』━━━*\n\`\`\`coffee, couplepp, waifu, neko, quotes, fact\`\`\`
			\n*━━━『𝑨𝑵𝑰𝑴𝑬』━━━*\n\`\`\`naruto, minao, boruto, hinata, kaneki, toukachan, rize, itori, kurumi, miku, sasuke, akira, sakura\`\`\`
			\n*━━━『𝑹𝒆𝒂𝒄𝒕 』━━━*\n\`\`\`cry, lick, hug, pat, bite, yeet, bully, bonk, wink, poke, slap, smile, glomp, happy, cringe, cuddle, highfive, shinobu, megumin, handhold\`\`\`
			\n*━━━『 𝑵𝑺𝑭𝑾 』━━━*\n\`\`\`Not visible publicly Please check -menu \`\`\`
			\n*📌𝙽𝚘𝚝𝚎* 𝚞𝚜𝚎
			\n<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
			\n_🌟Eg: -anime help_`;

							 await Void.sendMessage(
							   from,
							   {
								 image: {
								   url: picsecktor,
								 },
								 caption: hlp,
								 footer: LangG.footer,
								 contextInfo: {
								   externalAdReply: {
									 title: LangG.title,
									 body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
									 thumbnail: log0,
									 mediaType: 2,
									 mediaUrl: `https://citel.vercel.app`,
									 sourceUrl: `https://citel.vercel.app`,
								   },
								 },
								 templateButtons: [
								   {
									 urlButton: {
									   displayText: "⭐Web",
									   url: "https://citel.vercel.app",
									 },
								   },
								 ],
							   },
							   {
								 quoted: m,
							   }
							 );
				     }
			     if (Config.LANG === "ZEROTWO") {
				       let todlinmk = [
      `*My wings exist for you. I’m your partner atlast.* I'm not going to leave you alone darling.`,
      `“The weak ones die. Big deal”`,
      `“Don’t worry, we’ll always be together, Until the day we die.`,
      `“I think I have taken a liking to you. Won’t you be my darling?”`,
      `If you don’t belong here, just a build a place where you do. `,
      `And I called you a monster! Now we’re even!`,
    ];

    let todt = todlinmk[Math.floor(Math.random() * todlinmk.length)];
					const hlp = `*Konnichiwa!(💚ω💚) my ${pushname} Darling.*\n\n*This is Zero Two.\n${todt}\n\nI can stand here right for you and do anything you say which is listed below.\n
            ${readmore}
			\n*━━━『𝑮𝒆𝒏𝒆𝒓𝒂𝒍 』━━━*\n\`\`\`play, alive, help, bc, bcgroup, profile, blackpink, anime, chara, waifu, loli, sticker, wallpaper, Couplepp\`\`\`
			\n*━━━『𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━*\n\`\`\`gclink, setgroupp, group, editinfo, ginfo, add, kick, info, promote, demote, Vote, Profile, listonline\`\`\`
			\n*━━━『𝑼𝒕𝒊𝒍𝒔 』━━━*\n\`\`\`play, ytvd, ytad, fb(beta), instagram, twitter, pint, wallpaper\`\`\`
			\n*━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━*\n\`\`\`sticker, mp3, mp4audio, link, emojimix, tovideo, togif, tovn, ebinary, dbinary\`\`\`
			\n*━━━『𝑾𝒆𝒆𝒃 』━━━*\n\`\`\`anime, manga, character, waifu, loli, neko\`\`\`
			\n*━━━『𝑹𝒂𝒏𝒅𝒐𝒎 』━━━*\n\`\`\`coffee, couplepp, waifu, neko, quotes, fact\`\`\`
			\n*━━━『𝑨𝑵𝑰𝑴𝑬』━━━*\n\`\`\`naruto, minao, boruto, hinata, kaneki, toukachan, rize, itori, kurumi, miku, sasuke, akira, sakura\`\`\`
			\n*━━━『𝑹𝒆𝒂𝒄𝒕 』━━━*\n\`\`\`cry, lick, hug, pat, bite, yeet, bully, bonk, wink, poke, slap, smile, glomp, happy, cringe, cuddle, highfive, shinobu, megumin, handhold\`\`\`
			\n*━━━『 𝑵𝑺𝑭𝑾 』━━━*\n\`\`\`Not visible publicly Please check -menu \`\`\`
			\n*📌𝙽𝚘𝚝𝚎* 𝚞𝚜𝚎
			\n<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
			\n_🌟Eg: -anime help_`;

							 await Void.sendMessage(
							   from,
							   {
								 image: {
								   url: picsecktor,
								 },
								 caption: hlp,
								 footer: LangG.footer,
								 contextInfo: {
								   externalAdReply: {
									 title: LangG.title,
									 body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
									 thumbnail: log0,
									 mediaType: 2,
									 mediaUrl: `https://citel.vercel.app`,
									 sourceUrl: `https://citel.vercel.app`,
								   },
								 },
								 templateButtons: [
								   {
									 urlButton: {
									   displayText: "⭐Web",
									   url: "https://citel.vercel.app",
									 },
								   },
								 ],
							   },
							   {
								 quoted: m,
							   }
							 );


				}

			      if (Config.LANG === "NEZUKO") {
    let todlintk = [
      `Rokuda is just lonely because dad died.\nIt's like everyone is stuck to you, brother.`,
      `"No Matter How Many People You May Lose, You Have No Choice But To Go On Living - No Matter How Devastating The Blows May Be."`,
      `"Feel The Rage, The Powerful, Pure Rage Of Not Being Able To Forgive Will Become Your Unswerving Drive To Take Action."`,
      `"There's No Other Way To Go But Forward."`,
      `"I'm Coming Through!"`,
      `"I'm Not Powerless Anymore!"`,
    ];

    let totd = todlintk[Math.floor(Math.random() * todlintk.length)];

					let hlps =
        `*Hey Onii-Chan ${pushname}.*
					This is Nezuko.\n${totd}
					${readmore}

					*𝚂𝚊𝚖𝙿𝚊𝚗𝚍𝚎𝚢𝟶𝟶𝟷*
					╔════⧫𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏
					║✭1-${prefix}gclink
					║✭2-${prefix}etgroupp
					║✭3-${prefix}group
					║✭4-${prefix}editinfo
					║✭5-${prefix}ginfo
					║✭6-${prefix}add
					║✭7-${prefix}kick
					║✭8-${prefix}info
					║✭9-${prefix}promote
					║✭10-${prefix}demote
					║✭11-${prefix}Vote
					║✭12-${prefix}Profile
					║✭13-${prefix}listonline
					║✭14-${prefix}act nsfw
					║✭15-${prefix}deact nsfw
					╚════════════╝
					╔════⧫𝑼𝒕𝒊𝒍𝒔
					║✭16-${prefix}play
					║✭23-${prefix}wallpaper
					║✭24-${prefix}iplookup
					║✭25-${prefix}imdb
					║✭26-${prefix}trt
					║✭27-${prefix}movie
					║✭27-${prefix}scribd
					╚════════════╝
					╔════⧫𝑪𝒐𝒏𝒗𝒆𝒓𝒕
					║✭28-${prefix}sticker
					║✭29-${prefix}steal
					║✭30-${prefix}mp3
					║✭31-${prefix}mp4audio
					║✭32-${prefix}quotely
					║✭32-${prefix}url
					║✭33-${prefix}emojimix
					║✭34-${prefix}tovideo
					║✭35-${prefix}togif
					║✭35-${prefix}ebinary
					║✭36-${prefix}dbinary
					╚════════════╝
					╔════⧫𝑾𝒆𝒆𝒃
					║✭37-${prefix}anime
					║✭38-${prefix}manga
					║✭39-${prefix}character
					║✭40-${prefix}waifu
					║✭41-${prefix}loli
					║✭42-${prefix}neko
					╚════════════╝
					╔════⧫𝑹𝒂𝒏𝒅𝒐𝒎
					║✭43-${prefix}couplepp
					║✭44-${prefix}waifu
					║✭45-${prefix}neko
					║✭46-${prefix}quotes
					║✭48-${prefix}fact
					╚════════════╝
					╔════⧫𝑨𝑵𝑰𝑴𝑬
					║✭49-${prefix}naruto
					║✭50-${prefix}minao
					║✭51-${prefix}boruto
					║✭52-${prefix}hinata
					║✭53-${prefix}kaneki
					║✭54-${prefix}toukachan
					║✭55-${prefix}rize
					║✭56-${prefix}itori
					║✭57-${prefix}kurumi
					║✭58-${prefix}miku
					║✭59-${prefix}highschool
					║✭60-${prefix}sasuke
					║✭61-${prefix}akira
					║✭62-${prefix}sakura
					╚════════════╝
					╔════⧫𝑹𝒆𝒂𝒄𝒕𝒊𝒐𝒏
					║✭63-${prefix}cry
					║✭64-${prefix}lick
					║✭65-${prefix}hug
					║✭66-${prefix}pat
					║✭67-${prefix}bite
					║✭68-${prefix}yeet
					║✭69-${prefix}bully
					║✭70-${prefix}bonk
					║✭71-${prefix}wink
					║✭72-${prefix}poke
					║✭73-${prefix}slap
					║✭74-${prefix}smille
					║✭75-${prefix}happy
					║✭76-${prefix}cringe
					║✭77-${prefix}cuddle
					║✭78-${prefix}highfive
					║✭79-${prefix}shinobu
					║✭80-${prefix}megumin
					║✭81-${prefix}handhold
					╚════════════╝
					 ╔════⧫𝑵𝑺𝑭𝑾
					 ║✭82-${prefix}fisting
					 ║✭83-${prefix}fingering
					 ║✭84-${prefix}pussy
					 ║✭85-${prefix}panties
					 ║✭86-${prefix}anal
					 ║✭87-${prefix}hentai
					 ║✭88-${prefix}milf
					 ║✭89-${prefix}tits
					 ║✭90-${prefix}school
					 ║✭91-${prefix}maid
					 ║✭92-${prefix}nurse
					 ║✭83-${prefix}tushy
					 ║✭94-${prefix}sis
					 ║✭95-${prefix}foot
					 ║✭96-${prefix}boobs
					 ║ *Real Nsfw*
					 ║✭97-${prefix}rpussy
					 ║✭98-${prefix}ranal
					 ║✭99-${prefix}Vixenn
					 ║✭100-${prefix}SOLO
					 ║✭101-${prefix}ecchi
					 ║✭102-${prefix}rboobs
					 ║103-✭${prefix}cosplay
					 ╚════════════════╝
					*📌𝙽𝚘𝚝𝚎* You can use
					<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
					_🌟Eg: -anime help_`;
							  await Void.sendMessage(
								m.chat,
								{
								  image: {url:picsecktor},
								  caption: hlps,
								  footer: LangG.footer,
								},
								{
								  quoted: m,
								}
							  );

							      }
			      if (Config.LANG === "GENOS") {     let todlinkyu = [
      `Even the most powerful weapon would be meaningless if its wielder is weak.`,
      `"I Can Tell By That Innocent Smile Of Yours."`,
      `"Mosquitos...Suck!"`,
      `"Listen, Spoiled Brat. Shut Up And Get Lost, Or Get Beat Down."`,
      `"What's With This Sassy...Lost Child?"`,
      `"I'll leave tomorrow's problems to tomorrow's me."`,
    ];

    let todtg = todlinkyu[Math.floor(Math.random() * todlinkyu.length)];

					let template = await generateWAMessageFromContent(
						m.chat,
						proto.Message.fromObject({
						  listMessage: {
							title: `*Hii ${pushname},I'm Genos*\n\n“${todtg}”\n⭐ 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓 ⭐\n━━━━『 𝑶𝒘𝒏𝒆𝒓 』━━━━\n❐ Some Features for my Creater Only\n━━━『 𝑾𝒆𝒆𝒃 』━━━\n❐ Some Listed features for all Members\n━━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━━\n❐ Some Converter Features\n━━━『 𝑹𝒂𝒏𝒅𝒐𝒎 』━━━\n❐ Some Randome Features.\n━━━『 𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━\n❐ Some Moderation Features\n━━━『 𝑵𝑺𝑭𝑾 』━━━\n❐ Tons of NSFW features\n━━━━『 𝑼𝒕𝒊𝒍𝒔 』━━━━\n❐ Some Features to make Bot Perfect.\n\n${LangG.botName}`,
							description: `Please Choose from The List\n`,
							buttonText: "Menu",
							footerText: `${LangG.title}`,
							listType: "SINGLE_SELECT",
							sections: [
							  {
								title: "•Zero-Two•",
								rows: [
								  {
									title: "All Commands",
									description: "Displays The List Of all Features",
									rowId: `${prefix}helpt`,
								  },
								],
							  },
							  {
								title: "•Genos•",
								rows: [
								  {
									title: "Group Menu",
									description: "Displays The List Of Group Features!",
									rowId: `${prefix}helpt 1`,
								  },
								  {
									title: "Downloader Menu",
									description:
									  "Displays The List Of downloading Features",
									rowId: `${prefix}helpt 2`,
								  },
								  {
									title: "TextPro Menu",
									description: "Displays The List Of TextPro Features",
									rowId: `${prefix}helpt 4`,
								  },
								  {
									title: "Search Menu",
									description: "Displays The List Of Searching Features",
									rowId: `${prefix}helpt 3`,
								  },
								  {
									title: "Random Menu",
									description: "Displays The List Of Random Features",
									rowId: `${prefix}helpt 7`,
								  },
								  {
									title: "Random Anime Menu",
									description:
									  "Displays The List Of Random Anime Features",
									rowId: `${prefix}helpt 10`,
								  },
								  {
									title: "𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊",
									description: "Displays The List Of Fun Features",
									rowId: `${prefix}helpt 11`,
								  },
								  {
									title: "Convert Menu",
									description: "Displays The List Of Convert Features",
									rowId: `${prefix}helpt 6`,
								  },
								  {
									title: "Misc Menu",
									description: "Displays The List Of Database Features",
									rowId: `${prefix}helpt 9`,
								  },
								  {
									title: "Voice Changer Menu",
									description:
									  "Displays The List Of Voice Changing Features",
									rowId: `${prefix}helpt 8`,
								  },
								  {
									title: "Reaction Menu",
									description: "Displays The List Of Reaction Features",
									rowId: `${prefix}helpt 5`,
								  },
								],
							  },
							  {
								title: "Developers",
								rows: [
								  {
									title: "Bot Owner",
									description:
									  "Displays The List Of Credit Of The Bot !!",
									rowId: `${prefix}tqtt`,
								  },
								],
							  },
							],
							listType: 1,
						  },
						}),
						{}
					  );
					  Void.relayMessage(m.chat, template.message, {
						messageId: template.key.id,
					  });


							      }
			      if (Config.LANG === "AYANOKOJI") {
				         let todlinkyi = [
      `“You may come to regret trying to manipulate me.”`,
      `Coincidence can be freaky.`,
      `“Being alone is not synonymous with being lonely.”`,
      `"If you would ask 100 people, 100 people would answer that right now, Karuizawa is angry"`,
      `“Your shortcoming is that you assume others will hold you back, and put them at a distance from the start.”`,
      `“I don’t like expending more effort than I have to.” `,
    ];

    let todyo = todlinkyi[Math.floor(Math.random() * todlinkyi.length)];
     const hlp = `*Konnichiwa!(💚ω💚) my ${pushname}*\n\n${todyo}\n\n
            ${readmore}
			\n*━━━『𝑮𝒆𝒏𝒆𝒓𝒂𝒍 』━━━*\n\`\`\`play, alive, help, bc, bcgroup, profile, blackpink, anime, chara, waifu, loli, sticker, wallpaper, Couplepp\`\`\`
			\n*━━━『𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━*\n\`\`\`gclink, setgroupp, group, editinfo, ginfo, add, kick, info, promote, demote, Vote, Profile, listonline\`\`\`
			\n*━━━『𝑼𝒕𝒊𝒍𝒔 』━━━*\n\`\`\`play, ytvd, ytad, fb(beta), instagram, twitter, pint, wallpaper\`\`\`
			\n*━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━*\n\`\`\`sticker, mp3, mp4audio, link, emojimix, tovideo, togif, tovn, ebinary, dbinary\`\`\`
			\n*━━━『𝑾𝒆𝒆𝒃 』━━━*\n\`\`\`anime, manga, character, waifu, loli, neko\`\`\`
			\n*━━━『𝑹𝒂𝒏𝒅𝒐𝒎 』━━━*\n\`\`\`coffee, couplepp, waifu, neko, quotes, fact\`\`\`
			\n*━━━『𝑨𝑵𝑰𝑴𝑬』━━━*\n\`\`\`naruto, minao, boruto, hinata, kaneki, toukachan, rize, itori, kurumi, miku, sasuke, akira, sakura\`\`\`
			\n*━━━『𝑹𝒆𝒂𝒄𝒕 』━━━*\n\`\`\`cry, lick, hug, pat, bite, yeet, bully, bonk, wink, poke, slap, smile, glomp, happy, cringe, cuddle, highfive, shinobu, megumin, handhold\`\`\`
			\n*━━━『 𝑵𝑺𝑭𝑾 』━━━*\n\`\`\`Not visible publicly Please check -menu \`\`\`
			\n*📌𝙽𝚘𝚝𝚎* 𝚞𝚜𝚎
			\n<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
			\n_🌟Eg: -anime help_`;

							 await Void.sendMessage(
							   from,
							   {
								 image: {
								   url: picsecktor,
								 },
								 caption: hlp,
								 footer: LangG.footer,
								 contextInfo: {
								   externalAdReply: {
									 title: LangG.title,
									 body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
									 thumbnail: log0,
									 mediaType: 2,
									 mediaUrl: `https://citel.vercel.app`,
									 sourceUrl: `https://citel.vercel.app`,
								   },
								 },
								 templateButtons: [
								   {
									 urlButton: {
									   displayText: "⭐Web",
									   url: "https://citel.vercel.app",
									 },
								   },
								 ],
							   },
							   {
								 quoted: m,
							   }
							 );


							      }
			      if (Config.LANG === "FRIDAY") {
				         let todlinkyit = [
      `${LangG.pic1}`,
      `${LangG.pic2}`,
      `${LangG.pic3}`,
      `${LangG.pic4}`,
      `${LangG.pic5}`,
      `${LangG.pic6}`,
    ];

    let todyit = todlinkyit[Math.floor(Math.random() * todlinkyit.length)];
   const hlp = `*Hello ${pushname}.*\n\n${todyit}\n\n
    ${readmore}
\n*━━━『𝑮𝒆𝒏𝒆𝒓𝒂𝒍 』━━━*\n\`\`\`play, alive, help, bc, bcgroup, profile, blackpink, anime, chara, waifu, loli, sticker, wallpaper, Couplepp\`\`\`
\n*━━━『𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━*\n\`\`\`gclink, setgroupp, group, editinfo, ginfo, add, kick, info, promote, demote, Vote, Profile, listonline\`\`\`
\n*━━━『𝑼𝒕𝒊𝒍𝒔 』━━━*\n\`\`\`play, ytvd, ytad, fb(beta), instagram, twitter, pint, wallpaper\`\`\`
\n*━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━*\n\`\`\`sticker, mp3, mp4audio, link, emojimix, tovideo, togif, tovn, ebinary, dbinary\`\`\`
\n*━━━『𝑾𝒆𝒆𝒃 』━━━*\n\`\`\`anime, manga, character, waifu, loli, neko\`\`\`
\n*━━━『𝑹𝒂𝒏𝒅𝒐𝒎 』━━━*\n\`\`\`coffee, couplepp, waifu, neko, quotes, fact\`\`\`
\n*━━━『𝑨𝑵𝑰𝑴𝑬』━━━*\n\`\`\`naruto, minao, boruto, hinata, kaneki, toukachan, rize, itori, kurumi, miku, sasuke, akira, sakura\`\`\`
\n*━━━『𝑹𝒆𝒂𝒄𝒕 』━━━*\n\`\`\`cry, lick, hug, pat, bite, yeet, bully, bonk, wink, poke, slap, smile, glomp, happy, cringe, cuddle, highfive, shinobu, megumin, handhold\`\`\`
\n*━━━『 𝑵𝑺𝑭𝑾 』━━━*\n\`\`\`Not visible publicly Please check -menu \`\`\`
\n*📌𝙽𝚘𝚝𝚎* 𝚞𝚜𝚎
\n<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
\n_🌟Eg: -anime help_`;

       await Void.sendMessage(
         from,
         {
         image: {
           url: picsecktor,
         },
         caption: hlp,
         footer: LangG.footer,
         contextInfo: {
           externalAdReply: {
           title: LangG.title,
           body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
           thumbnail: log0,
           mediaType: 2,
           mediaUrl: `https://citel.vercel.app`,
           sourceUrl: `https://citel.vercel.app`,
           },
         },
         templateButtons: [
           {
           urlButton: {
             displayText: "⭐Web",
             url: "https://citel.vercel.app",
           },
           },
         ],
         },
         {
         quoted: m,
         }
       );

							     }
			      if (Config.LANG === "GIDEON") {
			            let todlinkt = [
      `$You never bothered to ask?`,
      `You know who I am ${pushname}? right!!`,
      `Hii ${pushname},In almost every variation of the timeline I can sence you as Freaky guy.`,
      `Hey Miss Lance is really out of mind now. `
    ];

    let todt = todlinkt[Math.floor(Math.random() * todlinkt.length)];
    const hlp = `*Hello ${pushname}.*\n\n${todt}\n\n
    ${readmore}
\n*━━━『𝑮𝒆𝒏𝒆𝒓𝒂𝒍 』━━━*\n\`\`\`play, alive, help, bc, bcgroup, profile, blackpink, anime, chara, waifu, loli, sticker, wallpaper, Couplepp\`\`\`
\n*━━━『𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━*\n\`\`\`gclink, setgroupp, group, editinfo, ginfo, add, kick, info, promote, demote, Vote, Profile, listonline\`\`\`
\n*━━━『𝑼𝒕𝒊𝒍𝒔 』━━━*\n\`\`\`play, ytvd, ytad, fb(beta), instagram, twitter, pint, wallpaper\`\`\`
\n*━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━*\n\`\`\`sticker, mp3, mp4audio, link, emojimix, tovideo, togif, tovn, ebinary, dbinary\`\`\`
\n*━━━『𝑾𝒆𝒆𝒃 』━━━*\n\`\`\`anime, manga, character, waifu, loli, neko\`\`\`
\n*━━━『𝑹𝒂𝒏𝒅𝒐𝒎 』━━━*\n\`\`\`coffee, couplepp, waifu, neko, quotes, fact\`\`\`
\n*━━━『𝑨𝑵𝑰𝑴𝑬』━━━*\n\`\`\`naruto, minao, boruto, hinata, kaneki, toukachan, rize, itori, kurumi, miku, sasuke, akira, sakura\`\`\`
\n*━━━『𝑹𝒆𝒂𝒄𝒕 』━━━*\n\`\`\`cry, lick, hug, pat, bite, yeet, bully, bonk, wink, poke, slap, smile, glomp, happy, cringe, cuddle, highfive, shinobu, megumin, handhold\`\`\`
\n*━━━『 𝑵𝑺𝑭𝑾 』━━━*\n\`\`\`Not visible publicly Please check -menu \`\`\`
\n*📌𝙽𝚘𝚝𝚎* 𝚞𝚜𝚎
\n<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
\n_🌟Eg: -anime help_`;

       await Void.sendMessage(
         from,
         {
         image: {
           url: picsecktor,
         },
         caption: hlp,
         footer: LangG.footer,
         contextInfo: {
           externalAdReply: {
           title: LangG.title,
           body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
           thumbnail: log0,
           mediaType: 2,
           mediaUrl: `https://citel.vercel.app`,
           sourceUrl: `https://citel.vercel.app`,
           },
         },
         templateButtons: [
           {
           urlButton: {
             displayText: "⭐Web",
             url: "https://citel.vercel.app",
           },
           },
         ],
         },
         {
         quoted: m,
         }
       );



				      }
			      if (Config.LANG === "GOKU") {
				         let todlinktgh = [
      `Power comes in response to a need, not a desire.`,
      `I’m the second strongest Saiyan from the Planet Vegeta!`,
      `I would rather be a brainless monkey than a heartless monster`,
      `The ocean is so salty because everyone pees in it.`,
      `That’s what you think, Captain Cocky!`,
      `Vegeta: Kakarot! Stop poking me in the eye you idiot!`,
    ];
    let todtx = todlinktgh[Math.floor(Math.random() * todlinktgh.length)];
    const hlp = `*Hello ${pushname}.*\n\n${todtx}\n\n
    ${readmore}
\n*━━━『𝑮𝒆𝒏𝒆𝒓𝒂𝒍 』━━━*\n\`\`\`play, alive, help, bc, bcgroup, profile, blackpink, anime, chara, waifu, loli, sticker, wallpaper, Couplepp\`\`\`
\n*━━━『𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒊𝒐𝒏 』━━━*\n\`\`\`gclink, setgroupp, group, editinfo, ginfo, add, kick, info, promote, demote, Vote, Profile, listonline\`\`\`
\n*━━━『𝑼𝒕𝒊𝒍𝒔 』━━━*\n\`\`\`play, ytvd, ytad, fb(beta), instagram, twitter, pint, wallpaper\`\`\`
\n*━━━『𝑪𝒐𝒏𝒗𝒆𝒓𝒕 』━━━*\n\`\`\`sticker, mp3, mp4audio, link, emojimix, tovideo, togif, tovn, ebinary, dbinary\`\`\`
\n*━━━『𝑾𝒆𝒆𝒃 』━━━*\n\`\`\`anime, manga, character, waifu, loli, neko\`\`\`
\n*━━━『𝑹𝒂𝒏𝒅𝒐𝒎 』━━━*\n\`\`\`coffee, couplepp, waifu, neko, quotes, fact\`\`\`
\n*━━━『𝑨𝑵𝑰𝑴𝑬』━━━*\n\`\`\`naruto, minao, boruto, hinata, kaneki, toukachan, rize, itori, kurumi, miku, sasuke, akira, sakura\`\`\`
\n*━━━『𝑹𝒆𝒂𝒄𝒕 』━━━*\n\`\`\`cry, lick, hug, pat, bite, yeet, bully, bonk, wink, poke, slap, smile, glomp, happy, cringe, cuddle, highfive, shinobu, megumin, handhold\`\`\`
\n*━━━『 𝑵𝑺𝑭𝑾 』━━━*\n\`\`\`Not visible publicly Please check -menu \`\`\`
\n*📌𝙽𝚘𝚝𝚎* 𝚞𝚜𝚎
\n<<𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚑𝚎𝚕𝚙>> 𝚏𝚘𝚛 𝚖𝚘𝚛𝚎 𝚒𝚗𝚏𝚘 𝚘𝚏 𝚜𝚙𝚎𝚌𝚒𝚏𝚒𝚌 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
\n_🌟Eg: -anime help_`;

       await Void.sendMessage(
         from,
         {
         image: {
           url: picsecktor,
         },
         caption: hlp,
         footer: LangG.footer,
         contextInfo: {
           externalAdReply: {
           title: LangG.title,
           body: `𝑯𝒆𝒍𝒑-𝑳𝒊𝒔𝒕`,
           thumbnail: log0,
           mediaType: 2,
           mediaUrl: `https://citel.vercel.app`,
           sourceUrl: `https://citel.vercel.app`,
           },
         },
         templateButtons: [
           {
           urlButton: {
             displayText: "⭐Web",
             url: "https://citel.vercel.app",
           },
           },
         ],
         },
         {
         quoted: m,
         }
       );
       }
			      if (Config.LANG === "LUFFY") {     let todlinkjj = [
      `I'm pretty sure I can't live without being helped!`,
      `I don’t have to be a boss or a great pirate, do I?`,
      `You want to keep everyone from dying? That’s naïve. Its war. People die.`,
      `If you don’t take risks, you can’t create a future.`,
      `Are we friends? Or are we foes? That kind of thing you decide yourselves!`,
      `I don’t wanna conquer anything. It's just that the person with the most freedom on the sea is the Pirate King.`,
    ];

    let todgg = todlinkjj[Math.floor(Math.random() * todlinkjj.length)];

				      }
			      if (Config.LANG === "PARKER") {
				     let todlinkf = ["I'm Spider-Man. Weird Things Happen To Me All The Time.", "I Guess It's Easy To Laugh In The Face Of Danger When You Don't Take Anything Too Seriously.",
				     "I don't want to know, Cap. I need to know.",
				     "My name is Peter Parker and I've been Spider-Man since I was 15 years old.",
				    "Once my Uncle said,'Great responsibility comes with Greath Powers.'",
				     "No Matter How Hard I Try...People...Die!",
				  "Except the dignity of knowing I never carried a man-purse."

				     ];
          let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];

				     }




		    }
        if (Config.LANG === "ADAM") {
          let todlinkf = ["I kneel before No one Pal",
           "The World Need a Hero instead they Got me",
       "Except the dignity of knowing I never carried a man-purse."

          ];
       let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];


          }

		    break
     */
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "grouplink":
      case "glink":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -gclink,-grouplink\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends Group current group link if bot is admin`
            );
            return;
          }
          if (!isBotAdmins) return m.reply(LangG.botAdmin);
          if (!m.isGroup) return m.reply(LangG.group);
          let response = await Void.groupInviteCode(m.chat);
          Void.sendMessage(
            m.chat,
            {
              text: `🎀Group Link ${groupMetadata.subject} : \n✨https://chat.whatsapp.com/${response}       *Powered by ${LangG.title}*`,
              contextInfo: {
                mimetype: "image/jpeg",
                text: `${global.ownername}`,
                forwardingScore: 1000000000,
                isForwarded: true,
                sendEphemeral: true,
                externalAdReply: {
                  title: LangG.BotName,
                  body: `Spread this group link ${LangG.greet}`,
                  previewType: "PHOTO",
                  thumbnailUrl: thum,
                  thumbnail: log0,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            },
            {
              quoted: m,
              detectLink: true,
            }
          );
        }

        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "delete":
      case "del":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -del,-delete\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } reply to message.\n\n*📚Description:* Deletes quoted/replied message if was sent by bot`
            );
            return;
          }
          if (!m.quoted) return m.reply(`Please Quote any message. ${LangG.greet}`);
            let { chat, fromMe, id } = m.quoted;
const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}
await Void.sendMessage(m.chat, { delete: key })
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "fox_girl":
      case "fgirl":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -fgirl,-fox_girl\n*🧩Category:* WEEB\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends a hot Fox Girl Pic`
          );
          return;
        }
        waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
        var wbuttssds = [
          {
            buttonId: `-${command}`,
            buttonText: {
              displayText: `Next ✨`,
            },
            type: 1,
          },
        ];
        let buttonssMessagesss = {
          image: {
            url: waifuddfg.data.url,
          },
          caption: `Now I can see how your future is going to be.😐!`,
          footer: LangG.footer,
          buttons: wbuttssds,
          headerType: 4,
        };
        await Void.sendMessage(m.chat, buttonssMessagesss, {
          quoted: m,
        }).catch((err) => {
          return "Error!";
        });
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "listadmin":
      case "admin":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -admin,-listadmin\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description: Sends Current list of Admins`
          );
          return;
        }
        if (!m.isGroup) return m.m.reply(LangG.group);
        teks2 = `List Of Admins *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`;
        no = 0;
        for (let admon of groupAdmins) {
          no += 1;
          teks2 += `[${no.toString()}] @${admon.split("@")[0]}\n`;
        }
        Void.sendTextWithMentions(m.chat, teks2, m);
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ssweb":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -ssweb\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } Website URL\n\n*📚Description:* Send SS of web in Mobile Format.`
          );
          return;
        }
        try {
          if (!q)
            return m.reply(`Example : ${prefix + command} https://google.com`);
          m.m.reply(LangG.wait);
          Void.sendMessage(
            m.chat,
            {
              image: {
                url: `http://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=desktop&full=on`,
              },
              caption: `Here we go`,
            },
            { quoted: m }
          );
        } catch (e) {
          m.reply(`*Url invalid ${LangG.greet}*`);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
/*
      case "anime-search":
        if (q === "help") {
          await m.reply(
            `*❗Command:*  Anime\n*🍀Aliases* -anime\n*🧩Category:* Search\n*🛠️Usage:* ${
              prefix + command
            } Anime Name\n\n*📚Description:* Searchs Anime on Anilist and Provides Info.`
          );
          return;
        }

         break;
         */
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "manga-search":
        const { Manga } = require("@shineiichijo/marika");
        const manga = new Manga();
        if (!q) return reply("Which manga do you want to search My Lord");
        let srh = await manga.searchManga(q);
        let mang = `*🎀Title: ${srh.data[0].title}*\n`;
        mang += `*📈Status: ${srh.data[0].status}*\n`;
        mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`;
        mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`;
        mang += `*🧧Genres:*\n`;
        for (let i = 0; i < srh.data[0].genres.length; i++) {
          mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
        }
        mang += `*✨Published on: ${srh.data[0].published.from}*\n`;
        mang += `*🌟Score: ${srh.data[0].scored}*\n`;
        mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`;
        mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`;
        mang += `*✍Authors:*\n`;
        for (let i = 0; i < srh.data[0].authors.length; i++) {
          mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
        }
        mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
        if (srh.data[0].background !== null)
          mang += `*🎆Background:* ${srh.data[0].background}`;
        mang += `*❄️Description:* ${srh.data[0].synopsis.replace(
          /\[Written by Sam]/g,
          ""
        )}`;
        Void.sendMessage(
          m.chat,
          {
            image: {
              url: srh.data[0].images.jpg.large_image_url,
            },
            caption: mang,
          },
          {
            quoted: m,
          }
        );
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "dice":
        {
          Void.sendImageAsSticker(m.chat, dice, m, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;

case 's-cry':case 's-kill':case 's-hug':case 's-pat':case 's-lick':case 's-kiss':case 's-bite':case 's-yeet':case 's-bully':case 's-bonk':case 's-wink':case 's-poke':case 's-nom':case 's-slap':case 's-smile':case 's-wave':case 's-awoo':case 's-blush':case 's-smug':case 's-glomp':case 's-happy':case 's-dance':case 's-cringe':case 's-cuddle':case 's-highfive':case 's-shinobu':case 's-megumin':case 's-handhold':
	  let sticpic = command.slice(2)
    console.log(sticpic);
axios.get(`https://api.waifu.pics/sfw/${sticpic}`)
					.then(({data}) => {
						Void.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
      case "loli":
        if (q === "help") {
          await m.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -loli\n*🧩Category:* Weeb\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Send a Hot loli at your chat.`
          );
          return;
        }
        waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
        var wbutss = [
          {
            buttonId: `${prefix}loli`,
            buttonText: {
              displayText: `Next Loli✨`,
            },
            type: 1,
          },
        ];
        let buttonsMessage = {
          image: await getBuffer(waifud.data.url),
          caption: `Here you go!`,
          footer: LangG.footer,
          buttons: wbutss,
          headerType: 4,
        };
        await Void.sendMessage(m.chat, buttonsMessage, {
          quoted: m,
        }).catch((err) => {
          return "Error!";
        });
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "q":
      case "quotely":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* Quotely Maker\n*🍀Aliases* -q,-quotely\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } reply to any message\n\n*📚Description:* Makes quote sticker of replied message like Quotely Telegram Bot.`
            );

            return;
          }
 if (!m.quoted) return m.reply("Please quote/reply to any message");

          //let pfp = await Void.profilePictureUrl(m.quoted.sender, 'image');
          let teks = m.quoted.text;

          try {
            pfp = await Void.profilePictureUrl(m.quoted.sender, "image");
          } catch (e) {
            pfp =
              "https://raw.githubusercontent.com/SamPandey001/Secktor-Md/main/assets/SocialLogo%201.png";
          }

          // var randomColor= Math.floor(Math.random()*16777215).toString(16);
          let todlinkf = ["#FFFFFF", "#000000"];
          let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
          let samhh = args[1] || todf;
          let tname = args[0] || Void.getName(m.quoted.sender);
          let body = {
            type: "quote",
            format: "png",
            backgroundColor: samhh,
            width: 512,
            height: 400,
            scale: 3,
            messages: [
              {
                avatar: true,
                from: {
                  first_name: tname,
                  language_code: "en",
                  name: tname,
                  photo: {
                    url: pfp,
                  },
                },
                text: teks,
                replyMessage: {},
              },
            ],
          };

          let res = await axios.post("https://bot.lyo.su/quote/generate", body);
          let img = Buffer.alloc(
            res.data.result.image.length,
            res.data.result.image,
            "base64"
          );

          await Void.sendImageAsSticker(m.chat, img, m, {
            packname: global.packname,
            author: global.author,
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "bcgroup":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Broadcast\n*🍀Aliases* -bcgc,-bcgroup\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } Broadcast Text\n\n*📚Description:* Broadcasts given texts in all Avilable groups.`
            );
            return;
          }
          if (!isCreator) return m.reply(LangG.owner);
          if (!text) return m.reply(`Where is the text?\n\nExample : ${
              prefix + command
            } hello guys, am back`);
          let getGroups = await Void.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          reply(
            `Send Broadcast To ${anu.length} Group Chat, Finish Time ${
              anu.length * 1.5
            } second`
          );
          for (let i of anu) {
            await sleep(1500);
            let btn = [
              {
                quickReplyButton: {
                  displayText: "Menu",
                  id: `${prefix}help`,
                },
              },
              {
                quickReplyButton: {
                  displayText: "Alive",
                  id: `${prefix}alive`,
                },
              },
            ];
            fatihgans = fs.readFileSync("./assets/SocialLogo 1.png");
            let txt = `「 ${LangG.title}  」\n\n${text}`;
            Void.send5ButImg(
              i,
              txt,
              Void.user.name,
              fatihgans,
              btn
            );
          }
          reply(`Successful Sending Broadcast To ${anu.length} Group(s)`);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "bc":
      case "broadcast":
      case "bcall":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Broadcast\n*🍀Aliases* -bc,-broadcast,-bcall\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } Broadcast Text\n\n*📚Description:* Broadcasts given texts in all Avilable groups and pm.`
            );
            return;
          }
          if (!isCreator) m.reply(LangG.owner);
          if (!text) return m.reply(`Where is the text?\n\nExample : ${prefix + command} ${
              LangG.title
            } here`);
          let anu = await store.chats.all().map((v) => v.id);
          reply(
            `*Sending Broadcast To* ${anu.length} Chat\nIn ${
              anu.length * 2
            } second`
          );
          for (let yoi of anu) {
            await sleep(1500);
            let btn = [
              {
                quickReplyButton: {
                  displayText: "💌Owner",
                  id: `${prefix}repo`,
                },
              },
            ];
            fatihgans = fs.readFileSync("./assets/Genos-002.jpg");
            let txt = `「 ${LangG.title}  Broadcast 」\n\n${text}`;
            Void.send5ButImg(
              yoi,
              txt,
              `Broadcast By ${global.pengguna}`,
              fatihgans,
              btn
            );
          }
          reply("Broadcast Completed✅");
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "qydhdh":
      case "quoted":
        {
          if (!m.quoted) return reply("Reply Message!!");
          let wokwol = await Void.serializeM(await m.getQuotedObj());
          if (!wokwol.quoted)
            return reply("The message you replied to does not contain a reply");
          await wokwol.quoted.copyNForward(m.chat, true);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "listpc":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Personal Chats\n*🍀Aliases* -listpc\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends information of all your personal chats.`
            );
            return;
          }
          if (!isBotAdmins) m.reply(LangG.botAdmin);
          let anu = await store.chats
            .all()
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`;
          for (let i of anu) {
            let nama = store.messages[i].array[0].pushName;
            teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${
              i.split("@")[0]
            }\n⬡ *Chat :* https://wa.me/${
              i.split("@")[0]
            }\n\n────────────────────────\n\n`;
          }
          Void.sendTextWithMentions(m.chat, teks, m);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "listgc":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Group Chats\n*🍀Aliases* -listgc\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends information of all your group chats.`
            );
            return;
          }
          if (!isBotAdmins) m.reply(LangG.botAdmin);
          let anu = await store.chats
            .all()
            .filter((v) => v.id.endsWith("@g.us"))
            .map((v) => v.id);
          let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`;
          for (let i of anu) {
            let metadata = await Void.groupMetadata(i);
            teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${
              metadata.owner.split("@")[0]
            }\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(
              metadata.creation * 1000
            )
              .tz("Asia/Kolkata")
              .format("DD/MM/YYYY HH:mm:ss")}\n⬡ *Member :* ${
              metadata.participants.length
            }\n\n────────────────────────\n\n`;
          }
          Void.sendTextWithMentions(m.chat, teks, m);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "listonline":
      case "onlinelist":
      case "here":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  List Online\n*🍀Aliases* -listgc\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends information of all your group chats.`
            );
            return;
          }
          let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
          let online = [...Object.keys(store.presences[id]), botNumber];
          Void.sendText(
            m.chat,
            `My Sweet Online ${LangG.greet}s are :\n\n` +
              online.map((v) => "✧ @" + v.replace(/@.+/, "")).join`\n`,
            m,
            {
              mentions: online,
            }
          );
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "sticker":
      case "s":
      case "stickergif":
      case "steal":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Sticker\n*🍀Aliases* -s,-sticker,steal\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Makes Sticker of quoted image or video.`
            );
            return;
          }
          if (!quoted) return m.reply(`*Mention any Image or video Sir.*`);
          if (args[2]) {
            anu = args.join(" ").split("|");
            pack = anu[0] !== "" ? anu[0] : global.packname;
            author = anu[1] !== "" ? anu[1] : global.author;
          } else {
            pack = global.packname;
            author = global.author;
          }
          if (arg[1]==='crop') var uff = 'StickerTypes.CROPPED' || 'StickerTypes.FULL'
          if (/image/.test(mime)) {
            let media = await quoted.download();
            m.reply("*Processing Your request*");
            let sticker = new Sticker(media, {
              pack: pack, // The pack name
              author: author, // The author name
              type: uff, // The sticker type
              categories: ["🤩", "🎉"], // The sticker category
              id: "12345", // The sticker id
              quality: 75, // The quality of the output file
              background: "transparent", // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            Void.sendMessage(
              m.chat,
              {
                sticker: buffer,
              },
              {
                quoted: m,
              }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 20)
              return m.reply("Cannot fetch videos longer than *20 Seconds*");
            let media = await quoted.download();
            let sticker = new Sticker(media, {
              pack: pack, // The pack name
              author: author, // The author name
              type: StickerTypes.FULL, // The sticker type
              categories: ["🤩", "🎉"], // The sticker category
              id: "12345", // The sticker id
              quality: 75, // The quality of the output file
              background: "transparent", // The sticker background color (only for full stickers)
            });

            const stikk = await sticker.toBuffer();

            Void.sendMessage(
              m.chat,
              {
                sticker: stikk,
              },
              {
                quoted: m,
              }
            );
          } else {
            m.reply("*Uhh,Please reply to any image or video*");
          }
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ebinary":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Ebinary\n*🍀Aliases* -ebinary\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } message or reply\n\n*📚Description:* Encodes given reply into binary.`
            );
            return;
          }
          if (!m.quoted.text && !text)
            return m.reply(`Send/reply text with caption ${prefix + command}`);
          let { eBinary } = require("./lib/binary");
          let teks = text
            ? text
            : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
          let eb = await eBinary(teks);
          reply(eb);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "dbinary":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Dbinary\n*🍀Aliases* -dbinary\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } message or reply\n\n*📚Description:* decodes given reply from binary.`
            );
            return;
          }
          if (!m.quoted.text && !text)
            return m.reply(`Send/reply text with caption ${prefix + command}`);
          let { dBinary } = require("./lib/binary");
          let teks = text
            ? text
            : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
          let db = await dBinary(teks);
          reply(db);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "emix":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Emoji Mix\n*🍀Aliases* -emix\n*🧩Category:* Fun\n*🛠️Usage:* ${
                prefix + command
              } 😅+🤔 \n\n*📚Description:* Mixes two emoji into one.`
            );
            return;
          }
          if (!text) return m.reply(`Example : ${prefix + command} 😅+🤔`);
          let [emoji1, emoji2] = text.split`+`;
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anu.results) {
            let encmedia = await Void.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      /*
		case 'toimg': {
	  if(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
		                  if (!quoted) return m.reply(`Uhh,Please reply to any image or videot`)
                if (!/webp/.test(mime)) return m.reply(`Uhh,Please reply to any image or video`)
                m.reply("wait your request is under process")
                let media = await Void.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    Void.sendMessage(m.chat, { image: buffer,caption:'*Powered by Genos-Md*' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
	  } else if (m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true){
		            if (!quoted) return m.reply(`Uhh,Please reply to any image or video`)
                if (!/webp/.test(mime)) return m.reply(`Uhh,Please reply to any image or video`)
                m.reply("wait your request is under process")
        let { webp2mp4File } = require('./lib/uploader')
                let media = await Void.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Void.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*Powered by Genos-Md*' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
	  }

            }
break
*/
      case "support":
        if (q === "help") {
          await m.reply(
            `*❗Command:*  Support\n*🍀Aliases* -support\n*🧩Category:* Moderation\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:*Sends main Secktor Group link into pm`
          );
          return;
        }
        m.reply(`*Check your Pm ${LangG.greet}*`);
        await Void.sendMessage(`${m.sender}`, {
          image: fs.readFileSync("./assets/SocialLogo 1.png"),
          caption: `*Group Name: Secktor-Support*\n*Group Link:* https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC`,
        });
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tomp4":
      case "tovideo":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Tomp4\n*🍀Aliases* -tomp4,tovideo\n*🧩Category:* Converter\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* changes gif into video.`
            );
            return;
          }
          if (!quoted) return m.reply("Reply to any Image");
          if (!/webp/.test(mime))
          return m.reply(`tag sticker and type *${prefix + command}* my ${
              LangG.greet
            }.`);

          let { webp2mp4File } = require("./lib/uploader");
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await Void.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;

 	case 'pinterest': {
				if (q === 'help') {
					await m.reply(`*❗Command:*   Pinterest\n*🍀Aliases* -pinterest\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} query\n\n*📚Description:* Searches given query onto Pinterest and Gives image result.`)
					return
				};



				if (!args.join(" ")) return reply("What picture are you looking for?")

				try {

					hx.pinterest(args.join(" ")).then(async (res) => {

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

							caption: `Title : ` + args.join(" ") + `\n Media Url : ` + imgnyee,

							footer: LangG.footer,

							buttons: buttons,

							headerType: 4,

							contextInfo: {
								externalAdReply: {

									title: `Here it is✨`,

									body: `${global.ownername}`,

									thumbnail: log0,

									mediaType: 2,

									mediaUrl: `https://citel.vercel.app`,

									sourceUrl: `https://citel.vercel.app`

								}
							}

						}

						Void.sendMessage(m.chat, buttonMessage, {
							quoted: m
						})

					}).catch(_ => _)

				} catch {

					reply("Error")

				}

			}

				break

      case "gif":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Gif\n*🍀Aliases* -gif reply to any sticker\n*🧩Category:* Converter\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Converts sticker into Gif.`
            );
            return;
          }

          if (!quoted) return m.reply("Reply to any Image");
          if (!/webp/.test(mime))
            return m.reply(`reply to sticker *${prefix + command}*`);

          let { webp2mp4File } = require("./lib/uploader");
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          let webpToMp4 = await webp2mp4File(media);
          await Void.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "url":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   URL\n*🍀Aliases* -url reply to image\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } reply to Image\n\n*📚Description:* Uploads replied image on Telegraph and Gives url into chat.`
            );
            return;
          }

          let {
            UploadFileUgu,
            webp2mp4File,
            TelegraPh,
          } = require("./lib/uploader");
          if (!quoted)
            return m.reply(`Pls mention me any image/video and type ${
              prefix + command
            } to upload my ${LangG.greet}`);
          let media = await Void.downloadAndSaveMediaMessage(quoted);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            m.reply(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await TelegraPh(media);
            m.reply(`Here is url of your uploaded Media on Telegraph.\n\n`+util.format(anu));
          }
          await fs.unlinkSync(media);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "jid":
        if (q === "help") {
          await m.reply(
            `*❗Command:* Jid \n*🍀Aliases* -jid\n*🧩Category:* Utils🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Provides chat id of current chat.`
          );
          return;
        }

        m.reply(`Jid of current Group is \n\n${m.chat}`);
        break;
      /*
			case 'ban': {
				if (q === 'help') {
					await m.reply(`*❗Command:*   Ban\n*🍀Aliases* -ban\n*🧩Category:* Moderation\n*🛠️Usage:* ${prefix + command} reply or tag user\n\n*📚Description:* Bans replied or tagged user from using bot.`)
					return
				};

				if (!isCreator) return m.reply('This command is only for my Immortal ${LangG.greet}')
				try {
					let mention = mentionByTag
					let users = await (mention[0]) || m.msg.contextInfo.participant
					if (!users) return m.reply("Could not found any user ❌")
					user.findOne({
						id: users
					}) ||
						 ||
        (await new users({
            id: users
        }).save()).then(async (usr) => {
						if (!usr) {
							////console.log(usr.ban)
							await new user({
								id: users,
								ban: "true"
							}).save()
							//console.log("user banned")
							return m.reply(`Banned ${users} from Using Commands`)
						} else {
							//console.log(usr.ban)
							if (usr.ban == "true") return m.reply(`${users} is already Banned `)
							await user.updateOne({
								id: users
							}, {
								ban: "true"
							})
							//console.log("user banned")
							return m.reply(`Successfully Banned ${users}.`)
						}
					})
				} catch {
					return m.reply("Could not found any user❌ ")
				}

			}
				break

			case 'unban': {
				if (q === 'help') {
					await m.reply(`*❗Command:*   Unban\n*🍀Aliases* -unban\n*🧩Category:* Moderation\n*🛠️Usage:* ${prefix + command} reply or tag user\n\n*📚Description:*Unbans already banned user.`)
					return
				};
				if (!isCreator) return m.reply("This command is only for my Immortal ${LangG.greet}")
				try {
					let mention = mentionByTag
					let users = await (mention[0]) || m.msg.contextInfo.participant
					if (!users) return m.reply("Could not found any user❌")

					user.findOne({
						id: users
					}).then(async (usr) => {
						if (!usr) {
							//console.log(usr.ban)
							return m.reply(`${users} is unbanned`)
						} else {
							//console.log(usr.ban)
							if (usr.ban !== "true") return m.reply(`${users} is unbanned`)
							await user.updateOne({
								id: users
							}, {
								ban: "false"
							})
							//console.log("user banned")
							return m.reply(`${users} is now free as a bird`)
						}
					})
				} catch {
					return m.reply("Could not found any user❌")
				}

			}
				break


*/

      case "yts":
      case "ytsearch":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   ${command}\n*🍀Aliases* -yts,-ytsearch\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query onto YouTube and Gives text result.`
            );
            return;
          }

          if (!text)
          return m.reply(`Example : ${prefix + command} ${LangG.title} WhatsApp Bot`);
          let yts = require("yt-search");
          let search = await yts(text);
          let teks =
            "*YouTube Search*\n\n Result From " +
            text +
            "\n\n─────────────────────\n";
          let no = 1;
          for (let i of search.all) {
            teks += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
              i.type
            }\n🙈Views : ${i.views}\n⌛Duration : ${
              i.timestamp
            }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          Void.sendMessage(
            m.chat,
            {
              image: {
                url: search.all[0].thumbnail,
              },
              caption: teks,
            },
            {
              quoted: m,
            }
          );
        }
        break;
		 /*
      case "pack":
        {
          if (!q) return m.reply("Please give me a pack Name");
        /*  if (q === "1") var gfd = "hot girl animation";
          if (q === "2") var gfd = "telegram sticker dragon with fire";
          if (q === "3") var gfd = "cat animation";
          if (q === "4") var gfd = "little dragon with fire animation";
          if (q === "5") var gfd = "turtle cute animation";
          if (q === "6") var gfd = "slap anime animation";
          //console.log(gfd);

          let { data: samig } = await axios.get(
            `https://g.tenor.com/v1/search?q=${q}&key=LIVDSRZULELA&limit=50`
          );

          let webg =
            samig.results?.[Math.floor(Math.random() * samig.results.length)]
              ?.media[0]?.mp4?.url;
          await Void.sendImageAsSticker(m.chat, webg, m, {
            packname: global.packname,
            author: global.author,
          });
        }
        break;
	*/
      case "google":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:* Google \n*🍀Aliases* -google\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches gives query on Google and provides text result.`
            );
            return;
          }
          if (!text) return m.reply(`Example : ${prefix + command} ${LangG.title} Bot`);
          let google = require("google-it");
          google({ query: text }).then((res) => {
            let teks = `*Google Search From* : ${text}\n\n`;
            for (let g of res) {
              teks += ` *Title* : ${g.title}\n`;
              teks += ` *Description* : ${g.snippet}\n`;
              teks += ` *Link* : ${g.link}\n\n━━━━━━━━━━━━━━━━━━━\n\n`;
            }
            m.reply(teks);
          });
        }
        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "magnet":
        case "torrent":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Magnet\n*🍀Aliases* ${prefix}magnet,${prefix}torrent\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query on Piratesbay and Gives result.`
            );
            return;
          }
          const TorrentSearchApi = require("torrent-search-api");
          TorrentSearchApi.enableProvider(
            "ThePirateBay",
            "Torrent9",
            "TorrentLeech"
          );
          listSerch = [];
          const magnet = await TorrentSearchApi.search(q).then((res) => {
            //  //console.log(magnet);
            let teskd = `*Magnet Avilable on Internet.*\n\n`;
            for (let g of res) {
              listSerch.push({
                title: g.magnet,
                rowId: `nothing`,
                description: `${g.title} *Size* : ${g.size} `,
              });
            }

            const sections = [
              {
                title: "ALL Magnests🔍\\",

                rows: listSerch,
              },
            ];

            const listMessage = {
              text: teskd,

              footer: LangG.footer,

              title: " *Huh,All Searched Magnets are listed below*",

              buttonText: "FOUND",

              sections,
            };
            Void.sendMessage(from, listMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "gimage":
      case "img":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Google Image\n*🍀Aliases* -gimage,-img\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              } query\n\n*📚Description:* Searches given query on Google Images and sends one randomly.`
            );
            return;
          }
          if (!args[0])
            return reply("Hey bie please tell me for which pic you're looking");
            let name1 = q.split("|")[0]
 let name2 = q.split("|")[1] || `1`
m.reply(`Sending ${name2} image(s) of ${name1} in chat`)
             let nn= name2
for (let i = 0; i < nn; i++) {
          let gis = require("g-i-s");
          gis(name1, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            /*let buttons = [
              {
                buttonId: `-gimage ${args.join(" ")}`,
                buttonText: {
                  displayText: "🪄Next Image ",
                },
                type: 1,
              },
            ];
            */
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `
*📙GOOGLE IMAGE*`,
              footer: LangG.footer,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: `${global.ownername}`,
                  body: `Have Fun ${LangG.greet}`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };

  Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
})
          };
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
        case "sister":
      case "tits":
      case "mouth":
      case "lick":
      case "fingering":
      case "fisting":
      case "foot":
      case "panties":
      case "tushy":
      case "school":
      case "pussy":
      case "anal":
      case "slut":
      case "boobs":
      case "nurse":
      case "maid":
      case "hentai":
      case "milf":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var pictured = "Anime Porn HD ";
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschema = zerogroup.nsfw || "false";
          let gis = require("g-i-s");
          gis(command + pictured, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*-------「 Take it,you prevert 」-------*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschema == "false") return m.reply("*NSFW* is not active");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "vixen":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw from vixen at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var picture = "Vixen Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschemat = zerogroup.nsfw || "false";
            let name1 = q.split("|")[0]
 let name2 = q.split("|")[1] || `1`
          let nn= name2

for (let i = 0; i < nn; i++) {
          gis(picture, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*-------「 VIXEN」-------*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschemat == "false") return m.reply("*NSFW* is not active");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
}
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ecchi":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var picturef = "ecchi porn hd wallpaper";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschematt = zerogroup.nsfw || "false";
          gis(picturef, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*-------「 ECCHI 」-------*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschematt == "false") return m.reply("*NSFW* is not active");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "highschool":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Highschool DXD pic at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var fuyq = "Highschool DXD hd wallpaper";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          //		let mongoschemat = zerogroup.nsfw || "false"
          gis(fuyq, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*---「 HIGHSCHOOL DXD」---*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            //		if (hht == 'false') return m.reply("*NSFW* is not active ${LangG.greet}")
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "solo":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var futq = "SOLO Anime Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschematj = zerogroup.nsfw || "false";
          gis(futq, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*-------「 SOLO」-------*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschematj == "false") return m.reply("*NSFW* is not active.");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
        break;
	    case 'reply' :
		    {
			    let nnnnn = args[0]
			  Void.sendMessage(nnnnn+'@s.whatsapp.net', {
      text:
        q.slice(1,8),
    });

		    }
		    break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "cosplay":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var pictureg = "ULTRA HD cosplay  porn";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschematv = zerogroup.nsfw || "false";
          gis(pictureg, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*-------「 COSPLAY 」-------*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschematv == "false") return m.reply("*NSFW* is not active.");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "rpussy":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var rpussyd = "Pussy Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschemas = zerogroup.nsfw || "false";
          gis(rpussyd, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*----「 Real PUSSY 」----*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschemas== "false") return m.reply("*NSFW* is not active.");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "rboobs":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var boobsd = "tits oily Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschemag = zerogroup.nsfw || "false";
          gis(boobsd, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*----「 RealBoobs 」----*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschemag == "false") return m.reply("*NSFW* is not active.");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ranal":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   NSFW\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Send one Hot Nsfw at chat.`
            );
            return;
          }
          if (!isGroup)
            return m.reply("*This Feature is only available for group.*");
          var ranal = "Anal Porn HD PICS";
          let gis = require("g-i-s");
          let zerogroup =
            (await sck.findOne({
              id: m.chat,
            })) ||
            (await new sck({
              id: m.chat,
            }).save());
          let mongoschemax = zerogroup.nsfw || "false";
          gis(ranal, async (error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
              image: {
                url: images,
              },
              caption: `*----「 Real-Anal 」----*`,
              footer: Void.user.name,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: LangG.title,
                  body: `𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            };
            if (mongoschemax == "false") return m.reply("*NSFW* is not active.");
            Void.sendMessage(m.chat, buttonMessage, {
              quoted: m,
            });
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ytvd":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   YouTube Video\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads video from given YouTube link and sends in current chat.`
            );
            return;
          }
          Void.sendMessage(
            from,
            {
              video: {
                url: args[0],
              },
              mimetype: "video/mp4",
              caption: "Here it is. Enjoy💕",
              contextInfo: {
                externalAdReply: {
                  title: LangG.BotName,
                  body: `Youtube DL`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            },
            {
              quoted: m,
            }
          );
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ytad":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   YouTube Audio\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads Audio from given YouTube link and sends in current chat.`
            );
            return;
          }
          Void.sendMessage(
            from,
            {
              audio: {
                url: args[0],
              },
              mimetype: "audio/mpeg",
              contextInfo: {
                externalAdReply: {
                  title: LangG.BotName,
                  body: `FEEL THE SONG💕`,
                  thumbnail: log0,
                  mediaType: 2,
                  mediaUrl: `https://citel.vercel.app`,
                  sourceUrl: `https://citel.vercel.app`,
                },
              },
            },
            {
              quoted: m,
            }
          );
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "music":
      case "play":
      case "song":
      case "ytplay":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   YouTube Video/audio\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link/query\n\n*📚Description:* Downloads video/audio from given Query  and sends in current chat.`
            );
            return;
          }
          if (!q) return m.reply(`Use ${prefix + command} Back in Black`);
          let yts = require("yt-search");
          let search = await yts(q);
          let anu = search.videos[0];
          //let ytvc = await hx.youtube(anu.url)
          let thumb = await getBuffer(search.videos[0].thumbnail);
          let buttons = [
            {
              buttonId: `${prefix}ytmp4 ${anu.url}`,
              buttonText: {
                displayText: "► Video",
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytmp3 ${anu.url}`,
              buttonText: {
                displayText: "♫ Audio",
              },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: {
              url: anu.thumbnail,
            },
            caption: `  𝒁𝒆𝒓𝒐 𝑻𝒘𝒐 𝒀𝑻 𝑷𝒍𝒂𝒚✨
*Title:* ${anu.title}
*Duration:* ${anu.timestamp}
*Viewers:* ${anu.views}
*Uploaded:* ${anu.ago}
*Author:* ${anu.author.name}
*Url* : ${anu.url}`,
            footer: LangG.footer,
            buttons: buttons,
            headerType: 4,
          };
          Void.sendMessage(m.chat, buttonMessage, {
            quoted: m,
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "mp4dl":
        {
          if (!args[0]) return reply(`Where is the link ${LangG.greet}?`);
          try {
            Void.sendMessage(
              from,
              {
                video: {
                  url: args[0],
                },
                caption: "With love from 𝒁𝒆𝒓𝒐 𝑻𝒘𝒐✨",
                contextInfo: {
                  externalAdReply: {
                    title: LangG.BotName,
                    body: `${global.ownername}`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: `https://citel.vercel.app`,
                    sourceUrl: `https://citel.vercel.app`,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          } catch {
            reply("Link error!");
          }
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "request":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Request\n*🍀Aliases* ${command}\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } request text\n\n*📚Description:* Sends your request to main ${
                LangG.title
              } developers.`
            );
            return;
          }
          if (!args.join(" "))
            return reply(
              `Example : ${
                prefix + command
              } hello dev please add a downloader feature`
            );
          teks = `*| REQUEST |*`;
          teks1 = `\n\n*User* : @${
            m.sender.split("@")[0]
          }\n*Request* : ${args.join(" ")}`;
          teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
          for (let i of owner) {
            Void.sendMessage(
              i + "@s.whatsapp.net",
              {
                text: teks + teks1,
                mentions: [m.sender],
              },
              {
                quoted: m,
              }
            );
          }
          Void.sendMessage(
            m.chat,
            {
              text: teks + teks2 + teks1,
              mentions: [m.sender],
            },
            {
              quoted: m,
            }
          );
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tr":
      case "trt":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*  Translator \n*🍀Aliases* -tr,-trt\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } lang + reply to any message \n\n*📚Description:* Translates replied message into desired language\n\nEg- -tr en hi (it will translate from hindi to english) `
            );
            return;
          }
          const translatte = require("translatte");
          if (!m.quoted) return m.reply("*Please reply to any message.*");
          if (!m.quoted)
            return m.reply(`Please mention or give text ${LangG.greet}.`);
          let teks = m.quoted.text;
          ceviri = await translatte(teks, {
            from: args[1] || "auto",
            to: args[0] || "hi",
          });
          if ("text" in ceviri) {
            return await m.reply(
              "*Translated Into🔎:* " +
                " ```" +
                (args[0] || "Auto to Hindi") +
                "```\n" +
                " *From Language🔎:* " +
                " ```" +
                (args[1] || "Auto Detect") +
                "```\n" +
                "*Result♦️:* " +
                " ```" +
                ceviri.text +
                "```"
            );
          }
        }
        break;
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
							quoted: m
						})
					})
				} catch (err) {
					reply(String(err))
				}
			}
				break
			case 'igdl':
			case 'instagram': {
				if (q === 'help') {
					await m.reply(`*❗Command:*   Instagram\n*🍀Aliases* ${prefix + command} -instagram\n*🧩Category:* Downloader\n*🛠️Usage:* ${prefix + command} instagram link\n\n*📚Description:* Downloads post from Instagram and Sends that in chat.`)
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
							quoted: m
						})
					})
				} catch (err) {
					reply(String(err))
				}
			}
				break
			case 'ig': {
				if (q === 'help') {
					await m.reply(`*❗Command:*   Instagram\n*🍀Aliases* ${prefix + command} -instagram\n*🧩Category:* Downloader\n*🛠️Usage:* ${prefix + command} instagram link\n\n*📚Description:* Downloads post from Instagram and Sends that in chat.`)
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
						quoted: m
					})
				} else if (args[0] === "jpg") {
					Void.sendMessage(from, {
						image: {
							url: args[1]
						},
						caption: 'Done!'
					}, {
						quoted: m
					})
				} else {
					reply(" Error! ")
				}
			}
				break
				*/
      case "mp4":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   MP4\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } video link\n\n*📚Description:* Downloads video from given link and Sends that in chat.`
            );
            return;
          }
          if (!args[0]) return reply(`Where's the link ?`);
          try {
            Void.sendMessage(
              from,
              {
                video: {
                  url: args[0],
                },
                caption: "*HERE WE GO*",
                contextInfo: {
                  externalAdReply: {
                    title: LangG.BotName,
                    body: `${global.ownername}`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: `https://citel.vercel.app`,
                    sourceUrl: `https://citel.vercel.app`,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          } catch {
            m.reply("Link error!");
          }
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "jpeg":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   JPEG\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } image link\n\n*📚Description:* Downloads image from given link and Sends that in chat.`
            );
            return;
          }
          if (!args[0]) return reply(`Where's the link?`);
          try {
            Void.sendMessage(
              from,
              {
                image: {
                  url: args[0],
                },
                caption: "*HERE WE GO*",
                contextInfo: {
                  externalAdReply: {
                    title: LangG.BotName,
                    body: `${global.ownername}`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: `https://citel.vercel.app`,
                    sourceUrl: `https://citel.vercel.app`,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          } catch {
            reply("Link error");
          }
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "list":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   List \n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends list Menu Avilable in ${LangG.title} `
            );
            return;
          }
          let template = await generateWAMessageFromContent(
            m.chat,
            proto.Message.fromObject({
              listMessage: {
                title: `Hi ${pushname} ${LangG.greet}📍\nMy usable Commands are listed here
Click on the button blew to see the list.
*${LangG.title}*
 `,
                description: `Please Choose from The List\n\n`,
                buttonText: "List Menu",
                footerText: `${LangG.title}`,
                listType: "SINGLE_SELECT",
                sections: [
                  {
                    title: "•Zero-Two•",
                    rows: [
                      {
                        title: "All Commands",
                        description: "Displays The List Of all Features",
                        rowId: `${prefix}helpt`,
                      },
                    ],
                  },
                  {
                    title: "•Zero-Two•",
                    rows: [
                      {
                        title: "Group Menu",
                        description: "Displays The List Of Group Features!",
                        rowId: `${prefix}helpt 1`,
                      },
                      {
                        title: "Downloader Menu",
                        description:
                          "Displays The List Of downloading Features",
                        rowId: `${prefix}helpt 2`,
                      },
                      {
                        title: "TextPro Menu",
                        description: "Displays The List Of TextPro Features",
                        rowId: `${prefix}helpt 4`,
                      },
                      {
                        title: "Search Menu",
                        description: "Displays The List Of Searching Features",
                        rowId: `${prefix}helpt 3`,
                      },
                      {
                        title: "Random Menu",
                        description: "Displays The List Of Random Features",
                        rowId: `${prefix}helpt 7`,
                      },
                      {
                        title: "Random Anime Menu",
                        description:
                          "Displays The List Of Random Anime Features",
                        rowId: `${prefix}helpt 10`,
                      },
                      {
                        title: "𝑍𝑒𝑟𝑜-𝑇𝑤𝑜 𝑁𝑆𝐹𝑊",
                        description: "Displays The List Of Fun Features",
                        rowId: `${prefix}helpt 11`,
                      },
                      {
                        title: "Convert Menu",
                        description: "Displays The List Of Convert Features",
                        rowId: `${prefix}helpt 6`,
                      },
                      {
                        title: "Misc Menu",
                        description: "Displays The List Of Database Features",
                        rowId: `${prefix}helpt 9`,
                      },
                      {
                        title: "Reaction Menu",
                        description: "Displays The List Of Reaction Features",
                        rowId: `${prefix}helpt 5`,
                      },
                    ],
                  },
                  {
                    title: "Developers",
                    rows: [
                      {
                        title: "Bot Owner",
                        description:
                          "Displays The List Of Credit Of The Bot !!",
                        rowId: `${prefix}tqtt`,
                      },
                    ],
                  },
                ],
                listType: 1,
              },
            }),
            {}
          );
          Void.relayMessage(m.chat, template.message, {
            messageId: template.key.id,
          });
        }
        break;
case 'waifu': {
				if (q === 'help') {
					await m.reply(`*❗Command:* Waifu\n*🍀Aliases* -waifu\n*🧩Category:* Random\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Sends Hot Waifu Pic`)
					return
				};
				const data = await fetchJson(`https://api.waifu.im/random/?selected_tags=waifu`)
				const buffer = await getBuffer(data.images[Math.floor(Math.random() * data.images.length)]?.url)

				Void.sendMessage(from, {
					image: buffer,
					caption: '*Here we go*',
					footer: LangG.footer,
				}, {
					quoted: m
				})
			}
				break
      case "waifu2":
        if (q === "help") {
        await m.reply(`*❗Command:* Waifu\n*🍀Aliases* -waifu2\n*🧩Category:* Random\n*🛠️Usage:* ${prefix + command}\n\n*📚Description:* Sends Hot Waifu Pic`)
          return;
        }
        waifuddd = await axios.get("https://waifu.pics/api/sfw/waifu");
        var wbuttsssr = [
          {
            buttonId: `${prefix}neko`,
            buttonText: {
              displayText: `Neko`,
            },
            type: 1,
          },

          {
            buttonId: `${prefix}waifu`,
            buttonText: {
              displayText: `Waifu`,
            },
            type: 1,
          },
        ];
        let button4Messageshs = {
          image: {
            url: waifuddd.data.url,
          },
          caption: " *Here we go!!!!*",
          buttons: wbuttsssr,
          headerType: 1,
        };

        await Void.sendMessage(m.chat, button4Messageshs, {
          quoted: m,
        }).catch((err) => {
          return "error..";
        });
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "neko":
        if (q === "help") {
          await m.reply(
            `*❗Command:*  Neko\n*🍀Aliases* -neko\n*🧩Category:* Random\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends Hot Neko Pic`
          );
          return;
        }
        nekodds = await axios.get("https://waifu.pics/api/sfw/neko");
        var wbuttsssrd = [
          {
            buttonId: `${prefix}neko`,
            buttonText: {
              displayText: `Neko`,
            },
            type: 1,
          },

          {
            buttonId: `${prefix}waifu`,
            buttonText: {
              displayText: `Waifu`,
            },
            type: 1,
          },
        ];
        let button4Messagesp = {
          image: {
            url: nekodds.data.url,
          },
          caption: "*Here we go😊!!!!*",
          buttons: wbuttsssrd,
          headerType: 1,
        };
        await Void.sendMessage(m.chat, button4Messagesp, {
          quoted: m,
        }).catch((err) => {
          return "error..";
        });
        break;
      /*
			case 'lyrics':
				if (q === 'help') {
					await m.reply(`*❗Command:*  Lyrics\n*🍀Aliases* -lyrics\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} Song Name\n\n*📚Description:* Searches given song and sends lyrics in chat.`)
					return
				};
				if (!q) return reply(`Use ${prefix + command} Song Name ${LangG.greet}`)
				const Genius = require("genius-lyrics")
				const Client = new Genius.Client();
				const searches = await Client.songs.search(q);

				// Pick first one
				const firstSong = searches[0];
				//console.log("Song Info:\n", firstSong, "\n");

				// Ok lets get the lyrics
				const lyrics = await firstSong.lyrics();
				//console.log("Lyrics:\n", lyrics, "\n");



				Void.sendMessage(m.chat, {
					text: lyrics,
					contextInfo: {
						externalAdReply: {
							title: '${LangG.title}',
							body: firstSong.title,
							thumbnail: await getBuffer(firstSong.thumbnail),

						}
					}
				}, {
					quoted: m
				})

				break
				*/
      case "meme":
        if (q === "help") {
          await m.reply(
            `*❗Command:*  Meme\n*🍀Aliases* -meme\n*🧩Category:* Fun*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends meme Pic`
          );
          return;
        }
        waifudd = await axios.get("https://meme-api.herokuapp.com/gimme");
        let button2Messages = {
          image: {
            url: waifudd.data.url,
          },
          caption: waifudd.data.title,
          headerType: 1,
        };
        await Void.sendMessage(m.chat, button2Messages, {
          quoted: m,
        }).catch((err) => {
          return "Umm,Could not found";
        });
        break;

      /*
			   case 'pokemon' : {
					q7 = Math.floor(Math.random() * 890) + 1;
					const buffer = await getBuffer(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${q7}.png`)
				   Void.sendMessage(m.chat, buffer, mimetype: "image/jpeg", {quoted: mek})
			   }
				   break
*/
      case "igstory":
        if (q === "help") {
          await m.reply(
            `*❗Command:*  Insta Story\n*🍀Aliases* -igstory\n*🧩Category:* Downloader\n*🛠️Usage:* ${
              prefix + command
            } story link\n\n*📚Description:* Downloads story from Instagram.`
          );
          return;
        }
        if (!q) return reply("Username?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              Void.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              Void.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        if (q === "help") {
          await m.reply(
            `*❗Command:*  ${command}\n*🍀Aliases* ${command}\n*🧩Category:* Utils\n*🛠️Usage:* ${
              prefix + command
            } reply to any audio\n\n*📚Description:* Changes encoding of replied audio.`
          );
          return;
        }
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/squirrel/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
            m.reply(LangG.wait);
            let media = await Void.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return reply(err);
              let buff = fs.readFileSync(ran);
              Void.sendMessage(
                m.chat,
                {
                  audio: buff,
                  mimetype: "audio/mpeg",
                },
                {
                  quoted: m,
                }
              );
              fs.unlinkSync(ran);
            });
          } else
            reply(
              `Reply to the audio you want to change with caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          console.log(e);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "bug":
      case "report":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Report\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } bug \n\n*📚Description:* Sends bug to the Real Secktor developers.`
            );
            return;
          }
          if (!text) return m.reply(`Enter The Bug Example\n\n${command} Menu Error `);
          Void.sendMessage(`919628516236@s.whatsapp.net`, {
            text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}`,
          });
          reply(
            `Successfully Reported To The ${LangG.title} Team. If the report is valid, action will be taken soon.\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`
          );
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "a":
      case "alive":
        if (q === "help") {
          await m.reply(
            `*❗Command:*   Alive\n*🍀Aliases* ${
              prefix + command
            },-alive\n*🧩Category:* General\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Shows that ,is Secktor Botto alive?.`
          );
          return;
        }
        const aliveadm = isAdmins ? "True" : "False";
        waifudl = await axios.get("https://waifu.pics/api/sfw/waifu");
        quoog = await axios.get(`https://favqs.com/api/qotd`);
        const alivtxt = `
 Hello, my ${pushname}, I am ${LangG.title} 🍭. A bot developed by Team ${global.ownername} 💓.
Type -𝐌𝐞𝐧𝐮 for my command list.
 *${quoog.data.quote.body}*
*Powered by ${global.ownername}*
`;
        const alivebutton = [
          {
            buttonId: `${prefix}help`,
            buttonText: {
              displayText: "HELP",
            },
            type: 1,
          },
          {
            buttonId: `${prefix}repo`,
            buttonText: {
              displayText: "REPO",
            },
            type: 1,
          },
        ];
        let aliveMessage = {
          image: {
            url: waifudl.data.url,
          },
          caption: alivtxt,
          footer: LangG.footer,
          buttons: alivebutton,
          headerType: 4,
        };
        Void.sendMessage(m.chat, aliveMessage, {
          quoted: m,
        });

        break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "ping":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Ping\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows ping speed of ${LangG.title}.`
            );
            return;
          }
          timestampe = speed();
          latensie = speed() - timestampe;
          const pong = `
*Pong📍* ${latensie.toFixed(4)} ms`;
          m.reply(pong);
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "status":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Status\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows  Status of ${LangG.title} bot.`
            );
            return;
          }
          let tr = await sck1.countDocuments();
          const formater = (seconds) => {
            const pad = (s) => {
              return (s < 10 ? "0" : "") + s;
            };
            const hrs = Math.floor(seconds / (60 * 60));
            const mins = Math.floor((seconds % (60 * 60)) / 60);
            const secs = Math.floor(seconds % 60);
            return " " + pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
          };
          const dbut = [
            {
              buttonId: `${prefix}help`,
              buttonText: {
                displayText: "Menu",
              },
              type: 1,
            },

            {
              buttonId: `${prefix}rank`,
              buttonText: {
                displayText: "Rank",
              },
              type: 1,
            },
          ];
          const uptime = process.uptime();
          timestampe = speed();
          latensie = speed() - timestampe;
          let ter = `
 🔰 *${LangG.title}* 🔰

*🌟Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.

*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 1.0.0
*🎯Total Hits* : ${totalhit}
*👤Owner:*  ${global.ownername}
*📡Hosting Platform:* ${os.hostname()}

*Powered by ${LangG.title}*
`;
          let buttonMessaged = {
            image: {
              url: picsecktor,
            },
            caption: ter,
            footer: LangG.footer,
            buttons: dbut,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: LangG.title,
                body: `Bot-Status`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://citel.vercel.app`,
                sourceUrl: `https://citel.vercel.app`,
              },
            },
          };
          await Void.sendMessage(m.chat, buttonMessaged, {
            quoted: m,
          });
        }
         break;
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
      case "tqtt":
      case "tq":
      case "repo":
      case "owner":
        {
          if (q === "help") {
            await m.reply(
              `*❗Command:*   Developers List\n*🍀Aliases* ${
                prefix + command
              },-tq,-repo\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows list of Developers of Secktor.`
            );
            return;
          }

          anu = `Hello, my ${pushname} ${LangG.greet}.

*━━━ 『 𝑺𝒆𝒄𝒌𝒕𝒐𝒓 𝑫𝒆𝒗𝒔 』 ━━━*
*⭐Ikshwaku Pandey:* For Development and Base and Modules.
*⭐Sasank Reddy:* For Theme Design, Development,Website.

 *Give a ⭐ to our work on Github if you like our team project*`;
          let message = await prepareWAMessageMedia(
            {
              image: fs.readFileSync("./assets/SocialLogo 1.png"),
            },
            {
              upload: Void.waUploadToServer,
            }
          );

          const template = generateWAMessageFromContent(
            m.chat,
            proto.Message.fromObject({
              templateMessage: {
                hydratedTemplate: {
                  imageMessage: message.imageMessage,

                  hydratedContentText: anu,
                  hydratedFooterText: LangG.BotName,
                  hydratedButtons: [
                    {
                      urlButton: {
                        displayText: "Web",
                        url: "https://citel.vercel.app",
                      },
                    },
                    {
                      urlButton: {
                        displayText: "⭐Repo",
                        url: "https://github.com/SecktorBot/Secktor-Md",
                      },
                    },
                    {
                      quickReplyButton: {
                        displayText: "Menu",
                        id: `${prefix}help`,
                      },
                    },
                    {
                      quickReplyButton: {
                        displayText: "Alive",
                        id: `${prefix}alive`,
                      },
                    },
                  ],
                },
              },
            }),
            {
              userJid: m.chat,
            }
          );
          Void.relayMessage(m.chat, template.message, {
            messageId: template.key.id,
          });
        }
        break;

      default:
				Void.sendMessage(m.chat, {
					text: `*𝑵𝒐 𝑺𝒖𝒄𝒉 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒔*.\n𝑼𝒔𝒆 *𝒉𝒆𝒍𝒑* 𝒕𝒐 𝒔𝒆𝒆 𝑯𝒆𝒍𝒑 𝑳𝒊𝒔𝒕.`
				}, {
					quoted: m
				})


        if (icmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) ;
          let msgs = global.db.database;
          if (!(budy.toLowerCase() in msgs)) return;
          Void.copyNForward(m.chat, msgs[budy.toLowerCase()], true);
        }
    }
  }catch (err) {
    console.log(util.format(err));
	  /*
    const time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
    Void.sendMessage(Void.user.id, {
      text:
        `*Error in executing Command.*\n*Time:* ${time}\n\n` + `[Command] ${prefix+command}`
        `*ERROR:* ${util.format(err)}`,
    });
	  */
  }

  let file = require.resolve(__filename);
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Secktor is Updating ${__filename}`));
    delete require.cache[file];
    require(file);
  });
}
