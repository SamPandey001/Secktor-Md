const { proto, delay, getContentType   } = require('@sampandey001/baileys')
const fs = require('fs-extra')
const {unlink } = require ('fs').promises
const axios = require('axios')
const {
  writeExifImg,
  writeExifVid,
writeExifWebp,
  imageToWebp,
  videoToWebp,
} = require("../lib/exif");
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const Config = require('../config')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')
const child_process = require('child_process')
const ffmpeg = require('fluent-ffmpeg')

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)
const sleep =  (ms) =>{
    return new Promise((resolve) =>{ setTimeout (resolve, ms)})

    } 
exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
} 
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " d, " : " d, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = function(seconds) {
    let h = isNaN(seconds) ? '--' : Math.floor(seconds % (3600 * 24) / 3600)
    let m = isNaN(seconds) ? '--' : Math.floor(seconds % 3600 / 60)
    let s = isNaN(seconds) ? '--' : Math.floor(seconds % 60)
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}



exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await jimp_1.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

exports.bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error gatau apah')
        }
    })
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.GIFBufferToVideoBuffer = async (image) => {

        const filename = `${Math.random().toString(36)}`
                await fs.writeFileSync(`./${filename}.gif`, image)
                         child_process.exec(
                                    `ffmpeg -i ./${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./${filename}.mp4`
                                            ) 
      await sleep(8000)

        var buffer5  =  await  fs.readFileSync(`./${filename}.mp4`)
        Promise.all([unlink(`./${filename}.mp4`), unlink(`./${filename}.gif`)])
        return buffer5
                       }
/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {store} store 
 */
