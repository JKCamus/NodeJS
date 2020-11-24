/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 17:24:57
 * @LastEditors: camus
 * @LastEditTime: 2020-11-24 17:30:19
 */
const mysql = require("mysql2");
const config = require("./config");

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
});
connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("fail to connect database...", err);
    } else {
      console.log("Successfully connected to the database,enjoy~~,");
    }
  });
});
module.exports = connections.promise();
