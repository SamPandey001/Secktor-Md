//These cmds were created by @BK9dev using his API website : https://bk9.fun/

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
        console.error("Error in Create_Url: ", error.message);
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
        console.error('err', error);
    }
}

cmd({
    pattern: "gemini",
    category: "BK9",
    filename: __filename,
},
async (Void, citel, text) => {
    try {
        if (citel.quoted && citel.quoted.mtype === 'imageMessage') {
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

            let users = citel.sender ? citel.sender.split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0];
            const apiUrl = `https://bk9.fun/ai/GPT4o?q=${encodeURIComponent(text)}&userId=${users}`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            if (result.status && result.BK9) {
                await citel.reply(result.BK9);
            } else {
                await citel.reply("err");
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
        await citel.reply("🤖 : don' spam ...");
    }
});

//====================================================================================
