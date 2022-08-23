(async () => {
	switch (command) {
	        case "menu":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:* ${command}\n*🍀Aliases* -menu\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends Complete Menu list of Bot`
            );
            return;
          }
          		let meh = citel.sender;
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
						{ urlButton: { displayText: "⭐Web", url: "" } }

					]
				}, { quoted: citel }) */

          await Void.sendMessage(
            citel.chat,
            {
              video: fs.readFileSync("./assets/help.mp4"),
              gifPlayback: true,
              caption: hlps,
              footer: LangG.footer,
              mentions: [meh],
            },
            {
              quoted: citel,
            }
          );
        }

        break;
              case "list":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   List \n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Sends list Menu Avilable in ${LangG.title} `
            );
            return;
          }
          let template = await generateWAMessageFromContent(
            citel.chat,
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
          Void.relayMessage(citel.chat, template.message, {
            messageId: template.key.id,
          });
        }
        break;
	}
})()
