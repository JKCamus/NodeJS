/*
 * @Description: 用于处理查询数据库相关逻辑，服务于controller
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 21:24:17
 * @LastEditors: camus
 * @LastEditTime: 2020-11-25 09:37:13
 */

const connection = require("../app/database");

class UserService {
  async create(user) {
    // 获取在user.controller中解析后的user
    const { name, password } = user;
    /* mysql创建语句，创建对应的名字和密码，？为按顺序填入 */
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
    /* 执行相关的mysql语句，数组中，name，password按顺序填入 */
    const result = await connection.execute(statement, [name, password]);
    return result[0];
  }
}
module.exports = new UserService();
