const { sck,sck1,RandomXP } = require('../../lib')
const axios = require('axios')
const Levels = require("discord-xp");

module.exports = {
   name: 'leaderboard',
   category: 'general',
   desc: 'Shows leaderboard of top bot users.',
   async exec(citel, Void,args) {
    const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
    let leadtext = `
  *-------------------------------*
  *----● LeaderBoard ● -----*
  *-------------------------------*
  \n\n`
    for (let i = 0; i < fetchlb.length; i++) {
              const lvpoints  = fetchlb[i].level
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
    let name = await sck1.findOne({ id: fetchlb[i].userID })
    let namew = fetchlb[i].userID
    let getname = await Void.getName(namew)
    console.log(getname)
     let ttms = fetchlb[i].xp/8
    leadtext += `*${i + 1}●Name*: ${getname}\n*●Level*: ${fetchlb[i].level}\n*●Points*: ${fetchlb[i].xp}\n*●Role*: ${role}\n*●Total messages*: ${ttms}\n\n`;
  }
    citel.reply(leadtext)
   }
}