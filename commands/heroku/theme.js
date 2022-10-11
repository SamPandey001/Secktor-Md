const Config = require('../../config')
const { tlang } = require('../../lib')

module.exports = {
   name: 'theme',
   category: 'owner',
   desc: 'Changes current theme of bot.',
   async exec(citel, Void,args,isCreator) {

    if (args.join(" ") === "list") {
        await citel.reply(`💠Avilable Models in Secktor💠\n\n1-Secktor\n2-Zerotwo\n3-Friday\n4-Luffy\n5-Nezuko\n6-Goku\n7-Genos\n8-Ayanokoji\n9-Naruto\n10-Gideon\n11-parker\n12-adam`);
        return
    }
    if (!isCreator) return citel.reply(tlang().owner);
    const Heroku = require("heroku-client");
    const heroku = new Heroku({
        token: Config.HEROKU.API_KEY,
    });
    let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
    if (args.join(" ") === "secktor") {
        // await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "SECKTOR",
            },
        });
        await citel.reply(` 🟩Secktor Theme has been integrated successfully.\nIt will require couple seconds to configure databse`);
        return;
    }
    if (args.join(" ") === "zerotwo") {
        //      await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "ZEROTWO",
            },
        });
        await citel.reply(`🟨Integrating Zero-Two,\nDarling Please give me a bit time,Hiro sucks`);
        return
    }
    if (args.join(" ") === "adam") {
        //      await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
              ["THEME"]: "ADAM",
            },
        });
        await citel.reply(`🟨Integrating Black Adam,\nThis will require few seconds to configure`);
        return
    }
    if (args.join(" ") === "friday") {
        //        await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "FRIDAY",
            },
        });
        await citel.reply(` 🟪Integrating Friday\nSir, please may I request just a few seconds to calibrate`);
        return
    }
    if (args.join(" ") === "ayanokoji") {
        //       await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "AYANOKOJI",
            },
        });
        await citel.reply(` 🔷Integrating AYANOKOJI.\nPlease give me a couple seconds to configure databse.`);
        return
    }
    if (args.join(" ") === "rimuru") {
        //        await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "Rimuru",
            },
        });
        await citel.reply(` 🔷Rimuru Theme has been integrated successfully`);
        return
    }
    if (args.join(" ") === "nezuko") {
        //     await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "NEZUKO",
            },
        });
        await citel.reply(` 🔴NEZUKO Theme has been integrated successfully`);
        return
    }
    if (args.join(" ") === "goku") {
        //      await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "GOKU",
            },
        });
        await citel.reply(` ✔️GOKU Theme has been integrated successfully`);
        return
    }
    if (args.join(" ") === "genos") {
        //      await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "GENOS",
            },
        });
        await citel.reply(`🟩GENOS  Theme has been integrated successfully`);
        return
    }
    if (args.join(" ") === "naruto") {
        //      await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "NARUTO",
            },
        });
        await citel.reply(`🟩NARUTO Theme has been integrated successfully`);
        return
    }
    if (args.join(" ") === "luffy") {
        //     await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "LUFFY",
            },
        });
        await citel.reply(` 🔵Luffy Theme has been integrated successfully`);
        return
    }
    if (args.join(" ") === "gideon") {
        //      await Void.updateProfileName(`tlang().title`)
        await heroku.patch(baseURI + "/config-vars", {
            body: {
        ["THEME"]: "GIDEON",
            },
        });
        await citel.reply(` 🟩Gideon Theme has been integrated successfully`);
        return
    }
    if (args.join(" ") === "parker") {
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
}