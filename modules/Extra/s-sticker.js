(async () => {
	switch (command) {
	case 's-cry':case 's-kill':case 's-hug':case 's-pat':case 's-lick':case 's-kiss':case 's-bite':case 's-yeet':case 's-bully':case 's-bonk':case 's-wink':case 's-poke':case 's-nom':case 's-slap':case 's-smile':case 's-wave':case 's-awoo':case 's-blush':case 's-smug':case 's-glomp':case 's-happy':case 's-dance':case 's-cringe':case 's-cuddle':case 's-highfive':case 's-shinobu':case 's-megumin':case 's-handhold':
	  let sticpic = command.slice(2)
    console.log(sticpic);
axios.get(`https://api.waifu.pics/sfw/${sticpic}`)
					.then(({data}) => {
						Void.sendImageAsSticker(citel.chat, data.url, citel, { packname: global.packname, author: global.author })
					})
					break
	
	}
})()
