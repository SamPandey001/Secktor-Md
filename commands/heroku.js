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

const { tlang, Config, prefix,cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "getvar",
            desc: "get var from HEROKU.",
            fromMe: true,
            category: "heroku",
            use: 'PREFIX',
        },
        async(Void, citel, text,{ isCreator }) => {

            if (!text) return citel.reply(`Please Give me var name, ${tlang().greet}`)
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            let h = await heroku.get(baseURI + '/config-vars')
            for (vr in h) {
                if (text.split(" ")[0] === vr) return citel.reply('Your var.\n' + vr + ': ' + h[vr])
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "theme",
            desc: "Changes current theme of bot",
            fromMe: true,
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {

            if (text === "list") {
                await citel.reply(`💠Avilable Models in Secktor💠\n\n1-Secktor\n2-Zerotwo\n3-Friday\n4-Luffy\n5-Nezuko\n6-Goku\n7-Genos\n8-Ayanokoji\n9-Naruto\n10-Gideon\n11-parker\n12-adam`);
                return
            }
            if (!isCreator) return citel.reply(tlang().owner);
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            if (text === "secktor") {
                // await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "SECKTOR",
                    },
                });
                await citel.reply(` 🟩Secktor Theme has been integrated successfully.\nIt will require couple seconds to configure databse`);
                return;
            }
            if (text === "zerotwo") {
                //      await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "ZEROTWO",
                    },
                });
                await citel.reply(`🟨Integrating Zero-Two,\nDarling Please give me a bit time,Hiro sucks`);
                return
            }
            if (text === "adam") {
                //      await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "ADAM",
                    },
                });
                await citel.reply(`🟨Integrating Black Adam,\nThis will require few seconds to configure`);
                return
            }
            if (text === "friday") {
                //        await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "FRIDAY",
                    },
                });
                await citel.reply(` 🟪Integrating Friday\nSir, please may I request just a few seconds to calibrate`);
                return
            }
            if (text === "ayanokoji") {
                //       await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "AYANOKOJI",
                    },
                });
                await citel.reply(` 🔷Integrating AYANOKOJI.\nPlease give me a couple seconds to configure databse.`);
                return
            }
            if (text === "rimuru") {
                //        await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "Rimuru",
                    },
                });
                await citel.reply(` 🔷Rimuru Theme has been integrated successfully`);
                return
            }
            if (text === "nezuko") {
                //     await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "NEZUKO",
                    },
                });
                await citel.reply(` 🔴NEZUKO Theme has been integrated successfully`);
                return
            }
            if (text === "goku") {
                //      await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "GOKU",
                    },
                });
                await citel.reply(` ✔️GOKU Theme has been integrated successfully`);
                return
            }
            if (text === "genos") {
                //      await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "GENOS",
                    },
                });
                await citel.reply(`🟩GENOS  Theme has been integrated successfully`);
                return
            }
            if (text === "naruto") {
                //      await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "NARUTO",
                    },
                });
                await citel.reply(`🟩NARUTO Theme has been integrated successfully`);
                return
            }
            if (text === "luffy") {
                //     await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "LUFFY",
                    },
                });
                await citel.reply(` 🔵Luffy Theme has been integrated successfully`);
                return
            }
            if (text === "gideon") {
                //      await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "GIDEON",
                    },
                });
                await citel.reply(` 🟩Gideon Theme has been integrated successfully`);
                return
            }
            if (text === "parker") {
                //      await Void.updateProfileName(`tlang().title`)
                await heroku.patch(baseURI + "/config-vars", {
                    body: {
                        ["THEME"]: "PARKER",
                    },
                });
                await citel.reply(` 🟩Parker Peter Theme has been integrated successfully`);
                return
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "shutdown",
            desc: "Shuts secktor down...",
            fromMe: true,
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            if (!isCreator) return citel.reply(tlang().owner);
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.get(baseURI + '/formation')
                .then(async(formation) => {
                    forID = formation[0].id;
                    citel.reply(`Sutting ${tlang().title} down`)
                    await heroku.patch(baseURI + '/formation/' + forID, {
                        body: {
                            quantity: 0
                        }
                    });
                })

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "setvar",
            desc: "TO add any var in heroku..",
            fromMe: true,
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please Give me var to set ${tlang().greet}`)
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
                body: {
                    [text.split('|')[0]]: text.split('|')[1],
                },
            });
            await citel.reply(`🟩var ${text.split('|')[0]} : ${text.split('|')[1]} has been set Successfuly.`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "setsession",
            desc: "Change session id.",
            fromMe: true,
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!querie) return citel.reply(`Please Give me prefix to set ${tlang().greet}`)
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
                body: {
                    ["SESSION_ID"]: text,
                },
            });
            await citel.reply(`🟩Session has been changed Successfuly.`);

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "setprefix",
            desc: "Changes currnet prefix",
            fromMe: true,
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please Give me prefix to set ${tlang().greet}`)
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
                body: {
                    ["PREFIX"]: text,
                },
            });
            await citel.reply(`🟩Prefix has been changes to ${text} Successfuly.`);

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "setalive",
            desc: "Changes currnet alive text",
            fromMe: true,
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please Give me text to set ${tlang().greet}`)
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            await heroku.patch(baseURI + "/config-vars", {
                body: {
                    ["ALIVE_MESSAGE"]: text,
                },
            });
            await citel.reply(`🟩Alive Text has been changes to ${text} Successfuly.`);

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "restart",
            desc: "Restarts Bot Node Server",
            fromMe: true,
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            const Heroku = require("heroku-client");
            const heroku = new Heroku({
                token: Config.HEROKU.API_KEY,
            });
            let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
            citel.reply(`Restarting ${tlang().title}`)
                //console.log(baseURI);
            await heroku.delete(baseURI + '/dynos')
                .catch(async(error) => {
                    citel.reply('got an error')
                });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "mode",
            desc: "Changes currnet worktype of bot.",
            fromMe: true,
            category: "heroku",
            use: "public|private",
        },
        async(Void, citel, text,{ isCreator }) => {
            if (text === "public") {
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
                await citel.reply(`🟦Public Mode has been integrated successfully by ${tlang().title}`);
                return;
            }
            if (text === "private") {
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
                await citel.reply(`🟩Private Mode has been integrated successfully`);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "getallvar",
        desc: "get all heroku vars.",
        fromMe: true,
        category: "heroku",
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!isCreator) return citel.reply(tlang().owner)
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
            token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
        let h = await heroku.get(baseURI + '/config-vars')
        let str = '*All Your Heroku Vars*\n\n'
        for (vr in h) {
            str += vr + ':' + h[vr] + '\n'
        }
        citel.reply(str)
    }
)
