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
cmd(
  {
    pattern: "setvar",
    desc: "set var in koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text.split(':')[1]) return citel.reply('*Wrong Format.*\nPlease provide key and value.\n_Eg: .setvar THEME:SECKTOR_')
       let data = await change_env(text)
       return citel.reply(data)
  })

//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------
function checkArray(array,key){
  var status = false
  for(var i=0; i<array.length; i++){
    if(array[i].key == key){
      status = true;
      break;
    }
  }
  return status;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
async function change_env(a){
let koyeb_api = process.env.KOYEB_API || "No-api"
let axiosConfig = {
     headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Authorization": `Bearer ${koyeb_api}`
       }
}
var status = '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key'
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
 let ser = data.services[0].id
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
let bb = a.split(':')
let vals = []
 for(var i=0;i<b.data.deployment.definition.env.length;i++){
   if(b.data.deployment.definition.env[i].key===bb[0]){
vals.push({"scopes":["region:fra"],"key":`${bb[0]}`,"value":`${bb[1]}`})
} else {
   vals.push(b.data.deployment.definition.env[i]);
}
}
let aa = checkArray(vals,bb[0])
if(!aa===true){
vals.push({"scopes":["region:fra"],"key":`${bb[0]}`,"value":`${bb[1]}`})
}
let body = {
   "definition": {
    "name": b.data.deployment.definition.name,
    "routes": b.data.deployment.definition.routes,
     "ports":b.data.deployment.definition.ports,
    "env":vals,
    "regions": b.data.deployment.definition.regions,
    "scalings":b.data.deployment.definition.scalings,
    "instance_types":b.data.deployment.definition.instance_types,
    "health_checks": b.data.deployment.definition.health_checks,
    "docker":  b.data.deployment.definition.docker
  }
}
 await axios.patch(`https://app.koyeb.com/v1/services/${ser}`, body, {
            headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Authorization": `Bearer ${koyeb_api}`
            }
          })
          .then(res => {
            if(res.status===200){
                status = `Successfuly changed var _${bb[0]}:${bb[1]} ._`
            } else {
                status = '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key'
            }
          })
          return status
}


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
