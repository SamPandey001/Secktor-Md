const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix

module.exports = {
    name: 'events',
    category: 'owner',
    desc: 'Buttons for turning events on and off in specific group.',
    async exec(citel, Void,args,isCreator) {
       
				let eventsbutton = [{
            buttonId: `${prefix}events on`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}events off`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `Events-Switch`,
					headerType: 4,
				        buttons: eventsbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
    }
    }

