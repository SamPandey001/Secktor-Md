const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix

module.exports = {
    name: 'bot',
    category: 'owner',
    desc: 'Buttons for turning bot on and off in specific group.',
    async exec(citel, Void,args,isCreator) {
       
				let botbutton = [{
            buttonId: `${prefix}bot on`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}bot off`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `bot-Switch`,
					headerType: 4,
				        buttons: botbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
    }
    }

