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
const { tlang,cmd } = require('../lib')
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "updatenow",
    desc: "update bot with refreshed commit.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       require('child_process').exec('git pull')
       if(!isCreator) return citel.reply(tlang().owner);
       let data = await redeploy();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getvar",
    desc: "get desired var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       let data = await getvar(text);
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getallvar",
    desc: "get all vars from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       let data = await getallvar();
       return citel.reply(data)
  })













//----------------------------------------------------------------------------------------------------------------------------------------------------
async function getallvar(){
let koyeb_api = process.env.KOYEB_API || "No-api"
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Authorization": `Bearer ${koyeb_api}`
  }
};
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
let values = []
for(var i=0;i<b.data.deployment.definition.env.length;i++){
if(!b.data.deployment.definition.env[i].key) continue
values.push('*'+b.data.deployment.definition.env[i].key+'* : _'+b.data.deployment.definition.env[i].value+'_')
}
return (values.join('\n'))
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
async function getvar(key){
let koyeb_api = process.env.KOYEB_API || "No-api"
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Authorization": `Bearer ${koyeb_api}`
  }
};
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
for(var i=0;i<b.data.deployment.definition.env.length;i++){
if(!b.data.deployment.definition.env[i].key) continue
   if(b.data.deployment.definition.env[i].key===key){
return (b.data.deployment.definition.env[i].key+':'+b.data.deployment.definition.env[i].value)
}
}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
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
