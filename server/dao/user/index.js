const models = require('../../models');
/**
 * 添加用户
 */
// exports.addUser = function (data) {
//   return models.User.create(data, {raw: true})
//   .then((result) => {
//     return true;
//   }).catch((err) => {
//     return false;
//   })
// };
// /**
//  * 查找用户
//  */
// exports.loginUser = function (login_name) {
//   return models.User.findOne({
//     where: {
//       login_name
//     },
//     raw: true
//   })
//   .then((result) => {
//     return result;
//   }).catch((err) => {
//     return false;
//   })
// };

// /**
//  * 通过user_id查找用户
//  */
// exports.searchUserById = function (id) {
//   return models.User.findOne({
//     where: {
//       id
//     },
//     raw: true
//   })
//   .then((result) => {
//     return result;
//   }).catch((err) => {
//     return false;
//   })
// };