const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix

module.exports = {
    name: 'nsfw',
    category: 'owner',
    desc: 'Buttons for turning nsfw on and off in specific group.',
    async exec(citel, Void,args,isCreator) {
       
				let nsfwbutton = [{
            buttonId: `${prefix}nsfw on`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}nsfw off`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `Nsfw-Switch`,
					headerType: 4,
				        buttons: nsfwbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
    }
    }

