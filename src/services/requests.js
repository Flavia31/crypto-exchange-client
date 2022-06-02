const axios = require("axios").default;
const constants = require("constants/constants");

const routes = {
    login: "auth/login",
    register: "auth/register",
    github: "auth/github",
    google: "auth/google"
}

  const headers = {
     'Access-Control-Allow-Origin' : '*',
     'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, DELETE',
     'Access-Control-Request-Headers': 'Content-Type, Authorization ',
     'Content-Type': 'application/json',
     'Cache-Control': null,
    'X-Requested-With': null,
   }

const client = axios.create({
    baseURL: `${constants.constants.baseURL}`,
    headers: headers,
    method: 'GET'
  });


export const get = (routeKey) => {
    return client.get(`/${routes[routeKey]}`).then(function(response){
        //Do something with response
        console.log(response);
    });
}

export const post = (routeKey, data) => {
    return client.post( `${routes[routeKey]}`, data)
}