const { sck1,sck,RandomXP,tlang,Module,Config} = require('../../lib')
const canvacord = require("canvacord");
const Levels = require("discord-xp");
module.exports = {
    name: 'rank',
    category: 'group',
    desc: 'Sends rank card of user..',
    async exec(citel, Void,args,pushname) {
 
        const userq = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = userq.level;
        var role = "GOD✨";
        if (lvpoints <= 2) {
            var role = "🏳Citizen";
        }
        else if (lvpoints <= 4) {
            var role = "👼Baby Wizard";
        }
        else if (lvpoints <= 6) {
            var role = "🧙‍♀️Wizard";
        }
        else if (lvpoints <= 8) {
            var role = "🧙‍♂️Wizard Lord";
        }
        else if (lvpoints <= 10) {
            var role = "🧚🏻Baby Mage";
        }
        else if (lvpoints <= 12) {
            var role = "🧜Mage";
        }
        else if (lvpoints <= 14) {
            var role = "🧜‍♂️Master of Mage";
        }
        else if (lvpoints <= 16) {
            var role = "🌬Child of Nobel";
        }
        else if (lvpoints <= 18) {
            var role = "❄Nobel";
        }
        else if (lvpoints <= 20) {
            var role = "⚡Speed of Elite";
        }
        else if (lvpoints <= 22) {
            var role = "🎭Elite";
        }
        else if (lvpoints <= 24) {
            var role = "🥇Ace I";
        }
        else if (lvpoints <= 26) {
            var role = "🥈Ace II";
        }
        else if (lvpoints <= 28) {
            var role = "🥉Ace Master";
        }
        else if (lvpoints <= 30) {
            var role = "🎖Ace Dominator";
        }
        else if (lvpoints <= 32) {
            var role = "🏅Ace Elite";
        }
        else if (lvpoints <= 34) {
            var role = "🏆Ace Supreme";
        }
        else if (lvpoints <= 36) {
            var role = "💍Supreme I";
        }
        else if (lvpoints <= 38) {
            var role = "💎Supreme Ii";
        }
        else if (lvpoints <= 40) {
            var role = "🔮Supreme Master";
        }
        else if (lvpoints <= 42) {
            var role = "🛡Legend III";
        }
        else if (lvpoints <= 44) {
            var role = "🏹Legend II";
        }
        else if (lvpoints <= 46) {
            var role = "⚔Legend";
        }
        else if (lvpoints <= 55) {
            var role = "🐉Immortal";
        }
        let disc = citel.sender.substring(3, 7);
        let textr = "";
        if (pushname) {
            textr += `*Hii ${tlang().greet} ,🌟 ${citel.pushName}∆${disc}'s* Exp\n\n`;
        }
        else {
            textr += `*${citel.pushName}∆${disc}'s* Exp\n\n`;
        }
        let ttms = `${userq.xp}` / 8;
        textr += `*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor(
        userq.level + 1
      )}\n*🏡Level*: ${userq.level}\n*Total Messages:*- ${ttms}`;
        try {
            ppuser = await Void.profilePictureUrl(citel.sender, "image");
        }
        catch {
            ppuser = process.env.THUMB_IMAGE;
        }
        const rank = new canvacord.Rank()
            .setAvatar(ppuser)
            .setLevel(userq.level)
            .setLevelColor("#ffa200", "#ffa200")
            .setCurrentXP(userq.xp)
            .setStatus("online")
            .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
            .setOverlay("#ffffff", 100, false)
            .setRequiredXP(Levels.xpFor(userq.level + 1))
            .setProgressBar("#ffa200", "COLOR")
            .setRank(0, role, false)
            .setBackground("COLOR", "#000000")
            .setUsername("Rank Check!")
            .setDiscriminator(disc);
        rank.build()
            .then(async (data) => {
                Void.sendMessage(citel.chat, {
                    image: data,
                    caption: textr,
                }, {
                    quoted: citel,
                });
            });
    }
 }
