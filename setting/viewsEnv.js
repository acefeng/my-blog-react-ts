const nunjucks = require('nunjucks')
const views = require('koa-views')
const path = require('path')
// const config = require('../client/config/index')
const buildArr = require('../public/asset-manifest.json');
module.exports = function (app){
  if(process.env.NODE_ENV == 'development') {
    nunjucks.configure([path.resolve(__dirname, '../server/views/pages'), path.resolve(__dirname, '../server/views/common')], { autoescape: true });
    app.use(views(path.resolve(__dirname, '../server/views'), {
      map: {
        html: 'nunjucks'
      },
      options: {
        loadJs(fileName) {
          return `<script src=//localhost:${8080}/dist${fileName}></script>`
        },
        loadCss(fileName) {
          return '';
          // return `<link rel="stylesheet" href=//localhost:${config.dev.port}/dist${fileName}>`
        }
      }
    }))
  } else {
    const buildArr = require('../public/asset-manifest.json');
    nunjucks.configure([path.join(__dirname + '/../public/views/pages'), path.join(__dirname + '/../public/views/common')], { autoescape: true });
    app.use(views(path.resolve(__dirname + '/../public/views'), {
      map: {
        html: 'nunjucks'
      },
      options: {
        loadJs(fileName) {
          return `<script src=/js${fileName}></script>`
        },
        loadCss(fileName) {
          return `<link rel="stylesheet" href=/css${fileName}>`
        }
      }
    }))
  }
}