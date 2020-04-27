import axios from 'axios';


export class RequestError {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

const promiseCatch = err => {
  if (err && err.response) {
    const status = err.response.status;
    throw new RequestError(status, err.response.message)
  }
}


const dataHandler = rest => rest.data;

export const get = (url, config) =>
  axios
    .get(url, config)
    .catch(promiseCatch)
    .then(dataHandler);


export const post = (url, data, config) =>{
  console.log("URL ",url)
  return  axios
    .post(url, data, config)
    .catch(promiseCatch)
    .then(dataHandler);

}


export const put = (url, data) =>
  axios
    .put(url, data)
    .catch(promiseCatch)
    .then(dataHandler);

