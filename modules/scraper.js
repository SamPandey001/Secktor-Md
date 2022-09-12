(async () => {
	switch (command) {
case "meme":
			if (querie === "help") {
				await citel.reply(`*❗Command:*  Meme\n*🍀Aliases* -meme\n*🧩Category:* Fun*🛠️Usage:* ${
              prefix + command
            }\n\n*📚Description:* Sends meme Pic`);
				return;
			}
			waifudd = await axios.get("https://meme-api.herokuapp.com/gimme");
			let button2Messages = {
				image: {
					url: waifudd.data.url,
				},
				caption: waifudd.data.title,
				headerType: 1,
			};
			await Void.sendMessage(citel.chat, button2Messages, {
					quoted: citel,
				})
				.catch((err) => {
					return "Umm,Could not found";
				})
			return
			break;
                    case "gimage":
                    case "img": {
                        if (querie === "help") {
                            await citel.reply(`*❗Command:*   Google Image\n*🍀Aliases* -gimage,-img\n*🧩Category:* Search\n*🛠️Usage:* ${
                            prefix + command
                          } query\n\n*📚Description:* Searches given query on Google Images and sends one randomly.`);
                            return;
                        }
                        if (!args[0]) return reply("Hey bie please tell me for which pic you're looking");
                        let name1 = querie.split("|")[0]
                        let name2 = querie.split("|")[1] || `1`
                        citel.reply(`Sending ${name2} image(s) of ${name1} in chat`)
                        let nn = name2
                        for (let i = 0; i < nn; i++) {
                            let gis = require("g-i-s");
                            gis(name1, async (error, result) => {
                                n = result;
                                images = n[Math.floor(Math.random() * n.length)].url;
                                /*let buttons = [
                                  {
                                    buttonId: `-gimage ${args.join(" ")}`,
                                    buttonText: {
                                      displayText: "🪄Next Image ",
                                    },
                                    type: 1,
                                  },
                                ];
                                */
                                let buttonMessage = {
                                    image: {
                                        url: images,
                                    },
                                    caption: ` `,
                                    headerType: 4,
                                };
                                Void.sendMessage(citel.chat, buttonMessage, {
                                    quoted: citel,
                                });
                            })
                        };
                    }
                    break;
                    case "weather":
                        {
                          if (!querie) return citel.reply("Give me location.Baka!!");
                          let wdata = await axios.get(
                            `https://api.openweathermap.org/data/2.5/weather?q=${querie}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
                          );
                          let textw = "";
                          textw += `*🌟Weather of  ${querie}*\n\n`;
                          textw += `*Location:-* ${querie}\n`;
                          textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
                          textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
                          textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
                          textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
                          textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
                          textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
                          textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
                          textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
                          textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
                          textw += `*Country:-* ${wdata.data.sys.country}\n`;
                
                          Void.sendMessage(
                            citel.chat,
                            {
                              text: textw,
                            },
                            {
                              quoted: citel,
                            }
                          );
                        }
                        break;
                    case "imdb":
                        if (querie === "help") {
                            await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -imdb\n*🧩Category:* Search\n*🛠️Usage:* ${
                          prefix + command
                        } movie/searies name \n\n*📚Description:* Gives Info about asked Movie/Series.`);
                            return;
                        }
                        try {
                            if (!querie) return citel.reply(`_Name a Series or movie ${LangG.greet}._`);
                            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${querie}&plot=full`);
                            //		let yts = require("yt-search")
                            //		let search = await yts(querie)
                            //		let anu = search.videos[0]
                            let imdbt = "";
                            imdbt += "⚍⚍\n" + " ``` *𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ*```\n" + "⚎⚎\n";
                            imdbt += "🎬Title      : " + fids.data.Title + "\n\n";
                            imdbt += "📅Year       : " + fids.data.Year + "\n\n";
                            imdbt += "⭐Rated      : " + fids.data.Rated + "\n\n";
                            imdbt += "📆Released   : " + fids.data.Released + "\n\n";
                            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n\n";
                            imdbt += "🌀Genre      : " + fids.data.Genre + "\n\n";
                            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n\n";
                            imdbt += "✍Writer     : " + fids.data.Writer + "\n\n";
                            imdbt += "👨Actors     : " + fids.data.Actors + "\n\n";
                            imdbt += "📃Plot       : " + fids.data.Plot + "\n\n";
                            imdbt += "🌐Language   : " + fids.data.Language + "\n\n";
                            imdbt += "🌍Country    : " + fids.data.Country + "\n\n";
                            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n\n";
                            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n\n";
                            imdbt += "🏙️Production : " + fids.data.Production + "\n\n";
                            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n\n";
                            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";
                            /*
            ║    *Powered by ${LangG.title}*
            ╚════════════╝`
            */
                            Void.sendMessage(citel.chat, {
                                image: {
                                    url: fids.Poster,
                                },
                                caption: imdbt,
                                templateButtons: [
                                    { urlButton: { displayText: "Trailer", url: `test` } },
                                    {
                                        quickReplyButton: {
                                            displayText: "Get Magnet",
                                            id: `${prefix}magnet ${querie}`,
                                        },
                            },
                          ],
                            }, {
                                quoted: citel,
                            });
                        }
                        catch (err) {
                            console.log(err)
                            return citel.reply(`Could not find any matching.`);
                        }
                        break
                    case "iginfo":
                        if (querie === "help") {
                            return citel.reply(`*❗Command:* ${command}\n*🧩Category:* Search Menu\n*🛠️Usage:* ${
                          prefix + command
                        } username of instagram\n\n*📚Description:* Shows complete instagram information `);
                        }
                        try {
                            if (!querie) return citel.reply(`Give me username ${LangG.greet}.`);
                            fids = await axios.get(`https://api.popcat.xyz/instagram?user=${querie}`);
                            const reply = `
            ╔════◇
            ║*🏮Name:* ${fids.data.full_name}
            ║*🎋Username:* ${fids.data.username}
            ║*👥Followers:* ${fids.data.followers}
            ║*✨Type:* ${fids.data.private}
            ║*✔Verified:* ${fids.data.verified}
            ║*📲Following:* ${fids.data.following}
            ║*📪Posts:* ${fids.data.posts}
            ║*🚀Bio:* ${fids.data.biography}
            ║   *Powered by ${LangG.title}
            ╚════════════╝ `;
                            Void.sendMessage(citel.chat, {
                                image: {
                                    url: fids.data.profile_pic,
                                },
                                caption: reply,
                            }, {
                                quoted: citel,
                            });
                        }
                        catch (err) {
                            console.log(err);
                            return citel.reply(`${LangG.greet} That is a wrong username.`);
                        }
                        break;
                    case "iplookup":
                        if (querie === "help") {
                            await citel.reply(`*❗Command:* ${command}\n*🍀Aliases* -iplookuo\n*🧩Category:* Utils\n*🛠️Usage:* ${
                          prefix + command
                        } ip-address\n\n*📚Description:* Runs Whois on Given IP-Address`);
                            return;
                        }
                        try {
                            if (!querie) return citel.reply(`_Give me an IP ${LangG.greet}._`);
                            fids = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/ip-lookup?ip=${querie}`);
                            const reply = `
            ╔════◇
            ║ *🏮IP:* ${fids.result.ip}
            ║ *🎋Continent:* ${fids.result.continent}
            ║ *👥ORG:* ${fids.result.org}
            ║ *👥Mobile:* ${fids.result.mobile}
            ║ *✨CountryCode:* ${fids.result.countryCode}
            ║ *✔City:* ${fids.result.city}
            ║ *📲Timezone:* ${fids.result.timezone}
            ║ *📪Latitude:* ${fids.result.latitude}
            ║ *📪Latitude:* ${fids.result.longitude}
            ║ *🚀ISP:* ${fids.result.isp}
            ║   *Powered by ${LangG.title}*
            ╚════════════╝`;
                            Void.sendMessage(citel.chat, {
                                image: {
                                    url: picsecktor,
                                },
                                caption: reply,
                            }, {
                                quoted: citel,
                            });
                        }
                        catch (err) {
                            console.log(err)
                            return citel.reply(`${LangG.greet} That is a wrong IP.`);
                        }
                        break;

                        case "mp4": {
                            if (querie === "help") {
                                await citel.reply(`*❗Command:*   MP4\n*🍀Aliases* ${
                                prefix + command
                              }\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                                prefix + command
                              } video link\n\n*📚Description:* Downloads video from given link and Sends that in chat.`);
                                return;
                            }
                            if (!args[0]) return reply(`Where's the link ?`);
                            try {
                                Void.sendMessage(from, {
                                    video: {
                                        url: args[0],
                                    },
                                    caption: "*HERE WE GO*",
                                    contextInfo: {
                                        externalAdReply: {
                                            title: LangG.BotName,
                                            body: `${global.ownername}`,
                                            thumbnail: log0,
                                            mediaType: 2,
                                            mediaUrl: ``,
                                            sourceUrl: ``,
                                        },
                                    },
                                }, {
                                    quoted: citel,
                                });
                            }
                            catch {
                                citel.reply("Link error!");
                            }
                            return
                        }
                        break;
                        case "tr":
		case "trt": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*  Translator \n*🍀Aliases* -tr,-trt\n*🧩Category:* Utils\n*🛠️Usage:* ${
                prefix + command
              } lang + reply to any message \n\n*📚Description:* Translates replied message into desired language\n\nEg- -tr en hi (it will translate from hindi to english) `);
				return;
			}
			const translatte = require("translatte");
			if (!citel.quoted) return citel.reply("*Please reply to any message.*");
			if (!citel.quoted) return citel.reply(`Please mention or give text ${LangG.greet}.`);
			let textt = citel.quoted.text;
			whole = await translatte(textt, {
				from: args[1] || "auto",
				to: args[0] || "hi",
			});
			if ("text" in whole) {
				return await citel.reply("*Translated Into🔎:* " + " ```" + (args[0] || "Auto to Hindi") + "```\n" + " *From Language🔎:* " + " ```" + (args[1] || "Auto Detect") + "```\n" + "*Result♦️:* " + " ```" + whole.text + "```");
			}
		}
		break;
                            case 'tgs': case 'tele':
                let ufhff = await axios.get(`https://zanslord-api.herokuapp.com/api/dowloader/telesticker?url=${q}`)
                let ufgff = JSON.stringify(ufhff)
                console.log(ufgff)
                console.log(huh.data)

                for (let i = 0; i < huh.data.result.length; i++) {
                var spbuff = await getBuffer(huh[i].url)
                var spgif = await GIFBufferToVideoBuffer(spbuff)
                
                await Void.sendMessage(citel.chat,{video: spgif, gifPlayback:true},{ quoted:citel }).catch(err => {
                                    return citel.reply('No sticker found...')
                                                    })
                }
                break
                

        }
    })()