/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @BK9dev <https://bk9.fun/>
 * @description : Secktor,A Multi-functional whatsapp bot.
 **/


const { cmd, tlang } = require('../lib');
const fetch = require('node-fetch');
const axios = require('axios');
const fs = require('fs');

//====================================================================================

async function BK9_Url(Void, citel) {
    try {
        let mediaPath = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let imageData = fs.readFileSync(mediaPath, { encoding: 'base64' });
        let imgurUrl = await IMGUR(imageData);
        await fs.unlink(mediaPath, (err) => {
            if (err) console.error("Error deleting file: ", err);
        });
        return imgurUrl;
    } catch (error) {
        console.error("Error in BK9_Url: ", error.message);
        throw error;
    }
}

async function IMGUR(imageBase64) {
    try {
        const { data } = await axios.post("https://api.imgur.com/3/image", {
            image: imageBase64,
            type: "base64"
        }, {
            headers: {
                Authorization: "Client-ID fc9369e9aea767c"
            }
        });
        return data.data ? data.data.link : null;
    } catch (error) {
        console.error("Error uploading image to Imgur:", error);
        return null;
    }
}

//====================================================================================

async function analyzeImage(imageUrl, query) {
    try {
        const apiUrl = `https://bk9.fun/ai/geminiimg?url=${encodeURIComponent(imageUrl)}&q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl);
        return response.data.BK9;
    } catch (error) {
        console.error('Error in analyzeImage:', error);
        return null;
    }
}

cmd({
    pattern: "gemini",
    category: "ai",
    filename: __filename,
}, async (Void, citel, text) => {
    try {
        if (citel.quoted && citel.quoted.mtype === 'conversation') {
            if (!text) return await citel.reply(`Hello ${citel.pushName}, please provide a query`);
            const apiUrl = `https://bk9.fun/ai/gemini?q=${encodeURIComponent('Previous conversation: ' + citel.quoted.text + ' i want to know: ' + text)}`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            if (result.status && result.BK9) {
                await citel.reply(result.BK9);
            } else {
                await citel.reply("Error: Unable to get a response from the API");
            }
        } else if (citel.quoted && citel.quoted.mtype === 'imageMessage') {
            if (!text) return await citel.reply(`Hello ${citel.pushName}, please provide a query for the image analysis.`);
            try {
                let imageUrl = await BK9_Url(Void, citel);
                const result = await analyzeImage(imageUrl, text);
                return await citel.reply(result);
            } catch (error) {
                return await citel.reply('*🤖 :* An error occurred while analyzing the image');
            }
        } else {
            if (!text) return await citel.reply(`Hello ${citel.pushName}, how can I assist you? (Start your message with .gemini to get a reply)`);

            let users = citel.sender ? citel.sender.split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@', '');
            const apiUrl = `https://bk9.fun/ai/gemini?q=${encodeURIComponent(text)}`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            if (result.status && result.BK9) {
                return await citel.reply(result.BK9);
            } else {
                return  await citel.reply("Error: Unable to get a response from the API");
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
       return await citel.reply("🤖 : An error occurred while processing your request. Please try again.");
    }
});

//====================================================================================

cmd({
    pattern: "dallee",
    category: "ai",
    filename: __filename,
}, async (Void, citel, text) => {
    if (!text) return await citel.reply(`Hello ${citel.pushName}, please provide a prompt for the magic studio. Example: .magicstudio cat`);

    try {
        const apiUrl = `https://bk9.fun/ai/magicstudio?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        const imageBuffer = Buffer.from(response.data, 'binary');

        await Void.sendMessage(citel.chat, {
            image: imageBuffer,
            caption: `Here is your generated image for the prompt: *${text}*`
        });
    } catch (error) {
        console.error("An error occurred while generating the image:", error);
        return await citel.reply("🤖 : An error occurred while generating the image. Please try again.");
    }
});
