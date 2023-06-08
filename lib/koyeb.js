const axios = require('axios');
let koyeb_api = process.env.KOYEB_API
let axiosConfig = {headers: {'Content-Type': 'application/json;charset=UTF-8', "Authorization": `Bearer ${koyeb_api}`}}

//-----------------------------------------------------
async function get_deployments(){
status = false
let axiosConfig = {
     headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Authorization": `Bearer ${koyeb_api}`
       }
}
await axios.get(`https://app.koyeb.com/v1/deployments`, axiosConfig).then(res => {
let array = ['STOPPED','STOPPING','ERROR','ERRPRING']
let a = []
for (let i=0;i<res.data.deployments.length;i++){
if(!array.includes(res.data.deployments[i].status)){
  a.push(res.data.deployments[i].status)
}}
if(a.length>1) status = 'true'
})
return status
}
//-----------------------------------------------------
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

//-----------------------------------------------------
async function delvar(a){
var status = false
let { data } = await axios.get(`https://app.koyeb.com/v1/services`,axiosConfig)
 let ser = data.services[0].id
let b = await axios.get(`https://app.koyeb.com/v1/deployments/${data.services[0].latest_deployment_id}`,axiosConfig)
let aa = checkArray(b.data.deployment.definition.env,a);
if(aa!==true) return '_No such env in koyeb._'
let vals = []
 for(var i=0;i<b.data.deployment.definition.env.length;i++){
   if(b.data.deployment.definition.env[i].key===a) continue
   vals.push(b.data.deployment.definition.env[i]);
}
let body = {"definition": {"name": b.data.deployment.definition.name,"routes": b.data.deployment.definition.routes,"ports":b.data.deployment.definition.ports,"env":vals,"regions": b.data.deployment.definition.regions,"scalings":b.data.deployment.definition.scalings,"instance_types":b.data.deployment.definition.instance_types,"health_checks": b.data.deployment.definition.health_checks,"docker":  b.data.deployment.definition.docker}}
 await axios.patch(`https://app.koyeb.com/v1/services/${ser}`, body, axiosConfig).then(res => {
if(res.status===200){ status = `_Successfully deleted ${a} var from koyeb._`} else {status = '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key'}
})
return status
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
async function change_env(a){
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
 await axios.patch(`https://app.koyeb.com/v1/services/${ser}`, body, axiosConfig).then(res => {
            if(res.status===200){status = `Successfuly changed var _${bb[0]}:${bb[1]} ._` } else {status = '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key'}
          })
 return status
}


//----------------------------------------------------------------------------------------------------------------------------------------------------
async function getallvar(){
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
module.exports = { redeploy,getvar,delvar,getallvar,change_env,get_deployments}
