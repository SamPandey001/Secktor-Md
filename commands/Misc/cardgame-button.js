const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix

module.exports = {
    name: 'cardgame',
    category: 'owner',
    desc: 'Buttons for turning cardgame on and off in specific group.',
    async exec(citel, Void,args,isCreator) {
       
				let cardgamebutton = [{
            buttonId: `${prefix}cardgame on`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}cardgame off`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `Cardgame-Switch`,
					headerType: 4,
				        buttons: cardgamebutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
    }
    }

