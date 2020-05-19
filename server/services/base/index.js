const axios = require('axios');
class BaseServices {
  async httpGet(url, config){
    return new Promise((resolve,reject) => {
      axios.get(url,config)
      .then((response) => {
        resolve( response );
      })
      .catch((error) => {
        reject( error );
      });
    });
  }

  async httpPost(url, config){
    return new Promise((resolve,reject) => {
      axios.post(url, config)
      .then((response) => {
        resolve( response );
      })
      .catch((error) => {
        reject( error );
      });
    });
  }
}

module.exports = BaseServices;
