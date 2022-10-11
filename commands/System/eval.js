const { tlang,botpic,runtime } = require('../../lib')
const Config = require('../../config')
const prefix = Config.prefix
module.exports = {
    name: 'eval',
    category: 'owner',
    desc: 'Runs js code on node server.',
    async exec(citel, Void,args,isAdmins) {
      let code = args.join(' ')
      try {
  let resultTest = eval('const a = async()=>{\n'+code+'\n}\na()');
  if (typeof resultTest === "object")
    citel.reply(JSON.stringify(resultTest));
  else citel.reply(resultTest.toString());
} catch (err) {
  citel.reply(err.toString());
}

 
    }
 }
