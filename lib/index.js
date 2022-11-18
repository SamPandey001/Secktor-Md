const Config = require('../config')
const {
    pinterest,
    iginfo,
    adultvid,
    hentai,
    delallnote,
    marry,
    checkmarried,
    divorce,
    addnote,
    claim,
    install,
    allnotes,
    remove,
    plugins,
    tlang,
    collection,
    checkcard,
    botpic,
    language,
    getString,
    wallpaper,
    delnote,
    wikimedia,
    aiovideodl,
    toAudio,
    toPTT,
    toVideo,
    sync,
    syncgit,
    updatedb,
    ffmpeg,
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    fancy,
    randomfancy,
    Insta
} = require('./scraper')

const acrcloud = require(__dirname + '/class/init')
const {
    unixTimestampSecond,
    generateMessageTag,
    processTime,
    getBuffer,
    fetchJson,
    runtime,
    clockString,
    sleep,
    isUrl,
    getTime,
    formatDate,
    formatp,
    jsonformat,
    logic,
    generateProfilePicture,
    bytesToSize,
    getSizeMedia,
    parseMention,
    GIFBufferToVideoBuffer,
    smsg
} = require('./myfuncn')
const {
    listall,
    strikeThrough,
    wingdings,
    vaporwave,
    typewriter,
    analucia,
    tildeStrikeThrough,
    underline,
    doubleUnderline,
    slashThrough,
    sparrow,
    heartsBetween,
    arrowBelow,
    crossAboveBelow,
    creepify,
    bubbles,
    mirror,
    squares,
    roundsquares,
    flip,
    tiny,
    createMap,
    serif_I,
    manga,
    ladybug,
    runes,
    serif_B,
    serif_BI,
    fancy1,
    fancy2,
    fancy3,
    fancy4,
    fancy5,
    fancy6,
    fancy7,
    fancy8,
    fancy9,
    fancy10,
    fancy11,
    fancy12,
    fancy13,
    fancy14,
    fancy15,
    fancy16,
    fancy17,
    fancy18,
    fancy19,
    fancy20,
    fancy21,
    fancy22,
    fancy23,
    fancy24,
    fancy25,
    fancy26,
    fancy27,
    fancy28,
    fancy29,
    fancy30,
    fancy31,
    fancy32,
    fancy33,
    randomStyle
} = require('./stylish-font')
const { sck1 } = require(__dirname + '/database/user')
const { sck } = require(__dirname + '/database/group')
const { RandomXP } = require(__dirname + '/database/xp')
const { plugindb } = require(__dirname + '/database/plugins')
const { warndb } = require(__dirname + '/database/warn')
const { notes } = require(__dirname + '/database/notes')
const { haigu } = require(__dirname + '/database/cards')
const { card } = require(__dirname + '/database/cards')
const { cmd, commands } = require(__dirname + '/commands')
const { chatbot } = require(__dirname+'/database/chatbot')
module.exports = {
    sck,
    cmd,
    commands,
    chatbot,
    sck1,
    RandomXP,
    plugindb,
    warndb,
    notes,
    haigu,
    card,
    unixTimestampSecond,
    generateMessageTag,
    processTime,
    getBuffer,
    fetchJson,
    runtime,
    clockString,
    sleep,
    isUrl,
    getTime,
    formatDate,
    formatp,
    jsonformat,
    logic,
    generateProfilePicture,
    bytesToSize,
    getSizeMedia,
    parseMention,
    GIFBufferToVideoBuffer,
    smsg,
    pinterest,
    iginfo,
    adultvid,
    hentai,
    delallnote,
    marry,
    checkmarried,
    divorce,
    addnote,
    claim,
    install,
    allnotes,
    remove,
    plugins,
    tlang,
    collection,
    checkcard,
    botpic,
    language,
    getString,
    wallpaper,
    delnote,
    wikimedia,
    aiovideodl,
    toAudio,
    toPTT,
    toVideo,
    sync,
    syncgit,
    updatedb,
    ffmpeg,
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    fancy,
    randomfancy,
    listall,
    strikeThrough,
    wingdings,
    vaporwave,
    typewriter,
    analucia,
    tildeStrikeThrough,
    underline,
    doubleUnderline,
    slashThrough,
    sparrow,
    heartsBetween,
    arrowBelow,
    crossAboveBelow,
    creepify,
    bubbles,
    mirror,
    squares,
    roundsquares,
    flip,
    tiny,
    createMap,
    serif_I,
    manga,
    ladybug,
    runes,
    serif_B,
    serif_BI,
    serif_I,
    fancy1,
    fancy2,
    fancy3,
    fancy4,
    fancy5,
    fancy6,
    fancy7,
    fancy8,
    fancy9,
    fancy10,
    fancy11,
    fancy12,
    fancy13,
    fancy14,
    fancy15,
    fancy16,
    fancy17,
    fancy18,
    fancy19,
    fancy20,
    fancy21,
    fancy22,
    fancy23,
    fancy24,
    fancy25,
    fancy26,
    fancy27,
    fancy28,
    fancy29,
    fancy30,
    fancy31,
    fancy32,
    fancy33,
    randomStyle,
    Insta,
    addCommand: cmd,
    groupdb: sck,
    userdb: sck1,
    prefix: Config.HANDLERS[0],
    Config,
    fancytext: (text, index) => {
        index = index - 1;
        return listall(text)[index];
    },
    parseJid(text = "") {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
            (v) => v[1] + "@s.whatsapp.net"
        );
    },
    parsedJid(text = "") {
        return [...text.matchAll(/([0-9]{5,16}|0)/g)].map(
            (v) => v[1] + "@s.whatsapp.net"
        );
    },
    parsedJidd(text = "") {
        return [...text.matchAll(/([0-9]{5,16}|0)/g)].map(
            (v) => v + "@s.whatsapp.net"
        );
    },
    getAdmin: async(Void, citel) => {
        var adminn = await Void.groupMetadata(citel.chat);
        a = [];
        for (let i of adminn.participants) {
            if (i.admin == null) continue;
            a.push(i.id);
        }
        return a;
    },
    parseurl: (parseurl = (url) => {
        return url.match(
            new RegExp(
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
                "gi"
            )
        );
    }),
    isInstaUrl: (url) => {
        /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim.test(
            url
        );
    },
    isNumber: function isNumber() {
        const int = parseInt(this);
        return typeof int === "number" && !isNaN(int);
    },
    shazam: async function shazam(buffer) {
        let acr = new acrcloud({
            host: "identify-eu-west-1.acrcloud.com",
            endpoint: '/v1/identify',
            signature_version: '1',
            data_type: 'audio',
            secure: true,
            access_key: "c816ad50a2bd6282e07b90447d93c38c",
            access_secret: "ZpYSwmCFpRovcSQBCFCe1KArX7xt8DTkYx2XKiIP",
        });

        let res = await acr.identify(buffer);
        let { code, msg } = res.status;
        if (code !== 0) return msg;
        let { title, artists, album, genres, release_date, external_metadata } =
        res.metadata.music[0];
        let { youtube, spotify } = external_metadata;

        return {
            status: 200,
            title: title,
            artists: artists !== undefined ? artists.map((v) => v.name).join(", ") : "",
            genres: genres !== undefined ? genres.map((v) => v.name).join(", ") : "",
            release_date: release_date,
            album: album.name || "",
        };
    },

}