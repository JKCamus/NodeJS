/**
 * @description: 首先创建表格
 * 
CREATE TABLE IF NOT EXISTS `products`(
id INT PRIMARY KEY auto_increment,
brand VARCHAR(20),
title VARCHAR(100) NOT NULL,
price DOUBLE NOT NULL,
score DECIMAL(2,1),
voteCnt INT,
url VARCHAR(100),
pid INT
);
 */

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "qwertyuiop",
  database: "camushub",
});

const statement = `INSERT INTO products SET ?;`;
const phoneJson = require("./phone.json");

for (let phone of phoneJson) {
  connection.query(statement, phone);
}