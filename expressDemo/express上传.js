const express = require("express");
/* 第三方库，用于解析formData类型的数据 */
const multer = require("multer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer();
app.use(upload.any());
app.post("/login", (req, res, next) => {
  console.log(req.body); //[Object: null prototype] { name: 'camus', age: '26' }
  res.end("登录成功~");
});
app.listen(8000, () => {
  console.log("form-data解析服务器启动成功~");
});
