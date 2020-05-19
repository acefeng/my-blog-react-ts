const BaseServices = require('../base/index');
const user = require('../../dao/user');

class testServices extends BaseServices {
  async addUser(id) {
    console.log(id);
    console.log("此处为2");
    super.abc();
  }
}

module.exports = testServices;