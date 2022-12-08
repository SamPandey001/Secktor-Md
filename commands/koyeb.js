/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @samapndey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const axios = require('axios');
const { tlang } = require('../lib')
cmd(
  {
    pattern: "updatenow",
    desc: "update bot with refreshed commit.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       let data = await redeploy();
       return citel.reply(data)
  })

async function redeploy(){
let koyeb_api = process.env.KOYEB_API || "No-api"
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Authorization": `Bearer ${koyeb_api}`
  }
};
var k = false
var postData = {
  "deployment_group": "prod",
  "sha": ""
};
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
let id = (data.services[0].id)
try{
let ab = await axios.post(`https://app.koyeb.com/v1/services/${id}/redeploy`, postData, axiosConfig)
k = '_update started._'
} catch (e) {
  k = '*Got an error in redeploying.*\n*Please put koyeb api key in var KOYEB_API.*\n_Eg: KOYEB_API:api key from https://app.koyeb.com/account/api ._'
}
return k
}
