const axios = require("axios");
const abc= 123;
const ksaxios = async function(config) {
    try {
        let res = await axios(config);
        res = res.data;
        return new Promise((resolve, reject) => {
            if (res.status === 0 || res.result === 1) {
                resolve(res);
            } else {
                reject(res);
            }
        });
    } catch (err) {
        alert('服务器出错');
        console.log(err);
    }
};

module.exports = ksaxios;