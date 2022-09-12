(async () => {
	switch (command) {
    case 'marry':
        {
          if(!q) return reply(`*Please use ${prefix}hg to get your desired haigusha.*`) &&  await SendNo()
       try{
        await SendYes()
          await new haigu({
           id: m.sender,
           haig: querie
         }).save()
         citel.reply(`You Married to ${querie}`)
   } catch {
    await SendYes()
    
  let idd = await haigu.findOne({id: m.sender})
  let gg = idd.haig
          console.log(gg)
                  const client = new Character();
                const chara = await client.character(gg).catch((err) => {
                  return citel.reply(`*${LangG.greet} Couldn't find any Haigusha for ${pushname}.*`)
                });
                let texty = "";
                texty += `*🏮Name:* ${chara.data.characters.results[0].name.full}*\n`;
                texty += `*🌐Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
                texty += `*📶URL:* ${chara.data.characters.results[0].siteUrl}*\n\n`;
       //         texty += `*📑Description:* ${chara.data.characters.results[0].description}\n`;
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
                    }\n*🔍MAL_ID:* ${char[0].mal_id}\n🔗 *URL:*  ${chara.data.characters.results[0].siteUrl}\n`;
     //       Void.sendMessage(citel.chat,{image:{},caption:},{quoted:citel})
            
let generatebuttotn = [{
					buttonId: `${prefix}divorce`,
					buttonText: {
						displayText: `Divorce`
					},
					type: 1
				}
				]
				let buttonMessaged = {
					image: { url: char[0].images.jpg.image_url },
					caption:`*-------------*\n\n*Hey ${pushname}*\n\n*You are already married to ${gg}*\n*-------------*\n`+data2,
					footer: ` Haigusha`,
					headerType: 4,
				        buttons: generatebuttotn,
					contextInfo: {
						externalAdReply: {
							title: 'Secktor Haigusha',
							body: `Double wife huh!?`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					},
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				})
   }
  
  }
    break

    case 'divorce':
      {
        await SendYes()
        let idd = await haigu.findOne({id: m.sender})
   try{
        await haigu.deleteOne({
        id: m.sender
      })
       citel.reply(`*You divorced to ${idd.haig}😉*`)
    } catch {
m.reply(`Hey ${pushname} you are not married to any haigusha`)

    }
  }
  break
  
      
	  case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        await SendYes()
        if (querie === "help") {
          await citel.reply(
`*❗Command:*  ${command}
*🍀Aliases* ${command}
*🧩Category:* Utils
*🛠️Usage:* ${prefix+command} reply to audio.
            
*📚Description:* Changes encoding of replied audio.`
          );
          return;
        }
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/squirrel/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
            citel.reply(LangG.wait);
            let media = await Void.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return reply(err);
              let buff = fs.readFileSync(ran);
              Void.sendMessage(
                citel.chat,
                {
                  audio: buff,
                  mimetype: "audio/mpeg",
                },
                {
                  quoted: citel,
                }
              );
              fs.unlinkSync(ran);
            });
          } else
            reply(
              `Reply to the audio you want to change with caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          console.log(e);
        }
         break
	}
})()
