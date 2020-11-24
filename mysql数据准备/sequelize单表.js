const { Sequelize, DataTypes, Model,Op } = require("sequelize");
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
class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE,
  },
  {
    table: "products",
    /* 默认有底下两个字段，但是这张表没有 */
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

async function queryProduct(params) {
  // 1.查询数据库中product表中所有的内容
  // const result = await Product.findAll({
  //   // 有条件查询的时候需要添加大括号，然后添加where，
  //   // 引入Op依赖，gte为大于等于，gt为大于，lt为小于
  //   where: {
  //     price: {
  //       [Op.gte]: 5000,
  //     },
  //   },
  // });
  // console.log("res", result);
   // 2.插入数据
  // const result = await Product.create({
  //   title: "三星Nova",
  //   price: 8888,
  //   score: 5.5
  // });
  // console.log(result);

  // 3.更新数据
  const result = await Product.update({
    price: 3688
  }, {
    where: {
      id: 1
    }
  });
  console.log(result);
}
queryProduct()