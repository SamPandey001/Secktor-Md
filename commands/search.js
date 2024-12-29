/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 **/

 const moment = require("moment-timezone");
 const { fetchJson, cmd, tlang } = require("../lib");
 const axios = require("axios");
 const fetch = require("node-fetch");
 const gis = require("async-g-i-s");
 
 // IMDB search command
 cmd({
   pattern: "imdb",
   category: "search",
   desc: "Sends image of asked Movie/Series.",
   use: "<text>",
   filename: __filename
 }, async (Void, citel, text) => {
   if (!text) return citel.reply(`_Name a Series or movie ${tlang().greet}._`);
 
   const fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
   const data = fids.data;
   let imdbt = `
 ⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍
   \`\`\` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ \`\`\`
 ⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎
 🎬Title: ${data.Title}
 📅Year: ${data.Year}
 ⭐Rated: ${data.Rated}
 📆Released: ${data.Released}
 ⏳Runtime: ${data.Runtime}
 🌀Genre: ${data.Genre}
 👨🏻‍💻Director: ${data.Director}
 ✍Writer: ${data.Writer}
 👨Actors: ${data.Actors}
 📃Plot: ${data.Plot}
 🌐Language: ${data.Language}
 🌍Country: ${data.Country}
 🎖️Awards: ${data.Awards}
 📦BoxOffice: ${data.BoxOffice}
 🏙️Production: ${data.Production}
 🌟imdbRating: ${data.imdbRating}
 ❎imdbVotes: ${data.imdbVotes}`;
 
 return await Void.sendMessage(citel.chat, {
     image: { url: data.Poster },
     caption: imdbt
   }, { quoted: citel });
 });
 
 // Weather search command
 cmd({
   pattern: "weather",
   category: "search",
   desc: "Sends weather info about asked place.",
   use: "<location>",
   filename: __filename
 }, async (Void, citel, text) => {
   if (!text) return citel.reply("Give me location.Baka!!");
 
   const wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`);
   const data = wdata.data;
   const textw = `
 *🌟Weather of ${text}*\n
 *Weather:* ${data.weather[0].main}
 *Description:* ${data.weather[0].description}
 *Avg Temp:* ${data.main.temp}
 *Feels Like:* ${data.main.feels_like}
 *Pressure:* ${data.main.pressure}
 *Humidity:* ${data.main.humidity}
 *Wind Speed:* ${data.wind.speed}
 *Latitude:* ${data.coord.lat}
 *Longitude:* ${data.coord.lon}
 *Country:* ${data.sys.country}`;
 
 return Void.sendMessage(citel.chat, { text: textw }, { quoted: citel });
 });
 
 // Horoscope search command
 cmd({
   pattern: "horo",
   category: "search",
   desc: "Gives horoscope info of user.",
   use: "<sign>\nExample: horo libra",
   filename: __filename
 }, async (Void, citel, text) => {
   if (!text) return citel.reply("Provide me a sign!");
 
   try {
     const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
     const response = await fetch(URL, { method: "POST" });
     const json = await response.json();
     const date = json.current_date;
 
     const textw = `
 *🌟 Horoscope of ${text}*\n
 *Current Date:* ${date}
 *Sign:* ${text}
 *Lucky Time:* ${json.lucky_time}
 *Compatibility:* ${json.compatibility}
 *Lucky Number:* ${json.lucky_number}
 *Lucky Color:* ${json.color}
 *Today Mood:* ${json.mood}
 *Overall:* ${json.description}`;
 
 return citel.reply(textw);
   } catch (e) {
    return console.error(e);
   }
 });
 
 // Google search command
 cmd({
   pattern: "google",
   alias: ["search", "gsearch"],
   category: "search",
   desc: "Sends info of given query from Google Search.",
   use: "<text>",
   filename: __filename
 }, async (Void, citel, text) => {
   if (!text) return citel.reply("Give me a query.\nExample: .google Who is Suhail Tech.");
 
   const google = require("google-it");
   const res = await google({ query: text });
   let msg = `Google Search Results for: ${text}\n\n`;
 
   res.forEach(g => {
     msg += `➣ Title: ${g.title}\n➣ Description: ${g.snippet}\n➣ Link: ${g.link}\n\n────────────────────────\n\n`;
   });
 
   return citel.reply(msg);
 });
 
 // Image search command
 cmd({
   pattern: "image",
   category: "search",
   desc: "Searches Image on Google",
   use: "<text>",
   filename: __filename
 }, async (Void, citel, text) => {
   if (!text) return citel.reply("Provide me a query!");
 
   const [name1, name2 = '1'] = text.split("|");
   citel.reply(`Sending ${name2} image(s) of ${name1} in chat`);
 
   for (let i = 0; i < name2; i++) {
     const images = await gis(name1);
     const imageUrl = images[Math.floor(Math.random() * images.length)].url;
     const buttonMessage = {
       image: { url: imageUrl },
       caption: `_Sector Image Search_\n*${name1}*`,
       headerType: 4
     };
 
    Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
   }
 });
 
 // Couple pictures command
 cmd({
   pattern: "couplepp",
   category: "search",
   desc: "Sends two couples pics.",
   filename: __filename
 }, async (Void, citel) => {
   const anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
   const random = anu[Math.floor(Math.random() * anu.length)];
 
   Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: citel });
   return Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: citel });
 });
 
 // WhatsApp account search command
 cmd({
   pattern: "iswa",
   category: "search",
   desc: "Searches in given range about given number.",
   use: "9112345678xx",
   filename: __filename
 }, async (Void, citel, text) => {
   const inputnumber = text.split(" ")[0];
   if (!inputnumber.includes("x")) return citel.reply("You did not add x\nExample: iswa 9196285162xx");
 
   citel.reply("Searching for WhatsApp account in given range...");
 
   const countInstances = (string, word) => string.split(word).length - 1;
   const [number0, number1] = inputnumber.split("x");
   const randomLength = countInstances(inputnumber, "x");
 
   let randomxx;
   if (randomLength === 1) randomxx = 10;
   else if (randomLength === 2) randomxx = 100;
   else if (randomLength === 3) randomxx = 1000;
 
   let textOutput = `*--『 List of Whatsapp Numbers 』--*\n\n`;
   let noBio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
   let noWhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`;
 
   for (let i = 0; i < randomxx; i++) {
     const nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     const status1 = nu[Math.floor(Math.random() * nu.length)];
     const status2 = nu[Math.floor(Math.random() * nu.length)];
     const status3 = nu[Math.floor(Math.random() * nu.length)];
     const random = randomLength === 1 ? `${status1}` : randomLength === 2 ? `${status1}${status2}` : `${status1}${status2}${status3}`;
 
     const anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
     if (anu.length !== 0) {
       const anu1 = await Void.fetchStatus(anu[0].jid).catch(() => "401");
       if (anu1 === "401" || !anu1.status) {
         noBio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
       } else {
         textOutput += `🧐 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n ✨*Bio:* ${anu1.status}\n🍁*Last update:* ${moment(anu1.setAt).tz("Asia/Kolkata").format("HH:mm:ss DD/MM/YYYY")}\n\n`;
       }
     } else {
       noWhatsapp += `${number0}${i}${number1}\n`;
     }
   }
 
   return citel.reply(`${textOutput}${noBio}${noWhatsapp}`);
 });
 
