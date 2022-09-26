const { tlang } = require('../../lib/scraper')
const Config = require('../../config')
const prefix = Config.prefix

module.exports = {
    name: 'antilink',
    category: 'owner',
    desc: 'Buttons for turning antilink on and off.',
    async exec(citel, Void,args,isCreator) {
       
				let antilinkbutton = [{
            buttonId: `${prefix}antilink on`,
            buttonText: {
              displayText: 'Turn On'
            },
            type: 1
      },
          {
            buttonId: `${prefix}antilink off`,
            buttonText: {
              displayText: 'Turn off'
            },
            type: 1
      }
      ]

				let buttonMessaged = {
					text: `*_Choose from the button below._*`,
					footer: `Antilink-Switch`,
					headerType: 4,
				        buttons: antilinkbutton,
				};
				await Void.sendMessage(citel.chat, buttonMessaged, {
					quoted: citel,
				});
    }
    }
