module.exports = {
    name: 'checknum',
    category: 'search',
    desc: 'Searches in given rage about given number.',
    async exec(citel, Void,args) {
        if (!args[0]) return citel.reply(`Use command like: ${prefix}checknum <digits>****`)
        var inputnumber = args[0]
        if (!inputnumber.includes('*')) return cotel.reply('Ahhh,Please consider putting * in last.')
        citel.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('*')[0]
        var number1 = inputnumber.split('*')[countInstances(inputnumber, '*')] ? inputnumber.split('*')[countInstances(inputnumber, '*')] : ''
        var random_length = countInstances(inputnumber, '*')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var nomerny = `*--List of Whatsapp Numbers--**\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await Void.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `*•Number:* wa.me/${anu[0].jid.split("@")[0]}\n*•Bio :* ${anu1.status}\n*•Updated On :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        citel.reply(`${nomerny}${nobio}${nowhatsapp}`)
 
    }
 }