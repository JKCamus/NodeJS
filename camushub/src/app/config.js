/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-11-24 17:04:31
 * @LastEditors: camus
 * @LastEditTime: 2020-11-24 17:22:08
 */
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
