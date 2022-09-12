(async () => {
	switch (command) {
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
}
})()