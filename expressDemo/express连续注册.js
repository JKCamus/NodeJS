const express = require("express");
// express实际上是一个函数
const app = express();
// app.use((req, res, next) => {
//   console.log('"common middleware 01');
//   next();
// });

app.use(
  "/home",
  (req, res, next) => {
    req.on("data", (data) => {
      console.log("data:", data.toString());
    });

    next();
  },
  (req, res, next) => {
    console.log("连调2");
    res.end();
  },
  (req, res, next) => {
    console.log("连调3");
  }
);

app.listen(8000, () => {
  console.log("express启动成功");
});
