const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("camushub", "root", "qwertyuiop", {
  host: "localhost",
  dialect: "mysql",
});

/**
 * @description: 连接测试
 */
sequelize
  .authenticate()
  .then(() => {
    console.log("连接数据库成功~");
  })
  .catch((err) => {
    console.log("连接数据库失败~");
  });
