/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-29 14:15:01
 * @LastEditors: camus
 * @LastEditTime: 2020-11-29 15:33:25
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

  async reply(momentId, content, userId, commentId) {
    try {
      const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`;
      const [result] = await connection.execute(statement, [
        content,
        momentId,
        userId,
        commentId,
      ]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async update(content, commentId) {
    try {
      const statement = `UPDATE comment SET content = ? WHERE id = ?`;
      const [result] = await connection.execute(statement, [
        content,
        commentId,
      ]);
      return result;
    } catch (error) {
      console.log("CommentService.update", error);
    }
  }

  async remove(commentId) {
    try {
      const statement = `DELETE FROM comment WHERE id = ?`;
      const [result] = await connection.execute(statement, [commentId]);
      return result;
    } catch (error) {
      console.log("CommentService.remove", error);
    }
  }
}
module.exports = new CommentService();
