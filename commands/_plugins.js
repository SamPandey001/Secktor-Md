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
    alias: ['uninstall'],
    category: "owner",
    desc: "Removes external plugins.",
    filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner);

    if (text === 'all') {
        await plugindb.collection.drop();
        return citel.reply('Deleted all plugins from Secktor.');
    }

    const pluginId = text.split(" ")[0];

    try {
        const existingPlugin = await plugindb.findOne({ id: pluginId });

        if (!existingPlugin) {
            return citel.reply(`Plugin with id "${pluginId}" does not exist.`);
        }
        await plugindb.deleteOne({ id: pluginId });
        const pluginPath = path.join(__dirname, '/../commands/', pluginId + '.js');
        if (fs.existsSync(pluginPath)) {
            delete require.cache[require.resolve(pluginPath)];
            fs.unlinkSync(pluginPath);
        }

        return citel.reply(`Plugin with id "${pluginId}" has been removed successfully.`);
    } catch (error) {
        console.error(`Failed to remove plugin ${pluginId}:`, error);
        return citel.reply(`Failed to remove plugin with id "${pluginId}". Please try again later.`);
    }
});

//---------------------------------------------------------------------------

cmd({
    pattern: "install",
    category: "owner",
    desc: "Installs external modules.",
    filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (!isCreator) {
        return citel.reply(tlang().owner);
    }

    let trl = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;

    for (let Url of isUrl(trl)) {
        try {
            var url = new URL(Url);
        } catch {
            return citel.reply("_Invalid Url_");
        }

        if (url.hostname.includes('gist') && !url.pathname.includes('raw')) {
            return citel.reply("Please provide the raw plugin URL.");
        }

        try {
            let { data } = await axios.get(url.href);
            let lp = /pattern: ["'](.*)["'],/g.exec(data);
            if (!lp) {
                return citel.reply("Invalid plugin format.");
            }
            let lj = lp[1] || Math.random().toString(36).substring(8);
            let l = lj.replace(/[^A-Za-z]/g, "");

            let existingPlugin = await plugindb.findOne({ id: l });
            if (existingPlugin) {
                return citel.reply(`Plugin with id "${l}" already exists.`);
            }

            const pluginPath = path.join(__dirname, '/../commands/', `${l}.js`);
            await fs.writeFileSync(pluginPath, data, "utf8");
            try {
                require(pluginPath);
            } catch (e) {
                fs.unlinkSync(pluginPath);
                return citel.reply("Invalid Plugin\n ```" + e + "```");
            }

            const ff = {
                id: l,
                url: url.href
            };
            await new plugindb(ff).save();
            return citel.reply(`_Plugin_ *${l}* _installed in Secktor._`);
        } catch (error) {
            console.error(`Failed to install plugin from URL ${Url}:`, error);
            return citel.reply(`Failed to install plugin from URL ${Url}. Please check the URL and try again.`);
        }
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
