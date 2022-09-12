(async () => {
	switch (command) {
		case "pack": {
			if (!querie) return citel.reply("Please give me a pack Name");
			if (querie === "1") var gfd = "hot girl animation";
			if (querie === "2") var gfd = "telegram sticker dragon with fire";
			if (querie === "3") var gfd = "cat animation";
			if (querie === "4") var gfd = "little dragon with fire animation";
			if (querie === "5") var gfd = "turtle cute animation";
			if (querie === "6") var gfd = "slap anime animation";
			//console.log(gfd);
			let { data: samig } = await axios.get(`https://g.tenor.com/v1/search?q=${querie}&key=LIVDSRZULELA&limit=50`);
			let webg = samig.results?.[Math.floor(Math.random() * samig.results.length)]?.media[0]?.mp4?.url;
			await Void.sendImageAsSticker(citel.chat, webg, citel, {
				packname: global.packname,
				author: global.author,
			});
		}
		break;
		case 'h2':{
			await SendYes()
											  let generatebutton = [{
									   buttonId: `${prefix}qr`,
									   buttonText: {
										   displayText: 'Generate New'
									   },
									   type: 1
								   }
								   ]
	
	let str = `Hey ${pushname},\nThis is ${LangG.title} Bot.`
	str += `
	1.  	restart
	2.  	shutdown
	3.  	dlmod
	4.  	sessionfile
	5.   	lockfile
	6. 	    ulmod
	7. 	    chatbot
	8.   	allmod
	9. 	    emod
	10. 	theme
	11. 	setprefix
	12. 	chatbot
	13. 	mode
	14. 	approve
	15. 	disapprove
	16. 	bcgroup
	17. 	setsudo
	18. 	addnote
	19. 	delnote
	20. 	allnotes
	21. 	eval
	22. 	shell
	23. 	profile
	24. 	rank
	25. 	repo
	26. 	owner
	27. 	listgc
	28. 	support
	29. 	qr
	30. 	deck
	31. 	quotely
	32. 	listonline
	33. 	staus
	34. 	trt
	35. 	ping
	36. 	grouplink
	37. 	setgroupp
	38. 	del
	39. 	group
	40. 	editinfo
	41. 	add
	42. 	kick
	43. 	promote
	44. 	demote
	45. 	vote
	46. 	nsfw
	47. 	antilink
	48. 	events
	49. 	vote
	50. 	request
	51. 	report
	52. 	steal
	53. 	gimage
	54. 	google
	55. 	pint
	56. 	iplookup
	57. 	imdb
	58. 	magnet
	59. 	iginfo
	60. 	memes
	61. 	pick
	62. 	pack 
	63. 	ytmp3
	64. 	ytmp4
	65. 	mediafire
	66. 	mp3
	67. 	mp4
	68. 	jpeg
	69. 	video
	70. 	tts
	71. 	igdl
	72. 	igstory
	73. 	twitter
	74. 	anime pic
	75. 	anime char
	76. 	anime search
	77. 	anime news
	78. 	anime r
	79. 	poke pic
	80. 	poke search
	81. 	waifu
	82. 	foxgirl
	83. 	waifu2
	84. 	neko
	85. 	loli,
	86. 	bass
	87. 	tempo
	88. 	blown
	89. 	deep
	90. 	earrape
	91. 	fast
	92. 	fat
	93. 	nightcore
	94. 	reverse
	95. 	robot
	96. 	slow
	97. 	squirell
	98. 	candy
	99. 	christmas
	100. 	3dchristmas
	101. 	sparklechristmas
	102. 	deepsea
	103. 	scifi
	104. 	rainbow
	105. 	waterpipe
	106. 	spooky
	107. 	pencil
	108. 	circuit
	109. 	discovery
	110. 	metalic
	111. 	fiction
	112. 	demon
	113. 	transformer
	114. 	berry
	115. 	thunder
	116. 	magma
	117. 	3dstone
	118. 	neonlight
	119. 	glitch
	120. 	harrypotter
	121. 	brokenglass
	122. 	papercut
	123. 	watercolor
	124. 	multicolor
	125. 	neondevil
	126. 	underwater
	127. 	graffitibike
	128. 	snow
	129. 	cloud
	130. 	honey
	131. 	ice
	132. 	fruitjuice
	133. 	biscuit
	134. 	wood
	135. 	chocolate
	136. 	strawberry
	137. 	matrix
	138. 	blood
	139. 	dropwater
	140. 	toxic
	141. 	lava
	142. 	rock
	143. 	bloodglas
	144. 	hallowen
	145. 	darkgold
	146. 	joker
	147. 	wicker
	148. 	firework
	149. 	skeleton
	150. 	blackpink
	151. 	sand
	152. 	glue
	153. 	1917
	154. 	leaves
	155. 	s-cry
	156. 	s-kill
	157. 	s-hug
	158. 	s-pat
	159. 	s-lick
	160. 	s-kiss
	161. 	s-bite
	162. 	s-yeet
	163. 	s-bully
	164. 	s-bonk
	165. 	s-wink
	166. 	s-poke
	167. 	s-nom
	168. 	s-slap
	169. 	s-smile
	170. 	s-wave
	171. 	s-awoo
	172. 	s-blush
	173. 	s-smug
	174. 	s-glomp
	175. 	s-happy
	176. 	s-dance
	177. 	s-cringe
	178. 	s-cuddle
	179. 	s-highfive
	180. 	s-shinobu
	181. 	s-megumin
	182. 	s-handhold
	183. 	punch
	184. 	bully
	185. 	bonk
	186. 	pat
	187. 	lick
	188. 	bite
	189. 	happy
	190. 	kill
	191. 	kiss
	192. 	slap
	193. 	cuddle
	194. 	wink
	195. 	glomp
	196. 	highfive
	197. 	wave
	198. 	smug
	199. 	yeet
	200. 	cringe
	201. 	smile blush
	202. 	fact
	203. 	jid
	204. 	ssweb
	205. 	quote
	206. 	quotely
	207. 	ebinary
	208. 	dbinary
	209. 	gif
	210. 	emix
	211. 	retrive
	212. 	url
	213. 	horo,
	214. 	vixen
	215. 	rpussy
	216. 	ranal
	217. 	rboobs
	218. 	cossplay hentai
	219. 	fisting
	220. 	fingering pussy
	221. 	panties
	222. 	anal
	223. 	hentai
	224. 	milf
	225. 	tits
	226. 	school
	227. 	maid
	228. 	nurse
	229. 	tushy
	230. 	sis
	231. 	foot
	232. 	boobs
	233. 	solo
	234. 	ecchi
	`
	
								   let buttonMessaged = {
									   image: { url: picsecktor },
									   caption: str,
									   footer: ` Secktor Help`,
									   headerType: 4,
										   buttons: generatebutton,
									   contextInfo: {
										   externalAdReply: {
											   title: 'Secktor',
											   body: 'I am Alive',
											   thumbnail: log0,
											   mediaType: 2,
											   mediaUrl: ``,
											   sourceUrl: ``,
										   },
									   },
								   };
								   await Void.sendMessage(citel.chat, buttonMessaged, {
									   quoted: citel,
								   });
			}
			break
	}
})()
