import axios from "axios";

const API = `https://api.github.com/users`;

const service = {
  get: (title) =>
    axios(API + `/${title}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err)),  
  getBattle: (title) =>
    axios(API + `/${title}`+ `/repos?per_page=100`)
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
};

export default service;