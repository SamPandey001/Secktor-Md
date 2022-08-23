(async () => {
	switch (command) {
case 'bully': case 'bonk':
case 'pat': case 'lick':  case 'bite':
case 'happy': case 'kill': case 'kiss':
case 'slap': case 'cuddle':
{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let reactionuser = citel.sender
let taggeduser=``
try {
users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[reactionuser,users]
} catch {
	users == "none"
	 ment=[reactionuser,citel.sender]
}
if(!citel.quoted){
     taggeduser =`@${citel.sender.split("@")[0]} *_${command}ed everyone over here._*!!`
 console.log(taggeduser)

} else {
const rcpp =`@${users.split("@"[0])}`
 taggeduser= `@${citel.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(taggeduser)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Void.sendMessage(citel.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:taggeduser},{quoted:citel})
    } catch (error) {
        console.log(error);
    }
}
break

//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case 'wink': case 'glomp':case 'highfive':
case 'wave': case 'smug': case 'yeet':
case 'cringe': case 'smile': case 'blush':
{

	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let reactionuser = citel.sender
let taggeduser=``
try {
users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[reactionuser,users]
} catch {
	users == "none"
	 ment=[reactionuser,citel.sender]
}
if(!citel.quoted){
     taggeduser =`@${citel.sender.split("@")[0]} *_${command}ed at everyone!_*`
    // console.log(taggeduser)

} else {
const rcpp =`@${users.split("@"[0])}`
 taggeduser= `@${citel.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

//console.log(taggeduser)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
	await	Void.sendMessage(citel.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:taggeduser},{quoted:citel})
    } catch (error) {
        console.log(error);
    }
}
break
//╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
case "punch":
  {
    var pat = await fetchJson(`https://api.waifu.pics/sfw/kick`);
    try {
      let usep = citel.sender;
      let recp = ``;
      try {
        users = citel.mentionedJid[0]
          ? citel.mentionedJid[0]
          : citel.quoted
          ? citel.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

        ment = [usep, users];
      } catch {
        users = "none";
        ment = [usep, citel.sender];
      }
      if (!citel.quoted) {
        recp = `@${citel.sender.split("@")[0]} *_punched everyone over here._*`;
        ////console.log(recp)
      } else {
        const rcpp = `@${users.split("@"[0])}`;
        recp = `@${citel.sender.split("@")[0]} punched to @${
          users.split("@")[0]
        } `;

        ////console.log(recp)
      }
      const response = await axios.get(pat.url, {
        responseType: "arraybuffer",
      });
      const buffer = Buffer.from(response.data, "utf-8");
      var sgif = await GIFBufferToVideoBuffer(buffer);
      Void.sendMessage(
        citel.chat,
        { video: sgif, gifPlayback: true, mentions: ment, caption: recp },
        { quoted: citel }
      );
    } catch (error) {
      //console.log(error);
    }
  }
   break;
   		}
})()
