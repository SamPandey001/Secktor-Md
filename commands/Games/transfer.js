const { sck, card } = require('../../lib')
const axios = require('axios')

module.exports = {
   name: 'transfercc',
   category: 'game',
   desc: 'Sends image of Fox Girl in current chat.',
   async exec(citel, Void,args) {
      if(!args[0]) return citel.reply('Please give me ID.')
    let cdata = await axios.get(`httpsb://db.ygoprodeck.com/api/v7/cardinfo.php?id=${args[0]}`)
    let data = cdata.data.data[0]
await card.findOneAndDelete({ id: args[0]})
citel.reply(`Successfully deducted ${data.name} from your collection`)

 await new card({
user: args[1],
id: data.id,
name: data.name,
desc: data.desc,
atk: data.atk,
def: data.def,
race: data.race,
image: data.card_images[0].image_url,
price: data.card_prices[0].amazon_price*1000,
      }).save()

citel.reply(`*Id: ${args[0]}\'s has been transfered from your collection and added in his.*`)
   }
}