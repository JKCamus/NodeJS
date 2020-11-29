/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-29 14:15:01
 * @LastEditors: camus
 * @LastEditTime: 2020-11-29 14:24:08
 */
const connection = require("../app/database");

class CommentService {
  async create(content, momentId, userId) {
    try {
      const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`;
      const [result] = await connection.execute(statement, [
        content,
        momentId,
        userId,
      ]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new CommentService();
