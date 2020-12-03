/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:32:12
 * @LastEditors: camus
 * @LastEditTime: 2020-12-03 21:20:11
 */
const connection = require("../app/database");
class fileService {
  async createAvatar(filename, mimetype, size, userId) {
    try {
      const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?)`;
      const [result] = await connection.execute(statement, [
        filename,
        mimetype,
        size,
        userId,
      ]);
      return result;
    } catch (error) {
      console.log("fileService.createAvatar", error);
    }
  }

  async getAvatarByUserId(userId) {
    try {
      const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
      const [result] = await connection.execute(statement, [userId]);
      return result[0];
    } catch (error) {
      console.log("fileService.getAvatarByUserId", error);
    }
  }
}
module.exports = new fileService();
