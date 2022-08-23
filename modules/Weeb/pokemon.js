(async () => {
	switch (command) {
	case 'poke': {
if (args[0]==='pic'){
  if (args[1] === "help") {
    await citel.reply(
      `*❗Command:*   Pokemon Pic Search\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
        prefix + command
      }\n\n*📚Description:* Send Image of asked Pokemon in Chat.`
    );
    return;
  }
  var pictured = "Pokemon Pics only HD ";
  let gis = require("g-i-s");
  gis(args[1] + pictured, async (error, result) => {
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
          title: LangG.title,
          body: querie,
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
if (args[0]==='search')
if (args[1] === "help") {
  await citel.reply(
    `*❗Command:*   Pokemon Search\n*🍀Aliases* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${
      prefix + command
    } name \n\n*📚Description:* Send info about asked Pokemon in Chat from Pokeapi.`
  );
  return;
}
if (!args[1]) return citel.reply(`❌Give me a Name ${lang.Title}`)
try {
let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${args[1]}`)
if (!data.name) return citel.reply(`❌ Could not found any pokemon with that name`)
let poinfo =`*•Name: ${data.name}*\n*•Pokedex ID: ${data.id}*\n*•Height: ${data.height}*\n*•Weight: ${data.weight}*\n*•Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n*•Base Experience: ${data.base_experience}*\n*•Type: ${data.types[0].type.name}*\n*•Base Stat: ${data.stats[0].base_stat}*\n*•Attack: ${data.stats[1].base_stat}*\n*•Defense: ${data.stats[2].base_stat}*\n*•Special Attack: ${data.stats[3].base_stat}*\n*•Special Defense:${data.stats[4].base_stat}*\n*•Speed: ${data.stats[5].base_stat}*\n`
Void.sendMessage(citel.chat, { image: { url: data.sprites.front_default }, caption: poinfo }, { quoted: citel })
} catch (err) {
citel.reply("Ahh,Couldn't found any pokemon.")
console.log(err)
}


}
break
	
	}
})()
