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

const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            console.log(isCreator)
            if (!isCreator) return citel.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                let buttons = [
                    { buttonId: `${prefix}updatenow`, buttonText: { displayText: 'UPDATE NOW' }, type: 1 },
                ]
                await Void.sendButtonText(citel.chat, buttons, update, Void.user.name)

            }

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "updatenow",
        desc: "Updates bot with repo\'s refreshed commits",
        fromMe: true,
        category: "heroku",
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!isCreator) return citel.reply('This command is only for my owner.')
        let commits = await DB.syncgit()
        if (commits.total === 0) {
            citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
        } else {
            citel.reply('Updating now.......')
            try{
            let update = await DB.updatedb()
            citel.reply(update)
            } catch {
                citel.reply('_error._')
            }
        }
    }
)