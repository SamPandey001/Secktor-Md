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
const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,cmd } = require('../lib')
//---------------------------------------------------------------------------
cmd({
        pattern: "plugins",
        alias :['plist'],
        category: "owner",
        desc: "Shows list of all externally installed modules",
        filename: __filename
    },
    async(Void, citel, text, { isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        let allmodtext = `*All Installed Plugins are:-*\n\n`
        allmodtext += await plugins()
        return citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "remove",
        alias :['uninstall'],
        category: "owner",
        desc: "removes external plugins.",
        filename: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(text==='all') {
         await plugindb.collection.drop()
         return citel.reply('Deleted all plugins from Secktor.')
        }
        let kill = await remove(text.split(" ")[0])
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];
        fs.unlinkSync(__dirname + "/" + text+ ".js");
        return citel.reply(kill)
    }
)

//---------------------------------------------------------------------------
cmd({
  pattern: "install",
  category: "owner",
  desc: "Installs external modules..",
  filename: __filename
}, async (Void, citel, text, {
  isCreator
}) => {
  if (!isCreator) {
    return citel.reply(tlang().owner);
  }
  let trl = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
  for (let Url of isUrl(trl)) {
    try {
      var url = new URL(Url);
    } catch {
      citel.reply("_Invalid Url_");
    }
    let fs = require("fs");
    let {
      data
    } = await axios.get(url.href);
    let lp = /pattern: ["'](.*)["'],/g.exec(data);
    let lj = lp[0].split(" ")[1] || Math.random().toString(36).substring(8);
    let l = lj.replace(/[^A-Za-z]/g, "");
    await fs.writeFileSync(__dirname + "/" + l + ".js", data, "utf8");
    try {
      require(__dirname + "/" + l + ".js");
    } catch (e) {
      fs.unlinkSync(__dirname + "/" + l + ".js");
      return citel.reply("Invalid Plugin\n ```" + e + "```");
    }
    const {
      plugindb
    } = require("../lib");
    const ff = {
      id: l,
      url: url
    };
    await new plugindb(ff).save();
    return citel.reply("_Plugin_ *" + l + "* _installed in Secktor._");
  }
});

cmd({
    pattern: "tinstall",
    category: "owner",
    desc: "Installs external modules temporarily.",
    filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (!isCreator) {
        return citel.reply("This command is restricted to owners.");
    }

    let trl = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
    let urls = isUrl(trl);
    if (!urls) {
        return citel.reply("Please provide a valid URL.");
    }

    for (let Url of urls) {
        try {
            var url = new URL(Url);
        } catch {
            return citel.reply("Invalid URL.");
        }

        try {
            let { data } = await axios.get(url.href);
            let lp = /pattern: ["'](.*)["'],/g.exec(data);
            let lj = lp[0].split(" ")[1] || Math.random().toString(36).substring(8);
            let l = lj.replace(/[^A-Za-z]/g, "");
            let tempFilePath = path.join(__dirname, l + ".js");

            // Write the plugin file temporarily
            await fs.writeFileSync(tempFilePath, data, "utf8");

            // Load the plugin dynamically
            try {
                require(tempFilePath);
                citel.reply("_Plugin_ *" + l + "* _installed temporarily._");

                // Schedule deletion of the plugin file after one minute
                setTimeout(() => {
                    // Delete the plugin file
                    fs.unlink(tempFilePath, (err) => {
                        if (err) {
                            console.error("Error deleting plugin file:", err);
                        } else {
                            console.log(`Plugin file ${l}.js deleted successfully.`);
                        }
                    });

                    // Clear the module cache
                    delete require.cache[require.resolve(tempFilePath)];
                    console.log(`Module cache for ${l}.js cleared.`);
                }, 60000); // 60000 milliseconds = 1 minute

            } catch (e) {
                fs.unlinkSync(tempFilePath);
                return citel.reply("Invalid Plugin\n ```" + e + "```");
            }
        } catch (error) {
            console.error("Error installing plugin:", error);
            return citel.reply("An error occurred while installing the plugin.");
        }
    }
});
