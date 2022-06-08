const axios = require("axios").default;
const constants = require("constants/constants");

const routes = {
    login: "auth/login",
    register: "auth/register",
    github: "auth/github",
    google: "auth/google"
}


export const get = (routeKey) => {
    return axios.get(`${constants.constants.baseURL}/${routes[routeKey]}`).then(function(response){
        //Do something with response
        console.log(response);
    });
}

export const post = (routeKey, data) => {
    return axios.post( `${constants.constants.baseURL}/${routes[routeKey]}`, data, ).then(function(response){
        //Do something with response
        console.log(response);
    })
    .catch(error => {
        console.error(error)
    })
}