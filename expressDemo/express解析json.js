const express = require("express");
// express实际上是一个函数
const app = express();

// app.use((req, res, next) => {
//   if (req.headers["content-type"] === 'application/json') {
//     req.on('data', (data) => {
//       const info = JSON.parse(data.toString());
//       req.body = info;
//     })
  
//     req.on('end', () => {
//       next();
//     })
//   } else {
//     next();
//   }
// })

// body-parser: express3.x 内置express框架
// body-parser: express4.x 被分离出去
// body-parser类似功能: express4.16.x 内置成函数
app.use(express.json())
/**
 * @description: 
 * @param {*}extended  
 * extended为true那么对urlencoded进行解析的时候，它使用的是第三方库qs
 * extended为false那么对urlencoded进行解析的时候，它使用的是内置模块querystring
 */
app.use(express.urlencoded({extended:true}))


app.use("/home", (req, res, next) => {
 console.log('res:', req.body)
 res.end("camus back")
});

app.listen(8000, () => {
  console.log("express启动成功");
});
