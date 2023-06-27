const { bot, wcg } = require('../lib/')
bot(
	{
		pattern: 'wcg ?(.*)',
		fromMe: true,
		desc: 'word chain game\nwcg start to force start game',
		type: 'game',
	},
	async (message, match) => {
		if (match == 'start') {
			return await wcg.start(message.jid)
		}
		wcg.start_game(message.jid, message.participant)
	}
)
