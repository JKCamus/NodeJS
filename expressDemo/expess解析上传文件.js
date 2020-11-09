const path = require("path");

const express = require("express");
/* 第三方库，用于解析formData类型的数据 */
const multer = require("multer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  // cb为callback的缩写
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer(
  // dest:'./upload' 填写存储的文件夹位置。但是这边写上会没有后缀名
  {
    storage,
  }
);
/* 放入了一个中间件upload.any */
/* any时0
不要讲multer作为全局中间件 */
app.post("/login", upload.any(), (req, res, next) => {
  console.log(req.body); //[Object: null prototype] { name: 'camus', age: '26' }
  res.end("登录成功~");
});
/**
 * @description:多图上传
 * upload.array('file')
 * 多图上传时为array但图为single
 * @param {*}
 */

// app.post("/upload", upload.array("file"), (req, res, next) => {
//   /* 单文件为file，多文件为files */
//   console.log(req.files);
//   res.end("多文件上传成功");
// }),

/**
 * @description: 单图上传
 * @param {*}
 */

app.post("/upload", upload.single("file"), (req, res, next) => {
  /* 单文件为file，多文件为files */
  console.log(req.file);
  res.end("单文件上传成功");
}),
  app.listen(8000, () => {
    console.log("form-data解析服务器启动成功~");
  });
