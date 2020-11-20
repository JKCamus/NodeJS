const mysql = require("mysql2");
/* 创建连接 */
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "qwertyuiop",
  database: "camushub",
});
/* mysql语句 */
const statement = `select * from products where price >6000 `;
// 使用
connection.query(statement, (err, res, fields) => {
  console.log("结果", res);
});
