
(async () => {
	switch (command) {

case 'help':
          case "helpt":
        if (querie === "help") {
          await citel.reply(
            `*❗Command:* ${command}\n*🍀Aliases* -help\n*🧩Category:* General\n*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends Complete Menu list of Bot`
          );
          return;
        }
        		let mhe = citel.sender;
        const userq = await Levels.fetch(citel.sender, "RandomXP");
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
                  mediaUrl: ``,
                  sourceUrl: ``,
                },
              },
              templateButtons: [
                {
                  urlButton: {
                    displayText: "⭐Web",
                    url: "",
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
              quoted: citel,
            }
          );
        }

        //Void.sendMessage(citel.chat,{video:fs.readFileSync('./src/help.mp4'),gifPlayback:true,caption:hlp},{quoted:citel})
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };
          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
          });
        }
        if (args[0] == "4") {
          let hlp2 = `
List isn't complete yet.
╔════⧫ *💠 TextPro💠*
║${prefix}glitch3
║${prefix}3dbox
║${prefix}drapwater
║${prefix}papercut
║${prefix}transformer
║${prefix}harryp
║${prefix}neondevil
║${prefix}thunder
║${prefix}window
║${prefix}graffiti
║${prefix}pornhub
║${prefix}blackpink2
║${prefix}3dneon
║${prefix}neon
║${prefix}greenneon
║${prefix}bokeh
║${prefix}hollographic
║${prefix}bear
║${prefix}dropwater
║${prefix}pencil
║${prefix}candy
║${prefix}christmas
║${prefix}rainbow
║${prefix}scifi
║${prefix}discovery
║${prefix}multicolor
║${prefix}snow
║${prefix}cloud
║${prefix}honey
║${prefix}ice
║${prefix}fruitjuice
║${prefix}rock
║${prefix}lava
║${prefix}chocolate
║${prefix}leaves
║${prefix}1917
║${prefix}blackpink
╚════════════╝
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };
          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };
          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
          });
        }
        if (args[0] == "10") {
          let hlp2 = `
 ╔════⧫ *💠 Anime 💠*
 ║ Beta Version.
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
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
                mediaUrl: ``,
                sourceUrl: ``,
              },
            },
          };

          Void.sendMessage(citel.chat, hbutto, {
            quoted: citel,
          });
        }

        break;

		}
})()
