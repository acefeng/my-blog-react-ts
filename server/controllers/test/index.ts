import { BaseControllers, routers } from '../base/index';
// const BaseControllers = require('../base/index');

const n_env = process.env.NODE_ENV == 'development';
const TestServices = require('../../services/test/index');
// console.log(BaseControllers);
class testControllers extends BaseControllers{
  @routers('get', '/test_get')
  async getTest(ctx: any) {
    // do something
  }
}




module.exports = testControllers;
