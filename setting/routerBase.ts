const router = require('koa-router')();
var path = require('path');
var fs = require("fs");

const files = fs.readdirSync(path.resolve(__dirname, '../server/routes'));
let mainRouters = [];
for (let i=0; i < files.length; i++) {
  if(fs.statSync(path.join(__dirname, '../server/routes', files[i]))) {
    mainRouters.push(require(path.join(__dirname, '../server/routes', files[i])));
  }
}
console.log(mainRouters);
try {
  mainRouters.forEach(itemRouters => {
    let obj: any = null;
    itemRouters.forEach((item: any,index: any) => {
      const thisRoute = require(path.resolve(__dirname, '../server/routes', item[2]));
      if(index === 0) {
        obj = new thisRoute();
      }
      if(item[0] === 'GET') {
        router.get(item[1], obj[item[3]].bind(obj));
      }else if(item[0] ==='POST') {
        router.post(item[1], obj[item[3]].bind(obj));
      }else {
        throw 'router is not get or post'
      }
    })
  })
} catch(err) {
  console.error(err);
}

module.exports = router
