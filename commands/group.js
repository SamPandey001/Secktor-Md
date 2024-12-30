/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 **/

 const {
    sck1,
    cmd,
    jsonformat,
    botpic,
    TelegraPh,
    Config,
    tlang,
    warndb,
    sleep,
    getAdmin,
    getBuffer,
    prefix
  } = require("../lib");
  const moment = require("moment-timezone");
  const fs = require("fs-extra");
  const {
    Sticker,
    createSticker,
    StickerTypes
  } = require("wa-sticker-formatter");
  //---------------------------------------------------------------------------
  cmd({
    pattern: "join",
    desc: "joins group by link",
    category: "owner",
    use: "<group link.>"
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!isCreator) {
      return citel.reply(tlang().owner);
    }
    if (!text) {
      return citel.reply(`Please give me Query ${tlang().greet}`);
    }
    if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com")) {
      citel.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
    }
    let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    await Void.groupAcceptInvite(result).then(res => citel.reply("🟩Joined Group")).catch(err => citel.reply("Error in Joining Group"));
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "sticker",
    alias: ["s"],
    desc: "Makes sticker of replied image/video.",
    category: "group",
    use: "<reply to any image/video.>"
  }, async (Void, citel, text) => {
    if (!citel.quoted) {
      return citel.reply(`*Mention any Image or video Sir.*`);
    }
    let mime = citel.quoted.mtype;
    pack = Config.packname;
    author = Config.author;
    if (citel.quoted) {
      let media = await citel.quoted.download();
      citel.reply("*Processing Your request*");
      let sticker = new Sticker(media, {
        pack: pack,
        // The pack name
        author: author,
        // The author name
        type: text.includes("--crop" || "-c") ? StickerTypes.CROPPED : StickerTypes.FULL,
        categories: ["🤩", "🎉"],
        // The sticker category
        id: "12345",
        // The sticker id
        quality: 75,
        // The quality of the output file
        background: "transparent" // The sticker background color (only for full stickers)
      });
      const buffer = await sticker.toBuffer();
      return Void.sendMessage(citel.chat, {
        sticker: buffer
      }, {
        quoted: citel
      });
    } else if (/video/.test(mime)) {
      if ((quoted.msg || citel.quoted).seconds > 20) {
        return citel.reply("Cannot fetch videos longer than *20 Seconds*");
      }
      let media = await quoted.download();
      let sticker = new Sticker(media, {
        pack: pack,
        // The pack name
        author: author,
        // The author name
        type: StickerTypes.FULL,
        // The sticker type
        categories: ["🤩", "🎉"],
        // The sticker category
        id: "12345",
        // The sticker id
        quality: 70,
        // The quality of the output file
        background: "transparent" // The sticker background color (only for full stickers)
      });
      const stikk = await sticker.toBuffer();
      return Void.sendMessage(citel.chat, {
        sticker: stikk
      }, {
        quoted: citel
      });
    } else {
      citel.reply("*Uhh,Please reply to any image or video*");
    }
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "support",
    desc: "Sends official support group link.",
    category: "group",
    filename: __filename
  }, async (Void, citel, text) => {
    citel.reply(`*Check your Pm ${tlang().greet}*`);
    await Void.sendMessage(`${citel.sender}`, {
      image: log0,
      caption: `*Group Name: Secktor-Support*\n*Group Link:* https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbC`
    });
  });
  
  //---------------------------------------------------------------------------
  cmd({
    pattern: "warn",
    desc: "Warns user in Group.",
    category: "group",
    filename: __filename,
    use: "<quote|reply|number>"
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!citel.isGroup) {
      return citel.reply("This Command is only for group.");
    }
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) {
      return citel.reply("This command is only for Admin.");
    }
    if (!citel.quoted) {
      return citel.reply("Please quote a user master.");
    }
    const timesam = moment(moment()).format("HH:mm:ss");
    moment.tz.setDefault("Asia/KOLKATA").locale("id");
    try {
      let metadata = await Void.groupMetadata(citel.chat);
      await new warndb({
        id: citel.quoted.sender.split("@")[0] + "warn",
        reason: text,
        group: metadata.subject,
        warnedby: citel.pushName,
        date: timesam
      }).save();
      let ment = citel.quoted.sender;
      Void.sendMessage(citel.chat, {
        text: "*----Warn----*\nUser: @" + citel.quoted.sender.split("@")[0] + "\nWith Reason: " + text + "\nWarned by: " + citel.pushName,
        mentions: [citel.quoted.sender]
      }, {
        quoted: citel
      });
      let h = await warndb.find({
        id: citel.quoted.sender.split("@")[0] + "warn"
      });
      const Config = require("../config");
      if (h.length > Config.warncount) {
        teskd = "Removing User because Warn limit exceeded\n\n*All Warnings.*\n";
        let h = await warndb.find({
          id: citel.quoted.sender.split("@")[0] + "warn"
        });
        teskd += "*There are total " + h.length + "  warnings.*\n";
        for (let i = 0; i < h.length; i++) {
          teskd += "*" + (i + 1) + "*\n╭─────────────◆\n│ *🍁In Group:-* " + h[i].group + "\n";
          teskd += "│ *🔰Time:-* " + h[i].date + "\n";
          teskd += "│ *⚠️Warned by:-* " + h[i].warnedby + "\n";
          teskd += "│ _📍Reason: " + h[i].reason + "_\n╰─────────────◆\n\n";
        }
        citel.reply(teskd);
        await Void.groupParticipantsUpdate(citel.chat, [citel.quoted.sender], "remove");
      }
    } catch (Y) {
      console.log(Y);
    }
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "unblock",
    desc: "Unblocked to the quoted user.",
    category: "owner",
    filename: __filename
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!citel.quoted) {
      return citel.reply("Please reply to user");
    }
    if (!isCreator) {
      citel.reply(tlang().owner);
    }
    let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await Void.updateBlockStatus(users, "unblock").then(res => console.log(jsonformat(res))).catch(err => console.log(jsonformat(err)));
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "ujid",
    desc: "get jid of all user in a group.",
    category: "owner",
    filename: __filename
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!isCreator) {
      return citel.reply(tlang().owner);
    }
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch(e => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`;
    for (let mem of participants) {
      textt += `📍 ${mem.id}\n`;
    }
    citel.reply(textt);
  });
  
  //---------------------------------------------------------------------------
  cmd({
    pattern: "tagall",
    desc: "Tags every person of group.",
    category: "group",
    filename: __filename
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch(e => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) {
      return citel.reply(tlang().admin);
    }
    let textt = `
  ══✪〘   *Tag All*   〙✪══
  
  ➲ *Message :* ${text ? text : "blank"}\n\n
  ➲ *Author:* ${citel.pushName} 🔖
  `;
    for (let mem of participants) {
      textt += `📍 @${mem.id.split("@")[0]}\n`;
    }
    Void.sendMessage(citel.chat, {
      text: textt,
      mentions: participants.map(a => a.id)
    }, {
      quoted: citel
    });
  });
  
  //---------------------------------------------------------------------------
  cmd({
    pattern: "request",
    desc: "Sends requst to main Bot developer.",
    category: "group",
    filename: __filename,
    use: "<text>"
  }, async (Void, citel, text) => {
    if (!text) {
      return reply(`Example : ${prefix + command} hello dev please add a downloader feature`);
    }
    textt = `*| REQUEST |*`;
    teks1 = `\n\n*User* : @${citel.sender.split("@")[0]}\n*Request* : ${text}`;
    teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
    for (let i of owner) {
      Void.sendMessage(i + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [citel.sender]
      }, {
        quoted: citel
      });
    }
    Void.sendMessage(citel.chat, {
      text: textt + teks2 + teks1,
      mentions: [citel.sender]
    }, {
      quoted: citel
    });
  });

  //---------------------------------------------------------------------------
  cmd({
    pattern: "rwarn",
    desc: "Deletes all previously given warns of quoted user.",
    category: "group",
    filename: __filename,
    use: "<quote|reply|number>"
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!isCreator) {
      return citel.reply(tlang().owner);
    }
    if (!citel.quoted) {
      return citel.reply("Quote a user master.");
    }
    await warndb.deleteOne({
      id: citel.quoted.sender.split("@")[0] + "warn"
    });
    return citel.reply("User is now free as a bird.\n.");
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "poll",
    desc: "Makes poll in group.",
    category: "group",
    filename: __filename,
    use: `question;option1,option2,option3.....`
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!isCreator) {
      return citel.reply(tlang().owner);
    }
    let [poll, opt] = text.split(";");
    if (text.split(";") < 2) {
      return await citel.reply(`${prefix}poll question;option1,option2,option3.....`);
    }
    let options = [];
    for (let i of opt.split(",")) {
      options.push(i);
    }
    await Void.sendMessage(citel.chat, {
      poll: {
        name: poll,
        values: options
      }
    });
  });
  //---------------------------------------------------------------------------

  //---------------------------------------------------------------------------
  cmd({
    pattern: "promote",
    desc: "Provides admin role to replied/quoted user",
    category: "group",
    filename: __filename,
    use: "<quote|reply|number>"
  }, async (Void, citel, text) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) {
      return citel.reply(tlang().admin);
    }
    if (!isBotAdmins) {
      return citel.reply(tlang().botAdmin);
    }
    try {
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
      if (!users) {
        return;
      }
      await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
    } catch {
      //		citel.reply(tlang().botAdmin);
    }
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "kick",
    desc: "Kicks replied/quoted user from group.",
    category: "group",
    filename: __filename,
    use: "<quote|reply|number>"
  }, async (Void, citel, text) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) {
      return citel.reply(tlang().admin);
    }
    if (!isBotAdmins) {
      return citel.reply(tlang().botAdmin);
    }
    try {
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
        if (!users) {
        return;
      }
      await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
    } catch {
      //		citel.reply(tlang().botAdmin);
    }
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "memegen",
    desc: "Write text on quoted image.",
    category: "group",
    filename: __filename,
    use: "<text>"
  }, async (Void, citel, text) => {
    let mime = citel.quoted.mtype;
    if (!/image/.test(mime)) {
      return citel.reply(`Reply to Photo With Caption *text*`);
    }
    mee = await Void.downloadAndSaveMediaMessage(citel.quoted);
    mem = await TelegraPh(mee);
    meme = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`);
    let buttonMessage = {
      image: meme,
      caption: "Here we go",
      footer: tlang().footer,
      headerType: 4
    };
    Void.sendMessage(citel.chat, buttonMessage, {
      quoted: citel
    });
    await fs.unlinkSync(mee);
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "group",
    desc: "mute and unmute group.",
    category: "group",
    filename: __filename
  }, async (Void, citel, text) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    if (!isBotAdmins) {
      return citel.reply(tlang().botAdmin);
    }
    if (!isAdmins) {
      return citel.reply(tlang().admin);
    }
    if (text.split(" ")[0] === "close") {
      await Void.groupSettingUpdate(citel.chat, "announcement").then(res => reply(`Group Chat Muted :)`)).catch(err => console.log(err));
    } else if (text.split(" ")[0] === "open") {
      await Void.groupSettingUpdate(citel.chat, "not_announcement").then(res => reply(`Group Chat Unmuted :)`)).catch(err => console.log(err));
    } else {
      return citel.reply(`Group Mode:\n${prefix}group open- to open\n${prefix}group close- to close`);
    }
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "grouppic",
    desc: "Sets a profile pic in Group..",
    category: "group",
    filename: __filename
  }, async (Void, citel, text) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    let mime = citel.quoted.mtype;
    if (!citel.isGroup) {
      citel.reply(tlang().group);
    }
    if (!isAdmins) {
      citel.reply(tlang().admin);
    }
    if (!isBotAdmins) {
      citel.reply(tlang().botadmin);
    }
    if (!citel.quoted) {
      return citel.reply(`Send/Reply Image With Caption ${command}`);
    }
    if (!/image/.test(mime)) {
      return citel.reply(`Send/Reply Image With Caption ${command}`);
    }
    if (/webp/.test(mime)) {
      return citel.reply(`Send/Reply Image With Caption ${command}`);
    }
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    await Void.updateProfilePicture(citel.chat, {
      url: media
    }).catch(err => fs.unlinkSync(media));
    citel.reply(tlang().success);
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "hidetag",
    alias: ["htag"],
    desc: "Tags everyperson of group without mentioning their numbers",
    category: "group",
    filename: __filename,
    use: "<text>"
  }, async (Void, citel, text) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch(e => {}) : "";
    const participants = citel.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = await getAdmin(Void, citel);
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) {
      return citel.reply(tlang().admin);
    }
    if (!isAdmins) {
      citel.reply(tlang().admin);
    }
    Void.sendMessage(citel.chat, {
      text: text ? text : "",
      mentions: participants.map(a => a.id)
    }, {
      quoted: citel
    });
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "add",
    desc: "Add that person in group",
    category: "group",
    filename: __filename,
    use: "<number>"
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!text) {
      return citel.reply("Please provide me number.");
    }
    if (!isCreator) {
      return citel.reply(tlang().owner);
    }
    if (!isBotAdmins) {
      return citel.reply(tlang().botAdmin);
    }
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
    return await Void.groupParticipantsUpdate(citel.chat, [users], "add");
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "getjids",
    desc: "Sends chat id of every groups.",
    category: "group",
    filename: __filename
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (!isCreator) {
      return citel.reply(tlang().owner);
    }
    let getGroups = await Void.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
    let anu = groups.map(v => v.id);
    let jackhuh = `All groups jid\n\n`;
    citel.reply(`Fetching jid from ${anu.length} Groups`);
    for (let i of anu) {
      let metadata = await Void.groupMetadata(i);
      await sleep(500);
      jackhuh += `*Subject:-* ${metadata.subject}\n`;
      jackhuh += `*Member :* ${metadata.participants.length}\n`;
      jackhuh += `*Jid:-* ${i}\n\n`;
    }
    return citel.reply(jackhuh);
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "demote",
    desc: "Demotes replied/quoted user from group",
    category: "group",
    filename: __filename,
    use: "<quote|reply|number>"
  }, async (Void, citel, text) => {
    if (!citel.isGroup) {
      return citel.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Void, citel);
    const botNumber = await Void.decodeJid(Void.user.id);
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isAdmins) {
      return citel.reply(tlang().admin);
    }
    if (!isBotAdmins) {
      return citel.reply(tlang().botAdmin);
    }
    try {
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : null;
        if (!users) {
        return citel.reply('Please tag a user.');
      }
     return await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
    } catch {
      //		citel.reply(tlang().botAdmin);
    }
  });
  
  //---------------------------------------------------------------------------
  cmd({
    pattern: "del",
    alias: ["delete"],
    desc: "Deletes messages based on user permissions.",
    category: "group",
    filename: __filename,
    use: "<quote/reply message.>"
  }, async (Void, citel, text) => {
    const groupAdmins = citel.isGroup ? await getAdmin(Void, citel) : [];
    const botNumber = Void.decodeJid(Void.user.id);
    const isBotAdmin = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmin = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    const isCreator = citel.sender === citel.chat.split("@")[0] + "@s.whatsapp.net"; // Replace with your creator ID logic
    

    if (!citel.quoted) {
      return citel.reply(`Please reply to a message to delete. ${tlang().greet}`);
    }
  
    if (isCreator) {
      const key = {
        remoteJid: citel.chat,
        fromMe: false,
        id: citel.quoted.id,
        participant: citel.quoted.sender
      };
      await Void.sendMessage(citel.chat, { delete: key });
    } else if (citel.isGroup) {
      if (citel.quoted.isBot) {
        const key = {
          remoteJid: citel.chat,
          fromMe: true,
          id: citel.quoted.id,
          participant: citel.quoted.sender
        };
        await Void.sendMessage(citel.chat, { delete: key });
      } else {
        if (!isAdmin && !isCreator) {
          return citel.reply("Only group admins can delete messages sent by others.");
        }
        if (!isBotAdmin) {
          return citel.reply("I can't delete messages without being a group admin.");
        }
        const key = {
          remoteJid: citel.chat,
          fromMe: false,
          id: citel.quoted.id,
          participant: citel.quoted.sender
        };
        await Void.sendMessage(citel.chat, { delete: key });
      }
    } else {
      return citel.reply("You don't have permission to delete this message.");
    }
  });
  
  //---------------------------------------------------------------------------
  cmd({
    pattern: "checkwarn",
    desc: "Check warns",
    category: "group",
    filename: __filename,
    use: "<quoted/reply user.>"
  }, async (Void, citel, text) => {
    if (!citel.isGroup) {
      return citel.reply("This command is only for Group.");
    }
    if (!citel.quoted) {
      return citel.reply("Quote a user master.");
    }
    teskd = `*All Warnings.*\n\n`;
    let h = await warndb.find({
      id: citel.quoted.sender.split("@")[0] + "warn"
    });
    console.log(h);
    teskd += `*There are total ${h.length}  warnings.*\n`;
    for (let i = 0; i < h.length; i++) {
      teskd += `*${i + 1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`;
      teskd += `│ *🔰Time:-* ${h[i].date}\n`;
      teskd += `│ *⚠️Warned by:-* ${h[i].warnedby}\n`;
      teskd += `│ _📍Reason: ${h[i].reason}_\n╰─────────────◆\n\n`;
    }
    citel.reply(teskd);
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "block",
    desc: "blocks that person",
    fromMe: true,
    category: "owner",
    filename: __filename,
    use: "<quote/reply user.>"
  }, async (Void, citel, text) => {
    if (!citel.quoted) {
      return citel.reply("Please reply to user");
    }
    if (!isCreator) {
      citel.reply(tlang().owner);
    }
    let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await Void.updateBlockStatus(users, "block").then(res => console.log(jsonformat(res))).catch(err => console.log(jsonformat(err)));
  });
  //---------------------------------------------------------------------------
  cmd({
    pattern: "broadcast",
    alias: ["bc"],
    desc: "Bot makes a broadcast in all groups",
    fromMe: true,
    category: "group",
    filename: __filename,
    use: "<text for broadcast.>"
  }, async (Void, citel, text) => {
    if (!isCreator) {
      return citel.reply(tlang().owner);
    }
    let getGroups = await Void.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
    let anu = groups.map(v => v.id);
    citel.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`);
    for (let i of anu) {
      await sleep(1500);
      let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${text}`;
      let buttonMessaged = {
        image: log0,
        caption: txt,
        footer: citel.pushName,
        headerType: 1
      };
      await Void.sendMessage(i, buttonMessaged, {
        quoted: citel
      });
    }
    citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
  });
  


  cmd({
    pattern: "rank",
    desc: "Displays the user's rank and stats.",
    category: "group",
    filename: __filename
  }, async (Void, citel, text) => {

    const user = await sck1.findOne({ id: citel.sender });
  
    if (!user) {
      return citel.reply("This was your first message.");
    }
  
    const role =
      user.level <= 2 ? "🏳Citizen" :
      user.level <= 4 ? "👼Baby Wizard" :
      user.level <= 6 ? "🧙‍♀️Wizard" :
      user.level <= 8 ? "🧙‍♂️Wizard Lord" :
      user.level <= 10 ? "🧚🏻Baby Mage" :
      user.level <= 12 ? "🧜Mage" :
      user.level <= 14 ? "🧜‍♂️Master of Mage" :
      user.level <= 16 ? "🌬Child of Nobel" :
      user.level <= 18 ? "❄Nobel" :
      user.level <= 20 ? "⚡Speed of Elite" :
      user.level <= 22 ? "🎭Elite" :
      user.level <= 24 ? "🥇Ace I" :
      user.level <= 26 ? "🥈Ace II" :
      user.level <= 28 ? "🥉Ace Master" :
      user.level <= 30 ? "🎖Ace Dominator" :
      user.level <= 32 ? "🏅Ace Elite" :
      user.level <= 34 ? "🏆Ace Supreme" :
      user.level <= 36 ? "💍Supreme I" :
      user.level <= 38 ? "💎Supreme II" :
      user.level <= 40 ? "🔮Supreme Master" :
      user.level <= 42 ? "🛡Legend III" :
      user.level <= 44 ? "🏹Legend II" :
      user.level <= 46 ? "⚔Legend" : "🐉Immortal";
  
    const rankText = `
  *👤Name: ${user.name}*  
  *🌟Role*: ${role}
  *🟢XP*: ${user.xp}
  *🏡Level*: ${user.level}
  *📬Messages Sent*: ${user.messages}
  `;
  
    Void.sendMessage(citel.chat, { text: rankText }, { quoted: citel });
  });

 cmd({
   pattern: "leaderboard",
   alias: ["deck","count"],
   desc: "Displays the leaderboard.",
   category: "group",
   filename: __filename
 }, async (Void, citel, text) => {
   const groupId = citel.chat;
   
   if (!citel.isGroup) {
     return citel.reply("This command can only be used in groups.");
   }
 
   const groupMetadata = await Void.groupMetadata(groupId).catch(e => {
     return null;
   });
 
   const participants = groupMetadata ? groupMetadata.participants : [];
 
   if (!participants || participants.length === 0) {
     return citel.reply("Could not fetch group participants.");
   }
 
   const participantIds = participants.map(p => p.id);
 
   const users = await sck1.find({ id: { $in: participantIds } });
 
   if (users.length === 0) {
     return citel.reply("No data available in the leaderboard.");
   }
 
   if (text.toLowerCase() === "this") {
     const groupUsers = users
       .map((user) => ({
         id: user.id,
         name: user.name || "Unknown",
         groupMessages: user.groups ? user.groups[groupId] || 0 : 0,
         totalMessages: user.messages
       }))
       .filter((user) => user.groupMessages > 0)
       .sort((a, b) => b.groupMessages - a.groupMessages)
       .slice(0, 10);
 
     if (groupUsers.length === 0) {
       return citel.reply("No active members found in this group.");
     }
 
     let leaderboardText = `
 *-------------------------------*
        Group Leaderboard
 *-------------------------------*\n\n`;
 
     let totalGroupMessages = 0;
 
     for (let i = 0; i < groupUsers.length; i++) {
       const user = groupUsers[i];
       totalGroupMessages += user.groupMessages;
 
       leaderboardText += `*${i + 1}. Name:* ${user.name}
   *Messages in this Group:* ${user.groupMessages}
   *Messages in all Groups:* ${user.totalMessages}\n\n`;
     }
 
     leaderboardText += `*Total Messages (Top ${groupUsers.length} in Group)*: ${totalGroupMessages}`;
 
     return citel.reply(leaderboardText);
 
   } else {
     const globalUsers = await sck1.find({})
       .sort({ messages: -1 })
       .limit(10);
 
     if (globalUsers.length === 0) {
       return citel.reply("No data available in the leaderboard.");
     }
 
     let leaderboardText = `
 *-------------------------------*
         Global Leaderboard
 *-------------------------------*\n\n`;
 
     for (let i = 0; i < globalUsers.length; i++) {
       const user = globalUsers[i];
       leaderboardText += `*${i + 1}. Name:* ${user.name || "Unknown"}
   *Total Messages:* ${user.messages}\n\n`;
     }
 
     return citel.reply(leaderboardText);
   }
 });