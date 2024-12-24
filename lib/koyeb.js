const axios = require('axios');
const koyebApi = process.env.KOYEB_API;

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${koyebApi}`,
  },
};

/**
 * Checks if a deployment status requires attention.
 * @returns {boolean} True if there are non-standard deployments.
 */
async function getUnstableDeployments() {
  const unstableStatuses = ['STOPPED', 'STOPPING', 'ERROR', 'ERRPRING'];

  try {
    const response = await axios.get('https://app.koyeb.com/v1/deployments', axiosConfig);
    const deployments = response.data.deployments;

    return deployments.some(deployment => !unstableStatuses.includes(deployment.status));
  } catch (error) {
    console.error('Error fetching deployments:', error);
    return false;
  }
}


function checkArray(array, key) {
  return array.some(item => item.key === key);
}


async function deleteVariable(key) {
  try {
    const serviceResponse = await axios.get('https://app.koyeb.com/v1/services', axiosConfig);
    const serviceId = serviceResponse.data.services[0].id;

    const deploymentResponse = await axios.get(`https://app.koyeb.com/v1/deployments/${serviceResponse.data.services[0].latest_deployment_id}`, axiosConfig);
    const deployment = deploymentResponse.data.deployment;

    if (!checkArray(deployment.definition.env, key)) {
      return '_No such env in Koyeb._';
    }

    const filteredEnv = deployment.definition.env.filter(variable => variable.key !== key);

    const body = {
      definition: {
        ...deployment.definition,
        env: filteredEnv,
      },
    };

    const updateResponse = await axios.patch(`https://app.koyeb.com/v1/services/${serviceId}`, body, axiosConfig);

    if (updateResponse.status === 200) {
      return `_Successfully deleted ${key} var from Koyeb._`;
    } else {
      throw new Error('Failed to update deployment');
    }
  } catch (error) {
    console.error('Error deleting variable:', error);
    return '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key';
  }
}

async function changeEnvironmentVariable(keyValue) {
  try {
    const [key, value] = keyValue.split(':');

    const serviceResponse = await axios.get('https://app.koyeb.com/v1/services', axiosConfig);
    const serviceId = serviceResponse.data.services[0].id;

    const deploymentResponse = await axios.get(`https://app.koyeb.com/v1/deployments/${serviceResponse.data.services[0].latest_deployment_id}`, axiosConfig);
    const deployment = deploymentResponse.data.deployment;

    const updatedEnv = deployment.definition.env.map(variable => {
      if (variable.key === key) {
        return { ...variable, value };
      }
      return variable;
    });

    const body = {
      definition: {
        ...deployment.definition,
        env: updatedEnv,
      },
    };

    const updateResponse = await axios.patch(`https://app.koyeb.com/v1/services/${serviceId}`, body, axiosConfig);

if (updateResponse.status === 200) {
      return `Successfully changed var _${key}:${value}._`;
    } else {
      throw new Error('Failed to update deployment');
    }
  } catch (error) {
    console.error('Error changing environment variable:', error);
    return '_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key';
  }
}


async function getAllVariables() {
  try {
    const serviceResponse = await axios.get('https://app.koyeb.com/v1/services', axiosConfig);
    const deploymentResponse = await axios.get(`https://app.koyeb.com/v1/deployments/${serviceResponse.data.services[0].latest_deployment_id}`, axiosConfig);
    const deployment = deploymentResponse.data.deployment;

    const variables = deployment.definition.env
      .filter(variable => variable.key) // Filter out variables without keys
      .map(variable => `*${variable.key}* : _${variable.value}_`);

    return variables.join('\n');
  } catch (error) {
    console.error('Error fetching variables:', error);
    return '_Error fetching variables. Please check Koyeb API key._';
  }
}

async function getVariable(key) {
  try {
    const serviceResponse = await axios.get('https://app.koyeb.com/v1/services', axiosConfig);
    const deploymentResponse = await axios.get(`https://app.koyeb.com/v1/deployments/${serviceResponse.data.services[0].latest_deployment_id}`, axiosConfig);
    const deployment = deploymentResponse.data.deployment;

    const variable = deployment.definition.env.find(item => item.key === key);

    if (variable) {
      return `${variable.key}:${variable.value}`;
    } else {
      return `_Variable '${key}' not found._`;
    }
  } catch (error) {
    console.error('Error fetching variable:', error);
    return '_Error fetching variable. Please check Koyeb API key._';
  }
}


async function redeploy() {
  try {
    const serviceResponse = await axios.get('https://app.koyeb.com/v1/services', axiosConfig);
    const serviceId = serviceResponse.data.services[0].id;

    const postData = {
      deployment_group: "prod",
      sha: "",
    };

    const redeployResponse = await axios.post(`https://app.koyeb.com/v1/services/${serviceId}/redeploy`, postData, axiosConfig);

    return '_Update started._';
  } catch (error) {
    console.error('Error redeploying:', error);
    return '*Got an error in redeploying.*\n*Please put koyeb api key in var KOYEB_API.*\n_Eg: KOYEB_API:api key from https://app.koyeb.com/account/api ._';
  }
}

module.exports = {
  redeploy,
  getVariable,
  deleteVariable,
  getAllVariables,
  changeEnvironmentVariable,
  getUnstableDeployments,
};
