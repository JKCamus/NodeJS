/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-27 16:47:23
 * @LastEditors: camus
 * @LastEditTime: 2020-11-29 14:02:30
 */
const connection = require("../app/database");
const sqlFragment = `
    SELECT 
    m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
    JSON_OBJECT('id', u.id, 'name', u.name) author
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id
  `;
class MomentService {
  async create(useId, content) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [content, useId]);
    return result;
  }
  async getMomentById(momentId) {
    const statement = ` 
    ${sqlFragment} 
    WHERE m.id = ?;`;
    const [result] = await connection.execute(statement, [momentId]);
    return result[0];
  }
  async getMomentList(page, size) {
    const statement = ` 
    ${sqlFragment} 
    LIMIT ?,?;
    `;
    const [result] = await connection.execute(statement, [page, size]);
    return result;
  }

  async update(content, momentId) {
    try {
      const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
      const [result] = await connection.execute(statement, [content, momentId]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(momentId) {
    try {
      const statement = `DELETE FROM moment WHERE id = ?`;
      const [result] = await connection.execute(statement, [momentId]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new MomentService();
