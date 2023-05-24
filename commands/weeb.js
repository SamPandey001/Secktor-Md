/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 
 cmd({ pattern: "weeb-pack"
 **/

const axios = require('axios')
const { Anime, Manga } = require("@shineiichijo/marika");
const { tlang, cmd, fetchJson, getBuffer, prefix } = require('../lib/')
    //---------------------------------------------------------------------------
cmd({
            pattern: "character",
            category: "weeb",
            desc: "Searches Info about character."
        },
        async(Void, citel, text) => {
            if (!text[1]) return citel.reply(`Please give a Name ${tlang().greet}!`)
            const client = new Character();
            const chara = await client.character(text(" ")).catch((err) => {
                return citel.reply(`${tlang().greet} Couldn't find any result related to *${text}*`)
            });
            let texty = "";
            texty += `*🏮Name:* ${chara.data.characters.results[0].name.full}*\n`;
            texty += `*🌐Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
            texty += `*📶URL:* ${chara.data.characters.results[0].siteUrl}*\n\n`;
            texty += `*📑Description:* ${chara.data.characters.results[0].description}\n`;
            const { data: char } = (
                await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
            ).data;
            const { data: anime } = (
                await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/anime`)
            ).data;
            const { data: voice } = (
                await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/voices`)
            ).data;
            let data2 =
                `*🏮Name:* ${char[0].name}\n*🎗About:* ${
                  char[0].about
                }\n*🔍MAL_ID:* ${char[0].mal_id}\n🔗 *URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
                `\n❤ *Description:* ${chara.data.characters.results[0].description}\n` +
                `\n**🔖Appears:* ${anime
                  .map((val) => `\n*🔮Role:* ${val.role}\n*🎬Title:* ${val.anime.title}`)
                  .join("\n")}`;
        Void.sendMessage(citel.chat,{image:{url:char[0].images.jpg.image_url},caption:data2},{quoted:citel})

}
)
//---------------------------------------------------------------------------
cmd({
    pattern: "ranime",
    category: "weeb",
    desc: "Info about random anime."
  },
  async(Void, citel, text) => {
   const animeCharacter = require('anime-character-random')
            let a = await animeCharacter.getRandomChar(async (anime) => {
              const client = new Character();
              const chara = await client.character(anime.tags[0]).catch((err) => {
                return
              });
              let texty = "";
              texty += `*🏮Name:* ${chara.data.characters.results[0].name.full}*\n`;
              texty += `*🌐Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
              texty += `*📶URL:* ${chara.data.characters.results[0].siteUrl}*\n\n`;
              texty += `*📑Description:* ${chara.data.characters.results[0].description}\n`;
                const { data: cha } = (
                  await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
                ).data;
                const { data: anim } = (
                  await axios.get(`https://api.jikan.moe/v4/characters/${cha[0].mal_id}/anime`)
                ).data;
                let data2 =
                  `*Name:* ${cha[0].name}\n*👤About:* ${
                    cha[0].about
                  }\n*🔗MAL_ID:* ${cha[0].mal_id}\n🔗 *📶URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
                  `\n`;
          await Void.sendMessage(citel.chat,{image:{url:cha[0].images.jpg.image_url},caption:data2},{quoted:citel})
          })
       
     }
  )
//---------------------------------------------------------------------------
cmd({
    pattern: "anime",
    category: "weeb",
    desc: "Searches Info about Anime and Provides result."
},
async(Void, citel, text) => {
    const client = new Anime();
    if (!text) return citel.reply("Which Anime do you want to search? Please give me a name.");
    let anime = await client.searchAnime(text(" "));
    let result = anime.data[0];
    //console.log(result);
    let details = `*🎀Title: ${result.title}*\n`;
    details += `*🎋Format: ${result.type}*\n`;
    details += `*📈Status: ${result.status
    .toUpperCase()
    .replace(/\_/g, " ")}*\n`;
    details += `*🍥Total episodes: ${result.episodes}*\n`;
    details += `*🎈Duration: ${result.duration}*\n`;
    details += `*🧧Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `*✨Based on: ${result.source.toUpperCase()}*\n`;
    details += `*📍Studio:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `*🎴Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
        details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `*💫Premiered on: ${result.aired.from}*\n`;
    details += `*🎗Ended on: ${result.aired.to}*\n`;
    details += `*🎐Popularity: ${result.popularity}*\n`;
    details += `*🎏Favorites: ${result.favorites}*\n`;
    details += `*🎇Rating: ${result.rating}*\n`;
    details += `*🏅Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
        details += `*♦Trailer: ${result.trailer.url}*\n\n`;
    details += `*🌐URL: ${result.url}*\n\n`;
    if (result.background !== null)
        details += `*🎆Background:* ${result.background}*\n\n`;
    details += `*❄Description:* ${result.synopsis}`;
    Void.sendMessage(
        citel.chat, {
            image: {
                url: result.images.jpg.large_image_url,
            },
            caption: details,
        }, {
            quoted: citel,
        }
    );

}
)
//---------------------------------------------------------------------------
cmd({
        pattern: "animenews",
        category: "weeb",
        desc: "Anime News"
    },
    async(Void, citel, text) => {
        let qq = [
            "Anime News Today",
            "New Anime",
            "Uocoming Anime News",
            "New Anime Info",
            "Whats news in Anime",
            "Anime Series",
            "Manga News today",
            "Anime New News",
            "Anime News today",
        ];
        let q1 = qq[Math.floor(Math.random() * qq.length)];
        //&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com
        let URL1 = `https://newsapi.org/v2/everything?q=${q1}&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8`;
        const response = await axios.get(URL1);
        let result = await response;
        result = result.data.articles;
        result.map(async(r, idx) => {
            Void.sendMessage(
                citel.chat, {
                    image: { url: r.urlToImage },
                    caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${tlang().title}*`,
                }, {
                    quoted: citel,
                }

            );
        });


    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "animepic",
        category: "weeb",
        desc: "Anime image"
    },
    async(Void, citel, text) => {
        var pictured = "Anime Pics HD ";
        gis(text(" ") + pictured, async(error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*-----「 Anime Image 」-----*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: `Anime Pics`,
                        thumbnail: log0,
                        mediaType: 2,
                        renderLargerThumbnail: true,
                        mediaUrl: gurl,
                        sourceUrl: ``,
                    },
                },
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        });

    }
)
//---------------------------------------------------------------------------
cmd({
    pattern: "neko",
    category: "weeb",
    desc: "Sends a Neko Image in chat"
},
async(Void, citel, text) => {
    nekodds = await axios.get("https://waifu.pics/api/sfw/neko");
    var wbuttsssrd = [{
            buttonId: `${prefix}neko`,
            buttonText: {
                displayText: `Neko`,
            },
            type: 1,
        },

        {
            buttonId: `${prefix}waifu`,
            buttonText: {
                displayText: `Waifu`,
            },
            type: 1,
        },
    ];
    let button4Messagesp = {
        image: {
            url: nekodds.data.url,
        },
        caption: "*Here we go😊!!!!*",
        buttons: wbuttsssrd,
        headerType: 1,
    };
    await Void.sendMessage(citel.chat, button4Messagesp, {
        quoted: citel,
    })
}
)
//---------------------------------------------------------------------------
cmd({
        pattern: "animewall",
        category: "weeb",
        desc: "Anime Wallpaper Random"
    },
    async(Void, citel, text) => {
        try {

            var ecchid = "anime wallpaper for desktop full hd";
            let gis = require("g-i-s");
            gis(ecchid, async(error, result) => {
                n = result;
                images = n[Math.floor(Math.random() * n.length)].url;
                let buttonMessage = {
                    image: {
                        url: images,
                    },
                    caption: `*--- Anime Wallpaper---*`,
                    footer: Void.user.name,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: tlang().title,
                            body: `Anime-Wallpaper`,
                            jpegThumbnail: log0,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: ``,
                        },
                    },
                };
                Void.sendMessage(citel.chat, buttonMessage, { viewOnce: true }, {
                    quoted: citel,
                });
            })
        } catch (e) {
            console.log(e)
        }
    }
)
//---------------------------------------------------------------------------
cmd({
    pattern: "foxgirl",
    category: "weeb",
    desc: "Sends image of Fox Girl in current chat."
},
async(Void, citel, text) => {
    waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
    let buttonssMessagesss = {
        image: {
            url: waifuddfg.data.url
        },
    };
    await Void.sendMessage(citel.chat, buttonssMessagesss, {
        quoted: citel,
    })
}
)
//---------------------------------------------------------------------------
cmd({
    pattern: "loli",
    category: "weeb",
    desc: "Sends image of loli in current chat."
},
async(Void, citel, text) => {
    waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
    var wbutss = [{
        buttonId: `${prefix}loli`,
        buttonText: {
            displayText: `Next Loli✨`,
        },
        type: 1,
    }, ];
    let buttonsMessage = {
        image: { url: waifud.data.url }
    };
    await Void.sendMessage(citel.chat, buttonsMessage, {
        quoted: citel,
    })
}
)
//---------------------------------------------------------------------------
cmd({
    pattern: "manga",
    category: "weeb",
    desc: "Sends info about asked manga."
},
async(Void, citel, text) => {
    const { Manga } = require("@shineiichijo/marika");
    const manga = new Manga();
    if (!text) return reply("Which manga do you want to search My Lord");
    let srh = await manga.searchManga(text);
    let mang = `*🎀Title: ${srh.data[0].title}*\n`;
    mang += `*📈Status: ${srh.data[0].status}*\n`;
    mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `*🧧Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
        mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `*✨Published on: ${srh.data[0].published.from}*\n`;
    mang += `*🌟Score: ${srh.data[0].scored}*\n`;
    mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`;
    mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`;
    mang += `*✍Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
        mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null) mang += `*🎆Background:* ${srh.data[0].background}`;
    mang += `*❄️Description:* ${srh.data[0].synopsis}`;
    Void.sendMessage(citel.chat, {
        image: {
            url: srh.data[0].images.jpg.large_image_url,
        },
        caption: mang,
    }, {
        quoted: citel,
    });

}
)
//---------------------------------------------------------------------------
cmd({
    pattern: "waifu",
    category: "weeb",
    desc: "Sends image of waifu in current chat."
},
async(Void, citel, text) => {
    const data = await fetchJson(`https://api.waifu.im/random/?selected_tags=waifu`)
			const buffer = await getBuffer(data.images[Math.floor(Math.random() * data.images.length)]?.url)
			Void.sendMessage(citel.chat, {
				image: buffer,
				caption: '*Here we go*',
				footer: tlang().footer,
			}, {
				quoted: citel
			})

   }
)
//---------------------------------------------------------------------------
cmd({
    pattern: "pokepic",
    category: "weeb",
    desc: "Sends image of pokemon in current chat."
},
async(Void, citel, text) => {
    const gis = require('g-i-s')
        var pictured = "Pokemon Pics only HD ";
        gis(text + pictured, async(error, result) => {
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*---「 Poke Pic 」---*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: text,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },
                },
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        });

}
)
//---------------------------------------------------------------------------
cmd({
    pattern: "pokemon",
    category: "weeb",
    desc: "Sends info of pokemon in current chat."
},
async(Void, citel, text) => {
    try {
        let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
        if (!data.name) return citel.reply(`❌ Could not found any pokemon with that name`)
        let poinfo = `*•Name: ${data.name}*\n*•Pokedex ID: ${data.id}*\n*•Height: ${data.height}*\n*•Weight: ${data.weight}*\n*•Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n*•Base Experience: ${data.base_experience}*\n*•Type: ${data.types[0].type.name}*\n*•Base Stat: ${data.stats[0].base_stat}*\n*•Attack: ${data.stats[1].base_stat}*\n*•Defense: ${data.stats[2].base_stat}*\n*•Special Attack: ${data.stats[3].base_stat}*\n*•Special Defense:${data.stats[4].base_stat}*\n*•Speed: ${data.stats[5].base_stat}*\n`
        Void.sendMessage(citel.chat, { image: { url: data.sprites.front_default }, caption: poinfo }, { quoted: citel })
    } catch (err) {
        citel.reply("Ahh,Couldn't found any pokemon.")
        console.log(err)
    }

}
)
