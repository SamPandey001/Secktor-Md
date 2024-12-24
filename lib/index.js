
module.exports = {
  Config: require(__dirname + '../config'),
  Notes: require(__dirname + './database/notes'),
  Plugins: require(__dirname + './database/plugins'),
  WarnDB: require(__dirname + './database/warn'),
  Cards: require(__dirname + './database/cards'),
  UserDB: require(__dirname + './database/user'),
  GroupDB: require(__dirname + './database/group'),
  RandomXP: require(__dirname + './database/xp'),
  Commands: require(__dirname + './commands'),
  Chatbot: require(__dirname + './database/chatbot'),

  // Scraper Functions
  Pinterest: require(__dirname + './scraper').pinterest,
  IGInfo: require(__dirname + './scraper').iginfo,
  AdultVid: require(__dirname + './scraper').adultvid,
  Hentai: require(__dirname + './scraper').hentai,
  DelAllNote: require(__dirname + './scraper').delallnote,
  Marry: require(__dirname + './scraper').marry,
  CheckMarried: require(__dirname + './scraper').checkmarried,
  Divorce: require(__dirname + './scraper').divorce,
  AddNote: require(__dirname + './scraper').addnote,
  Claim: require(__dirname + './scraper').claim,
  Install: require(__dirname + './scraper').install,
  AllNotes: require(__dirname + './scraper').allnotes,
  Remove: require(__dirname + './scraper').remove,
  PluginsList: require(__dirname + './scraper').plugins,
  TranslateLang: require(__dirname + './scraper').tlang,
  Collection: require(__dirname + './scraper').collection,
  CheckCard: require(__dirname + './scraper').checkcard,
  BotPic: require(__dirname + './scraper').botpic,
  Language: require(__dirname + './scraper').language,
  GetString: require(__dirname + './scraper').getString,
  Wallpaper: require(__dirname + './scraper').wallpaper,
  DelNote: require(__dirname + './scraper').delnote,
  Wikimedia: require(__dirname + './scraper').wikimedia,
  AioVideoDL: require(__dirname + './scraper').aiovideodl,
  ToAudio: require(__dirname + './scraper').toAudio,
  ToPTT: require(__dirname + './scraper').toPTT,
  ToVideo: require(__dirname + './scraper').toVideo,
  Sync: require(__dirname + './scraper').sync,
  SyncGit: require(__dirname + './scraper').syncgit,
  UpdateDB: require(__dirname + './scraper').updatedb,
  FFMPEG: require(__dirname + './scraper').ffmpeg,
  Telegraph: require(__dirname + './scraper').TelegraPh,
  UploadFileUGU: require(__dirname + './scraper').UploadFileUgu,
  WebP2Mp4File: require(__dirname + './scraper').webp2mp4File,
  Fancy: require(__dirname + './scraper').fancy,
  RandomFancy: require(__dirname + './scraper').randomfancy,
  Insta: require(__dirname + './scraper').Insta,

  // Utility Functions
  UnixTimestampSecond: require(__dirname + './myfuncn').unixTimestampSecond,
  GenerateMessageTag: require(__dirname + './myfuncn').generateMessageTag,
  ProcessTime: require(__dirname + './myfuncn').processTime,
  GetBuffer: require(__dirname + './myfuncn').getBuffer,
  FetchJSON: require(__dirname + './myfuncn').fetchJson,
  Runtime: require(__dirname + './myfuncn').runtime,
  ClockString: require(__dirname + './myfuncn').clockString,
  Sleep: require(__dirname + './myfuncn').sleep,
  IsURL: require(__dirname + './myfuncn').isUrl,
  GetTime: require(__dirname + './myfuncn').getTime,
  FormatDate: require(__dirname + './myfuncn').formatDate,
  FormatP: require(__dirname + './myfuncn').formatp,
  JSONFormat: require(__dirname + './myfuncn').jsonformat,
  Logic: require(__dirname + './myfuncn').logic,
  GenerateProfilePicture: require(__dirname + './myfuncn').generateProfilePicture,
  BytesToSize: require(__dirname + './myfuncn').bytesToSize,
  GetSizeMedia: require(__dirname + './myfuncn').getSizeMedia,
  ParseMention: require(__dirname + './myfuncn').parseMention,
  GIFBufferToVideoBuffer: require(__dirname + './myfuncn').GIFBufferToVideoBuffer,
  SMsg: require(__dirname + './myfuncn').smsg,

  // Stylish Font Functions
  ListAll: require(__dirname + './stylish-font').listall,
  StrikeThrough: require(__dirname + './stylish-font').strikeThrough,
  Wingdings: require(__dirname + './stylish-font').wingdings,
  Vaporwave: require(__dirname + './stylish-font').vaporwave,
  Typewriter: require(__dirname + './stylish-font').typewriter,
  Analucia: require(__dirname + './stylish-font').analucia,
  TildeStrikeThrough: require(__dirname + './stylish-font').tildeStrikeThrough,
  Underline: require(__dirname + './stylish-font').underline,
  DoubleUnderline: require(__dirname + './stylish-font').doubleUnderline,
  SlashThrough: require(__dirname + './stylish-font').slashThrough,
  Sparrow: require(__dirname + './stylish-font').sparrow,
  HeartsBetween: require(__dirname + './stylish-font').heartsBetween,
  ArrowBelow: require(__dirname + './stylish-font').arrowBelow,
  CrossAboveBelow: require(__dirname + './stylish-font').crossAboveBelow,
  Creepify: require(__dirname + './stylish-font').creepify,
  Bubbles: require(__dirname + './stylish-font').bubbles,
  Mirror: require(__dirname + './stylish-font').mirror,
  Squares: require(__dirname + './stylish-font').squares,
  RoundSquares: require(__dirname + './stylish-font').roundsquares,
  Flip: require(__dirname + './stylish-font').flip,
  Tiny: require(__dirname + './stylish-font').tiny,
  SerifI: require(__dirname + './stylish-font').serif_I,
  Manga: require(__dirname + './stylish-font').manga,
  Ladybug: require(__dirname + './stylish-font').ladybug,
  Runes: require(__dirname + './stylish-font').runes,
  Fancy1: require(__dirname + './stylish-font').fancy1,
  Fancy2: require(__dirname + './stylish-font').fancy2,
  // Add all other fancy styles as needed...

  addCommand: Commands.addCommand,
  groupdb: GroupDB,
  userdb: UserDB,
  prefix: Config.HANDLERS[0],
  Config,
  fancytext: (text, index) => {
    index = index - 1;
    return ListAll(text)[index];
  },
  parseJid: (text = "") => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net"
    );
  },
  parsedJid: (text = "") => {
    return [...text.matchAll(/([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net"
    );
  },
  parsedJidd: (text = "") => {
    return [...text.matchAll(/([0-9]{5,16}|0)/g)].map(
      (v) => v + "@s.whatsapp.net"
    );
  },
  getAdmin: async (Void, citel) => {
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
};