exports.smsg = (conn, citel, store) => {
    if (!citel) return citel
    let M = proto.WebMessageInfo
    if (citel.key) {
        citel.id = citel.key.id
        citel.isBot = citel.id.startsWith('BAES') && citel.id.length === 16
	citel.isBaileys = citel.id.startsWith('BAE5') && citel.id.length === 16
        citel.chat = citel.key.remoteJid
        citel.fromMe = citel.key.fromMe
        citel.isGroup = citel.chat.endsWith('@g.us')
        citel.sender = conn.decodeJid(citel.fromMe && conn.user.id || citel.participant || citel.key.participant || citel.chat || '')
        if (citel.isGroup) citel.participant = conn.decodeJid(citel.key.participant) || ''
    }
    if (citel.message) {
        citel.mtype = getContentType(citel.message)
        citel.msg = (citel.mtype == 'viewOnceMessage' ? citel.message[citel.mtype].message[getContentType(citel.message[citel.mtype].message)] : citel.message[citel.mtype])
        try{
	citel.body = (citel.mtype === 'conversation') ? citel.message.conversation : (citel.mtype == 'imageMessage') && citel.message.imageMessage.caption!=undefined ? citel.message.imageMessage.caption : (citel.mtype == 'videoMessage') && citel.message.videoMessage.caption!=undefined ? citel.message.videoMessage.caption : (citel.mtype == 'extendedTextMessage') && citel.message.extendedTextMessage.text!=undefined ? citel.message.extendedTextMessage.text : (citel.mtype == 'buttonsResponseMessage') ? citel.message.buttonsResponseMessage.selectedButtonId : (citel.mtype == 'listResponseMessage') ? citel.message.listResponseMessage.singleSelectReply.selectedRowId : (citel.mtype == 'templateButtonReplyMessage') ? citel.message.templateButtonReplyMessage.selectedId : (citel.mtype === 'messageContextInfo') ? (citel.message.buttonsResponseMessage?.selectedButtonId || citel.message.listResponseMessage?.singleSelectReply.selectedRowId || citel.text) : '';
	} catch {
	citel.body = false	
	}
  let quoted = (citel.quoted = citel.msg.contextInfo
    ? citel.msg.contextInfo.quotedMessage
    : null);
        citel.mentionedJid = citel.msg.contextInfo ? citel.msg.contextInfo.mentionedJid : []
       
	    if (citel.quoted) {
            let type = getContentType(quoted)
			citel.quoted = citel.quoted[type]
            if (['productMessage'].includes(type)) {
				type = getContentType(citel.quoted)
				citel.quoted = citel.quoted[type]
			}
            if (typeof citel.quoted === 'string') citel.quoted = { text: citel.quoted	}
		
		
          if(quoted.viewOnceMessageV2)
          { 
            console.log("entered ==================================== ")
            //console.log ("citel Is : ",citel,"\ncitel Quoted is :",citel.quoted ,"\n Quoted is : ",quoted,"\nviewOnce :  ", quoted.viewOnceMessageV2.message)
           
          } else 
          {
		    
		    
            citel.quoted.mtype = type
            citel.quoted.id = citel.msg.contextInfo.stanzaId
			citel.quoted.chat = citel.msg.contextInfo.remoteJid || citel.chat
            citel.quoted.isBot = citel.quoted.id ? citel.quoted.id.startsWith('BAES') && citel.quoted.id.length === 16 : false
	    citel.quoted.isBaileys = citel.quoted.id ? citel.quoted.id.startsWith('BAE5') && citel.quoted.id.length === 16 : false
			citel.quoted.sender = conn.decodeJid(citel.msg.contextInfo.participant)
			citel.quoted.fromMe = citel.quoted.sender === (conn.user && conn.user.id)
            citel.quoted.text = citel.quoted.text || citel.quoted.caption || citel.quoted.conversation || citel.quoted.contentText || citel.quoted.selectedDisplayText || citel.quoted.title || ''
			citel.quoted.mentionedJid = citel.msg.contextInfo ? citel.msg.contextInfo.mentionedJid : []
            citel.getQuotedObj = citel.getQuotedMessage = async () => {
			if (!citel.quoted.id) return false
			let q = await store.loadMessage(citel.chat, citel.quoted.id, conn)
 			return exports.smsg(conn, q, store)
            }
            let vM = citel.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: citel.quoted.chat,
                    fromMe: citel.quoted.fromMe,
                    id: citel.quoted.id
                },
                message: quoted,
                ...(citel.isGroup ? { participant: citel.quoted.sender } : {})
            })
            /**
             * 
             * @returns 
             */
             let { chat, fromMe, id } = citel.quoted;
			const key = {
				remoteJid: citel.chat,
				fromMe: false,
				id: citel.quoted.id,
				participant: citel.quoted.sender
			}
            citel.quoted.delete = async() => await conn.sendMessage(citel.chat, { delete: key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            citel.forwardMessage = (jid, forceForward = true, options = {}) => conn.copyNForward(jid, vM, forceForward,{contextInfo: {isForwarded: false}}, options)

            /**
              *
              * @returns
            */
            citel.quoted.download = () => conn.downloadMediaMessage(citel.quoted)
	  }
        }
    }
    if (citel.msg.url) citel.download = () => conn.downloadMediaMessage(citel.msg)
    citel.text = citel.msg.text || citel.msg.caption || citel.message.conversation || citel.msg.contentText || citel.msg.selectedDisplayText || citel.msg.title || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/

       /**
	* Copy this message
	*/
	citel.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	citel.copyNForward = (jid = citel.chat, forceForward = false, options = {}) => conn.copyNForward(jid, citel, forceForward, options)
	citel.sticker = (stik, id = citel.chat, option = { mentions: [citel.sender] }) => conn.sendMessage(id, { sticker: stik, contextInfo: { mentionedJid: option.mentions } }, { quoted: citel })
	citel.replyimg = (img, teks, id = citel.chat, option = { mentions: [citel.sender] }) => conn.sendMessage(id, { image: img, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: citel })
        citel.imgurl = (img, teks, id = citel.chat, option = { mentions: [citel.sender] }) => conn.sendMessage(id, { image: {url: img }, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: citel })
	citel.reply = async (content,opt = { packname: "Secktor", author: "SamPandey001" }, type = "text")  => {
      switch (type.toLowerCase()) {
        case "text":{
          return await conn.sendMessage( citel.chat, {  text: content }, { quoted:citel });
                     }
        break;
      case "image": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage(citel.chat, { image: content, ...opt },  { ...opt } );
          } else if (isUrl(content)) {
            return conn.sendMessage( citel.chat, { image: { url: content }, ...opt },{ ...opt }  );
          }
        }
        break;
      case "video": {
        if (Buffer.isBuffer(content)) {
          return await conn.sendMessage(citel.chat,  { video: content, ...opt },  { ...opt }   );
        } else if (isUrl(content)) {
          return await conn.sendMessage( citel.chat,  { video: { url: content }, ...opt },  { ...opt }  );
        }
      }
      case "audio": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage( citel.chat, { audio: content, ...opt }, { ...opt } );
          } else if (isUrl(content)) {
            return await conn.sendMessage( citel.chat, { audio: { url: content }, ...opt }, { ...opt });
          }
        }
        break;
      case "template":
        let optional = await generateWAMessage(citel.chat, content, opt);
        let message = { viewOnceMessage: { message: { ...optional.message,},   },};
        await conn.relayMessage(citel.chat, message, { messageId: optional.key.id,});
        break;
      case "sticker":{
	  let { data, mime } = await conn.getFile(content);
          if (mime == "image/webp") {
          let buff = await writeExifWebp(data, opt);
            await conn.sendMessage(citel.chat, { sticker: { url: buff }, ...opt }, opt );
          } else {
            mime = await mime.split("/")[0];
            if (mime === "video") {
              await conn.sendImageAsSticker(citel.chat, content, opt);
            } else if (mime === "image") {
              await conn.sendImageAsSticker(citel.chat, content, opt);
            }
          }
        }
        break;
    }
  }
	citel.senddoc = (doc,type, id = citel.chat, option = { mentions: [citel.sender], filename: Config.ownername, mimetype: type,
	externalAdRepl: {
							title: Config.ownername,
							body: ' ',
							thumbnailUrl: ``,
							thumbnail: log0,
							mediaType: 1,
							mediaUrl: '',
							sourceUrl: gurl,
						} }) => conn.sendMessage(id, { document: doc, mimetype: option.mimetype, fileName: option.filename, contextInfo: {
	  externalAdReply: option.externalAdRepl,
	  mentionedJid: option.mentions } }, { quoted: citel })
	
  	citel.sendcontact = (name, info, number) => {
		var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:' + info + ';\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'
		conn.sendMessage(citel.chat, { contacts: { displayName: name, contacts: [{ vcard }] } }, { quoted: citel })
	}
	citel.react = (emoji) => conn.sendMessage(citel.chat, { react: { text: emoji, key: citel.key } })

    return citel
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
