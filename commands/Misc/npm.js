const axios = require('axios')
module.exports = {
  name: 'npm',
  alias: ['npms', 'npmjs', 'npmsearch'],
  category: 'search',
  use: '<package name>',
  async exec(citel, Void, args) {

    if (!args) return citel.reply('Please give me package name.📦')
    axios.get(`https://api.npms.io/v2/search?q=${args.join(' ')}`).then(({ data }) => {
      let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
      citel.reply(txt)
    }).catch(e => console.log(e))
  }
}
