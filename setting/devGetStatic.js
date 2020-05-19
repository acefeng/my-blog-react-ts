// 暂时舍弃。使用webpack中的代替了 完美解决跨域相关的问题了。这代码写的太蠢了。。。。。。。


const config = require('../client/config/index')
module.exports = async (ctx, next) => {
  // ctx.set('Access-Control-Allow-Origin', '*');
  // ctx.set('Access-Control-Allow-Credentials', true);
  // ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  if(/^\/dist/.test(ctx.url) && !/hot-update.json/.test(ctx.url)) {
    ctx.redirect("http://localhost:"+config.dev.port+ctx.url);
  } else {
    await next();
  }
}