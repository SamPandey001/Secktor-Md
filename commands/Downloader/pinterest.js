const { tlang, pinterest } = require('../../lib')
const { prefix } = require('../../config')
const Config = require('../../config')

module.exports = {
    name: 'pint',
    category: 'downloader',
    desc: 'Sends image from pinterest.',
    use: '<text>',
    async exec(citel, Void,args) {
        if (!args.join(" ")) return reply("What picture are you looking for?") && Void.sendMessage(citel.chat, {
            react: {
              text: '❌',
              key: citel.key
            }})
          try {
            anu = await pinterest(args.join(" "))
            result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                  {
                    buttonId: `${prefix}pint ${args.join(" ")}`,
                    buttonText: {
                      displayText: 'Next Image🎀'
                    },
                    type: 1
              }
  
            ]
                let buttonMessage = {
                  image: {
                    url: result
                  },
                  caption: ` `,
                  footer: tlang().footer,
                  buttons: buttons,
                  headerType: 4,
                  contextInfo: {
                    externalAdReply: {
                      title: `Here it is✨`,
                      body: `${Config.ownername}`,
                      thumbnail: log0,
                      mediaType: 2,
                      mediaUrl: ``,
                      sourceUrl: ``
                    }
                  }
                }
                Void.sendMessage(citel.chat, buttonMessage, {
                  quoted: citel
                })
          }
          catch (e) {
            console.log(e)
          }
}
}
