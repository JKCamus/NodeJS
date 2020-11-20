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
// connection.query(statement, (err, res, fields) => {
//   console.log("结果", res);
//   /* 不添加会阻塞 */
//   connection.end()
// });

/* 
!经常执行相同代码，会做LRU算法，即cache中获取，省略了编译的statement的时间
 */

const executed = `select * from products where  price>? and score >?`;
connection.execute(executed, [6000, 7], (err, res) => {
  console.log("res", res);
  connection.end();
});
