const axios = require('axios')
const { fetchJson,getBuffer ,tlang } = require('../../lib')

module.exports = {
   name: 'waifu',
   category: 'weeb',
   desc: 'Sends image of waifu in current chat.',
   async exec(citel, Void,args) {
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
}
