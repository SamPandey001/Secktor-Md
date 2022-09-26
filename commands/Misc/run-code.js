const axios = require('axios')
module.exports = {
    name: 'exec',
    category: 'misc',
    desc: 'Evaluates quoted code with given language.',
    async exec(citel, Void,args) {
        
      try {
				const code = {
					script: citel.quoted.text,
					language: args[1],
					versionIndex: "0",
					stdin: args.slice(2).join(" "),
					clientId: '694805244d4f825fc02a9d6260a54a99',
					clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
				};
				request({
					url: "https://api.jdoodle.com/v1/execute",
					method: "POST",
					json: code
				}, function(_error, _response, body) {
					citel.reply("> " + args[1] + "\n\n" + "```" + body.output + "```");
				});
			}
			catch (error) {
				console.log(error);
			}
    }
 }
