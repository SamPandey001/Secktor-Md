const { tlang,sleep } = require('../../lib/')

module.exports = {
    name: 'getjids',
    category: 'owner',
    desc: 'Sends chat id of every groups.',
    async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        let jackhuh = `All groups jid\n\n`
        citel.reply(`Fetching jid from ${anu.length} Groups`)
        for (let i of anu) {
          let metadata = await Void.groupMetadata(i);
            await sleep(500)
            jackhuh += `*Subject:-* ${metadata.subject}\n`
            jackhuh += `*Member :* ${metadata.participants.length}\n`
            jackhuh += `*Jid:-* ${i}\n\n`
            
    }
    citel.reply(jackhuh)
 
    }
 }