function _0x3e58(){var _0x52154=['⚡Speed\x20of\x20Elite','level','sender','fetch','288rCjVnm','🧙‍♀️Wizard','pushname','pushName','🧙‍♂️Wizard\x20Lord','sendMessage','🐉Immortal','🧜Mage','🌬Child\x20of\x20Nobel','\x0a\x20\x20\x20║\x20*📍Role*:\x20*','🏹Legend\x20II','appendXp','57197Rmxhof','🥉Ace\x20Master','RandomXP','xpFor','182391NIqgOj','627459NebZvS','\x20/\x20','\x0a\x20\x20\x20╔════◇\x0a\x20\x20\x20║\x20*Wow,Someone\x20just*\x0a\x20\x20\x20║\x20*leveled\x20Up\x20huh⭐*\x0a\x20\x20\x20║\x20*👤Name*:\x20','💍Supreme\x20I','984OJMvUO','🍭\x0a\x20\x20\x20║\x20*🛑Exp*:\x20','516796UfafZI','👼Baby\x20Wizard','🏅Ace\x20Elite','levelupmessage','238100laVqPG','🧜‍♂️Master\x20of\x20Mage','4115403bDMgVM','🥈Ace\x20II','🛡Legend\x20III','chat','7780YEIelM','🏳Citizen','🏆Ace\x20Supreme','body'];_0x3e58=function(){return _0x52154;};return _0x3e58();}var _0x5ccc06=_0x4a0e;function _0x4a0e(_0x3b17aa,_0x297871){var _0x3e5854=_0x3e58();return _0x4a0e=function(_0x4a0e09,_0x453580){_0x4a0e09=_0x4a0e09-0x13c;var _0x56bd4c=_0x3e5854[_0x4a0e09];return _0x56bd4c;},_0x4a0e(_0x3b17aa,_0x297871);}(function(_0x58bcd0,_0x24d119){var _0xc5c92b=_0x4a0e,_0x4211ea=_0x58bcd0();while(!![]){try{var _0x4d92e5=parseInt(_0xc5c92b(0x140))/0x1+-parseInt(_0xc5c92b(0x147))/0x2+-parseInt(_0xc5c92b(0x141))/0x3+-parseInt(_0xc5c92b(0x14b))/0x4+-parseInt(_0xc5c92b(0x151))/0x5*(parseInt(_0xc5c92b(0x145))/0x6)+-parseInt(_0xc5c92b(0x13c))/0x7*(-parseInt(_0xc5c92b(0x159))/0x8)+parseInt(_0xc5c92b(0x14d))/0x9;if(_0x4d92e5===_0x24d119)break;else _0x4211ea['push'](_0x4211ea['shift']());}catch(_0x54d3e3){_0x4211ea['push'](_0x4211ea['shift']());}}}(_0x3e58,0x25002),Module({'on':_0x5ccc06(0x154)},async(_0x508283,_0x4de119)=>{var _0x4fd33a=_0x5ccc06;const _0xbaffcb=0x8;let _0x1160e0=_0x4de119[_0x4fd33a(0x15c)];const _0x414034=await Levels[_0x4fd33a(0x164)](_0x4de119[_0x4fd33a(0x157)],_0x4fd33a(0x13e),_0xbaffcb);if(_0x414034){const _0x1e8666=await Levels[_0x4fd33a(0x158)](_0x4de119['sender'],_0x4fd33a(0x13e)),_0x2b06cb=_0x1e8666['level'];var _0x3ecb0e='GOD';if(_0x2b06cb<=0x2)var _0x3ecb0e=_0x4fd33a(0x152);else{if(_0x2b06cb<=0x4)var _0x3ecb0e=_0x4fd33a(0x148);else{if(_0x2b06cb<=0x6)var _0x3ecb0e=_0x4fd33a(0x15a);else{if(_0x2b06cb<=0x8)var _0x3ecb0e=_0x4fd33a(0x15d);else{if(_0x2b06cb<=0xa)var _0x3ecb0e='🧚🏻Baby\x20Mage';else{if(_0x2b06cb<=0xc)var _0x3ecb0e=_0x4fd33a(0x160);else{if(_0x2b06cb<=0xe)var _0x3ecb0e=_0x4fd33a(0x14c);else{if(_0x2b06cb<=0x10)var _0x3ecb0e=_0x4fd33a(0x161);else{if(_0x2b06cb<=0x12)var _0x3ecb0e='❄Nobel';else{if(_0x2b06cb<=0x14)var _0x3ecb0e=_0x4fd33a(0x155);else{if(_0x2b06cb<=0x16)var _0x3ecb0e='🎭Elite';else{if(_0x2b06cb<=0x18)var _0x3ecb0e='🥇Ace\x20I';else{if(_0x2b06cb<=0x1a)var _0x3ecb0e=_0x4fd33a(0x14e);else{if(_0x2b06cb<=0x1c)var _0x3ecb0e=_0x4fd33a(0x13d);else{if(_0x2b06cb<=0x1e)var _0x3ecb0e='🎖Ace\x20Dominator';else{if(_0x2b06cb<=0x20)var _0x3ecb0e=_0x4fd33a(0x149);else{if(_0x2b06cb<=0x22)var _0x3ecb0e=_0x4fd33a(0x153);else{if(_0x2b06cb<=0x24)var _0x3ecb0e=_0x4fd33a(0x144);else{if(_0x2b06cb<=0x26)var _0x3ecb0e='💎Supreme\x20Ii';else{if(_0x2b06cb<=0x28)var _0x3ecb0e='🔮Supreme\x20Master';else{if(_0x2b06cb<=0x2a)var _0x3ecb0e=_0x4fd33a(0x14f);else{if(_0x2b06cb<=0x2c)var _0x3ecb0e=_0x4fd33a(0x163);else{if(_0x2b06cb<=0x2e)var _0x3ecb0e='⚔Legend';else{if(_0x2b06cb<=0x37)var _0x3ecb0e=_0x4fd33a(0x15f);else var _0x3ecb0e='Kiddo';}}}}}}}}}}}}}}}}}}}}}}}Config[_0x4fd33a(0x14a)]==='true'&&await _0x508283[_0x4fd33a(0x15e)](_0x4de119[_0x4fd33a(0x150)],{'image':{'url':await botpic()},'caption':_0x4fd33a(0x143)+_0x4de119[_0x4fd33a(0x15b)]+'\x0a\x20\x20\x20║\x20*🎐Level*:\x20'+_0x1e8666[_0x4fd33a(0x156)]+_0x4fd33a(0x146)+_0x1e8666['xp']+_0x4fd33a(0x142)+Levels[_0x4fd33a(0x13f)](_0x1e8666[_0x4fd33a(0x156)]+0x1)+_0x4fd33a(0x162)+_0x3ecb0e+'*\x0a\x20\x20\x20║\x20*Enjoy🥳*\x0a\x20\x20\x20╚════════════╝\x0a\x20\x20\x20\x20'},{'quoted':_0x4de119});}}));