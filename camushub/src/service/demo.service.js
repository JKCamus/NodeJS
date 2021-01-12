/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-11 21:12:35
 * @LastEditors: camus
 * @LastEditTime: 2021-01-12 20:59:50
 */
const connection = require("../app/database");
const { APP_HOST, APP_PORT } = require("../app/config");

class DemoService {
  async createDemoInfo(
    userId,
    title,
    preview,
    status,
    imgFilename,
    imgMimetype,
    size,
    htmlContent
  ) {
    try {
      const statement = `INSERT INTO demo (filename, mimetype, size, title, htmlContent,preview,status,user_id) VALUES (?, ?, ?, ?, ?, ?, ?,?)`;
      const [result] = await connection.execute(statement, [
        imgFilename,
        imgMimetype,
        size,
        title,
        htmlContent,
        preview,
        status,
        userId,
      ]);
      return result;
    } catch (error) {
      console.log("DemoService.createDemoInfo", error);
    }
  }
  async getDemoList(page, size) {
    try {
      const statement = `
      SELECT
      d.id id,d.title title,CONCAT('${APP_HOST}:${APP_PORT}/image/demoImages/',d.filename) img,d.htmlContent htmlContent,d.status,d.mimetype imageMimetype,
      JSON_OBJECT('authorId', u.id, 'authorName', u.name,'avatar',CONCAT('${APP_HOST}:${APP_PORT}/image/avatar/',a.filename)) author
    FROM demo d
    LEFT JOIN user u ON d.user_id = u.id
		LEFT JOIN avatar a ON a.user_id = u.id
    LIMIT ?, ?;
      `;
      // 字符串
      const [result] = await connection.execute(statement, [
        `${page - 1}`,
        size,
      ]);
      return result;
    } catch (error) {
      console.log("DemoController.getDemoList", error);
    }
  }
}

module.exports = new DemoService();
