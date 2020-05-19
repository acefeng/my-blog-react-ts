const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const path = require('path');

const routerBase = require('../setting/routerBase');
const routerBase2 = require('../setting/routerBase2').router;
const viewsEnv = require('../setting/viewsEnv');
const appSession = require('../setting/appSession');
const appLogger = require('../setting/appLogger');
// 对于请求体进行处理
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));
app.use(json());
// 以下对于模板引擎进行操作
viewsEnv(app); 
// 错误输出
onerror(app); 
// koa实例的session控制
appSession(app);
// logger 
appLogger(app); 

// 静态文件
app.use(require('koa-static')(path.join(__dirname + '/../public'))); 
// 路由控制
// app.use(routerBase.routes(), routerBase.allowedMethods());
app.use(routerBase2.routes(), routerBase.allowedMethods()); 
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
