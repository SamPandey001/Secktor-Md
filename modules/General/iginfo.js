(async () => {
	switch (command) {
case "iginfo":
        if (querie === "help") {
          return citel.reply(
            `*❗Command:* ${command}\n*🧩Category:* Search Menu\n*🛠️Usage:* ${
              prefix + command
            } username of instagram\n\n*📚Description:* Shows complete instagram information `
          );
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
          Void.sendMessage(
            citel.chat,
            {
              image: {
                url: fids.data.profile_pic,
              },
              caption: reply,
            },
            {
              quoted: citel,
            }
          );
        } catch (err) {
          console.log(err);
          return citel.reply(`${LangG.greet} That is a wrong username.`);
        }
        break;
        }
        })()
