/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-03 20:32:12
 * @LastEditors: camus
 * @LastEditTime: 2021-01-07 10:16:16
 */
const connection = require("../app/database");
const { APP_HOST, APP_PORT } = require("../app/config");
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
  async createFile(filename, mimetype, size, userId, momentId) {
    try {
      const statement = `INSERT INTO file (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?, ?)`;
      const [result] = await connection.execute(statement, [
        filename,
        mimetype,
        size,
        userId,
        momentId,
      ]);
      return result;
    } catch (error) {
      console.log("fileService.createFile", error);
    }
  }
  async createPhoto(filename, mimetype, size, title, content,width) {
    try {
      const statement = `INSERT INTO photo (filename, mimetype, size, title, content,width) VALUES (?, ?, ?, ?, ?, ?)`;
      const [result] = await connection.execute(statement, [
        filename,
        mimetype,
        size,
        title,
        content,
        width,
      ]);
      return result;
    } catch (error) {
      console.log("fileService.createPhoto", error);
    }
  }

  async getFileByFilename(filename) {
    try {
      // console.log('filename',filename )
      const statement = `SELECT * FROM file WHERE filename = ?;`;
      const [result] = await connection.execute(statement, [filename]);
      return result[0];
    } catch (error) {
      console.log("fileService.getFileByFilename", error);
    }
  }
  async getPhotoList(page, size) {
    try {
      // const statement = `SELECT id ,title, CONCAT('${APP_HOST}:${APP_PORT}/photo/',filename) url,size,content,width,createAt FROM photo LIMIT ?, ?;`;
      const statement = `SELECT id ,title, CONCAT('${APP_HOST}:${APP_PORT}/photo/',filename) url, width,size,content,createAt FROM photo LIMIT ?, ?;`;
      // 字符串
      const [result] = await connection.execute(statement, [ `${page-1}`, size]);
      return result;
    } catch (error) {
      console.log("LabelService.create", error);
    }
  }
  async getFilePhotoByUrl(filename) {
    try {
      // console.log('filename',filename )
      const statement = `SELECT * FROM photo WHERE filename = ?;`;
      const [result] = await connection.execute(statement, [filename]);
      return result[0];
    } catch (error) {
      console.log("fileService.getFileByFilename", error);
    }
  }
}
module.exports = new fileService();
