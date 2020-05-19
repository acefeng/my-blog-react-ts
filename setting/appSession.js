const session = require('koa-session')
module.exports = function (app){
  app.keys = ['some secret hurr'];
  const SESSIONCONFIG = {
    key: 'koa:sess', 
    maxAge: 86400000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
  };
  app.use(session(SESSIONCONFIG, app));
}